import { PageShell } from "@/components/site/PageShell";
import { GoldButton } from "@/components/site/GoldButton";
import { Hammer, Settings2, Anchor, Leaf } from "lucide-react";
import technologyImg from "@/assets/products/eternal-khis-2.jpg";
import gallery7 from "@/assets/gallery-7.jpg";
import { useLang } from "@/lib/i18n";

const Technology = () => {
  const { t } = useLang();
  const points = [
    { icon: Hammer, t: t("tech.p1.t"), b: t("tech.p1.b") },
    { icon: Leaf, t: t("tech.p2.t"), b: t("tech.p2.b") },
    { icon: Anchor, t: t("tech.p3.t"), b: t("tech.p3.b") },
    { icon: Settings2, t: t("tech.p4.t"), b: t("tech.p4.b") },
  ];

  return (
  <PageShell
    eyebrow={t("tech.eyebrow")}
    title={<>{t("tech.title_1")} <em className="text-primary-glow not-italic">{t("tech.title_em")}</em></>}
    subtitle={t("tech.subtitle")}
    bannerImage={technologyImg}
    bannerAlt="KHIS technology and craftsmanship"
  >
    <section className="py-24 md:py-32">
      <div className="container-luxe">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <p className="eyebrow mb-4">{t("tech.intro_eyebrow")}</p>
          <h2 className="font-serif text-3xl md:text-4xl mb-8">{t("tech.intro_title")}</h2>
          <p className="text-muted-foreground leading-relaxed">{t("tech.intro_body")}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-32">
          {points.map((p) => (
            <div key={p.t} className="border border-border p-10 bg-card hover:border-primary/40 transition-colors group">
              <div className="w-12 h-12 mb-6 border border-primary/40 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <p.icon size={20} strokeWidth={1.2} />
              </div>
              <h3 className="font-serif text-2xl mb-3">{p.t}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.b}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-radial-gold opacity-60 blur-2xl" />
            <img src={gallery7} alt="Natural KHIS detail" loading="lazy" className="relative w-full aspect-square object-cover border border-border" />
          </div>
          <div>
            <p className="eyebrow mb-4">{t("tech.built_eyebrow")}</p>
            <h2 className="font-serif text-4xl md:text-5xl mb-6">{t("tech.built_title")}</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">{t("tech.built_body")}</p>
            <GoldButton to="/contact">{t("tech.configure")}</GoldButton>
          </div>
        </div>
      </div>
    </section>
  </PageShell>
  );
};

export default Technology;
