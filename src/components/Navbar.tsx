"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";

const PhoneIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const LeafIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 20h10" /><path d="M10 20c5.5-2.5 8-8 6-13" /><path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3" /><path d="M14.1 6a7 7 0 0 0-1.5 4c-1.7-.3-2.8-1-3.5-2.1" />
  </svg>
);

const navLinks = [
  { href: "#about", key: "nav_about" },
  { href: "#services", key: "nav_services" },
  { href: "#gallery", key: "nav_gallery" },
  { href: "#areas", key: "nav_areas" },
  { href: "#contact", key: "nav_contact" },
];

export default function Navbar() {
  const { lang, setLang, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMobile = () => {
    setMobileOpen(false);
    document.body.style.overflow = "";
  };

  const toggleMobile = () => {
    setMobileOpen((prev) => {
      document.body.style.overflow = !prev ? "hidden" : "";
      return !prev;
    });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/97 backdrop-blur-sm shadow-md py-2.5"
            : "py-4"
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-5 flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className={`font-heading font-extrabold text-xl flex items-center gap-2 transition-colors duration-300 ${scrolled ? "text-dark" : "text-white"}`}>
            <span className="w-9 h-9 bg-green rounded-lg flex items-center justify-center shrink-0">
              <LeafIcon />
            </span>
            <span>Perdomo&apos;s Landscaping</span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.key}
                href={link.href}
                className={`font-medium text-[0.95rem] relative transition-colors duration-300 after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-green after:transition-all after:duration-300 hover:after:w-full ${
                  scrolled
                    ? "text-dark hover:text-green-dark"
                    : "text-white/90"
                }`}
              >
                {t(link.key)}
              </a>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-4">
            {/* Language Toggle (desktop) */}
            <div className={`hidden md:flex rounded-md overflow-hidden border transition-all duration-300 ${
              scrolled ? "bg-black/5 border-black/15" : "bg-white/15 border-white/30"
            }`}>
              <button
                onClick={() => setLang("en")}
                className={`px-3.5 py-1.5 text-xs font-semibold tracking-wide transition-all duration-300 cursor-pointer ${
                  lang === "en"
                    ? "bg-green text-white rounded-md"
                    : scrolled ? "text-dark" : "text-white/80"
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLang("es")}
                className={`px-3.5 py-1.5 text-xs font-semibold tracking-wide transition-all duration-300 cursor-pointer ${
                  lang === "es"
                    ? "bg-green text-white rounded-md"
                    : scrolled ? "text-dark" : "text-white/80"
                }`}
              >
                ES
              </button>
            </div>

            {/* Phone CTA (desktop) */}
            <a
              href="tel:6789087752"
              className="hidden md:flex items-center gap-1.5 px-5 py-2 bg-green text-white rounded-md font-semibold text-sm transition-all duration-300 hover:bg-green-dark hover:-translate-y-px"
            >
              <PhoneIcon />
              <span>678-908-7752</span>
            </a>

            {/* Hamburger (mobile) */}
            <button
              className="flex md:hidden flex-col gap-[5px] bg-transparent p-1 cursor-pointer"
              onClick={toggleMobile}
              aria-label="Toggle menu"
            >
              <span className={`block w-[26px] h-[2.5px] rounded-sm transition-all duration-300 ${scrolled ? "bg-dark" : "bg-white"} ${mobileOpen ? "rotate-45 translate-x-[5px] translate-y-[5px]" : ""}`} />
              <span className={`block w-[26px] h-[2.5px] rounded-sm transition-all duration-300 ${scrolled ? "bg-dark" : "bg-white"} ${mobileOpen ? "opacity-0" : ""}`} />
              <span className={`block w-[26px] h-[2.5px] rounded-sm transition-all duration-300 ${scrolled ? "bg-dark" : "bg-white"} ${mobileOpen ? "-rotate-45 translate-x-[5px] -translate-y-[5px]" : ""}`} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-white/98 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-7 transition-opacity duration-400 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {navLinks.map((link) => (
          <a
            key={link.key}
            href={link.href}
            onClick={closeMobile}
            className="font-heading text-2xl font-bold text-dark transition-colors duration-300 hover:text-green-dark"
          >
            {t(link.key)}
          </a>
        ))}
        <a
          href="tel:6789087752"
          onClick={closeMobile}
          className="font-heading text-2xl font-bold text-dark transition-colors duration-300 hover:text-green-dark flex items-center gap-2"
        >
          <PhoneIcon /> 678-908-7752
        </a>
        <div className="flex gap-3 mt-2.5">
          <button
            onClick={() => { setLang("en"); closeMobile(); }}
            className={`px-6 py-2 rounded-md font-semibold text-[0.95rem] transition-all duration-300 cursor-pointer ${
              lang === "en" ? "bg-green text-white" : "bg-cream text-dark"
            }`}
          >
            English
          </button>
          <button
            onClick={() => { setLang("es"); closeMobile(); }}
            className={`px-6 py-2 rounded-md font-semibold text-[0.95rem] transition-all duration-300 cursor-pointer ${
              lang === "es" ? "bg-green text-white" : "bg-cream text-dark"
            }`}
          >
            Español
          </button>
        </div>
      </div>
    </>
  );
}
