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

import firstKhis from "@/assets/products/first-khis.jpg";
import firstKhis2 from "@/assets/products/first-khis-2.jpg";
import eternalKhis from "@/assets/products/eternal-khis.jpg";
import eternalKhis2 from "@/assets/products/eternal-khis-2.jpg";
import naturalKhis from "@/assets/products/natural-khis.jpg";
import naturalKhis2 from "@/assets/products/natural-khis-2.jpg";

import firstClassicSpec from "@/assets/products/first-khis-classic-spec.png";
import firstFrenchSpec from "@/assets/products/first-khis-french-spec.png";
import eternalClassicSpec from "@/assets/products/eternal-khis-classic-spec.png";
import eternalFrenchSpec from "@/assets/products/eternal-khis-french-spec.png";
import naturalClassicSpec from "@/assets/products/natural-khis-classic-spec.png";

import spaHero from "@/assets/blog/spa-hero.jpg";
import quietLuxuryHero from "@/assets/blog/quiet-luxury-hero.jpg";

export const galleryImages = [
  { src: gallery1, alt: "Dark wooden bath in a modern attic bathroom" },
  { src: gallery2, alt: "Eternal KHIS in an industrial interior" },
  { src: gallery3, alt: "Kensington — round wooden bath on a roof terrace" },
  { src: gallery4, alt: "Natural KHIS — bath by candlelight" },
  { src: gallery5, alt: "Handcrafted wooden bath in a dark luxury bathroom" },
  { src: gallery6, alt: "Open-plan bathroom with velvet sofa" },
  { src: gallery7, alt: "Natural KHIS — granite bottom, air-massage and lighting" },
  { src: gallery8, alt: "Vastseliina Pilgrim House baths" },
  { src: gallery9, alt: "UK Kensington — air-massage, lighting and heating" },
  { src: gallery10, alt: "Eternal KHIS lit beneath a skylight" },
];

export const products = [
  {
    slug: "first-khis",
    name: "First KHIS",
    tagline: "for simple luxury in smaller spaces",
    image: firstKhis,
    secondaryImage: firstKhis2,
    capacity: "Up to 380 litres",
    styles: "Classic & French",
    description:
      "First KHIS is the smallest model, though still larger than average with a capacity of up to 380 litres. First KHIS is available in two styles (Classic and French).",
    deliveryNote:
      "Once your order is received and we confirm all the custom details, your exclusive, handcrafted bath will be delivered within 9 weeks (depending on the model and availability of accessories).",
    detail: [
      {
        title: "First KHIS Classic",
        text: "Our standard style with high, straight sides. It offers the greatest water capacity. Even the smallest models create a spa sensation.",
      },
      {
        title: "First KHIS French",
        text: "A classical French style with symmetric cutout sides. Provides effortless access from both sides.",
      },
    ],
  },
  {
    slug: "eternal-khis",
    name: "Eternal KHIS",
    tagline: "for a spa-like experience at home",
    image: eternalKhis,
    secondaryImage: eternalKhis2,
    capacity: "Up to 700 litres",
    styles: "Classic & French",
    description:
      "Wooden bath “Eternal KHIS” is tall and sculptural, with a capacity of up to 700 litres. It is the perfect centrepiece for large bathrooms. Each bath can be made-to-order, based upon your specific needs and preferences. Eternal KHIS is available in two elegant styles (Classic and French).",
    deliveryNote:
      "Once your order is received and we confirm all the custom details, your exclusive, handcrafted bath will be delivered within 9 weeks (depending on the model and availability of accessories).",
    detail: [
      {
        title: "Eternal KHIS Classic",
        text: "Our standard style with high, straight sides. It offers the greatest water capacity. Even the smallest models create a spa sensation.",
      },
      {
        title: "Eternal KHIS French",
        text: "A classical French style with symmetric cutout sides. Provides effortless access from both sides.",
      },
    ],
  },
  {
    slug: "natural-khis",
    name: "Natural KHIS",
    tagline: "for a group indoors or in nature",
    image: naturalKhis,
    secondaryImage: naturalKhis2,
    capacity: "Up to 960 litres",
    styles: "Natural KHIS Classic",
    description:
      "Natural KHIS is a large and versatile bath with an impressive capacity of up to 960 litres. Customisations include light, massage and heating systems.",
    deliveryNote:
      "Once your order is received and we confirm all the custom details, your exclusive, handcrafted bath will be delivered within 9 weeks (depending on the model and availability of accessories).",
    detail: [
      {
        title: "Natural KHIS Classic",
        text: "Our standard style with high, straight sides. It offers the greatest water capacity. Even the smallest models create a spa sensation.",
      },
    ],
  },
];

// Verbatim from the live site
export const features = [
  { title: "One of a kind", text: "Bathtubs unlike any others in the world." },
  { title: "Hand-made", text: "Built by a single master, plank by plank." },
  { title: "Fully customisable", text: "Size, style and finish made for your space." },
  { title: "Natural materials", text: "Real wood — never plastic, never composite." },
  { title: "Thermally processed wood", text: "Ash treated at 215°C for water resistance." },
  { title: "Unique rubber seals", text: "Custom seals certified by Gislaved Gummi AB." },
  { title: "Stainless steel cables", text: "Hidden interior cables, yacht-deck technology." },
  { title: "Eco-friendly finishing", text: "Natural linen seed oil or hot waxing only." },
];

export const blogPosts = [
  {
    slug: "2026-spa-inspired-bathrooms",
    date: "April 2026",
    category: "Trends 2026",
    title: "2026 Spa-Inspired Bathrooms: Why Deeper Soaking Is the Hero Experience This Year",
    excerpt:
      "In 2026, spa-inspired bathrooms have become one of the most sought-after features in home design. The shift is clear: deeper soaking is no longer a luxury reserved for five-star hotels — it is the hero experience people are actively building into their own homes.",
    image: spaHero,
  },
  {
    slug: "2026-quiet-luxury-bathrooms",
    date: "April 2026",
    category: "Design",
    title: "Best 2026 “Quiet Luxury” Bathrooms: Warm, Textured Restraint (Not Sterile Minimalism)",
    excerpt:
      "In 2026, quiet luxury bathrooms defined by warm, textured restraint rather than sterile minimalism have become the clearest expression of refined living at home — backed by 96% of bathroom industry respondents identifying neutrals as the most popular bath colours of the year.",
    image: quietLuxuryHero,
  },
];

export const navItems = [
  { to: "/about", label: "About" },
  { to: "/technology", label: "Technology" },
  {
    label: "Products",
    children: [
      { to: "/shop/first-khis", label: "First KHIS" },
      { to: "/shop/eternal-khis", label: "Eternal KHIS" },
      { to: "/shop/natural-khis", label: "Natural KHIS" },
    ],
  },
  { to: "/tailor-made", label: "Tailor-made" },
  { to: "/gallery", label: "Gallery" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
] as const;
