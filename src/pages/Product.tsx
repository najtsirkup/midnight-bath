import { useParams, Link, Navigate } from "react-router-dom";
import { PageShell } from "@/components/site/PageShell";
import { GoldButton } from "@/components/site/GoldButton";
import { products, features } from "@/lib/site-data";
import { Check, ArrowRight } from "lucide-react";

const Product = () => {
  const { slug = "" } = useParams();
  const product = products.find((p) => p.slug === slug);
  if (!product) return <Navigate to="/" replace />;

  const others = products.filter((p) => p.slug !== slug);

  return (
    <PageShell
      eyebrow="KHIS Collection"
      title={product.name}
      subtitle={product.tagline}
      bannerImage={product.image}
      bannerAlt={product.name}
    >
      <section className="py-20 md:py-28">
        <div className="container-luxe">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div className="space-y-6">
              <div className="relative bg-muted">
                <div className="absolute -inset-6 bg-gradient-radial-gold opacity-60 blur-2xl" />
                <img src={product.image} alt={product.name} className="relative w-full aspect-[4/3] object-cover border border-border" />
              </div>
              <img src={product.secondaryImage} alt={`${product.name} detail`} loading="lazy" className="w-full aspect-[4/3] object-cover border border-border bg-muted" />
            </div>

            <div className="md:sticky md:top-28">
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="text-[10px] uppercase tracking-[0.25em] border border-primary/40 text-primary px-3 py-1.5">{product.capacity}</span>
                <span className="text-[10px] uppercase tracking-[0.25em] border border-border text-muted-foreground px-3 py-1.5">{product.styles}</span>
              </div>

              <p className="text-foreground/90 leading-relaxed mb-6">{product.description}</p>

              <div className="space-y-8 mb-10">
                {product.detail.map((d) => (
                  <div key={d.title} className="border-l-2 border-primary pl-6">
                    <h3 className="font-serif text-xl mb-2">{d.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{d.text}</p>
                  </div>
                ))}
              </div>

              <p className="text-sm text-muted-foreground italic mb-10">{product.deliveryNote}</p>

              <div className="flex flex-wrap gap-4">
                <GoldButton to="/contact">Request a quote</GoldButton>
                <GoldButton to="/technology" variant="outline" arrow={false}>Technology</GoldButton>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="mt-32">
            <div className="text-center mb-14">
              <p className="eyebrow mb-4">Hallmarks</p>
              <h2 className="font-serif text-4xl md:text-5xl">Features of KHIS</h2>
              <div className="gold-divider mt-8" />
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((f) => (
                <div key={f.title} className="border border-border p-6 bg-card">
                  <Check size={16} className="text-primary mb-4" />
                  <h3 className="font-serif text-base mb-1">{f.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{f.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* You may also like */}
          <div className="mt-32">
            <div className="text-center mb-14">
              <p className="eyebrow mb-4">You may also like</p>
              <h2 className="font-serif text-4xl md:text-5xl">Other KHIS models</h2>
              <div className="gold-divider mt-8" />
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {others.map((p) => (
                <Link key={p.slug} to={`/shop/${p.slug}`} className="group block border border-border bg-card overflow-hidden hover:-translate-y-1 hover:shadow-luxury transition-all duration-700">
                  <div className="aspect-[16/10] overflow-hidden bg-muted">
                    <img src={p.image} alt={p.name} loading="lazy" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                  </div>
                  <div className="p-8">
                    <h3 className="font-serif text-2xl mb-1 group-hover:text-primary transition-colors">{p.name}</h3>
                    <p className="text-sm text-muted-foreground italic mb-4">{p.tagline}</p>
                    <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-primary">
                      Discover <ArrowRight size={12} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
};

export default Product;
