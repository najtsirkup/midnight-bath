import { PageShell } from "@/components/site/PageShell";
import { GoldButton } from "@/components/site/GoldButton";
import { SEO } from "@/components/site/SEO";
import aboutHero from "@/assets/about-hero.jpg";
import frantsSeer from "@/assets/frants-seer.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import { useLang } from "@/lib/i18n";

const About = () => {
  const { t, lang } = useLang();
  return (
  <>
  <SEO
    title="About KHIS Bath — Estonian Craftsmanship & Heritage"
    description="The story behind KHIS Bath: Estonian craftsmanship, thermo-treated wood, and a quiet-luxury philosophy shaping every handcrafted bathtub."
    path="/about"
  />
  <PageShell
    eyebrow={t("about.eyebrow")}
    title={t("about.title")}
    subtitle={t("about.subtitle")}
    bannerImage={aboutHero}
    bannerAlt="KHIS bath in a serene interior"
  >
    <section className="py-24 md:py-32">
      <div className="container-luxe">
        {lang === "et" ? (
          <div className="max-w-3xl mx-auto text-center mb-32">
            <h2 className="font-serif text-3xl md:text-4xl leading-tight mb-4">
              Vann kui disainielement.
            </h2>
            <h3 className="font-serif text-2xl md:text-3xl text-primary italic mb-10">
              Vann, mis kujundab kogu ruumi ilme.
            </h3>
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
              KHIS vanni ainulaadne disain püüab pilku ja loob meeleolu ka siis, kui vann parajasti kasutuses ei ole. Selle vorm ühendab elegantsi, hubasuse ja ajatuse, muutes vannitoa tõeliseks lõõgastumise paigaks. Nagu looduseski, sünnib tasakaal keskkonnas, mis on soe, turvaline ja inspireeriv. KHIS vann loob ruumi, kus disain ja heaolu kohtuvad loomulikul viisil.
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
            <div>
              <p className="eyebrow mb-4">{t("about.section1_eyebrow")}</p>
              <h2 className="font-serif text-4xl md:text-5xl mb-8">{t("about.section1_title")}</h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>{t("about.section1_p1")}</p>
                <p>{t("about.section1_p2")}</p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-6 bg-gradient-radial-gold opacity-60 blur-2xl" />
              <img src={gallery5} alt="KHIS bath in interior" loading="lazy" className="relative w-full aspect-[4/5] object-cover border border-border" />
            </div>
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-16 mb-32">
          <div className="border-l-2 border-primary pl-8">
            <p className="eyebrow mb-4">{t("about.philo_eyebrow")}</p>
            <h3 className="font-serif text-2xl md:text-3xl mb-6">{t("about.philo_t")}</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">{t("about.philo_p1")}</p>
            <p className="text-muted-foreground leading-relaxed">{t("about.philo_p2")}</p>
          </div>
          <div className="border-l-2 border-primary pl-8">
            <p className="eyebrow mb-4">{t("about.indulge_eyebrow")}</p>
            <h3 className="font-serif text-2xl md:text-3xl mb-6">{t("about.indulge_t")}</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">{t("about.indulge_p1")}</p>
            <p className="text-muted-foreground leading-relaxed">{t("about.indulge_p2")}</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative md:order-2">
            <div className="absolute -inset-6 bg-gradient-radial-gold opacity-60 blur-2xl" />
            <img src={frantsSeer} alt="Frants Seer — KHIS Master Craftsman" loading="lazy" className="relative w-full aspect-[4/5] object-cover border border-border" />
          </div>
          <div>
            <p className="eyebrow mb-4">{t("about.frants_eyebrow")}</p>
            <h2 className="font-serif text-4xl md:text-5xl mb-3">{t("about.frants_title")}</h2>
            <div className="gold-divider mx-0 mb-8" />
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>{t("about.frants_p1")}</p>
              <p>{t("about.frants_p2")}</p>
              <p>{t("about.frants_p3")}</p>
              <p className="text-foreground italic font-serif">&ldquo;{t("about.frants_quote")}&rdquo;</p>
            </div>
            <div className="mt-10">
              <GoldButton to="/#contact">{t("about.start_project")}</GoldButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  </PageShell>
  </>
  );
};

export default About;
