import { PageShell } from "@/components/site/PageShell";
import { GoldButton } from "@/components/site/GoldButton";
import { Hammer, Settings2, Anchor, Leaf } from "lucide-react";
import technologyImg from "@/assets/technology.jpg";
import gallery7 from "@/assets/gallery-7.jpg";

const points = [
  {
    icon: Hammer,
    title: "Assembled individually",
    text:
      "Each KHIS bathtub is assembled by hand, every project individually, from hand-cut and hand-finished ash parts. Every detail is unique in its measures, making each KHIS bathtub an engineering achievement.",
  },
  {
    icon: Leaf,
    title: "Finishing",
    text:
      "The colour of a KHIS bathtub is dark brown, almost black — due to the thermal processing of the wood at 215°C. Apart from elegant appeal, it gives the wood extraordinary water-resistance and durability. Eco-friendly post-processing: natural linen seed oil or hot waxing. Choose a wooden or stone bottom.",
  },
  {
    icon: Anchor,
    title: "Unique technology",
    text:
      "Combination of materials, design and technology can make simply good things great. KHIS bathtubs use rubber seals to connect hand-cut Nordic ash parts — the combination is made to last, providing durability and aesthetic appeal.",
  },
  {
    icon: Settings2,
    title: "Yacht-deck assembly",
    text:
      "All parts are fitted together by hand using two strong, hidden cables. This assembly imitates yacht deck technology, and the invisibility of the cables ensures the elegant exterior of the bath.",
  },
];

const Technology = () => (
  <PageShell
    eyebrow="Technology"
    title={<>The craftsmanship behind every <em className="text-primary-glow not-italic">KHIS</em></>}
    subtitle="Thermally processed ash, custom rubber seals, hidden stainless-steel cables — engineering protected by OHIM registration."
    bannerImage={technologyImg}
    bannerAlt="KHIS technology and craftsmanship"
  >
    <section className="py-24 md:py-32">
      <div className="container-luxe">
        {/* Intro from KHIS technology page */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <p className="eyebrow mb-4">Hallmarks of every bath</p>
          <h2 className="font-serif text-3xl md:text-4xl mb-8">Each plank, thermally processed at 215°C.</h2>
          <p className="text-muted-foreground leading-relaxed">
            Each plank of white ash wood (also known by its Latin name, Fraxinus Americana) is thermally
            processed at 215°C for water-resistance and durability. This process also naturally darkens the
            wood, which is then hand-cut and oiled or waxed. The process is eco-friendly, and no toxic or
            harsh chemicals are used at any point. Each piece of wood is paired with a custom-designed rubber
            seal to prevent water loss when the wood naturally expands or contracts. Each KHIS bath is a feat
            of engineering, and the designs are protected by an OHIM registration.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-32">
          {points.map((p) => (
            <div key={p.title} className="border border-border p-10 bg-card hover:border-primary/40 transition-colors group">
              <div className="w-12 h-12 mb-6 border border-primary/40 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <p.icon size={20} strokeWidth={1.2} />
              </div>
              <h3 className="font-serif text-2xl mb-3">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.text}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-radial-gold opacity-60 blur-2xl" />
            <img src={gallery7} alt="Natural KHIS detail — granite bottom" loading="lazy" className="relative w-full aspect-square object-cover border border-border" />
          </div>
          <div>
            <p className="eyebrow mb-4">Built to last</p>
            <h2 className="font-serif text-4xl md:text-5xl mb-6">Engineering, not decoration.</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              When combined with any number of customisations, the final result is always a beautiful, unique
              bath of the highest quality craftsmanship — protected by OHIM registration so you won&rsquo;t
              find baths like these made by anyone else.
            </p>
            <GoldButton to="/tailor-made">Configure your bath</GoldButton>
          </div>
        </div>
      </div>
    </section>
  </PageShell>
);

export default Technology;
