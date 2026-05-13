"use client";

import { useLanguage } from "@/context/LanguageContext";

const PhoneIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center text-center overflow-hidden" id="hero">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/IMG_1727.PNG')" }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 to-black/70" />

      {/* Content */}
      <div className="relative z-10 max-w-[800px] px-5">
        <div className="inline-block px-5 py-2 bg-green/20 border border-green/40 rounded-md text-green-light text-[0.85rem] font-semibold tracking-widest uppercase mb-5 backdrop-blur-sm">
          {t("hero_badge")}
        </div>
        <h1 className="text-[clamp(2.2rem,6vw,4rem)] font-heading font-extrabold text-white mb-2.5 leading-[1.1]">
          BAM Sprinklers & Landscaping
        </h1>
        <p className="text-[clamp(1.05rem,2.5vw,1.35rem)] text-white/85 mb-9 font-normal">
          {t("hero_tagline")}
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-md font-semibold text-base bg-green text-white transition-all duration-300 hover:bg-green-dark hover:-translate-y-0.5 hover:shadow-lg"
          >
            {t("hero_cta_quote")}
          </a>
          <a
            href="tel:7204358409"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-md font-semibold text-base bg-transparent text-white border-2 border-white transition-all duration-300 hover:bg-white hover:text-green-dark"
          >
            <PhoneIcon /> {t("hero_cta_call")}
          </a>
        </div>
      </div>
    </section>
  );
}
