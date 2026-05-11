"use client";

import { useLanguage } from "@/context/LanguageContext";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { services, serviceTranslations } from "@/data/services";

export default function Services() {
  const { lang, t } = useLanguage();
  const ref = useScrollAnimation();

  return (
    <section className="bg-cream py-[100px] max-md:py-[70px]" id="services" ref={ref}>
      <div className="max-w-[1200px] mx-auto px-5">
        <h2 className="animate-on-scroll text-[clamp(1.8rem,4vw,2.6rem)] font-heading font-extrabold text-center mb-3 text-dark">
          {t("services_title")}
        </h2>
        <p className="animate-on-scroll text-[1.05rem] text-center text-brown-light max-w-[600px] mx-auto mb-[60px]">
          {t("services_subtitle")}
        </p>
        <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-2 max-md:grid-cols-1">
          {services.map((svc, i) => {
            const st = serviceTranslations[lang];
            const delay = [0, 0.1, 0.2, 0.1, 0.2, 0.3, 0.2, 0.3, 0.4][i];
            return (
              <div
                key={svc.titleKey}
                className="animate-on-scroll bg-white rounded-xl p-9 px-7 text-center transition-all duration-300 shadow-md relative overflow-hidden group hover:-translate-y-1.5 hover:shadow-lg before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-1 before:bg-green before:scale-x-0 before:transition-transform before:duration-300 hover:before:scale-x-100"
                style={{ transitionDelay: `${delay}s` }}
              >
                <div className="w-16 h-16 mx-auto mb-4.5 bg-gradient-to-br from-green/10 to-green-dark/10 rounded-2xl flex items-center justify-center">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-[30px] h-[30px] text-green-dark"
                    dangerouslySetInnerHTML={{ __html: svc.icon }}
                  />
                </div>
                <h3 className="text-[1.1rem] font-bold mb-2.5 text-dark">
                  {st[`${svc.titleKey}_title`]}
                </h3>
                <p className="text-sm text-[#777] leading-relaxed">
                  {st[`${svc.descKey}_desc`]}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
