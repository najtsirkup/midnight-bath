import { PageShell } from "@/components/site/PageShell";
import { GoldButton } from "@/components/site/GoldButton";
import { Mountain, Waves, Lightbulb, Ruler, Palette, Thermometer } from "lucide-react";
import gallery7 from "@/assets/gallery-7.jpg";
import gallery4 from "@/assets/gallery-4.jpg";

const extras = [
  { icon: Mountain, title: "Kivipõhi", text: "Looduslik graniit-põhi täiendavaks soojuseks ja unikaalseks tunnetuseks." },
  { icon: Waves, title: "Õhumassaaž", text: "Vaikne, võimas mullisüsteem täielikuks lõõgastuseks." },
  { icon: Lightbulb, title: "Kromoteraapia", text: "LED valgustuse süsteem mitmes värvitoonis." },
  { icon: Ruler, title: "Mõõdud", text: "Iga vann disainitakse ja ehitatakse teie ruumi järgi." },
  { icon: Palette, title: "Viimistlus", text: "Erinevad puiduliigid ja õlitooned valikus." },
  { icon: Thermometer, title: "Küttesüsteem", text: "Integreeritud küte hoiab vee soojas tundideks." },
];

const TailorMade = () => (
  <PageShell
    eyebrow="Tailor-made"
    title={<>Iga vann <em className="text-primary not-italic">teie jaoks</em></>}
    subtitle="Te ei osta toodet riiulilt — te tellite oma vanni. Kohandatav mõõt, viimistlus, funktsioonid."
  >
    <section className="py-24">
      <div className="container-luxe">
        <div className="grid md:grid-cols-3 gap-6">
          {extras.map((e) => (
            <div key={e.title} className="border border-border/40 p-10 bg-card hover:border-primary/40 transition-colors group">
              <div className="w-12 h-12 mb-6 border border-primary/40 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <e.icon size={20} strokeWidth={1.2} />
              </div>
              <h3 className="font-serif text-2xl mb-3">{e.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{e.text}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mt-32">
          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-radial-gold opacity-60 blur-2xl" />
            <img src={gallery7} alt="Natural KHIS graniit-põhi" loading="lazy" className="relative w-full aspect-square object-cover border border-border/40" />
          </div>
          <div>
            <p className="eyebrow mb-4">Kuidas see töötab</p>
            <h2 className="font-serif text-4xl md:text-5xl mb-8">Teie vanni teekond</h2>
            <ol className="space-y-6">
              {[
                ["01", "Konsultatsioon", "Räägime teie ruumist, vajadustest ja unistustest."],
                ["02", "Disain", "Loome 3D mudeli ja kinnitame koos detailid."],
                ["03", "Käsitöö", "8–12 nädalat ehitame teie vanni meistri käes."],
                ["04", "Paigaldus", "Toome ja paigaldame vanni teie kodus."],
              ].map(([n, t, d]) => (
                <li key={n} className="flex gap-6 group">
                  <span className="font-serif text-2xl text-primary">{n}</span>
                  <div>
                    <h4 className="font-serif text-xl mb-1">{t}</h4>
                    <p className="text-sm text-muted-foreground">{d}</p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="mt-12">
              <GoldButton to="/about">Alusta projekti</GoldButton>
            </div>
          </div>
        </div>

        <div className="mt-32 relative overflow-hidden border border-border/40">
          <img src={gallery4} alt="Natural KHIS atmosfäär" loading="lazy" className="w-full h-[60vh] object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent flex items-end">
            <div className="container-luxe pb-16 max-w-2xl">
              <h3 className="font-serif text-3xl md:text-4xl mb-6">Mida teie vann veel oskab?</h3>
              <p className="text-muted-foreground mb-8">
                Räägi meile oma visioonist — me leiame viisi, kuidas see ellu viia.
              </p>
              <GoldButton to="/about">Võta ühendust</GoldButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  </PageShell>
);

export default TailorMade;
