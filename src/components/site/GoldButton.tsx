import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { ButtonHTMLAttributes, forwardRef } from "react";

type Variant = "solid" | "outline";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  to?: string;
  variant?: Variant;
  arrow?: boolean;
}

export const GoldButton = forwardRef<HTMLButtonElement, Props>(
  ({ to, variant = "solid", arrow = true, className, children, ...rest }, ref) => {
    const base =
      "inline-flex items-center gap-3 px-8 py-4 text-xs uppercase tracking-[0.3em] font-medium transition-all duration-500 group";
    const styles =
      variant === "solid"
        ? "bg-gradient-gold text-primary-foreground hover:shadow-gold hover:-translate-y-0.5"
        : "border border-primary/70 text-primary hover:bg-primary hover:text-primary-foreground";

    const content = (
      <>
        {children}
        {arrow && (
          <ArrowRight
            size={14}
            className="transition-transform duration-500 group-hover:translate-x-1"
          />
        )}
      </>
    );

    if (to) {
      return (
        <Link to={to} className={cn(base, styles, className)}>
          {content}
        </Link>
      );
    }

    return (
      <button ref={ref} className={cn(base, styles, className)} {...rest}>
        {content}
      </button>
    );
  }
);
GoldButton.displayName = "GoldButton";
