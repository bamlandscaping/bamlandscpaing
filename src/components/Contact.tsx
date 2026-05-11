"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { serviceTranslations } from "@/data/services";

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-green-dark">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-green-dark">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const MapPinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-green-dark">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const CheckCircleIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-14 h-14 text-green-dark">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

const serviceOptions = [
  "svc1_title", "svc2_title", "svc3_title", "svc4_title",
  "svc5_title", "svc6_title", "svc7_title", "svc8_title", "svc9_title",
];

export default function Contact() {
  const { lang, t } = useLanguage();
  const ref = useScrollAnimation();
  const [showSuccess, setShowSuccess] = useState(false);

  const st = serviceTranslations[lang];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = (data.get("name") as string)?.trim();
    const phone = (data.get("phone") as string)?.trim();
    const email = (data.get("email") as string)?.trim();
    const service = data.get("service") as string;
    const message = (data.get("message") as string)?.trim();

    if (!name || !phone || !email || !service) return;

    const subject = encodeURIComponent("New Quote Request — Perdomo's Landscaping");
    const body = encodeURIComponent(
      `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nService: ${service}\nMessage: ${message}`
    );
    window.location.href = `mailto:perdomoslandscapingllc@email.com?subject=${subject}&body=${body}`;

    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      form.reset();
    }, 5000);
  };

  return (
    <section className="bg-cream py-[100px] max-md:py-[70px]" id="contact" ref={ref}>
      <div className="max-w-[1200px] mx-auto px-5">
        <h2 className="animate-on-scroll text-[clamp(1.8rem,4vw,2.6rem)] font-heading font-extrabold text-center mb-3 text-dark">
          {t("contact_title")}
        </h2>
        <p className="animate-on-scroll text-[1.05rem] text-center text-brown-light max-w-[600px] mx-auto mb-[60px]">
          {t("contact_subtitle")}
        </p>

        <div className="grid grid-cols-[1.2fr_0.8fr] gap-[50px] items-start max-md:grid-cols-1">
          {/* Form */}
          <div className="animate-on-scroll bg-white p-10 rounded-xl shadow-md max-md:p-7 max-md:px-5">
            <h3 className="text-2xl font-bold mb-6 text-dark font-heading">{t("form_title")}</h3>

            {!showSuccess ? (
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-4 max-md:grid-cols-1">
                  <div className="mb-4.5">
                    <label htmlFor="name" className="block font-semibold text-[0.88rem] mb-1.5 text-dark">{t("form_name")}</label>
                    <input type="text" id="name" name="name" required placeholder="John Smith" className="w-full px-4 py-3 border-[1.5px] border-[#ddd] rounded-lg text-[0.95rem] transition-all duration-300 bg-white text-dark focus:outline-none focus:border-green focus:shadow-[0_0_0_3px_rgba(76,175,80,0.15)]" />
                  </div>
                  <div className="mb-4.5">
                    <label htmlFor="phone" className="block font-semibold text-[0.88rem] mb-1.5 text-dark">{t("form_phone")}</label>
                    <input type="tel" id="phone" name="phone" required placeholder="(678) 555-1234" className="w-full px-4 py-3 border-[1.5px] border-[#ddd] rounded-lg text-[0.95rem] transition-all duration-300 bg-white text-dark focus:outline-none focus:border-green focus:shadow-[0_0_0_3px_rgba(76,175,80,0.15)]" />
                  </div>
                </div>
                <div className="mb-4.5">
                  <label htmlFor="email" className="block font-semibold text-[0.88rem] mb-1.5 text-dark">{t("form_email")}</label>
                  <input type="email" id="email" name="email" required placeholder="john@example.com" className="w-full px-4 py-3 border-[1.5px] border-[#ddd] rounded-lg text-[0.95rem] transition-all duration-300 bg-white text-dark focus:outline-none focus:border-green focus:shadow-[0_0_0_3px_rgba(76,175,80,0.15)]" />
                </div>
                <div className="mb-4.5">
                  <label htmlFor="service" className="block font-semibold text-[0.88rem] mb-1.5 text-dark">{t("form_service")}</label>
                  <select id="service" name="service" required className="w-full px-4 py-3 border-[1.5px] border-[#ddd] rounded-lg text-[0.95rem] transition-all duration-300 bg-white text-dark focus:outline-none focus:border-green focus:shadow-[0_0_0_3px_rgba(76,175,80,0.15)]">
                    <option value="">{t("form_select_default")}</option>
                    {serviceOptions.map((key) => (
                      <option key={key} value={st[key]}>{st[key]}</option>
                    ))}
                    <option value="Other">{t("form_other")}</option>
                  </select>
                </div>
                <div className="mb-4.5">
                  <label htmlFor="message" className="block font-semibold text-[0.88rem] mb-1.5 text-dark">{t("form_message")}</label>
                  <textarea id="message" name="message" placeholder={t("form_message_placeholder")} className="w-full px-4 py-3 border-[1.5px] border-[#ddd] rounded-lg text-[0.95rem] transition-all duration-300 bg-white text-dark resize-y min-h-[110px] focus:outline-none focus:border-green focus:shadow-[0_0_0_3px_rgba(76,175,80,0.15)]" />
                </div>
                <button
                  type="submit"
                  className="w-full py-3.5 bg-green text-white border-none rounded-md text-base font-bold cursor-pointer transition-all duration-300 font-heading tracking-wide mt-1.5 hover:bg-green-dark hover:-translate-y-0.5 hover:shadow-lg"
                >
                  {t("form_submit")}
                </button>
              </form>
            ) : (
              <div className="text-center py-10 px-5">
                <div className="mb-3 flex justify-center"><CheckCircleIcon /></div>
                <h3 className="text-xl text-green-dark mb-2 font-heading font-bold">{t("form_success_title")}</h3>
                <p className="text-[#777]">{t("form_success_msg")}</p>
              </div>
            )}
          </div>

          {/* Info Cards */}
          <div className="animate-on-scroll flex flex-col gap-6" style={{ transitionDelay: "0.2s" }}>
            {/* Contact Info */}
            <div className="bg-white p-7 rounded-xl shadow-md">
              <h3 className="text-lg font-bold mb-4 text-dark font-heading">{t("info_title")}</h3>
              <div className="flex items-center gap-3.5 py-2.5 border-b border-[#eee]">
                <div className="w-[42px] h-[42px] bg-gradient-to-br from-green/10 to-green-dark/15 rounded-[10px] flex items-center justify-center shrink-0">
                  <PhoneIcon />
                </div>
                <div className="text-[0.95rem]">
                  <strong className="block font-semibold text-dark">{t("info_phone_label")}</strong>
                  <a href="tel:6789087752" className="text-green-dark font-semibold hover:underline">678-908-7752</a>
                </div>
              </div>
              <div className="flex items-center gap-3.5 py-2.5 border-b border-[#eee]">
                <div className="w-[42px] h-[42px] bg-gradient-to-br from-green/10 to-green-dark/15 rounded-[10px] flex items-center justify-center shrink-0">
                  <InstagramIcon />
                </div>
                <div className="text-[0.95rem]">
                  <strong className="block font-semibold text-dark">Instagram</strong>
                  <a href="https://www.instagram.com/perdomosllc/" target="_blank" rel="noopener noreferrer" className="text-green-dark font-semibold hover:underline">@perdomosllc</a>
                </div>
              </div>
              <div className="flex items-center gap-3.5 py-2.5">
                <div className="w-[42px] h-[42px] bg-gradient-to-br from-green/10 to-green-dark/15 rounded-[10px] flex items-center justify-center shrink-0">
                  <MapPinIcon />
                </div>
                <div className="text-[0.95rem]">
                  <strong className="block font-semibold text-dark">{t("info_area_label")}</strong>
                  <span className="text-[#777] text-[0.88rem]">{t("info_area_text")}</span>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-white p-7 rounded-xl shadow-md">
              <h3 className="text-lg font-bold mb-4 text-dark font-heading">{t("hours_title")}</h3>
              <ul>
                <li className="flex justify-between py-2 text-[0.92rem] border-b border-[#eee]">
                  <span>{t("hours_mf")}</span>
                  <span className="font-semibold text-green-dark">7:00 AM – 6:00 PM</span>
                </li>
                <li className="flex justify-between py-2 text-[0.92rem] border-b border-[#eee]">
                  <span>{t("hours_sat")}</span>
                  <span className="font-semibold text-green-dark">8:00 AM – 4:00 PM</span>
                </li>
                <li className="flex justify-between py-2 text-[0.92rem]">
                  <span>{t("hours_sun")}</span>
                  <span className="font-semibold text-green-dark">{t("hours_closed")}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
