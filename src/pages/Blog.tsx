import { PageShell } from "@/components/site/PageShell";
import { SEO } from "@/components/site/SEO";
import { blogPosts } from "@/lib/site-data";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import gallery6 from "@/assets/gallery-6.jpg";
import { useLang } from "@/lib/i18n";

const Blog = () => {
  const { t } = useLang();
  return (
  <>
  <SEO
    title="KHIS Blog — Craftsmanship, Quiet Luxury & Wellness"
    description="Stories on handcrafted bathtubs, quiet luxury, deep-soak bathing rituals and modern wellness design from the KHIS Bath workshop."
    path="/blog"
  />
  <PageShell
    eyebrow={t("blog.eyebrow")}
    title={t("blog.page_title")}
    subtitle={t("blog.page_subtitle")}
    bannerImage={gallery6}
    bannerAlt="KHIS bath in a calm interior"
    bannerPosition="center 30%"
  >
    <section className="py-24">
      <div className="container-luxe">
        <div className="grid md:grid-cols-2 gap-10">
          {blogPosts.map((p) => (
            <Link
              to={`/blog/${p.slug}`}
              key={p.slug}
              className="group block border border-border bg-card overflow-hidden hover:-translate-y-1 hover:shadow-luxury transition-all duration-700"
            >
              <div className="aspect-[16/10] overflow-hidden bg-muted">
                <img src={p.image} alt={p.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4">
                  <span className="text-primary">{p.category}</span>
                  <span className="w-px h-3 bg-border" />
                  <span>{p.date}</span>
                </div>
                <h3 className="font-serif text-2xl mb-3 leading-snug group-hover:text-primary transition-colors">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">{p.excerpt}</p>
                <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-primary">
                  Read article <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-20 text-center text-muted-foreground text-sm italic">
          More stories coming soon.
        </div>
      </div>
    </section>
  </PageShell>
  </>
  );
};

export default Blog;
