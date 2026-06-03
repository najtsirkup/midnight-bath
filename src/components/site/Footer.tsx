import { Link } from "react-router-dom";
import { Instagram, Facebook, Mail, MapPin, Phone, Award } from "lucide-react";
import logo from "@/assets/logo-khis.png";
import { useLang } from "@/lib/i18n";

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

export const Footer = () => {
  const { t } = useLang();

  const navLinks: { to: string; label: string }[] = [
    { to: "/", label: t("nav.home") },
    { to: "/about", label: t("nav.about") },
    { to: "/technology", label: t("nav.technology") },
    { to: "/shop/first-khis", label: "First KHIS" },
    { to: "/shop/eternal-khis", label: "Eternal KHIS" },
    { to: "/shop/natural-khis", label: "Natural KHIS" },
    { to: "/tailor-made", label: t("nav.tailor") },
    { to: "/gallery", label: t("nav.gallery") },
    { to: "/blog", label: t("nav.blog") },
    { to: "/#contact", label: t("nav.contact") },
  ];

  return (
    <footer className="border-t border-border/60 bg-secondary/40 relative">
      <div className="container-luxe py-12 md:py-14 grid gap-10 md:grid-cols-12">
        {/* Brand + intro + partners */}
        <div className="md:col-span-5">
          <div>
            <img src={logo} alt="KHIS" className="h-20 w-auto object-contain" loading="lazy" />
          </div>
          <p className="mt-6 max-w-md text-sm text-foreground/80 leading-relaxed">
            {t("footer.member")}{" "}
            <a
              href="https://furnitureindustry.ee/en/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:opacity-80"
            >
              {t("footer.efma")}
            </a>{" "}
            {t("footer.and")}{" "}
            <a
              href="https://puiduklaster.ee/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:opacity-80"
            >
              {t("footer.cluster")}
            </a>
            {t("footer.member_suffix")}
          </p>
          <div className="mt-5 flex flex-wrap gap-2.5">
            <PartnerBadge href="https://puiduklaster.ee/" label="Puiduklaster" sub="Member" />
            <PartnerBadge href="https://wise.com" label="Wise" sub="Payments" />
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
          <h4 className="text-xs uppercase tracking-[0.3em] text-primary mb-5">{t("footer.navigate")}</h4>
          <ul className="grid grid-cols-2 gap-x-5 gap-y-2.5">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-sm text-foreground/80 hover:text-primary transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <h4 className="text-xs uppercase tracking-[0.3em] text-primary mt-8 mb-4 inline-flex items-center gap-2">
            <Award size={12} /> {t("footer.cert")}
          </h4>
          <ul className="space-y-2 text-xs text-foreground/80 leading-relaxed">
            <li>{t("footer.cert.ohim")}</li>
            <li>{t("footer.cert.gislaved")}</li>
            <li>{t("footer.cert.fsc")}</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="md:col-span-4">
          <h4 className="text-xs uppercase tracking-[0.3em] text-primary mb-5">{t("footer.contact")}</h4>
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
            © {new Date().getFullYear()} KHIS by Frants Seer. {t("footer.rights")}
          </p>
          <p className="text-xs text-muted-foreground tracking-[0.2em] uppercase">
            {t("footer.handcrafted")}
          </p>
        </div>
      </div>
    </footer>
  );
};
