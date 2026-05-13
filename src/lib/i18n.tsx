import { createContext, useContext, useEffect, useState, ReactNode } from "react";

export type Lang = "en" | "et";

type Dict = Record<string, string>;

// Translation dictionary keyed by English source. Add EST translations.
// Uses a key-based pattern for stability.
const dict: Record<string, { en: string; et: string }> = {
  // ===== Header / Nav =====
  "nav.home": { en: "Home", et: "Avaleht" },
  "nav.about": { en: "About", et: "Meist" },
  "nav.about_long": { en: "About KHIS", et: "KHISist" },
  "nav.technology": { en: "Technology", et: "Tehnoloogia" },
  "nav.products": { en: "Products", et: "Vannid" },
  "nav.tailor": { en: "Tailor-made", et: "Eritellimused" },
  "nav.gallery": { en: "Gallery", et: "Galerii" },
  "nav.blog": { en: "Blog", et: "Blogi" },
  "nav.contact": { en: "Contact", et: "Kontakt" },
  "nav.menu": { en: "Menu", et: "Menüü" },

  // ===== Hero =====
  "hero.eyebrow": { en: "KHIS Bath — Handcrafted in Estonia", et: "KHIS Bath — Käsitsi valmistatud Eestis" },
  "hero.title_1": { en: "Feel the warmth and luxury of", et: "Naturaalse puidu pehmus ja" },
  "hero.title_em": { en: "fine wood", et: "luksuslik tunnetus" },
  "hero.title_2": { en: "in your bathroom.", et: "igas detailis." },
  "hero.lead": {
    en: "Nowadays plastic consumption has become a global problem. Let's fight against plastic pollution together and be by green environment. Use natural products.",
    et: "Keskkonnasõbralikum tulevik algab teadlikest valikutest — eelista looduslikke tooteid ja aita vähendada plastireostust.",
  },
  "cta.request_quote": { en: "Request a quote", et: "Küsi pakkumist" },
  "cta.about_khis": { en: "About KHIS", et: "KHISist" },

  // ===== Philosophy =====
  "philosophy.eyebrow": { en: "Philosophy", et: "Filosoofia" },
  "philosophy.h1": { en: "Bath as a design element.", et: "Vann kui disainielement." },
  "philosophy.h2": { en: "Build your bathroom around it.", et: "Ehita oma vannituba selle ümber." },
  "philosophy.body": {
    en: "Loneliness can be boring. Emptiness can be sad. Neither is true for a KHIS bathtub — with its unique design, meant to catch your attention and please the senses even when empty. As in nature, you only can build your own universe in a safe, cozy, warm and inspiring place.",
    et: "Üksindus võib olla igav. Tühjus võib olla kurb. Kumbki ei ole tõsi KHIS vanni puhul — selle ainulaadne disain on loodud köitma tähelepanu ja meelt rõõmustama isegi siis, kui see on tühi. Nagu looduses, saad oma universumi ehitada vaid turvalises, hubases, soojas ja inspireerivas paigas.",
  },

  // ===== Products section =====
  "products.eyebrow": { en: "Collection", et: "Kollektsioon" },
  "products.title": { en: "Models of KHIS", et: "KHIS mudelid" },
  "products.order_tailor": { en: "Order tailor-made", et: "Telli eritellimusena" },
  "products.discover": { en: "Discover", et: "Vaata lähemalt" },
  "products.collection_eyebrow": { en: "KHIS Collection", et: "KHIS kollektsioon" },

  // ===== Features =====
  "features.eyebrow": { en: "Features", et: "Omadused" },
  "features.title": { en: "Features of KHIS", et: "Tunnused" },
  "features.hallmarks": { en: "Hallmarks", et: "Tunnused" },

  "feat.one_of_a_kind.t": { en: "One of a kind", et: "Eksklusiivne disain" },
  "feat.one_of_a_kind.b": { en: "Bathtubs unlike any others in the world.", et: "Vannid, mis on ainulaadsed maailmas." },
  "feat.handmade.t": { en: "Hand-made", et: "Käsitööna valmistatud" },
  "feat.handmade.b": { en: "Built by a single master, plank by plank.", et: "Iga vann valmib meistri käe all, detail-detaili haaval." },
  "feat.custom.t": { en: "Fully customisable", et: "Eritellimusel lahendused" },
  "feat.custom.b": { en: "Size, style and finish made for your space.", et: "Suurus, stiil ja viimistlus vastavalt sinu ruumile ja soovidele." },
  "feat.natural.t": { en: "Natural materials", et: "Looduslik materjal" },
  "feat.natural.b": { en: "Real wood — never plastic, never composite.", et: "Puidu loomulik soojus ja pehmus sinu vannitoas." },
  "feat.thermal.t": { en: "Thermally processed wood", et: "Termiliselt töödeldud puit" },
  "feat.thermal.b": { en: "Ash treated at 215°C for water resistance.", et: "Valge saar töödeldakse 215°C juures, et tagada vastupidavus ja veekindlus." },
  "feat.seals.t": { en: "Unique rubber seals", et: "Kohandatud kummitihendid" },
  "feat.seals.b": { en: "Custom seals certified by Gislaved Gummi AB.", et: "Spetsiaalselt välja töötatud tihendid koostöös Gislaved Gummi AB-ga." },
  "feat.cables.t": { en: "Stainless steel cables", et: "Roostevabast terasest trossid" },
  "feat.cables.b": { en: "Hidden interior cables, yacht-deck technology.", et: "Peidetud kinnitussüsteem, inspireeritud jahilaevade tekitehnoloogiast." },
  "feat.eco.t": { en: "Eco-friendly finishing", et: "Keskkonnasõbralik viimistlus" },
  "feat.eco.b": { en: "Natural linen seed oil or hot waxing only.", et: "Viimistluses kasutatakse kvaliteetset Osmo õlivaha." },

  // ===== Gallery section =====
  "gallery.eyebrow": { en: "Gallery", et: "Galerii" },
  "gallery.title": { en: "KHIS in the world", et: "KHIS maailmas" },
  "gallery.see_more": { en: "See more", et: "Vaata rohkem" },
  "gallery.subtitle": {
    en: "From private homes in the UK to pilgrimage houses in Estonia — every KHIS bath finds its own room.",
    et: "Erakodudest Suurbritannias palverännumajadeni Eestis — iga KHIS vann leiab oma ruumi.",
  },

  // ===== Blog section =====
  "blog.eyebrow": { en: "Blog", et: "Blogi" },
  "blog.latest": { en: "Latest reading", et: "Viimased lood" },
  "blog.all": { en: "All articles", et: "Kõik artiklid" },

  // ===== Contact =====
  "contact.eyebrow": { en: "Free quote — no commitment", et: "Saada meile päring või võta meiega ühendust!" },
  "contact.title": { en: "Tell us about your project", et: "Räägi meile oma projektist" },
  "contact.lead": {
    en: "Looking for a tailor-made bath or more information? Write to us — usually within 48 hours.",
    et: "Otsid eritellimusel valmistatud vanni või lisateavet? Kirjuta meile — vastame tavaliselt 48 tunni jooksul.",
  },
  "contact.name": { en: "Name", et: "Nimi" },
  "contact.email": { en: "Email", et: "E-post" },
  "contact.country": { en: "Country", et: "Riik" },
  "contact.phone": { en: "Phone (optional)", et: "Telefon (valikuline)" },
  "contact.preferred": { en: "Preferred model", et: "Eelistatud mudel" },
  "contact.not_sure": { en: "Not sure yet — please advise", et: "Pole veel kindel — palun nõustage" },
  "contact.tellus": { en: "Tell us about your project", et: "Räägi meile oma projektist" },
  "contact.send": { en: "Send my request", et: "Saada päring" },
  "contact.personal": { en: "We respond personally — never with a templated reply.", et: "Personaalne lähenemine igale päringule." },

  // ===== Footer =====
  "footer.member": {
    en: "The company is a member of the",
    et: "Ettevõte on",
  },
  "footer.efma": { en: "Estonian Furniture Manufacturers Association", et: "Eesti Mööblitootjate Liidu" },
  "footer.and": { en: "and the", et: "ja" },
  "footer.cluster": { en: "Wood Cluster of Southeast Estonia", et: "Kagu-Eesti Puiduklastri liige" },
  "footer.member_suffix": { en: ".", et: "." },
  "footer.navigate": { en: "Navigate", et: "Lingid" },
  "footer.cert": { en: "Certifications", et: "Sertifikaadid" },
  "footer.cert.ohim": { en: "OHIM (European Union) registered designs", et: "OHIM (Euroopa Liit) registreeritud disainid" },
  "footer.cert.gislaved": { en: "Gislaved Gummi AB (Sweden) certified rubber seals", et: "Gislaved Gummi AB (Rootsi) sertifitseeritud kummitihendid" },
  "footer.cert.fsc": { en: "FSC (Forest Stewardship Council) certified wood", et: "FSC (Forest Stewardship Council) sertifitseeritud puit" },
  "footer.contact": { en: "Contact", et: "Kontakt" },
  "footer.rights": { en: "All rights reserved.", et: "Kõik õigused kaitstud." },
  "footer.handcrafted": { en: "Handcrafted in Estonia", et: "Käsitsi valmistatud Eestis" },

  // ===== About page =====
  "about.eyebrow": { en: "About us", et: "Meist" },
  "about.title": { en: "KHIS by Frants Seer", et: "Vann kui disainielement" },
  "about.subtitle": {
    en: "Bath as a design element. Build your bathroom — or your very personal spa — around it.",
    et: "Loo vannituba või privaatne spaa, mille keskpunktiks on ajatu elegants.",
  },
  "about.section1_eyebrow": { en: "Bath as a design element", et: "Vann kui disainielement" },
  "about.section1_title": { en: "Meant to please your senses, even empty.", et: "Loodud meelt rõõmustama, isegi tühjana." },
  "about.section1_p1": {
    en: "Loneliness can be boring. Emptiness can be sad. Neither is true for a KHIS bathtub, with its unique design — meant to catch your attention and please the senses even when empty. KHIS bathtub as a design element: build your bathroom (or your very personal spa) around it.",
    et: "Üksindus võib olla igav. Tühjus võib olla kurb. Kumbki ei kehti KHIS vanni puhul — ainulaadne disain köidab pilku ja rõõmustab meelt ka tühjana. KHIS vann kui disainielement: ehita oma vannituba (või oma väga isiklik spa) selle ümber.",
  },
  "about.section1_p2": {
    en: "As in nature, you only can build your own universe in a safe, cozy, warm and inspiring place. Whether you use the things around you or contemplate them — it has to be aesthetically enjoyable, unique, eye-catching. Like a KHIS bathtub.",
    et: "Nagu looduses, saad oma universumi ehitada vaid turvalises, hubases, soojas ja inspireerivas paigas. Olgu sa asjadega tegev või neid mõtiskledes — see peab olema esteetiliselt nauditav, ainulaadne, pilkupüüdev. Nagu KHIS vann.",
  },
  "about.philo_eyebrow": { en: "KHIS philosophy", et: "KHIS filosoofia" },
  "about.philo_t": { en: "Start your own tradition.", et: "Alusta oma traditsiooni." },
  "about.philo_p1": {
    en: "Everything about ourselves is in constant movement, whatever efforts we make to stop time and capture the essence. Some traditions have to be kept and nourished — bathtubs made of fine wood; and some have to be started by ourselves.",
    et: "Kõik meie ümber on pidevas liikumises, ükskõik kui väga me püüame aega peatada ja olemust tabada. Mõned traditsioonid tuleb hoida ja toita — peenest puidust vannid; ja mõned tuleb endal alustada.",
  },
  "about.philo_p2": {
    en: "With KHIS, you can start your own tradition of quality time, gliding through waves of fullness.",
    et: "KHISiga saad alustada oma kvaliteetaja traditsiooni, libistades end läbi täiuslikkuse lainete.",
  },
  "about.indulge_eyebrow": { en: "Indulgence", et: "Nautimine" },
  "about.indulge_t": { en: "Your very own home spa.", et: "Sinu enda kodune spa." },
  "about.indulge_p1": {
    en: "We believe in natural flow of time and experience. We believe that maintaining the natural rhythm of life is essential, keeping up with harmony around us is the path to follow.",
    et: "Usume aja ja kogemuse loomulikku voogu. Usume, et elu loomuliku rütmi säilitamine on hädavajalik ning meid ümbritsev harmoonia on tee, mida tasub järgida.",
  },
  "about.indulge_p2": {
    en: "You can have your very own home spa, indulge yourself with the lasting warmth of a wooden KHIS bathtub, experience tranquility and the relaxing effect of bathing.",
    et: "Sul võib olla oma kodune spa, naudi puidust KHIS vanni püsivat soojust, koge rahu ja vannitamise lõõgastavat mõju.",
  },
  "about.frants_eyebrow": { en: "Frants Seer", et: "Frants Seer" },
  "about.frants_title": { en: "KHIS Master Craftsman", et: "KHIS meistrikäsitööline" },
  "about.frants_p1": {
    en: "I love the natural world. My family has lived in the countryside for generations, and now I am raising my children here. I want them to have a deep, life-long connection to nature — to trees, to water, to pure air.",
    et: "Armastan loodust. Mu perekond on elanud maal põlvkondi, nüüd kasvatan siin oma lapsi. Soovin, et neil oleks sügav, eluaegne side loodusega — puudega, veega, puhta õhuga.",
  },
  "about.frants_p2": {
    en: "I started building KHIS baths to re-establish the link between bathing — a natural and soothing activity — and nature, a relationship that has been broken by building bathtubs from synthetic materials. Even most wooden baths are covered in varnish or plastic, so they no longer feel like natural wood.",
    et: "Hakkasin KHIS vanne ehitama, et taastada side vannitamise — loomuliku ja rahustava tegevuse — ja looduse vahel. See suhe on katkenud sünteetiliste materjalide kasutamise tõttu. Isegi enamik puidust vanne on lakitud või plastikuga kaetud, nii et need ei tundu enam loomuliku puiduna.",
  },
  "about.frants_p3": {
    en: "My challenge was to build a bath that is organic, but still durable and beautiful. After three years of experimenting with different materials, designs, processes and technologies, I finally found a special combination that works perfectly.",
    et: "Minu väljakutse oli ehitada vann, mis on orgaaniline, kuid samas vastupidav ja ilus. Pärast kolme aastat erinevate materjalide, disainide, protsesside ja tehnoloogiatega katsetamist leidsin lõpuks erilise kombinatsiooni, mis töötab täiuslikult.",
  },
  "about.frants_quote": {
    en: "You won't find baths like these made by anyone else. Not only are these baths unique in the world, but no two baths are the same.",
    et: "Selliseid vanne ei leia kelleltki teiselt. Need vannid pole mitte ainult maailmas ainulaadsed, vaid ka kaks vanni pole kunagi täpselt ühesugused.",
  },
  "about.start_project": { en: "Start your project", et: "Alusta oma projekti" },

  // ===== Technology page =====
  "tech.eyebrow": { en: "Technology", et: "Tehnoloogia" },
  "tech.title_1": { en: "The craftsmanship behind every", et: "Käsitööoskus iga" },
  "tech.title_em": { en: "KHIS", et: "KHIS taga" },
  "tech.subtitle": {
    en: "Thermally processed ash, custom rubber seals, hidden stainless-steel cables — engineering protected by OHIM registration.",
    et: "Termiliselt töödeldud saar, kohandatud kummitihendid, peidetud roostevabad terastrossid — insenertöö, mis on kaitstud OHIM registreeringuga.",
  },
  "tech.intro_eyebrow": { en: "Hallmarks of every bath", et: "Iga vanni tunnused" },
  "tech.intro_title": { en: "Each plank, thermally processed at 215°C.", et: "Iga laud termiliselt töödeldud 215°C juures." },
  "tech.intro_body": {
    en: "Each plank of white ash wood (also known by its Latin name, Fraxinus Americana) is thermally processed at 215°C for water-resistance and durability. This process also naturally darkens the wood, which is then hand-cut and oiled or waxed. The process is eco-friendly, and no toxic or harsh chemicals are used at any point. Each piece of wood is paired with a custom-designed rubber seal to prevent water loss when the wood naturally expands or contracts. Each KHIS bath is a feat of engineering, and the designs are protected by an OHIM registration.",
    et: "Iga valge saare puu (tuntud ka ladinakeelse nime Fraxinus Americana all) laud on termiliselt töödeldud 215°C juures, et tagada veekindlus ja vastupidavus. See protsess tumendab puidu loomulikult, mis seejärel käsitsi lõigatakse ja õlitatakse või vahatatakse. Protsess on keskkonnasõbralik ning ühelgi etapil ei kasutata mürgiseid ega karme kemikaale. Iga puidutükk on paaritatud kohandatud kummitihendiga, et vältida vee kadu, kui puit loomulikult paisub või kahaneb. Iga KHIS vann on insenertöö saavutus ja disainid on kaitstud OHIM registreeringuga.",
  },
  "tech.p1.t": { en: "Assembled individually", et: "Individuaalselt kokku pandud" },
  "tech.p1.b": {
    en: "Each KHIS bathtub is assembled by hand, every project individually, from hand-cut and hand-finished ash parts. Every detail is unique in its measures, making each KHIS bathtub an engineering achievement.",
    et: "Iga KHIS vann pannakse käsitsi kokku, iga projekt eraldi, käsitsi lõigatud ja viimistletud saareosadest. Iga detail on oma mõõtmetes ainulaadne, muutes iga KHIS vanni insenertöö saavutuseks.",
  },
  "tech.p2.t": { en: "Finishing", et: "Viimistlus" },
  "tech.p2.b": {
    en: "The colour of a KHIS bathtub is dark brown, almost black — due to the thermal processing of the wood at 215°C. Apart from elegant appeal, it gives the wood extraordinary water-resistance and durability. Eco-friendly post-processing: natural linen seed oil or hot waxing. Choose a wooden or stone bottom.",
    et: "KHIS vanni värv on tumepruun, peaaegu must — tänu puidu termilisele töötlemisele 215°C juures. Lisaks elegantsele välimusele annab see puidule erakordse veekindluse ja vastupidavuse. Keskkonnasõbralik järeltöötlus: looduslik linaseemneõli või kuumvahatamine. Vali puidust või kivist põhi.",
  },
  "tech.p3.t": { en: "Unique technology", et: "Ainulaadne tehnoloogia" },
  "tech.p3.b": {
    en: "Combination of materials, design and technology can make simply good things great. KHIS bathtubs use rubber seals to connect hand-cut Nordic ash parts — the combination is made to last, providing durability and aesthetic appeal.",
    et: "Materjalide, disaini ja tehnoloogia kombinatsioon võib muuta lihtsalt head asjad suurepäraseks. KHIS vannid kasutavad kummitihendeid käsitsi lõigatud Põhjamaade saareosade ühendamiseks — kombinatsioon on loodud kestma, pakkudes vastupidavust ja esteetilist atraktiivsust.",
  },
  "tech.p4.t": { en: "Yacht-deck assembly", et: "Jahilaeva tekiviimistlus" },
  "tech.p4.b": {
    en: "All parts are fitted together by hand using two strong, hidden cables. This assembly imitates yacht deck technology, and the invisibility of the cables ensures the elegant exterior of the bath.",
    et: "Kõik osad pannakse käsitsi kokku kahe tugeva peidetud trossiga. See koostamisviis jäljendab jahilaeva tekitehnoloogiat ja trosside nähtamatus tagab vanni elegantse välimuse.",
  },
  "tech.built_eyebrow": { en: "Built to last", et: "Loodud kestma" },
  "tech.built_title": { en: "Engineering, not decoration.", et: "Insenertöö, mitte dekoratsioon." },
  "tech.built_body": {
    en: "When combined with any number of customisations, the final result is always a beautiful, unique bath of the highest quality craftsmanship — protected by OHIM registration so you won't find baths like these made by anyone else.",
    et: "Koos mistahes kohandustega on lõpptulemus alati ilus, ainulaadne ja kõrgeima kvaliteediga käsitööna valmistatud vann — kaitstud OHIM registreeringuga, nii et selliseid vanne ei leia kelleltki teiselt.",
  },
  "tech.configure": { en: "Configure your bath", et: "Konfigureeri oma vann" },

  // ===== TailorMade =====
  "tailor.eyebrow": { en: "Tailor-made", et: "Eritellimused" },
  "tailor.title_1": { en: "Every KHIS bath is", et: "Iga KHIS vann on" },
  "tailor.title_em": { en: "unique", et: "ainulaadne" },
  "tailor.subtitle": {
    en: "You don't pick a KHIS off a shelf. You commission one. Choose the model, the style, the dimensions, the bottom, the finish — and the features that make it yours.",
    et: "KHIS-i ei vali riiulilt. Tellid selle. Vali mudel, stiil, mõõdud, põhi, viimistlus — ja omadused, mis teevad sellest sinu oma.",
  },
  "tailor.intro": {
    en: "KHIS performs special orders, where each client can choose the type of bath, the style, and the right size for them. There is also possible to add heating system, air-massage, lights and a stone bottom. Tell us your vision — we will hand-build it.",
    et: "KHIS teostab eritellimusi, kus iga klient saab valida vanni tüübi, stiili ja sobiva suuruse. Lisaks on võimalik lisada küttesüsteem, õhumassaaž, valgustus ja kivipõhi. Räägi meile oma visioonist — me ehitame selle käsitsi.",
  },
  "tailor.intro_em": { en: "heating system, air-massage, lights and a stone bottom", et: "küttesüsteem, õhumassaaž, valgustus ja kivipõhi" },
  "tailor.free_quote": { en: "Request a free quote", et: "Küsi tasuta pakkumist" },
  "tailor.stone_select": { en: "View stone selection →", et: "Vaata kivivalikut →" },
  "tailor.delivery_label": { en: "Delivery from order confirmation", et: "Tarne tellimuse kinnitusest" },
  "tailor.weeks": { en: "9 weeks", et: "9 nädalat" },
  "tailor.ohim_label": { en: "Registered, protected designs", et: "Registreeritud, kaitstud disainid" },
  "tailor.worldwide": { en: "Worldwide", et: "Üle maailma" },
  "tailor.shipping": { en: "Shipping to your door", et: "Tarne ukseni" },
  "tailor.no_plastic": { en: "Natural materials, no plastic", et: "Looduslikud materjalid, plastivaba" },
  "tailor.what_eyebrow": { en: "What you can customise", et: "Mida saad kohandada" },
  "tailor.what_title": { en: "Six ways to make it yours", et: "Kuus viisi seda omaks teha" },
  "tailor.how_eyebrow": { en: "How it works", et: "Kuidas see käib" },
  "tailor.how_title": { en: "Your bath, in four steps", et: "Sinu vann, neljas sammus" },
  "tailor.start_eyebrow": { en: "Start from a model", et: "Alusta mudelist" },
  "tailor.start_title": { en: "Pick your foundation", et: "Vali oma vundament" },

  // Tailor extras
  "ext.stone.t": { en: "Stone bottom", et: "Kivist põhi" },
  "ext.stone.b": { en: "Natural stone bottom for added warmth and a one-of-a-kind feel underfoot. See our stone bottom selection.", et: "Looduslik kivipõhi lisasoojuse ja ainulaadse jalgealuse tunde jaoks. Vaata meie kivipõhjade valikut." },
  "ext.air.t": { en: "Air-massage system", et: "Õhumassaaži süsteem" },
  "ext.air.b": { en: "Quiet, powerful bubble system for full-body relaxation, integrated invisibly into the bath.", et: "Vaikne, võimas mullisüsteem kogu keha lõõgastuseks, vanni nähtamatult integreeritud." },
  "ext.light.t": { en: "Chromotherapy lights", et: "Kromoteraapia valgustus" },
  "ext.light.b": { en: "LED lighting system in multiple colours — turn each soak into an atmosphere.", et: "LED valgustussüsteem mitmes värvis — muuda iga vannivõtt atmosfääriks." },
  "ext.size.t": { en: "Made-to-measure", et: "Mõõtude järgi" },
  "ext.size.b": { en: "Every bath is sized and proportioned for your specific space and your body.", et: "Iga vann on mõõdetud ja proportsioonitud sinu ruumi ja keha jaoks." },
  "ext.finish.t": { en: "Hand-finished", et: "Käsitsi viimistletud" },
  "ext.finish.b": { en: "Choose natural linen seed oil or hot waxing — the finish that fits your bathroom's character.", et: "Vali naturaalne linaseemneõli või kuumvahatamine — viimistlus, mis sobib sinu vannitoa karakteriga." },
  "ext.heat.t": { en: "Heating system", et: "Küttesüsteem" },
  "ext.heat.b": { en: "Integrated heater holds water at the perfect temperature throughout a long, deep soak.", et: "Integreeritud küte hoiab vee ideaalsel temperatuuril kogu pika ja sügava vannivõtu vältel." },

  "step.consult.t": { en: "Consultation", et: "Konsultatsioon" },
  "step.consult.b": { en: "Tell us about your space, your model preference and any custom features.", et: "Räägi meile oma ruumist, eelistatud mudelist ja kohandatavatest võimalustest." },
  "step.design.t": { en: "Design & quote", et: "Disain ja pakkumine" },
  "step.design.b": { en: "We confirm dimensions, style, and add-ons. You receive a transparent quote.", et: "Kinnitame mõõdud, stiili ja lisad. Saad läbipaistva pakkumise." },
  "step.build.t": { en: "Hand-built", et: "Käsitsi ehitatud" },
  "step.build.b": { en: "Frants and the team build your bath in roughly 9 weeks, plank by plank.", et: "Frants ja meeskond ehitavad sinu vanni umbes 9 nädalaga, laud-lauahaaval." },
  "step.delivery.t": { en: "Worldwide delivery", et: "Ülemaailmne tarne" },
  "step.delivery.b": { en: "We crate and ship your bath to your door, anywhere in the world.", et: "Pakime ja saadame sinu vanni ukse taha, ükskõik kuhu maailmas." },

  "tailor.quote_eyebrow": { en: "Free quote — no commitment", et: "Tasuta pakkumine — ilma kohustuseta" },
  "tailor.quote_title": { en: "Request your tailor-made KHIS", et: "Telli oma eritellimusel KHIS" },
  "tailor.quote_lead": {
    en: "Tell us about your space and your wishes. We'll come back with a personal proposal — usually within 48 hours.",
    et: "Räägi meile oma ruumist ja soovidest. Tuleme tagasi isikliku pakkumisega — tavaliselt 48 tunni jooksul.",
  },

  // ===== Product page =====
  "product.tech_eyebrow": { en: "Dimensions", et: "Mõõdud" },
  "product.tech_title": { en: "Technical drawings", et: "Tehnilised joonised" },
  "product.tech_lead": {
    en: "Indicative dimensions in millimetres. Each KHIS is custom-made — final sizing is tailored to your space.",
    et: "Soovituslikud mõõdud millimeetrites. Iga KHIS on eritellimusel — lõplikud mõõdud kohandatakse sinu ruumi järgi.",
  },
  "product.also_eyebrow": { en: "You may also like", et: "Sulle võib ka meeldida" },
  "product.also_title": { en: "Other KHIS models", et: "Teised KHIS mudelid" },
  "product.tech_btn": { en: "Technology", et: "Tehnoloogia" },

  // Contact page
  "contactpg.title_1": { en: "Let's build your", et: "Ehitame sinu" },
  "contactpg.title_em": { en: "KHIS", et: "KHIS-i" },
  "contactpg.title_2": { en: ".", et: "." },
  "contactpg.subtitle": {
    en: "Tell us about your space and your wishes — we'll come back with a personal proposal.",
    et: "Räägi meile oma ruumist ja soovidest — tuleme tagasi isikliku pakkumisega.",
  },

  // Worldwide bar
  "common.worldwide_delivery": { en: "Worldwide delivery", et: "Ülemaailmne tarne" },

  // ===== Products (per-model) =====
  "prod.styles.classic_french": { en: "Classic & French", et: "Classic ja French" },
  "prod.styles.natural_classic": { en: "Natural KHIS Classic", et: "Natural KHIS Classic" },

  "prod.first-khis.tagline": { en: "for simple luxury in smaller spaces", et: "lihtne luksus väiksematesse ruumidesse" },
  "prod.first-khis.capacity": { en: "Up to 380 litres", et: "Kuni 380 liitrit" },
  "prod.first-khis.description": {
    en: "First KHIS is the smallest model, though still larger than average with a capacity of up to 380 litres. First KHIS is available in two styles (Classic and French).",
    et: "First KHIS on väikseim mudel, kuid siiski keskmisest suurem — mahutavus kuni 380 liitrit. First KHIS on saadaval kahes stiilis (Classic ja French).",
  },
  "prod.first-khis.classic.t": { en: "First KHIS Classic", et: "First KHIS Classic" },
  "prod.first-khis.classic.b": {
    en: "Our standard style with high, straight sides. It offers the greatest water capacity. Even the smallest models create a spa sensation.",
    et: "Meie standardstiil kõrgete sirgete külgedega. Pakub suurimat veemahtu. Isegi väikseim mudel loob spaa-tunde.",
  },
  "prod.first-khis.french.t": { en: "First KHIS French", et: "First KHIS French" },
  "prod.first-khis.french.b": {
    en: "A classical French style with symmetric cutout sides. Provides effortless access from both sides.",
    et: "Klassikaline Prantsuse stiil sümmeetriliste väljalõigetega külgedel. Tagab mugava sisenemise mõlemalt poolt.",
  },

  "prod.eternal-khis.tagline": { en: "for a spa-like experience at home", et: "spaa-elamus sinu enda kodus" },
  "prod.eternal-khis.capacity": { en: "Up to 700 litres", et: "Kuni 700 liitrit" },
  "prod.eternal-khis.description": {
    en: "Wooden bath “Eternal KHIS” is tall and sculptural, with a capacity of up to 700 litres. It is the perfect centrepiece for large bathrooms. Each bath can be made-to-order, based upon your specific needs and preferences. Eternal KHIS is available in two elegant styles (Classic and French).",
    et: "Puidust vann „Eternal KHIS“ on kõrge ja skulpturaalne, mahutavusega kuni 700 liitrit. See on suurte vannitubade ideaalne keskpunkt. Iga vann valmib eritellimusena vastavalt sinu vajadustele ja soovidele. Eternal KHIS on saadaval kahes elegantses stiilis (Classic ja French).",
  },
  "prod.eternal-khis.classic.t": { en: "Eternal KHIS Classic", et: "Eternal KHIS Classic" },
  "prod.eternal-khis.classic.b": {
    en: "Our standard style with high, straight sides. It offers the greatest water capacity. Even the smallest models create a spa sensation.",
    et: "Meie standardstiil kõrgete sirgete külgedega. Pakub suurimat veemahtu. Isegi väikseim mudel loob spaa-tunde.",
  },
  "prod.eternal-khis.french.t": { en: "Eternal KHIS French", et: "Eternal KHIS French" },
  "prod.eternal-khis.french.b": {
    en: "A classical French style with symmetric cutout sides. Provides effortless access from both sides.",
    et: "Klassikaline Prantsuse stiil sümmeetriliste väljalõigetega külgedel. Tagab mugava sisenemise mõlemalt poolt.",
  },

  "prod.natural-khis.tagline": { en: "for a group indoors or in nature", et: "seltskonnale siseruumides või looduses" },
  "prod.natural-khis.capacity": { en: "Up to 960 litres", et: "Kuni 960 liitrit" },
  "prod.natural-khis.description": {
    en: "Natural KHIS is a large and versatile bath with an impressive capacity of up to 960 litres. Customisations include light, massage and heating systems.",
    et: "Natural KHIS on suur ja mitmekülgne vann muljetavaldava mahutavusega kuni 960 liitrit. Kohanduste hulka kuuluvad valgustus-, massaaži- ja küttesüsteem.",
  },
  "prod.natural-khis.classic.t": { en: "Natural KHIS Classic", et: "Natural KHIS Classic" },
  "prod.natural-khis.classic.b": {
    en: "Our standard style with high, straight sides. It offers the greatest water capacity. Even the smallest models create a spa sensation.",
    et: "Meie standardstiil kõrgete sirgete külgedega. Pakub suurimat veemahtu. Isegi väikseim mudel loob spaa-tunde.",
  },

  "prod.delivery_note": {
    en: "Once your order is received and we confirm all the custom details, your exclusive, handcrafted bath will be delivered within 9 weeks (depending on the model and availability of accessories).",
    et: "Pärast tellimuse vastuvõtmist ja kõigi detailide kinnitamist tarnime sinu eksklusiivse käsitsi valmistatud vanni 9 nädala jooksul (sõltuvalt mudelist ja lisatarvikute saadavusest).",
  },
};

interface Ctx {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
}

const LangCtx = createContext<Ctx>({
  lang: "en",
  setLang: () => {},
  t: (k) => k,
});

export const LangProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<Lang>(() => {
    if (typeof window === "undefined") return "en";
    return (localStorage.getItem("khis-lang") as Lang) || "en";
  });

  useEffect(() => {
    if (typeof document !== "undefined") document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem("khis-lang", l);
    } catch {}
  };

  const t = (key: string) => {
    const entry = dict[key];
    if (!entry) return key;
    return entry[lang] || entry.en || key;
  };

  return <LangCtx.Provider value={{ lang, setLang, t }}>{children}</LangCtx.Provider>;
};

export const useLang = () => useContext(LangCtx);
