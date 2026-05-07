import { useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface Image {
  src: string;
  alt: string;
}

interface Props {
  images: Image[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export const Lightbox = ({ images, index, onClose, onPrev, onNext }: Props) => {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, onPrev, onNext]);

  const img = images[index];
  if (!img) return null;

  return (
    <div
      className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-md flex items-center justify-center animate-fade-up"
      onClick={onClose}
    >
      <button
        onClick={(e) => { e.stopPropagation(); onClose(); }}
        className="absolute top-5 right-5 text-foreground/80 hover:text-primary p-2"
        aria-label="Close"
      >
        <X size={28} />
      </button>

      {images.length > 1 && (
        <>
          <button
            onClick={(e) => { e.stopPropagation(); onPrev(); }}
            className="absolute left-3 md:left-8 top-1/2 -translate-y-1/2 text-foreground/80 hover:text-primary p-3 bg-background/60 border border-border"
            aria-label="Previous"
          >
            <ChevronLeft size={28} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); onNext(); }}
            className="absolute right-3 md:right-8 top-1/2 -translate-y-1/2 text-foreground/80 hover:text-primary p-3 bg-background/60 border border-border"
            aria-label="Next"
          >
            <ChevronRight size={28} />
          </button>
        </>
      )}

      <img
        src={img.src}
        alt={img.alt}
        onClick={(e) => e.stopPropagation()}
        className="max-w-[92vw] max-h-[88vh] object-contain shadow-luxury"
      />
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-xs uppercase tracking-[0.25em] text-muted-foreground">
        {index + 1} / {images.length}
      </div>
    </div>
  );
};
