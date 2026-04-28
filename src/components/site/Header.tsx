import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navItems } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export const Header = ({ variant = "default" }: { variant?: "default" | "v2" }) => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  const homePath = variant === "v2" ? "/v2" : "/";

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled || open
          ? "bg-background/85 backdrop-blur-xl border-b border-border/60"
          : "bg-transparent"
      )}
    >
      <div className="container-luxe flex items-center justify-between h-20">
        <Link to={homePath} className="flex items-baseline gap-2 group">
          <span className="font-serif text-2xl tracking-[0.2em] text-foreground group-hover:text-primary transition-colors">
            KHIS
          </span>
          <span className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
            Bath
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                cn(
                  "text-xs uppercase tracking-[0.25em] transition-colors relative py-1",
                  isActive
                    ? "text-primary"
                    : "text-foreground/80 hover:text-primary"
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Link
            to={variant === "v2" ? "/" : "/v2"}
            className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground hover:text-primary border border-border/60 px-3 py-1.5"
          >
            {variant === "v2" ? "Concept A" : "Concept B"}
          </Link>
        </nav>

        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setOpen((o) => !o)}
          aria-label="Menüü"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border/60 bg-background/95 backdrop-blur-xl">
          <nav className="container-luxe py-6 flex flex-col gap-5">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className="text-sm uppercase tracking-[0.25em] text-foreground/90 hover:text-primary"
              >
                {item.label}
              </NavLink>
            ))}
            <Link
              to={variant === "v2" ? "/" : "/v2"}
              className="text-xs uppercase tracking-[0.3em] text-muted-foreground"
            >
              {variant === "v2" ? "Concept A" : "Concept B"}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};
