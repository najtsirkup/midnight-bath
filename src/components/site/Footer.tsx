import { Link } from "react-router-dom";
import { Instagram, Facebook, Mail, Phone } from "lucide-react";
import { navItems } from "@/lib/site-data";

export const Footer = () => (
  <footer className="border-t border-border/60 bg-background relative">
    <div className="container-luxe py-20 grid gap-12 md:grid-cols-4">
      <div className="md:col-span-2">
        <div className="flex items-baseline gap-2">
          <span className="font-serif text-2xl tracking-[0.2em]">KHIS</span>
          <span className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground">Bath</span>
        </div>
        <p className="mt-6 max-w-md text-sm text-muted-foreground leading-relaxed">
          Käsitööna valmistatud termotöödeldud puidust vannid. Loodud Eestis,
          armastatud üle maailma.
        </p>
        <div className="mt-8 flex gap-5">
          <a href="#" aria-label="Instagram" className="text-muted-foreground hover:text-primary transition-colors">
            <Instagram size={18} />
          </a>
          <a href="#" aria-label="Facebook" className="text-muted-foreground hover:text-primary transition-colors">
            <Facebook size={18} />
          </a>
        </div>
      </div>

      <div>
        <h4 className="text-xs uppercase tracking-[0.3em] text-primary/80 mb-5">Navigatsioon</h4>
        <ul className="space-y-3">
          {navItems.map((n) => (
            <li key={n.to}>
              <Link to={n.to} className="text-sm text-foreground/80 hover:text-primary transition-colors">
                {n.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="text-xs uppercase tracking-[0.3em] text-primary/80 mb-5">Kontakt</h4>
        <ul className="space-y-3 text-sm text-foreground/80">
          <li className="flex items-center gap-2"><Mail size={14} className="text-primary" /> info@khisbath.com</li>
          <li className="flex items-center gap-2"><Phone size={14} className="text-primary" /> +372 5000 0000</li>
          <li className="text-muted-foreground">Tallinn, Eesti</li>
        </ul>
      </div>
    </div>

    <div className="border-t border-border/60">
      <div className="container-luxe py-6 flex flex-col md:flex-row justify-between items-center gap-3">
        <p className="text-xs text-muted-foreground tracking-wider">
          © {new Date().getFullYear()} KHIS Bath. Kõik õigused kaitstud.
        </p>
        <p className="text-xs text-muted-foreground tracking-[0.2em] uppercase">
          Handcrafted in Estonia
        </p>
      </div>
    </div>
  </footer>
);
