// KHIS Bath — consent management for advertising measurement.
// Regional route: visitors in consent regions (EU/EEA + UK + CH) must decide
// before any advertising measurement runs; elsewhere tracking is on by default
// and any recorded refusal is always honored.

export const NOTICE_VERSION = 1;
const STORAGE_KEY = "khis-consent";
const REGION_CACHE_KEY = "khis-region";

// EU + EEA + UK + CH (ISO 3166-1 alpha-2)
const CONSENT_REGIONS = new Set([
  "AT", "BE", "BG", "HR", "CY", "CZ", "DK", "EE", "FI", "FR", "DE", "GR",
  "HU", "IE", "IT", "LV", "LT", "LU", "MT", "NL", "PL", "PT", "RO", "SK",
  "SI", "ES", "SE", "IS", "LI", "NO", "GB", "CH",
]);

export interface ConsentRecord {
  advertising: "granted" | "denied";
  ts: number;
  region: string; // region the visitor was in when choosing, "XX" if unknown
  noticeVersion: number;
}

const readRecord = (): ConsentRecord | null => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const rec = JSON.parse(raw) as ConsentRecord;
    if (rec.advertising !== "granted" && rec.advertising !== "denied") return null;
    return rec;
  } catch {
    return null;
  }
};

export const getConsent = readRecord;

export const setConsent = (choice: "granted" | "denied", region: string) => {
  try {
    const rec: ConsentRecord = {
      advertising: choice,
      ts: Date.now(),
      region,
      noticeVersion: NOTICE_VERSION,
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(rec));
  } catch {
    // storage unavailable — choice cannot be persisted
  }
};

const cacheRegion = (region: string) => {
  try {
    sessionStorage.setItem(REGION_CACHE_KEY, region);
  } catch {}
};

const isValidRegion = (code: string) => code && code !== "XX" && code !== "T1";

// Region lookup for the page visit. Primary: same-origin /cdn-cgi/trace.
// Fallback: same-origin /geo (Netlify edge function). On any failure,
// non-OK, unknown (XX) or Tor (T1) we return "XX" — treated as a consent region.
export const detectRegion = async (): Promise<string> => {
  try {
    const cached = sessionStorage.getItem(REGION_CACHE_KEY);
    if (cached) return cached;
  } catch {}

  try {
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), 2000);
    const res = await fetch("/cdn-cgi/trace", { signal: ctrl.signal, cache: "no-store" });
    clearTimeout(timer);
    if (res.ok) {
      const text = await res.text();
      const m = text.match(/^loc=(.+)$/m);
      const loc = m?.[1]?.trim() ?? "";
      if (isValidRegion(loc)) {
        cacheRegion(loc);
        return loc;
      }
    }
  } catch {}

  try {
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), 2000);
    const res = await fetch("/geo", { signal: ctrl.signal, cache: "no-store" });
    clearTimeout(timer);
    if (res.ok) {
      const data = (await res.json()) as { country?: string };
      const cc = String(data.country ?? "").toUpperCase();
      if (isValidRegion(cc)) {
        cacheRegion(cc);
        return cc;
      }
    }
  } catch {}

  return "XX";
};

export const isConsentRegion = (region: string): boolean =>
  region === "XX" || region === "T1" || CONSENT_REGIONS.has(region);

// Whether advertising measurement may run right now. The stored record (if any)
// always wins; without a record, only visitors outside consent regions qualify.
// Read afresh on every send so revocation applies immediately, across tabs.
export const advertisingAllowed = (region: string | null): boolean => {
  const rec = getConsent();
  if (rec) return rec.advertising === "granted";
  if (!region) return false;
  return !isConsentRegion(region);
};
