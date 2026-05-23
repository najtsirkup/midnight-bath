import { useState } from "react";
import { PageShell } from "@/components/site/PageShell";
import { SEO } from "@/components/site/SEO";
import { Lightbox } from "@/components/site/Lightbox";
import { galleryImages } from "@/lib/site-data";
import { useLang } from "@/lib/i18n";
import couchBanner from "@/assets/gallery-couch.jpg";

const Gallery = () => {
  const { t } = useLang();
  const [index, setIndex] = useState<number | null>(null);

  return (
    <>
    <SEO
      title="Gallery — KHIS Bath in Real Interiors"
      description="Browse handcrafted KHIS wooden bathtubs installed in real luxury interiors, hotels and private homes across Europe."
      path="/gallery"
    />
    <PageShell
      eyebrow={t("gallery.eyebrow")}
      title={t("gallery.title")}
      subtitle={t("gallery.subtitle")}
      bannerImage={couchBanner}
      bannerAlt="KHIS bath beside a green velvet sofa"
    >
      <section className="py-20 md:py-28">
        <div className="container-luxe">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((img, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIndex(i)}
                className={`overflow-hidden border border-border group bg-muted cursor-zoom-in ${
                  i % 7 === 0 ? "md:col-span-2 md:row-span-2" : ""
                }`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className={`w-full object-cover transition-transform duration-1000 group-hover:scale-110 ${
                    i % 7 === 0 ? "h-full min-h-[400px] md:min-h-[600px]" : "aspect-square"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {index !== null && (
        <Lightbox
          images={galleryImages}
          index={index}
          onClose={() => setIndex(null)}
          onPrev={() => setIndex((i) => (i! - 1 + galleryImages.length) % galleryImages.length)}
          onNext={() => setIndex((i) => (i! + 1) % galleryImages.length)}
        />
      )}
    </PageShell>
    </>
  );
};

export default Gallery;
