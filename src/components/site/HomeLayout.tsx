import { Link } from "react-router-dom";
import { ArrowRight, Hammer, Flame, Settings2, Mountain, Waves, Anchor, Leaf, Brush } from "lucide-react";
import heroBath from "@/assets/hero-bath.jpg";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { GoldButton } from "@/components/site/GoldButton";
import ContactForm from "@/components/site/ContactForm";
import { products, features, blogPosts, galleryImages } from "@/lib/site-data";

const featureIcons = [Hammer, Brush, Settings2, Leaf, Flame, Waves, Anchor, Mountain];

const HomeLayout = () => {
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
        {/* Lighter overlay so the picture stays visible */}
        <div className="absolute inset-0 bg-gradient-hero" />

        <div className="container-luxe relative z-10 text-center max-w-4xl animate-fade-up py-32">
          <p className="eyebrow mb-8 text-white">KHIS Bath — Handcrafted in Estonia</p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-white drop-shadow-[0_2px_24px_rgba(0,0,0,0.6)]">
            Feel the warmth and luxury of <em className="text-primary-glow not-italic">fine wood</em> in your bathroom.
          </h1>
          <p className="mt-8 max-w-2xl mx-auto text-base md:text-lg text-white leading-relaxed font-light drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)]">
            Nowadays plastic consumption has become a global problem. Let&rsquo;s fight against
            plastic pollution together and be by green environment. Use natural products.
          </p>
          <div className="mt-12 flex flex-wrap gap-4 justify-center">
            <GoldButton to="/contact">Request a quote</GoldButton>
            <GoldButton to="/about" variant="outlineLight" arrow={false}>
              About KHIS
            </GoldButton>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.4em] text-white/80">
          Scroll
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="py-28 md:py-40 bg-background">
        <div className="container-luxe text-center max-w-3xl">
          <p className="eyebrow mb-6">Philosophy</p>
          <div className="gold-divider mb-10" />
          <h2 className="font-serif text-3xl md:text-5xl leading-tight">
            Bath as a design element.<br />
            <span className="text-primary italic">Build your bathroom around it.</span>
          </h2>
          <p className="mt-10 text-base md:text-lg text-muted-foreground leading-relaxed font-light">
            Loneliness can be boring. Emptiness can be sad. Neither is true for a KHIS bathtub —
            with its unique design, meant to catch your attention and please the senses even when empty.
            As in nature, you only can build your own universe in a safe, cozy, warm and inspiring place.
          </p>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="py-24 md:py-32 border-t border-border/60 bg-secondary/40">
        <div className="container-luxe">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <p className="eyebrow mb-4">Collection</p>
              <h2 className="font-serif text-4xl md:text-5xl">Models of KHIS</h2>
            </div>
            <Link
              to="/tailor-made"
              className="text-xs uppercase tracking-[0.3em] text-primary hover:opacity-70 transition-opacity inline-flex items-center gap-2"
            >
              Order tailor-made <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {products.map((p) => (
              <Link
                key={p.slug}
                to={`/shop/${p.slug}`}
                className="group relative overflow-hidden border border-border bg-card transition-all duration-700 hover:-translate-y-2 hover:shadow-luxury"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-secondary/60 flex items-center justify-center p-6">
                  <img
                    src={p.image}
                    alt={p.name}
                    loading="lazy"
                    className="w-full h-full object-contain transition-transform duration-1000 group-hover:scale-105"
                  />
                </div>
                <div className="p-8">
                  <h3 className="font-serif text-2xl mb-2 group-hover:text-primary transition-colors">
                    {p.name}
                  </h3>
                  <p className="text-sm text-muted-foreground italic">{p.tagline}</p>
                  <p className="mt-4 text-xs uppercase tracking-[0.25em] text-primary inline-flex items-center gap-2">
                    Discover <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
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
            <p className="eyebrow mb-4">Features</p>
            <h2 className="font-serif text-4xl md:text-5xl">Features of KHIS</h2>
            <div className="gold-divider mt-8" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-12">
            {features.map((f, i) => {
              const Icon = featureIcons[i];
              return (
                <div key={f.title} className="text-center p-6 transition-all duration-500 hover:-translate-y-1">
                  <div className="inline-flex items-center justify-center w-14 h-14 mb-5 border border-primary/40 text-primary">
                    <Icon size={22} strokeWidth={1.2} />
                  </div>
                  <h3 className="font-serif text-lg mb-2">{f.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{f.text}</p>
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
            <p className="eyebrow mb-4">Gallery</p>
            <h2 className="font-serif text-4xl md:text-5xl">KHIS in the world</h2>
            <div className="gold-divider mt-8" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.slice(0, 4).map((img, i) => (
              <div key={i} className="overflow-hidden border border-border group">
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full aspect-square object-cover transition-transform duration-1000 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <GoldButton to="/gallery">Vaata rohkem</GoldButton>
          </div>
        </div>
      </section>

      {/* JOURNAL */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container-luxe">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <p className="eyebrow mb-4">Blog</p>
              <h2 className="font-serif text-4xl md:text-5xl">Latest reading</h2>
            </div>
            <Link to="/blog" className="text-xs uppercase tracking-[0.3em] text-primary inline-flex items-center gap-2">
              All articles <ArrowRight size={14} />
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
    </div>
  );
};

export default HomeLayout;
