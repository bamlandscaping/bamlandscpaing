"use client";

import { useLanguage } from "@/context/LanguageContext";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { serviceAreas } from "@/data/areas";

const PinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 text-green-light">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

export default function ServiceAreas() {
  const { t } = useLanguage();
  const ref = useScrollAnimation();

  const delays = [0, 0.1, 0.2, 0.3, 0.1, 0.2, 0.3, 0.4];

  return (
    <section className="bg-green-dark text-white py-[100px] max-md:py-[70px] relative overflow-hidden" id="areas" ref={ref}>
      {/* Background decoration */}
      <div className="absolute -top-1/2 -right-[20%] w-[60%] h-[200%] bg-white/[0.03] rounded-full" />

      <div className="max-w-[1200px] mx-auto px-5">
        <h2 className="animate-on-scroll text-[clamp(1.8rem,4vw,2.6rem)] font-heading font-extrabold text-center mb-3 text-white">
          {t("areas_title")}
        </h2>
        <p className="animate-on-scroll text-[1.05rem] text-center text-white/70 max-w-[600px] mx-auto mb-[60px]">
          {t("areas_subtitle")}
        </p>
        <div className="grid grid-cols-4 gap-5 relative z-10 max-lg:grid-cols-2 max-sm:grid-cols-1 max-lg:gap-3">
          {serviceAreas.map((area, i) => (
            <div
              key={area}
              className="animate-on-scroll bg-white/[0.08] border border-white/[0.12] rounded-xl p-6 text-center transition-all duration-300 backdrop-blur-sm hover:bg-white/15 hover:-translate-y-1"
              style={{ transitionDelay: `${delays[i]}s` }}
            >
              <div className="mb-2 flex justify-center">
                <PinIcon />
              </div>
              <h3 className="text-base font-semibold">{area}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
