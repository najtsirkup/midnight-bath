import { PageShell } from "@/components/site/PageShell";
import { galleryImages } from "@/lib/site-data";
import gallery3 from "@/assets/gallery-3.jpg";

const Gallery = () => (
  <PageShell
    eyebrow="Gallery"
    title="KHIS in the world"
    subtitle="From private homes in the UK to pilgrimage houses in Estonia — every KHIS bath finds its own room."
    bannerImage={gallery3}
    bannerAlt="KHIS bath on a roof terrace"
  >
    <section className="py-20 md:py-28">
      <div className="container-luxe">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className={`overflow-hidden border border-border group bg-muted ${
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
            </div>
          ))}
        </div>
      </div>
    </section>
  </PageShell>
);

export default Gallery;
