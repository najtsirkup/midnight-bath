import { useParams, Link, Navigate } from "react-router-dom";
import { PageShell } from "@/components/site/PageShell";
import { GoldButton } from "@/components/site/GoldButton";
import { SEO } from "@/components/site/SEO";
import { products, features } from "@/lib/site-data";
import { Check, ArrowRight } from "lucide-react";
import { useLang } from "@/lib/i18n";

const detailKeysBySlug: Record<string, { t: string; b: string }[]> = {
  "first-khis": [
    { t: "prod.first-khis.classic.t", b: "prod.first-khis.classic.b" },
    { t: "prod.first-khis.french.t", b: "prod.first-khis.french.b" },
  ],
  "eternal-khis": [
    { t: "prod.eternal-khis.classic.t", b: "prod.eternal-khis.classic.b" },
    { t: "prod.eternal-khis.french.t", b: "prod.eternal-khis.french.b" },
  ],
  "natural-khis": [
    { t: "prod.natural-khis.classic.t", b: "prod.natural-khis.classic.b" },
  ],
};

const stylesKeyBySlug: Record<string, string> = {
  "first-khis": "prod.styles.classic_french",
  "eternal-khis": "prod.styles.classic_french",
  "natural-khis": "prod.styles.natural_classic",
};

const Product = () => {
  const { slug = "" } = useParams();
  const { t } = useLang();
  const product = products.find((p) => p.slug === slug);
  if (!product) return <Navigate to="/" replace />;

  const others = products.filter((p) => p.slug !== slug);
  const detailKeys = detailKeysBySlug[product.slug] || [];
  const tagline = t(`prod.${product.slug}.tagline`);
  const description = t(`prod.${product.slug}.description`);
  const capacity = t(`prod.${product.slug}.capacity`);
  const styles = t(stylesKeyBySlug[product.slug] || "");
  const deliveryNote = t("prod.delivery_note");

  const path = `/shop/${product.slug}`;
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    brand: { "@type": "Brand", name: "KHIS Bath" },
    image: `https://khisbath.com${product.image}`,
    url: `https://khisbath.com${path}`,
  };
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://khisbath.com/" },
      { "@type": "ListItem", position: 2, name: "Products", item: "https://khisbath.com/#products" },
      { "@type": "ListItem", position: 3, name: product.name, item: `https://khisbath.com${path}` },
    ],
  };

  return (
    <>
    <SEO
      title={`${product.name} — Handcrafted Wooden Bathtub | KHIS Bath`}
      description={`${product.name}: ${tagline}. ${product.description}`.slice(0, 160)}
      path={path}
      type="product"
      jsonLd={[productSchema, breadcrumb]}
    />
    <PageShell
      eyebrow={t("products.collection_eyebrow")}
      title={product.name}
      subtitle={tagline}
      bannerImage={product.image}
      bannerAlt={product.name}
    >
      <section className="py-20 md:py-28">
        <div className="container-luxe">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div className="space-y-6">
              <div className="relative bg-secondary/60 flex items-center justify-center p-8 aspect-[4/3]">
                <div className="absolute -inset-6 bg-gradient-radial-gold opacity-60 blur-2xl pointer-events-none" />
                <img src={product.image} alt={product.name} className="relative w-full h-full object-contain" />
              </div>
              <div className="bg-secondary/60 flex items-center justify-center p-8 aspect-[4/3] border border-border">
                <img src={product.secondaryImage} alt={`${product.name} detail`} loading="lazy" className="w-full h-full object-contain" />
              </div>
            </div>

            <div className="md:sticky md:top-28">
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="text-[10px] uppercase tracking-[0.25em] border border-primary/40 text-primary px-3 py-1.5">{capacity}</span>
                <span className="text-[10px] uppercase tracking-[0.25em] border border-border text-muted-foreground px-3 py-1.5">{styles}</span>
              </div>

              <p className="text-foreground/90 leading-relaxed mb-6">{description}</p>

              <div className="space-y-8 mb-10">
                {detailKeys.map((d) => (
                  <div key={d.t} className="border-l-2 border-primary pl-6">
                    <h3 className="font-serif text-xl mb-2">{t(d.t)}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{t(d.b)}</p>
                  </div>
                ))}
              </div>

              <p className="text-sm text-muted-foreground italic mb-10">{deliveryNote}</p>

              <div className="flex flex-wrap gap-4">
                <GoldButton to="/#contact">{t("cta.request_quote")}</GoldButton>
                <GoldButton to="/technology" variant="outline" arrow={false}>{t("product.tech_btn")}</GoldButton>
              </div>
            </div>
          </div>

          {/* Technical drawings — dark background to match the original drawings */}
          {product.specs && product.specs.length > 0 && (
            <div className="mt-24 md:mt-32">
              <div className="text-center mb-12">
                <p className="eyebrow mb-4">{t("product.tech_eyebrow")}</p>
                <h2 className="font-serif text-3xl md:text-4xl">{t("product.tech_title")}</h2>
                <div className="gold-divider mt-8" />
                <p className="mt-6 text-sm text-muted-foreground max-w-xl mx-auto">
                  {t("product.tech_lead")}
                </p>
              </div>
              <div className={`grid gap-8 ${product.specs.length > 1 ? "md:grid-cols-2" : "md:grid-cols-1 max-w-3xl mx-auto"}`}>
                {product.specs.map((s) => (
                  <div
                    key={s.alt}
                    className="p-8 border border-primary/30 flex items-center justify-center"
                    style={{ background: "hsl(218 40% 8%)" }}
                  >
                    <img
                      src={s.src}
                      alt={s.alt}
                      loading="lazy"
                      className="w-full h-auto object-contain"
                    />
                  </div>
                ))}
                {/* Captions row below */}
                <div className={`${product.specs.length > 1 ? "md:col-span-2" : ""} grid gap-8 ${product.specs.length > 1 ? "md:grid-cols-2" : ""}`}>
                  {product.specs.map((s) => (
                    <p key={s.alt + "-c"} className="text-center text-xs uppercase tracking-[0.25em] text-primary">
                      {s.alt.split(" — ")[0]}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Features */}
          <div className="mt-32">
            <div className="text-center mb-14">
              {t("features.hallmarks") && <p className="eyebrow mb-4">{t("features.hallmarks")}</p>}
              <h2 className="font-serif text-4xl md:text-5xl">{t("features.title")}</h2>
              <div className="gold-divider mt-8" />
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((f) => (
                <div key={f.key} className="border border-border p-6 bg-card">
                  <Check size={16} className="text-primary mb-4" />
                  <h3 className="font-serif text-base mb-1">{t(`feat.${f.key}.t`)}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{t(`feat.${f.key}.b`)}</p>
                </div>
              ))}
            </div>
          </div>

          {/* You may also like */}
          <div className="mt-32">
            <div className="text-center mb-14">
              <p className="eyebrow mb-4">{t("product.also_eyebrow")}</p>
              <h2 className="font-serif text-4xl md:text-5xl">{t("product.also_title")}</h2>
              <div className="gold-divider mt-8" />
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {others.map((p) => (
                <Link key={p.slug} to={`/shop/${p.slug}`} className="group block border border-border bg-card overflow-hidden hover:-translate-y-1 hover:shadow-luxury transition-all duration-700">
                  <div className="aspect-[16/10] overflow-hidden bg-secondary/60 flex items-center justify-center p-6">
                    <img src={p.image} alt={p.name} loading="lazy" className="max-w-full max-h-full object-contain transition-transform duration-1000 group-hover:scale-105" />
                  </div>
                  <div className="p-8">
                    <h3 className="font-serif text-2xl mb-1 group-hover:text-primary transition-colors">{p.name}</h3>
                    <p className="text-sm text-muted-foreground italic mb-4">{t(`prod.${p.slug}.tagline`)}</p>
                    <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-primary">
                      {t("products.discover")} <ArrowRight size={12} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageShell>
    </>
  );
};

export default Product;
