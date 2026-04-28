import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import gallery7 from "@/assets/gallery-7.jpg";
import gallery8 from "@/assets/gallery-8.jpg";
import gallery9 from "@/assets/gallery-9.jpg";
import gallery10 from "@/assets/gallery-10.jpg";

export const galleryImages = [
  { src: gallery1, alt: "Tume puidust vann modernses katusealuses vannitoas" },
  { src: gallery2, alt: "Eternal KHIS vann tööstuslikus interjööris" },
  { src: gallery3, alt: "Kensington — ümar puitvann katuseaial" },
  { src: gallery4, alt: "Natural KHIS — mullivann küünalde valgel" },
  { src: gallery5, alt: "Käsitöö puitvann tumedas luksusvannitoas" },
  { src: gallery6, alt: "Vannituba avatud elutoaga, samet sohva" },
  { src: gallery7, alt: "Natural KHIS graniit-põhi, õhumassaaž ja valgustus" },
  { src: gallery8, alt: "Vastseliina palverännakute maja vannid" },
  { src: gallery9, alt: "UK Kensington — õhumassaaž, valgustus ja küte" },
  { src: gallery10, alt: "Eternal KHIS valgustuse all katusakna juures" },
];

export const products = [
  {
    slug: "first-khis",
    name: "First KHIS",
    tagline: "Esimene oma laadis — ajatu klassika",
    image: gallery10,
    description:
      "Originaalne KHIS mudel — käsitööna kokku pandud termotöödeldud saarepuust. Skulptuuriline silueti ja sügav, soe puidu toon.",
  },
  {
    slug: "eternal-khis",
    name: "Eternal KHIS",
    tagline: "Igavene vorm — modernne luksus",
    image: gallery2,
    description:
      "Ovaalne, vabaltseisev vann tugeva siluetiga. Loodud kestma põlvkondi tänu termotöödeldud puidu vastupidavusele.",
  },
  {
    slug: "natural-khis",
    name: "Natural KHIS",
    tagline: "Looduse jõud — õhumassaaž ja graniit",
    image: gallery4,
    description:
      "Ümar mullivanni mudel graniit-põhja, õhumassaaži süsteemi ja kromoteraapia valgustusega — täielik spaa-elamus kodus.",
  },
];

export const features = [
  { title: "Käsitöö", text: "Iga vann valmib meistri käte all Eestis." },
  { title: "Termotöödeldud puit", text: "Vastupidav, stabiilne ja ajatu." },
  { title: "Kohandatav", text: "Mõõdud ja viimistlus teie ruumi järgi." },
  { title: "Kivipõhi", text: "Graniit põhi soojuse ja luksuse jaoks." },
  { title: "Massaaži süsteem", text: "Õhu- ja vee-massaaž lõõgastuseks." },
  { title: "Valgustus", text: "Kromoteraapia LED valgustus." },
  { title: "Loodussõbralik", text: "Ei ühtegi gramm plastikut." },
  { title: "Käsitsi viimistlus", text: "Vahaõli viimistlus, sügav läige." },
];

export const blogPosts = [
  {
    slug: "kasitoo-vann-eestist",
    date: "12. märts 2026",
    category: "Käsitöö",
    title: "Käsitöö, mis kestab põlvkondi",
    excerpt:
      "Kuidas iga KHIS vann sünnib meistri käes — alates puidu valikust kuni viimase vahaõli kihini. Lugu materjalist, ajast ja kannatlikkusest.",
    image: gallery5,
  },
  {
    slug: "loodus-vannitoas",
    date: "28. veebruar 2026",
    category: "Inspiratsioon",
    title: "Loodus tagasi vannituppa",
    excerpt:
      "Miks puit on parim materjal vannile — soojus, akustika, esteetika. Kuidas puitvann muudab igapäevase pesemise rituaaliks.",
    image: gallery6,
  },
];

export const navItems = [
  { to: "/shop", label: "Pood" },
  { to: "/tailor-made", label: "Tailor-made" },
  { to: "/about", label: "Meist" },
  { to: "/blog", label: "Blogi" },
];
