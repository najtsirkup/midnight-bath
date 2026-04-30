import { Link } from "react-router-dom";
import { Instagram, Facebook, Mail, MapPin, Phone, Award } from "lucide-react";
import { navItems } from "@/lib/site-data";
import logo from "@/assets/logo-orange.jpg";

const PartnerBadge = ({
  href,
  label,
  sub,
}: {
  href: string;
  label: string;
  sub?: string;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex flex-col items-center justify-center min-w-[78px] px-3 py-2 border border-border bg-background/40 hover:border-primary/60 hover:text-primary transition-colors text-foreground/85"
  >
    <span className="font-serif text-sm tracking-wider leading-none">{label}</span>
    {sub && <span className="mt-1 text-[8px] uppercase tracking-[0.25em] text-muted-foreground">{sub}</span>}
  </a>
);

export const Footer = () => (
  <footer className="border-t border-border/60 bg-secondary/40 relative">
    <div className="container-luxe py-12 md:py-14 grid gap-10 md:grid-cols-12">
      {/* Brand + intro + partners */}
      <div className="md:col-span-5">
        <div className="flex items-center gap-3">
          <img src={logo} alt="KHIS Bath" className="h-10 w-10 object-contain logo-on-dark" loading="lazy" />
          <div className="flex items-baseline gap-2 leading-none">
            <span className="font-serif text-xl tracking-[0.25em] text-foreground">KHIS</span>
            <span className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground">Bath</span>
          </div>
        </div>
        <p className="mt-6 max-w-md text-sm text-foreground/80 leading-relaxed">
          The company is a member of the{" "}
          <a
            href="https://www.furnitureindustry.ee"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:opacity-80"
          >
            Estonian Furniture Manufacturers Association
          </a>{" "}
          and the{" "}
          <a
            href="https://puiduklaster.ee/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:opacity-80"
          >
            Wood Cluster of Southeast Estonia
          </a>
          .
        </p>
        <div className="mt-5 flex flex-wrap gap-2.5">
          <PartnerBadge href="https://puiduklaster.ee/" label="Puiduklaster" sub="Member" />
          <PartnerBadge href="https://stripe.com" label="Stripe" sub="Payments" />
          <PartnerBadge href="https://www.paypal.com" label="PayPal" sub="Payments" />
        </div>
        <div className="mt-6 flex gap-5">
          <a
            href="https://www.instagram.com/khisbath/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Instagram size={18} />
          </a>
          <a
            href="https://www.facebook.com/khisbath/?locale=et_EE"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Facebook size={18} />
          </a>
        </div>
      </div>

      {/* Navigate */}
      <div className="md:col-span-3">
        <h4 className="text-xs uppercase tracking-[0.3em] text-primary mb-5">Navigate</h4>
        {(() => {
          const links: { to: string; label: string }[] = [{ to: "/", label: "Home" }];
          navItems.forEach((n) => {
            if ("to" in n) {
              links.push({ to: n.to, label: n.label });
            } else {
              n.children.forEach((c) => links.push({ to: c.to, label: c.label }));
            }
          });
          return (
            <ul className="grid grid-cols-2 gap-x-5 gap-y-2.5">
              {links.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm text-foreground/80 hover:text-primary transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          );
        })()}

        <h4 className="text-xs uppercase tracking-[0.3em] text-primary mt-8 mb-4 inline-flex items-center gap-2">
          <Award size={12} /> Certifications
        </h4>
        <ul className="space-y-2 text-xs text-foreground/80 leading-relaxed">
          <li>OHIM (European Union) registered designs</li>
          <li>Gislaved Gummi AB (Sweden) certified rubber seals</li>
          <li>FSC (Forest Stewardship Council) certified wood</li>
        </ul>
      </div>

      {/* Contact */}
      <div className="md:col-span-4">
        <h4 className="text-xs uppercase tracking-[0.3em] text-primary mb-5">Contact</h4>
        <ul className="space-y-3 text-sm text-foreground/85">
          <li className="flex items-start gap-2.5">
            <MapPin size={14} className="text-primary mt-0.5 shrink-0" />
            <span>Järve farm, 67411 Arula, Estonia</span>
          </li>
          <li className="flex items-center gap-2.5">
            <Mail size={14} className="text-primary shrink-0" />
            <a href="mailto:info@khisbath.com" className="hover:text-primary transition-colors">
              info@khisbath.com
            </a>
          </li>
          <li className="flex items-center gap-2.5">
            <Mail size={14} className="text-primary shrink-0" />
            <a href="mailto:frants.seer@khisbath.com" className="hover:text-primary transition-colors">
              frants.seer@khisbath.com
            </a>
          </li>
          <li className="flex items-center gap-2.5">
            <Phone size={14} className="text-primary shrink-0" />
            <a href="tel:+3725043542" className="hover:text-primary transition-colors">
              +372 504 3542
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div className="border-t border-border/60">
      <div className="container-luxe py-5 flex flex-col md:flex-row justify-between items-center gap-3">
        <p className="text-xs text-muted-foreground tracking-wider">
          © {new Date().getFullYear()} KHIS by Frants Seer. All rights reserved.
        </p>
        <p className="text-xs text-muted-foreground tracking-[0.2em] uppercase">
          Handcrafted in Estonia
        </p>
      </div>
    </div>
  </footer>
);
