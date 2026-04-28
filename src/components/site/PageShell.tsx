import { ReactNode } from "react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

interface Props {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  children: ReactNode;
}

export const PageShell = ({ eyebrow, title, subtitle, children }: Props) => (
  <div className="min-h-screen bg-background text-foreground">
    <Header />
    <section className="pt-40 pb-20 md:pt-48 md:pb-24 border-b border-border/40 bg-secondary/20">
      <div className="container-luxe text-center max-w-3xl">
        {eyebrow && <p className="eyebrow mb-5 animate-fade-up">{eyebrow}</p>}
        <h1 className="font-serif text-4xl md:text-6xl leading-tight animate-fade-up">{title}</h1>
        {subtitle && (
          <p className="mt-8 text-muted-foreground text-base md:text-lg leading-relaxed animate-fade-up">
            {subtitle}
          </p>
        )}
        <div className="gold-divider mt-10" />
      </div>
    </section>
    <main>{children}</main>
    <Footer />
  </div>
);
