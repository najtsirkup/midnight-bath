import { PageShell } from "@/components/site/PageShell";
import { GoldButton } from "@/components/site/GoldButton";
import ContactForm from "@/components/site/ContactForm";
import { Mountain, Waves, Lightbulb, Ruler, Palette, Thermometer, Check, Clock, Award, Globe } from "lucide-react";
import { products } from "@/lib/site-data";
import tailorBanner from "@/assets/tailor-banner.jpg";
import gallery7 from "@/assets/gallery-7.jpg";
import { useLang } from "@/lib/i18n";

const TailorMade = () => {
  const { t } = useLang();
  const extras = [
    { icon: Mountain, title: t("ext.stone.t"), text: t("ext.stone.b") },
    { icon: Waves, title: t("ext.air.t"), text: t("ext.air.b") },
    { icon: Lightbulb, title: t("ext.light.t"), text: t("ext.light.b") },
    { icon: Ruler, title: t("ext.size.t"), text: t("ext.size.b") },
    { icon: Palette, title: t("ext.finish.t"), text: t("ext.finish.b") },
    { icon: Thermometer, title: t("ext.heat.t"), text: t("ext.heat.b") },
  ];
  const steps: [string, string, string][] = [
    ["01", t("step.consult.t"), t("step.consult.b")],
    ["02", t("step.design.t"), t("step.design.b")],
    ["03", t("step.build.t"), t("step.build.b")],
    ["04", t("step.delivery.t"), t("step.delivery.b")],
  ];
  return (
  <PageShell
    eyebrow={t("tailor.eyebrow")}
    title={<>{t("tailor.title_1")} <em className="text-primary-glow not-italic">{t("tailor.title_em")}</em>.</>}
    subtitle={t("tailor.subtitle")}
    bannerImage={tailorBanner}
    bannerAlt="Tailor-made KHIS bath in candlelight"
  >
    <section className="py-20 md:py-28 bg-background">
      <div className="container-luxe max-w-4xl text-center">
        <p className="text-lg md:text-xl text-foreground/90 leading-relaxed font-light">
          {t("tailor.intro")}
        </p>
        <div className="mt-10 flex flex-wrap gap-4 justify-center">
          <GoldButton to="/contact">{t("tailor.free_quote")}</GoldButton>
        </div>
      </div>
    </section>

    <section className="py-10 border-y border-border bg-secondary/40">
      <div className="container-luxe grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {[
          [Clock, t("tailor.weeks"), t("tailor.delivery_label")],
          [Award, "OHIM", t("tailor.ohim_label")],
          [Globe, t("tailor.worldwide"), t("tailor.shipping")],
          [Check, "100%", t("tailor.no_plastic")],
        ].map(([Icon, n, l]: any) => (
          <div key={l} className="flex flex-col items-center gap-2">
            <Icon size={20} className="text-primary" strokeWidth={1.2} />
            <div className="font-serif text-2xl">{n}</div>
            <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">{l}</div>
          </div>
        ))}
      </div>
    </section>

    <section className="py-24 md:py-32">
      <div className="container-luxe">
        <div className="text-center mb-16">
          <p className="eyebrow mb-4">{t("tailor.what_eyebrow")}</p>
          <h2 className="font-serif text-4xl md:text-5xl">{t("tailor.what_title")}</h2>
          <div className="gold-divider mt-8" />
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {extras.map((e) => (
            <div key={e.title} className="border border-border p-10 bg-card hover:border-primary/60 hover:shadow-luxury transition-all group">
              <div className="w-12 h-12 mb-6 border border-primary/40 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <e.icon size={20} strokeWidth={1.2} />
              </div>
              <h3 className="font-serif text-2xl mb-3">{e.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{e.text}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mt-32">
          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-radial-gold opacity-60 blur-2xl" />
            <img src={gallery7} alt="Natural KHIS — stone bottom and air-massage" loading="lazy" className="relative w-full aspect-square object-cover border border-border" />
          </div>
          <div>
            <p className="eyebrow mb-4">{t("tailor.how_eyebrow")}</p>
            <h2 className="font-serif text-4xl md:text-5xl mb-8">{t("tailor.how_title")}</h2>
            <ol className="space-y-6">
              {steps.map(([n, ti, d]) => (
                <li key={n} className="flex gap-6">
                  <span className="font-serif text-2xl text-primary">{n}</span>
                  <div>
                    <h4 className="font-serif text-xl mb-1">{ti}</h4>
                    <p className="text-sm text-muted-foreground">{d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="mt-32">
          <div className="text-center mb-14">
            <p className="eyebrow mb-4">{t("tailor.start_eyebrow")}</p>
            <h2 className="font-serif text-4xl md:text-5xl">{t("tailor.start_title")}</h2>
            <div className="gold-divider mt-8" />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {products.map((p) => (
              <div key={p.slug} className="border border-border bg-card overflow-hidden">
                <div className="aspect-[4/3] overflow-hidden bg-secondary/60 flex items-center justify-center p-6">
                  <img src={p.image} alt={p.name} loading="lazy" className="max-w-full max-h-full object-contain" />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl mb-1">{p.name}</h3>
                  <p className="text-xs text-muted-foreground italic mb-4">{t(`prod.${p.slug}.tagline`)}</p>
                  <p className="text-xs uppercase tracking-[0.2em] text-primary">{t(`prod.${p.slug}.capacity`)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    <section id="quote" className="py-24 md:py-32 bg-secondary/40 border-t border-border scroll-mt-24">
      <div className="container-luxe max-w-3xl">
        <div className="text-center mb-14">
          <p className="eyebrow mb-4">{t("tailor.quote_eyebrow")}</p>
          <h2 className="font-serif text-4xl md:text-5xl">{t("tailor.quote_title")}</h2>
          <p className="mt-6 text-muted-foreground">{t("tailor.quote_lead")}</p>
        </div>
        <ContactForm embedded />
      </div>
    </section>
  </PageShell>
  );
};

export default TailorMade;
