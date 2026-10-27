import { useLang } from "@/lib/i18n";
import { SEO } from "@/components/site/SEO";

export const Privacy = () => {
  const { lang } = useLang();
  const et = lang === "et";

  return (
    <>
      <SEO
        title={et ? "Privaatsuspoliitika — KHIS Bath" : "Privacy Policy — KHIS Bath"}
        description={
          et
            ? "Kuidas KHIS Bath töotleb sinu andmeid: küpsised, Facebook/Meta mõõtmine, kontaktivorm ja sinu valikud."
            : "How KHIS Bath handles your data: cookies, Facebook/Meta measurement, the contact form and your choices."
        }
        path="/privacy"
      />
      <section className="py-20 md:py-28">
        <div className="container-luxe max-w-3xl">
          <p className="eyebrow mb-4">{et ? "KHIS Bath" : "KHIS Bath"}</p>
          <h1 className="font-serif text-4xl md:text-5xl mb-10">
            {et ? "Privaatsuspoliitika" : "Privacy Policy"}
          </h1>

          <div className="space-y-8 text-sm leading-relaxed text-foreground/85">
            <p>
              {et
                ? "See poliitika kirjeldab, milliseid andmeid KHIS by Frants Seer (Järve farm, 67411 Arula, Estonia) saidil khisbath.com töötleb, miks me seda teeme ja kuidas saad oma valikuid muuta. Küsimuste korral kirjuta info@khisbath.com."
                : "This policy explains what data KHIS by Frants Seer (Järve farm, 67411 Arula, Estonia) processes on khisbath.com, why, and how you can change your choices. Questions: info@khisbath.com."}
            </p>

            <div>
              <h2 className="font-serif text-2xl mb-3">{et ? "Küpsised ja reklaamimõõtmine" : "Cookies and advertising measurement"}</h2>
              <p>
                {et
                  ? "Kasutame küpsiseid ja sarnaseid tehnoloogiaid, et mõõta, kuidas külastajad meie saiti kasutavad, ja täiustada oma turundust, sealhulgas Facebooki ja Instagrami reklaame. Kui oled küpsistega nõustunud (küsisime seda küpsisebänneriga), edastavad külastatud leheküljed ja saidi sündmused (näiteks kontaktivormi päring) andmeid Meta Platforms Ireland Ltd-ile mõõtmise ja reklaamide täiustamise eesmärgil."
                  : "We use cookies and similar technologies to measure how visitors use our site and to improve our marketing, including Facebook and Instagram ads. If you accepted cookies (asked via our cookie banner), the pages you view and site events such as contact-form requests are shared with Meta Platforms Ireland Ltd for measurement and advertising purposes."}
              </p>
              <p className="mt-3">
                {et
                  ? "Külastajatel Euroopa Majandusruumis, Ühendkuningriigis ja Šveitsis küsime enne mõõtmise algust nõusolekut. Mujal on mõõtmine vaikimisi sees. Saad oma valikut igal ajal muuta või tagasi võtta jaluses oleva „Küpsiste seadete“ lingi kaudu — muudatus kehtib kohe kõigile tulevastele sündmustele."
                  : "Visitors in the European Economic Area, the United Kingdom and Switzerland are asked for consent before measurement begins. Elsewhere, measurement is on by default. You can change or withdraw your choice at any time via the “Cookie settings” link in the footer — the change applies immediately to all future events."}
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl mb-3">{et ? "Kontaktivorm" : "Contact form"}</h2>
              <p>
                {et
                  ? "Kontaktivormi kaudu saadetud andmeid (nimi, e-post, riik, telefoninumber, eelistatud mudel ja sõnum) kasutame ainult sinu päringule vastamiseks ja pakkumise koostamiseks. Andmeid säilitame niikaua, kui see päringu teenindamiseks vajalik on."
                  : "Data sent through the contact form (name, e-mail, country, phone number, preferred model and message) is used only to answer your inquiry and prepare your quote. We keep it as long as needed to serve that inquiry."}
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl mb-3">{et ? "Sinu õigused" : "Your rights"}</h2>
              <p>
                {et
                  ? "Sul on õigus saada ligipääsu oma andmetele, nende parandamisele ja kustutamisele ning reklaamimõõtmisest keeldumisele. Kirjuta meile info@khisbath.com ja vastame isiklikult."
                  : "You have the right to access, correct and erase your data, and to object to advertising measurement. Write to info@khisbath.com — we answer personally."}
              </p>
            </div>

            <p className="text-muted-foreground">
              {et ? "Poliitika võib muutuda; kehtiv versioon on alati sellel lehel." : "This policy may be updated; the current version is always on this page."}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Privacy;
