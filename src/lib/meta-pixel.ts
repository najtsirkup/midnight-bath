// Meta Pixel — loaded only when advertising measurement is permitted for this
// visitor (explicit acceptance in consent regions; default-on elsewhere).
import { advertisingAllowed, getConsent } from "@/lib/consent";

export const PIXEL_ID = "1410544234628312";

type FbqFn = ((...args: unknown[]) => void) & {
  callMethod?: (...args: unknown[]) => void;
  queue?: unknown[];
  push?: (...args: unknown[]) => void;
  loaded?: boolean;
  version?: string;
};

declare global {
  interface Window {
    fbq?: FbqFn;
    _fbq?: FbqFn;
  }
}

let loaded = false;
let active = false;

// Read afresh on every send: a stored record always wins, so withdrawal or a
// later denial (including from another tab) stops future events immediately.
export const canTrack = (): boolean => {
  const rec = getConsent();
  if (rec) return rec.advertising === "granted";
  return loaded && active;
};

const dispatch = (args: unknown[]) => {
  const fbq = window.fbq;
  if (!fbq) return;
  if (fbq.callMethod) fbq.callMethod.apply(fbq, args);
  else fbq.queue?.push(args);
};

export const initPixel = (region: string) => {
  if (loaded) {
    active = advertisingAllowed(region);
    return;
  }
  if (!advertisingAllowed(region)) return;

  loaded = true;
  active = true;

  const w = window as Window;
  if (!w.fbq) {
    const n: FbqFn = function (...args: unknown[]) {
      if (n.callMethod) n.callMethod.apply(n, args);
      else n.queue?.push(args);
    } as FbqFn;
    n.queue = [];
    n.loaded = true;
    n.version = "2.0";
    n.push = n;
    w.fbq = n;
    w._fbq = n;
    const t = document.createElement("script");
    t.async = true;
    t.src = "https://connect.facebook.net/en_US/fbevents.js";
    const s = document.getElementsByTagName("script")[0];
    s?.parentNode?.insertBefore(t, s);
  }

  dispatch(["init", PIXEL_ID, {}, { agent: "lovable" }]);
  dispatch(["track", "PageView"]);
};

// Contact-form inquiry — the site's primary outcome. No customer matching is
// sent; only the standard Lead event with a unique event id.
export const trackLead = (): boolean => {
  if (!canTrack() || !window.fbq) return false;
  const eventID =
    typeof crypto !== "undefined" && "randomUUID" in crypto
      ? crypto.randomUUID()
      : `${Date.now()}-${Math.random().toString(16).slice(2)}`;
  dispatch(["track", "Lead", {}, { eventID }]);
  return true;
};
