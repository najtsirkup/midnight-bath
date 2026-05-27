import { useParams, Link, Navigate } from "react-router-dom";
import { PageShell } from "@/components/site/PageShell";
import { GoldButton } from "@/components/site/GoldButton";
import { SEO } from "@/components/site/SEO";
import { blogHtml } from "@/lib/blog-html";
import { blogPosts } from "@/lib/site-data";
import { ArrowLeft } from "lucide-react";

const BlogPost = () => {
  const { slug = "" } = useParams();
  const html = blogHtml[slug];
  const meta = blogPosts.find((p) => p.slug === slug);

  if (!html || !meta) return <Navigate to="/blog" replace />;

  const path = `/blog/${slug}`;
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: meta.title,
    image: `https://khisbath.com${meta.image}`,
    datePublished: meta.date,
    author: { "@type": "Organization", name: "KHIS Bath" },
    publisher: { "@type": "Organization", name: "KHIS Bath", logo: { "@type": "ImageObject", url: "https://khisbath.com/favicon.png" } },
    mainEntityOfPage: `https://khisbath.com${path}`,
  };
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://khisbath.com/" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://khisbath.com/blog" },
      { "@type": "ListItem", position: 3, name: meta.title, item: `https://khisbath.com${path}` },
    ],
  };

  return (
    <>
    <SEO
      title={`${meta.title} | KHIS Bath`.slice(0, 70)}
      description={meta.excerpt.slice(0, 160)}
      path={path}
      type="article"
      jsonLd={[articleSchema, breadcrumb]}
    />
    <PageShell
      eyebrow={`${meta.category} · ${meta.date}`}
      title={meta.title}
      bannerImage={meta.image}
      bannerAlt={meta.title}
    >
      <article className="py-20 md:py-28">
        <div className="container-luxe max-w-3xl">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-primary mb-12 hover:opacity-70"
          >
            <ArrowLeft size={14} /> All articles
          </Link>

          {/* Raw HTML — preserved verbatim */}
          <div className="blog-html" dangerouslySetInnerHTML={{ __html: html }} />

          <div className="mt-20 border-t border-border pt-12 text-center">
            <p className="eyebrow mb-4">Bring it home</p>
            <h3 className="font-serif text-3xl md:text-4xl mb-6">
              Ready for your own quiet luxury bath?
            </h3>
            <GoldButton to="/#contact">Request a tailor-made quote</GoldButton>
          </div>
        </div>
      </article>
    </PageShell>
    </>
  );
};

export default BlogPost;
