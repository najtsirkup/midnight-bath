import { Link } from "react-router-dom";
import { Hammer, Flame, Settings2, Mountain, Waves, Sparkles, Leaf, Brush } from "lucide-react";
import heroBath from "@/assets/hero-bath.jpg";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { GoldButton } from "@/components/site/GoldButton";
import { products, features, blogPosts } from "@/lib/site-data";
import { cn } from "@/lib/utils";

const featureIcons = [Hammer, Flame, Settings2, Mountain, Waves, Sparkles, Leaf, Brush];

interface Props {
  variant?: "default" | "v2";
}

export const HomeLayout = ({ variant = "default" }: Props) => {
  const isV2 = variant === "v2";

  return (
    <div className={cn("min-h-screen bg-background text-foreground", isV2 && "theme-ocean")}>
      <Header variant={variant} />

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <img
          src={heroBath}
          alt="Käsitööna valmistatud puidust luksusvann"
          className="absolute inset-0 w-full h-full object-cover animate-slow-zoom"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 bg-background/40" />

        <div className="container-luxe relative z-10 text-center max-w-4xl animate-fade-up">
          <p className="eyebrow mb-8">KHIS Bath — Est. Estonia</p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] text-foreground">
            Tunneta kvaliteetpuidu <em className="text-primary not-italic">soojust</em> ja
            luksust oma vannitoas
          </h1>
          <p className="mt-8 max-w-2xl mx-auto text-base md:text-lg text-foreground/80 leading-relaxed font-light">
            Käsitööna valmistatud termotöödeldud puidust vannid — sünniks looduslikust
            materjalist, loodud kestma terve elu.
          </p>
          <div className="mt-12 flex flex-wrap gap-4 justify-center">
            <GoldButton to="/shop">Vaata mudeleid</GoldButton>
            <GoldButton to="/tailor-made" variant="outline" arrow={false}>
              Tailor-made
            </GoldButton>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.4em] text-foreground/50">
          Scroll
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="py-32 md:py-44">
        <div className="container-luxe text-center max-w-3xl">
          <p className="eyebrow mb-6">Filosoofia</p>
          <div className="gold-divider mb-10" />
          <h2 className="font-serif text-3xl md:text-5xl leading-tight">
            Loodus tagasi vannituppa.<br />
            <span className="text-primary italic">Ilma ühegi grammita</span> plastikut.
          </h2>
          <p className="mt-10 text-base md:text-lg text-muted-foreground leading-relaxed font-light">
            Plastikvannid täitvad kodud, ookeanid ja meie kehad. KHIS sündis vastusena —
            iga vann on käsitööna ehitatud termotöödeldud puidust, mis kestab põlvkondi
            ning naaseb lõpuks loodusele tagasi.
          </p>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="py-24 md:py-32 border-t border-border/40">
        <div className="container-luxe">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <p className="eyebrow mb-4">Kollektsioon</p>
              <h2 className="font-serif text-4xl md:text-5xl">KHIS mudelid</h2>
            </div>
            <Link
              to="/shop"
              className="text-xs uppercase tracking-[0.3em] text-primary hover:opacity-70 transition-opacity"
            >
              Vaata kõiki →
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {products.map((p) => (
              <Link
                key={p.slug}
                to="/shop"
                className={cn(
                  "group relative overflow-hidden border border-border/40 bg-card transition-all duration-700 hover:-translate-y-2 hover:shadow-luxury",
                  isV2 && "glass-card rounded-2xl"
                )}
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-radial-gold opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10" />
                  <img
                    src={p.image}
                    alt={p.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                </div>
                <div className="p-8 relative">
                  <h3 className="font-serif text-2xl mb-2 group-hover:text-primary transition-colors">
                    {p.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{p.tagline}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-24 md:py-32 bg-secondary/30 border-y border-border/40">
        <div className="container-luxe">
          <div className="text-center mb-16">
            <p className="eyebrow mb-4">Eripära</p>
            <h2 className="font-serif text-4xl md:text-5xl">KHISi eripära</h2>
            <div className="gold-divider mt-8" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-12">
            {features.map((f, i) => {
              const Icon = featureIcons[i];
              return (
                <div
                  key={f.title}
                  className={cn(
                    "text-center p-6 transition-all duration-500 hover:-translate-y-1",
                    isV2 && "glass-card"
                  )}
                >
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

      {/* NEWS */}
      <section className="py-24 md:py-32">
        <div className="container-luxe">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <p className="eyebrow mb-4">Ajakiri</p>
              <h2 className="font-serif text-4xl md:text-5xl">Viimased uudised</h2>
            </div>
            <Link to="/blog" className="text-xs uppercase tracking-[0.3em] text-primary">
              Kõik artiklid →
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {blogPosts.map((post) => (
              <Link
                to="/blog"
                key={post.slug}
                className={cn(
                  "group block border border-border/40 overflow-hidden transition-all duration-700 hover:-translate-y-1 hover:shadow-luxury",
                  isV2 && "glass-card rounded-2xl"
                )}
              >
                <div className="aspect-[16/10] overflow-hidden">
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
                  <h3 className="font-serif text-2xl mb-3 group-hover:text-primary transition-colors">
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
      <section className="py-24 md:py-32 bg-secondary/30 border-t border-border/40">
        <div className="container-luxe max-w-3xl">
          <div className="text-center mb-14">
            <p className="eyebrow mb-4">Kontakt</p>
            <h2 className="font-serif text-4xl md:text-5xl">Võta ühendust</h2>
            <p className="mt-6 text-muted-foreground">
              Soovid kohandatud vanni või rohkem informatsiooni? Kirjuta meile.
            </p>
          </div>

          <form
            className="space-y-10"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <label className="block text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-3">
                  Nimi
                </label>
                <input
                  type="text"
                  required
                  className={cn(
                    "w-full bg-transparent border-0 border-b border-border focus:border-primary outline-none py-3 text-foreground transition-colors",
                    isV2 && "border-primary/30 focus:border-primary"
                  )}
                />
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-3">
                  E-post
                </label>
                <input
                  type="email"
                  required
                  className="w-full bg-transparent border-0 border-b border-border focus:border-primary outline-none py-3 text-foreground transition-colors"
                />
              </div>
            </div>
            <div>
              <label className="block text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-3">
                Sõnum
              </label>
              <textarea
                rows={4}
                required
                className="w-full bg-transparent border-0 border-b border-border focus:border-primary outline-none py-3 text-foreground transition-colors resize-none"
              />
            </div>
            <div className="text-center pt-6">
              <GoldButton type="submit">Saada</GoldButton>
            </div>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
};
