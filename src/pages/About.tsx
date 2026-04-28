import { PageShell } from "@/components/site/PageShell";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery8 from "@/assets/gallery-8.jpg";
import { GoldButton } from "@/components/site/GoldButton";

const About = () => (
  <PageShell
    eyebrow="Meist"
    title="Frants Seer ja KHIS lugu"
    subtitle="Käsitöölise kannatus, looduse austus ja unistus pikkadest, soojadest hetkedest puidu sees."
  >
    <section className="py-24">
      <div className="container-luxe">
        <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-radial-gold opacity-60 blur-2xl" />
            <img src={gallery5} alt="KHIS käsitöö" loading="lazy" className="relative w-full aspect-[4/5] object-cover border border-border/40" />
          </div>
          <div>
            <p className="eyebrow mb-4">Asutaja</p>
            <h2 className="font-serif text-4xl md:text-5xl mb-8">Üks mees, üks visioon</h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                KHIS sündis Frants Seeri töökojas Eestis — mehe, kes uskus, et vannitubadel
                on ära teenitud midagi paremat kui tehas-toodetud plastik.
              </p>
              <p>
                Aastate jooksul katsetades ja täiustades sündis ainulaadne meetod
                termotöödeldud saarepuust vannide ehitamiseks — vannid, mis ei lekki, ei
                deformeeru ja kestavad põlvkondi.
              </p>
              <p className="text-foreground italic font-serif text-lg">
                "Vann on koht, kus aeg peatub. Selle materjal peaks austama seda hetke."
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-32">
          {[
            ["20+", "Aastat käsitööd"],
            ["500+", "Vanni üle maailma"],
            ["100%", "Loodusliku puidu"],
          ].map(([n, l]) => (
            <div key={n} className="text-center border border-border/40 py-16 bg-card">
              <div className="font-serif text-5xl md:text-6xl text-primary mb-3">{n}</div>
              <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">{l}</div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="eyebrow mb-4">Väärtused</p>
            <h2 className="font-serif text-4xl md:text-5xl mb-8">Mida me usume</h2>
            <div className="space-y-8">
              {[
                ["Käsitöö", "Iga vann on ühe meistri töö — algusest lõpuni."],
                ["Loodus", "Ainult loodusliku puidu — mitte ühte grammi plastikut."],
                ["Aeg", "Hea asi võtab aega. 8–12 nädalat ühe vanni jaoks."],
              ].map(([t, d]) => (
                <div key={t} className="border-l-2 border-primary pl-6">
                  <h4 className="font-serif text-xl mb-2">{t}</h4>
                  <p className="text-sm text-muted-foreground">{d}</p>
                </div>
              ))}
            </div>
            <div className="mt-12">
              <GoldButton to="/shop">Vaata kollektsiooni</GoldButton>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-radial-gold opacity-60 blur-2xl" />
            <img src={gallery8} alt="KHIS vannid" loading="lazy" className="relative w-full aspect-[4/5] object-cover border border-border/40" />
          </div>
        </div>
      </div>
    </section>
  </PageShell>
);

export default About;
