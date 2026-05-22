import { ReactNode } from "react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

interface Props {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  bannerImage: string;
  bannerAlt?: string;
  children: ReactNode;
}

export const PageShell = ({ eyebrow, title, subtitle, bannerImage, bannerAlt = "", children }: Props) => (
  <div className="min-h-screen bg-background text-foreground">
    <Header overDark />

    {/* Beautiful image banner — sets a buying mood */}
    <section className="page-banner pt-20">
      <img src={bannerImage} alt={bannerAlt} className="page-banner-img animate-slow-zoom" />
      <div className="page-banner-overlay" />
      <div className="container-luxe relative z-10 text-center max-w-3xl mx-auto py-20">
        <h1 className="font-serif text-4xl md:text-6xl leading-tight text-white animate-fade-up">{title}</h1>
        {subtitle && (
          <p className="mt-8 text-white/85 text-base md:text-lg leading-relaxed animate-fade-up max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
        <div className="mx-auto mt-10 h-px w-16 bg-white/60" />
      </div>
    </section>

    <main className="bg-background">{children}</main>
    <Footer />
  </div>
);
