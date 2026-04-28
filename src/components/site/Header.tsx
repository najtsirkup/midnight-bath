import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X, Globe } from "lucide-react";
import { navItems } from "@/lib/site-data";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo-orange.jpg";

export const Header = ({ overDark = false }: { overDark?: boolean }) => {
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

  // When scrolled or when not over a dark hero — switch to light surface
  const lightSurface = scrolled || open || !overDark;
  const linkColor = lightSurface ? "text-foreground/85 hover:text-primary" : "text-white/90 hover:text-white";
  const activeColor = "text-primary";

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        lightSurface
          ? "bg-background/90 backdrop-blur-xl border-b border-border/60"
          : "bg-transparent"
      )}
    >
      <div className="container-luxe flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src={logo}
            alt="KHIS Bath"
            width={36}
            height={36}
            className={cn(
              "h-9 w-9 object-contain mix-blend-multiply",
              !lightSurface && "logo-on-dark mix-blend-normal"
            )}
          />
          <div className="hidden sm:flex items-baseline gap-2 leading-none">
            <span className={cn("font-serif text-xl tracking-[0.25em]", lightSurface ? "text-foreground" : "text-white")}>
              KHIS
            </span>
            <span className={cn("text-[10px] uppercase tracking-[0.4em]", lightSurface ? "text-muted-foreground" : "text-white/70")}>
              Bath
            </span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-9">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                cn(
                  "text-[11px] uppercase tracking-[0.3em] transition-colors py-1",
                  isActive ? activeColor : linkColor
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
          <span className={cn("inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.3em] border px-3 py-1.5 cursor-default",
            lightSurface ? "border-border text-muted-foreground" : "border-white/30 text-white/80")}>
            <Globe size={11} /> ENG
          </span>
        </nav>

        <button
          className={cn("lg:hidden p-2", lightSurface ? "text-foreground" : "text-white")}
          onClick={() => setOpen((o) => !o)}
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border/60 bg-background/95 backdrop-blur-xl">
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
          </nav>
        </div>
      )}
    </header>
  );
};
