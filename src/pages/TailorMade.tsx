import { PageShell } from "@/components/site/PageShell";
import { GoldButton } from "@/components/site/GoldButton";
import ContactForm from "@/components/site/ContactForm";
import { Mountain, Waves, Lightbulb, Ruler, Palette, Thermometer, Check, Clock, Award, Globe } from "lucide-react";
import { products } from "@/lib/site-data";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery7 from "@/assets/gallery-7.jpg";

const extras = [
  { icon: Mountain, title: "Stone bottom", text: "Natural stone bottom for added warmth and a one-of-a-kind feel underfoot. See our stone bottom selection." },
  { icon: Waves, title: "Air-massage system", text: "Quiet, powerful bubble system for full-body relaxation, integrated invisibly into the bath." },
  { icon: Lightbulb, title: "Chromotherapy lights", text: "LED lighting system in multiple colours — turn each soak into an atmosphere." },
  { icon: Ruler, title: "Made-to-measure", text: "Every bath is sized and proportioned for your specific space and your body." },
  { icon: Palette, title: "Hand-finished", text: "Choose natural linen seed oil or hot waxing — the finish that fits your bathroom's character." },
  { icon: Thermometer, title: "Heating system", text: "Integrated heater holds water at the perfect temperature throughout a long, deep soak." },
];

const TailorMade = () => (
  <PageShell
    eyebrow="Tailor-made"
    title={<>Every KHIS bath is <em className="text-primary-glow not-italic">unique</em>.</>}
    subtitle="You don't pick a KHIS off a shelf. You commission one. Choose the model, the style, the dimensions, the bottom, the finish — and the features that make it yours."
    bannerImage={gallery4}
    bannerAlt="Tailor-made KHIS bath in candlelight"
  >
    {/* Conversion-focused intro */}
    <section className="py-20 md:py-28 bg-background">
      <div className="container-luxe max-w-4xl text-center">
        <p className="text-lg md:text-xl text-foreground/90 leading-relaxed font-light">
          KHIS performs special orders, where each client can choose the type of bath, the style, and the
          right size for them. There is also possible to add <span className="text-primary">heating system,
          air-massage, lights and a stone bottom</span>. Tell us your vision — we will hand-build it.
        </p>
        <div className="mt-10 flex flex-wrap gap-4 justify-center">
          <GoldButton to="/contact">Request a free quote</GoldButton>
          <a
            href="https://khisbath.com/wp-content/uploads/stone-selection.pdf"
            target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-primary hover:opacity-70 px-4 py-4"
          >
            View stone selection →
          </a>
        </div>
      </div>
    </section>

    {/* Trust strip */}
    <section className="py-10 border-y border-border bg-secondary/40">
      <div className="container-luxe grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {[
          [Clock, "9 weeks", "Delivery from order confirmation"],
          [Award, "OHIM", "Registered, protected designs"],
          [Globe, "Worldwide", "Shipping to your door"],
          [Check, "100%", "Natural materials, no plastic"],
        ].map(([Icon, n, l]: any) => (
          <div key={l} className="flex flex-col items-center gap-2">
            <Icon size={20} className="text-primary" strokeWidth={1.2} />
            <div className="font-serif text-2xl">{n}</div>
            <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">{l}</div>
          </div>
        ))}
      </div>
    </section>

    {/* Customisation grid */}
    <section className="py-24 md:py-32">
      <div className="container-luxe">
        <div className="text-center mb-16">
          <p className="eyebrow mb-4">What you can customise</p>
          <h2 className="font-serif text-4xl md:text-5xl">Six ways to make it yours</h2>
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

        {/* Process */}
        <div className="grid md:grid-cols-2 gap-12 items-center mt-32">
          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-radial-gold opacity-60 blur-2xl" />
            <img src={gallery7} alt="Natural KHIS — stone bottom and air-massage" loading="lazy" className="relative w-full aspect-square object-cover border border-border" />
          </div>
          <div>
            <p className="eyebrow mb-4">How it works</p>
            <h2 className="font-serif text-4xl md:text-5xl mb-8">Your bath, in four steps</h2>
            <ol className="space-y-6">
              {[
                ["01", "Consultation", "Tell us about your space, your model preference and any custom features."],
                ["02", "Design & quote", "We confirm dimensions, style, and add-ons. You receive a transparent quote."],
                ["03", "Hand-built", "Frants and the team build your bath in roughly 9 weeks, plank by plank."],
                ["04", "Worldwide delivery", "We crate and ship your bath to your door, anywhere in the world."],
              ].map(([n, t, d]) => (
                <li key={n} className="flex gap-6">
                  <span className="font-serif text-2xl text-primary">{n}</span>
                  <div>
                    <h4 className="font-serif text-xl mb-1">{t}</h4>
                    <p className="text-sm text-muted-foreground">{d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* Choose model */}
        <div className="mt-32">
          <div className="text-center mb-14">
            <p className="eyebrow mb-4">Start from a model</p>
            <h2 className="font-serif text-4xl md:text-5xl">Pick your foundation</h2>
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
                  <p className="text-xs text-muted-foreground italic mb-4">{p.tagline}</p>
                  <p className="text-xs uppercase tracking-[0.2em] text-primary">{p.capacity}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Quote form */}
    <section id="quote" className="py-24 md:py-32 bg-secondary/40 border-t border-border scroll-mt-24">
      <div className="container-luxe max-w-3xl">
        <div className="text-center mb-14">
          <p className="eyebrow mb-4">Free quote — no commitment</p>
          <h2 className="font-serif text-4xl md:text-5xl">Request your tailor-made KHIS</h2>
          <p className="mt-6 text-muted-foreground">
            Tell us about your space and your wishes. We&rsquo;ll come back with a personal proposal — usually within 48 hours.
          </p>
        </div>
        <ContactForm embedded />
      </div>
    </section>
  </PageShell>
);

export default TailorMade;
