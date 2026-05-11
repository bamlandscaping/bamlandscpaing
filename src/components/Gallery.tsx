"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { galleryImages } from "@/data/gallery";

export default function Gallery() {
  const { lang, t } = useLanguage();
  const ref = useScrollAnimation();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentImage(index);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
    document.body.style.overflow = "";
  }, []);

  const navigate = useCallback(
    (dir: number) => {
      setCurrentImage((prev) => (prev + dir + galleryImages.length) % galleryImages.length);
    },
    []
  );

  useEffect(() => {
    if (!lightboxOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") navigate(-1);
      if (e.key === "ArrowRight") navigate(1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxOpen, closeLightbox, navigate]);

  const getCaption = (i: number) =>
    lang === "es" ? galleryImages[i].captionEs : galleryImages[i].captionEn;

  return (
    <>
      <section className="bg-white py-[100px] max-md:py-[70px]" id="gallery" ref={ref}>
        <div className="max-w-[1200px] mx-auto px-5">
          <h2 className="animate-on-scroll text-[clamp(1.8rem,4vw,2.6rem)] font-heading font-extrabold text-center mb-3 text-dark">
            {t("gallery_title")}
          </h2>
          <p className="animate-on-scroll text-[1.05rem] text-center text-brown-light max-w-[600px] mx-auto mb-[60px]">
            {t("gallery_subtitle")}
          </p>
          <div className="grid grid-cols-3 gap-4 max-lg:grid-cols-2 max-md:grid-cols-2 max-sm:grid-cols-1 max-md:gap-2.5">
            {galleryImages.map((img, i) => {
              const delays = [0, 0.1, 0.2, 0.1, 0.2, 0.3, 0.2, 0.3, 0.4];
              return (
                <div
                  key={img.src}
                  className="animate-on-scroll relative rounded-xl overflow-hidden cursor-pointer aspect-[4/3] group"
                  style={{ transitionDelay: `${delays[i]}s` }}
                  onClick={() => openLightbox(i)}
                >
                  <Image
                    src={img.src}
                    alt={getCaption(i)}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.08]"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="text-white font-semibold text-sm">{getCaption(i)}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 bg-black/92 z-[2000] flex items-center justify-center"
          onClick={(e) => { if (e.target === e.currentTarget) closeLightbox(); }}
        >
          <button
            className="absolute top-5 right-6 bg-transparent text-white text-4xl font-light z-[2001] w-12 h-12 flex items-center justify-center rounded-full transition-colors hover:bg-white/15 cursor-pointer"
            onClick={closeLightbox}
            aria-label="Close"
          >
            &times;
          </button>
          <button
            className="absolute top-1/2 left-5 -translate-y-1/2 bg-white/10 text-white w-[50px] h-[50px] rounded-full flex items-center justify-center text-2xl transition-colors hover:bg-white/25 backdrop-blur-sm cursor-pointer"
            onClick={() => navigate(-1)}
            aria-label="Previous"
          >
            &#10094;
          </button>
          <Image
            src={galleryImages[currentImage].src}
            alt={getCaption(currentImage)}
            width={1200}
            height={800}
            className="max-w-[90vw] max-h-[85vh] rounded-lg object-contain"
          />
          <button
            className="absolute top-1/2 right-5 -translate-y-1/2 bg-white/10 text-white w-[50px] h-[50px] rounded-full flex items-center justify-center text-2xl transition-colors hover:bg-white/25 backdrop-blur-sm cursor-pointer"
            onClick={() => navigate(1)}
            aria-label="Next"
          >
            &#10095;
          </button>
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white/80 text-[0.95rem] font-medium text-center bg-black/40 px-5 py-2 rounded-md backdrop-blur-sm">
            {getCaption(currentImage)}
          </div>
        </div>
      )}
    </>
  );
}
