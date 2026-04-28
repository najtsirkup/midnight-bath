import { PageShell } from "@/components/site/PageShell";
import { blogPosts } from "@/lib/site-data";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Blog = () => (
  <PageShell
    eyebrow="Ajakiri"
    title="KHIS Journal"
    subtitle="Lood käsitööst, materjalidest ja lõõgastuse kunstist."
  >
    <section className="py-24">
      <div className="container-luxe">
        {/* Featured */}
        <Link to="#" className="group block mb-20 border border-border/40 overflow-hidden hover:shadow-luxury transition-all duration-700">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="aspect-[4/3] md:aspect-auto overflow-hidden">
              <img src={blogPosts[0].image} alt={blogPosts[0].title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
            </div>
            <div className="p-10 md:p-16 flex flex-col justify-center">
              <p className="eyebrow mb-5">Esiletõstetud</p>
              <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-muted-foreground mb-5">
                <span className="text-primary">{blogPosts[0].category}</span>
                <span className="w-px h-3 bg-border" />
                <span>{blogPosts[0].date}</span>
              </div>
              <h2 className="font-serif text-3xl md:text-4xl mb-5 group-hover:text-primary transition-colors">
                {blogPosts[0].title}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">{blogPosts[0].excerpt}</p>
              <span className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-primary">
                Loe lugu <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </div>
        </Link>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {blogPosts.map((p) => (
            <article key={p.slug} className="group border border-border/40 overflow-hidden hover:-translate-y-1 hover:shadow-luxury transition-all duration-700">
              <div className="aspect-[16/10] overflow-hidden">
                <img src={p.image} alt={p.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4">
                  <span className="text-primary">{p.category}</span>
                  <span className="w-px h-3 bg-border" />
                  <span>{p.date}</span>
                </div>
                <h3 className="font-serif text-2xl mb-3 group-hover:text-primary transition-colors">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">{p.excerpt}</p>
                <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-primary">
                  Loe edasi <ArrowRight size={12} />
                </span>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-20 text-center text-muted-foreground text-sm italic">
          Rohkem lugusid varsti tulekul.
        </div>
      </div>
    </section>
  </PageShell>
);

export default Blog;
