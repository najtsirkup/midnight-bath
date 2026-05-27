import { Link } from "react-router-dom";
import { useState } from "react";
import { ArrowRight, Hammer, Flame, Settings2, Mountain, Waves, Anchor, Leaf, Brush } from "lucide-react";
import heroBath from "@/assets/hero-bath.jpg";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { GoldButton } from "@/components/site/GoldButton";
import ContactForm from "@/components/site/ContactForm";
import { Lightbox } from "@/components/site/Lightbox";
import { products, features, blogPosts, galleryImages } from "@/lib/site-data";
import { useLang } from "@/lib/i18n";

const featureIcons = [Hammer, Brush, Settings2, Leaf, Flame, Waves, Anchor, Mountain];

const HomeLayout = () => {
  const { t, lang } = useLang();
  const [lightbox, setLightbox] = useState<number | null>(null);
  const previewImages = galleryImages.slice(0, 4);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header overDark />

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <img
          src={heroBath}
          alt="Handcrafted KHIS wooden bathtub"
          className="absolute inset-0 w-full h-full object-cover animate-slow-zoom"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-hero" />

        <div className="container-luxe relative z-10 text-center max-w-4xl animate-fade-up py-32">
          <p className="eyebrow mb-8 text-white">{t("hero.eyebrow")}</p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-white drop-shadow-[0_2px_24px_rgba(0,0,0,0.6)]">
            {t("hero.title_1")} <em className="text-primary-glow not-italic">{t("hero.title_em")}</em> {t("hero.title_2")}
          </h1>
          <div className="mt-12 flex flex-wrap gap-4 justify-center">
            <GoldButton to="/#contact">{t("cta.request_quote")}</GoldButton>
            <GoldButton to="/about" variant="outlineLight" arrow={false}>
              {t("cta.about_khis")}
            </GoldButton>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY (ENG only) */}
      {lang !== "et" && (
        <section className="py-28 md:py-40 bg-background">
          <div className="container-luxe text-center max-w-3xl">
            <p className="eyebrow mb-6">{t("philosophy.eyebrow")}</p>
            <div className="gold-divider mb-10" />
            <h2 className="font-serif text-3xl md:text-5xl leading-tight">
              {t("philosophy.h1")}<br />
              <span className="text-primary italic">{t("philosophy.h2")}</span>
            </h2>
            <p className="mt-10 text-base md:text-lg text-muted-foreground leading-relaxed font-light">
              {t("philosophy.body")}
            </p>
          </div>
        </section>
      )}

      {/* PRODUCTS */}
      <section className="py-24 md:py-32 border-t border-border/60 bg-secondary/40">
        <div className="container-luxe">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <p className="eyebrow mb-4">{t("products.eyebrow")}</p>
              <h2 className="font-serif text-4xl md:text-5xl">{t("products.title")}</h2>
            </div>
            <Link
              to="/tailor-made"
              className="text-xs uppercase tracking-[0.3em] text-primary hover:opacity-70 transition-opacity inline-flex items-center gap-2"
            >
              {t("products.order_tailor")} <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {products.map((p) => (
              <Link
                key={p.slug}
                to={`/shop/${p.slug}`}
                className="group relative overflow-hidden border border-border bg-card transition-all duration-700 hover:-translate-y-2 hover:shadow-luxury"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-white">
                  <img
                    src={p.image}
                    alt={p.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                </div>
                <div className="p-8">
                  <h3 className="font-serif text-2xl mb-2 group-hover:text-primary transition-colors">
                    {p.name}
                  </h3>
                  <p className="text-sm text-muted-foreground italic">{t(`prod.${p.slug}.tagline`)}</p>
                  <p className="mt-4 text-xs uppercase tracking-[0.25em] text-primary inline-flex items-center gap-2">
                    {t("products.discover")} <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-24 md:py-32 border-y border-border/60 bg-background">
        <div className="container-luxe">
          <div className="text-center mb-16">
            <p className="eyebrow mb-4">{t("features.eyebrow")}</p>
            <h2 className="font-serif text-4xl md:text-5xl">{t("features.title")}</h2>
            <div className="gold-divider mt-8" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-12">
            {features.map((f, i) => {
              const Icon = featureIcons[i];
              return (
                <div key={f.key} className="text-center p-6 transition-all duration-500 hover:-translate-y-1">
                  <div className="inline-flex items-center justify-center w-14 h-14 mb-5 border border-primary/40 text-primary">
                    <Icon size={22} strokeWidth={1.2} />
                  </div>
                  <h3 className="font-serif text-lg mb-2">{t(`feat.${f.key}.t`)}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{t(`feat.${f.key}.b`)}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* GALLERY PREVIEW */}
      <section className="py-24 md:py-32 bg-secondary/40 border-t border-border/60">
        <div className="container-luxe">
          <div className="text-center mb-14">
            <p className="eyebrow mb-4">{t("gallery.eyebrow")}</p>
            <h2 className="font-serif text-4xl md:text-5xl">{t("gallery.title")}</h2>
            <div className="gold-divider mt-8" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {previewImages.map((img, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setLightbox(i)}
                className="overflow-hidden border border-border group cursor-zoom-in"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full aspect-square object-cover transition-transform duration-1000 group-hover:scale-110"
                />
              </button>
            ))}
          </div>
          <div className="text-center mt-12">
            <GoldButton to="/gallery">{t("gallery.see_more")}</GoldButton>
          </div>
        </div>
      </section>

      {/* JOURNAL */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container-luxe">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <p className="eyebrow mb-4">{t("blog.eyebrow")}</p>
              <h2 className="font-serif text-4xl md:text-5xl">{t("blog.latest")}</h2>
            </div>
            <Link to="/blog" className="text-xs uppercase tracking-[0.3em] text-primary inline-flex items-center gap-2">
              {t("blog.all")} <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {blogPosts.map((post) => (
              <Link
                to={`/blog/${post.slug}`}
                key={post.slug}
                className="group block border border-border bg-card overflow-hidden transition-all duration-700 hover:-translate-y-1 hover:shadow-luxury"
              >
                <div className="aspect-[16/10] overflow-hidden bg-muted">
                  <img
                    src={post.image}
                    alt={post.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4">
                    <span className="text-primary">{post.category}</span>
                    <span className="w-px h-3 bg-border" />
                    <span>{post.date}</span>
                  </div>
                  <h3 className="font-serif text-xl md:text-2xl mb-3 leading-snug group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{post.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <ContactForm />

      <Footer />

      {lightbox !== null && (
        <Lightbox
          images={previewImages}
          index={lightbox}
          onClose={() => setLightbox(null)}
          onPrev={() => setLightbox((i) => (i! - 1 + previewImages.length) % previewImages.length)}
          onNext={() => setLightbox((i) => (i! + 1) % previewImages.length)}
        />
      )}
    </div>
  );
};

export default HomeLayout;
