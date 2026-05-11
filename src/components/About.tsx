"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const CheckIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-green-dark">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

const ClockIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-green-dark">
    <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
  </svg>
);

export default function About() {
  const { t } = useLanguage();
  const ref = useScrollAnimation();

  return (
    <section className="bg-white py-[100px] max-md:py-[70px]" id="about" ref={ref}>
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="grid grid-cols-2 gap-[60px] items-center max-md:grid-cols-1 max-md:gap-[30px]">
          {/* Image */}
          <div className="animate-on-scroll rounded-xl overflow-hidden shadow-lg relative max-md:order-[-1]">
            <Image
              src="/images/IMG_1730.PNG"
              alt="Perdomo's Landscaping truck and crew"
              width={600}
              height={400}
              className="w-full h-full object-cover min-h-[400px] max-md:min-h-[280px]"
            />
            <div className="absolute bottom-5 left-5 bg-green text-white px-5 py-2.5 rounded-lg font-heading font-bold text-sm shadow-md">
              {t("about_badge")}
            </div>
          </div>

          {/* Text */}
          <div className="animate-on-scroll" style={{ transitionDelay: "0.2s" }}>
            <h2 className="text-[clamp(1.8rem,3.5vw,2.4rem)] font-heading font-extrabold text-dark mb-5">
              {t("about_title_1")}
              <span className="text-green-dark">{t("about_title_highlight")}</span>
              {t("about_title_2")}
            </h2>
            <p className="text-[#555] mb-5 text-[1.02rem]">{t("about_p1")}</p>
            <p className="text-[#555] mb-5 text-[1.02rem]">{t("about_p2")}</p>
            <div className="flex flex-col gap-3 mt-7">
              <div className="flex items-center gap-3 text-base font-semibold text-dark">
                <CheckIcon />
                <span>{t("about_hl1")}</span>
              </div>
              <div className="flex items-center gap-3 text-base font-semibold text-dark">
                <ClockIcon />
                <span>{t("about_hl2")}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
