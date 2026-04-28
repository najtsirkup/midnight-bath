import { Link } from "react-router-dom";
import { Instagram, Facebook, Mail, Globe } from "lucide-react";
import { navItems } from "@/lib/site-data";
import logo from "@/assets/logo-orange.jpg";

export const Footer = () => (
  <footer className="border-t border-border/60 bg-secondary/40 relative">
    <div className="container-luxe py-20 grid gap-12 md:grid-cols-4">
      <div className="md:col-span-2">
        <div className="flex items-center gap-3">
          <img src={logo} alt="KHIS Bath" className="h-10 w-10 object-contain mix-blend-multiply" loading="lazy" />
          <div className="flex items-baseline gap-2 leading-none">
            <span className="font-serif text-xl tracking-[0.25em]">KHIS</span>
            <span className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground">Bath</span>
          </div>
        </div>
        <p className="mt-6 max-w-md text-sm text-muted-foreground leading-relaxed">
          Handcrafted, thermally processed wooden bathtubs. Built in Estonia, shipped worldwide.
          Let&rsquo;s fight against plastic pollution together — use natural products.
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
        <h4 className="text-xs uppercase tracking-[0.3em] text-primary mb-5">Navigate</h4>
        <ul className="space-y-3">
          <li><Link to="/" className="text-sm text-foreground/80 hover:text-primary transition-colors">Home</Link></li>
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
        <h4 className="text-xs uppercase tracking-[0.3em] text-primary mb-5">Contact</h4>
        <ul className="space-y-3 text-sm text-foreground/80">
          <li className="flex items-center gap-2"><Mail size={14} className="text-primary" /> info@khisbath.com</li>
          <li className="flex items-center gap-2"><Globe size={14} className="text-primary" /> Worldwide shipping</li>
          <li className="text-muted-foreground">Handcrafted in Estonia</li>
        </ul>
      </div>
    </div>

    <div className="border-t border-border/60">
      <div className="container-luxe py-6 flex flex-col md:flex-row justify-between items-center gap-3">
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
