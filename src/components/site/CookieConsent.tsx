import { useEffect, useState } from "react";
import { useLang } from "@/lib/i18n";
import { detectRegion, getConsent, isConsentRegion, setConsent } from "@/lib/consent";
import { initPixel } from "@/lib/meta-pixel";

const OPEN_EVENT = "khis:open-consent";

export const CookieConsent = () => {
  const { t } = useLang();
  const [visible, setVisible] = useState(false);
  const [region, setRegionState] = useState<string>("XX");

  useEffect(() => {
    let cancelled = false;
    detectRegion().then((r) => {
      if (cancelled) return;
      setRegionState(r);
      if (isConsentRegion(r) && !getConsent()) setVisible(true);
    });
    const open = () => setVisible(true);
    window.addEventListener(OPEN_EVENT, open);
    return () => {
      cancelled = true;
      window.removeEventListener(OPEN_EVENT, open);
    };
  }, []);

  const choose = (choice: "granted" | "denied") => {
    setConsent(choice, region);
    setVisible(false);
    if (choice === "granted") initPixel(region);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label={t("consent.title")}
      className="fixed bottom-4 left-1/2 z-[100] w-[calc(100%-2rem)] max-w-2xl -translate-x-1/2 border border-border bg-secondary/95 shadow-luxury backdrop-blur-sm"
    >
      <div className="p-6 md:p-8">
        <h3 className="font-serif text-xl md:text-2xl">{t("consent.title")}</h3>
        <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{t("consent.body")}</p>
        <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:justify-end">
          <button
            type="button"
            onClick={() => choose("denied")}
            className="border border-border px-6 py-2.5 text-xs uppercase tracking-[0.25em] text-foreground hover:border-primary hover:text-primary transition-colors"
          >
            {t("consent.decline")}
          </button>
          <button
            type="button"
            onClick={() => choose("granted")}
            className="bg-primary px-6 py-2.5 text-xs uppercase tracking-[0.25em] text-primary-foreground hover:opacity-90 transition-opacity"
          >
            {t("consent.accept")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
