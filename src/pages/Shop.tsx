import { PageShell } from "@/components/site/PageShell";
import { products, galleryImages } from "@/lib/site-data";
import { GoldButton } from "@/components/site/GoldButton";
import { Check } from "lucide-react";

const Shop = () => (
  <PageShell
    eyebrow="Pood"
    title="Meie kollektsioon"
    subtitle="Kolm allkirja-mudelit, igaüks käsitööna valmistatud Eestis termotöödeldud saarepuust."
  >
    <section className="py-24">
      <div className="container-luxe space-y-32">
        {products.map((p, i) => (
          <article
            key={p.slug}
            className={`grid md:grid-cols-2 gap-12 lg:gap-20 items-center ${
              i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
            }`}
          >
            <div className="relative group">
              <div className="absolute -inset-6 bg-gradient-radial-gold opacity-60 blur-2xl" />
              <img
                src={p.image}
                alt={p.name}
                loading="lazy"
                className="relative w-full aspect-[4/5] object-cover border border-border/40"
              />
            </div>
            <div>
              <p className="eyebrow mb-4">Mudel 0{i + 1}</p>
              <h2 className="font-serif text-4xl md:text-5xl mb-4">{p.name}</h2>
              <p className="text-primary italic mb-6 font-serif">{p.tagline}</p>
              <p className="text-muted-foreground leading-relaxed mb-8">{p.description}</p>
              <ul className="space-y-3 mb-10">
                {["Termotöödeldud saarepuit", "Käsitsi õlitatud viimistlus", "Kohandatav mõõt", "Garantii 5 aastat"].map(
                  (x) => (
                    <li key={x} className="flex items-center gap-3 text-sm">
                      <Check size={14} className="text-primary" /> {x}
                    </li>
                  )
                )}
              </ul>
              <div className="flex gap-4">
                <GoldButton to="/tailor-made">Päri hinda</GoldButton>
                <GoldButton to="/about" variant="outline" arrow={false}>
                  Loo
                </GoldButton>
              </div>
            </div>
          </article>
        ))}

        {/* Gallery */}
        <div>
          <div className="text-center mb-14">
            <p className="eyebrow mb-4">Galerii</p>
            <h2 className="font-serif text-4xl md:text-5xl">KHIS maailmas</h2>
            <div className="gold-divider mt-8" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((img, i) => (
              <div
                key={i}
                className={`overflow-hidden border border-border/40 group ${
                  i % 5 === 0 ? "row-span-2" : ""
                }`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className={`w-full object-cover transition-transform duration-1000 group-hover:scale-110 ${
                    i % 5 === 0 ? "h-full min-h-[400px]" : "aspect-square"
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  </PageShell>
);

export default Shop;
