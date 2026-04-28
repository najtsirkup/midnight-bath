import { useParams, Link, Navigate } from "react-router-dom";
import { PageShell } from "@/components/site/PageShell";
import { GoldButton } from "@/components/site/GoldButton";
import { blogPostsFull } from "@/lib/blog-content";
import { blogPosts } from "@/lib/site-data";
import { ArrowLeft } from "lucide-react";

const BlogPost = () => {
  const { slug = "" } = useParams();
  const post = blogPostsFull[slug];
  const meta = blogPosts.find((p) => p.slug === slug);

  if (!post || !meta) return <Navigate to="/blog" replace />;

  return (
    <PageShell
      eyebrow={`${post.category} · ${post.date}`}
      title={post.title}
      bannerImage={meta.image}
      bannerAlt={post.title}
    >
      <article className="py-20 md:py-28">
        <div className="container-luxe max-w-3xl">
          <Link to="/blog" className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-primary mb-12 hover:opacity-70">
            <ArrowLeft size={14} /> All articles
          </Link>

          <p className="font-serif text-xl md:text-2xl leading-relaxed text-foreground/90 mb-12">
            {post.intro}
          </p>

          <div className="space-y-7 text-foreground/85 leading-relaxed">
            {post.blocks.map((b, i) => {
              switch (b.type) {
                case "h2":
                  return <h2 key={i} className="font-serif text-3xl md:text-4xl mt-12 mb-2 text-foreground">{b.text}</h2>;
                case "h3":
                  return <h3 key={i} className="font-serif text-xl md:text-2xl mt-8 mb-1 text-foreground">{b.text}</h3>;
                case "p":
                  return <p key={i} className="text-base md:text-lg">{b.text}</p>;
                case "quote":
                  return (
                    <blockquote key={i} className="border-l-2 border-primary pl-6 my-10 font-serif text-xl md:text-2xl italic text-foreground">
                      {b.text}
                    </blockquote>
                  );
                case "list":
                  return (
                    <ul key={i} className="space-y-3 list-none pl-0">
                      {b.items.map((it, j) => (
                        <li key={j} className="flex gap-4 text-base md:text-lg">
                          <span className="text-primary font-serif">·</span>
                          <span>{it}</span>
                        </li>
                      ))}
                    </ul>
                  );
                case "stat":
                  return (
                    <div key={i} className="my-12 border border-border bg-secondary/40 p-8 text-center">
                      <div className="font-serif text-5xl md:text-6xl text-primary mb-3">{b.value}</div>
                      <p className="text-sm md:text-base text-muted-foreground max-w-xl mx-auto">{b.label}</p>
                      {b.source && <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground mt-3">Source: {b.source}</p>}
                    </div>
                  );
              }
            })}
          </div>

          <div className="mt-20 border-t border-border pt-12 text-center">
            <p className="eyebrow mb-4">Bring it home</p>
            <h3 className="font-serif text-3xl md:text-4xl mb-6">Ready for your own quiet luxury bath?</h3>
            <GoldButton to="/tailor-made">Request a tailor-made quote</GoldButton>
          </div>
        </div>
      </article>
    </PageShell>
  );
};

export default BlogPost;
