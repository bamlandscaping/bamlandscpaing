"use client";

import { useLanguage } from "@/context/LanguageContext";

const LeafIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline-block align-middle mr-1.5 text-green-light">
    <path d="M7 20h10" /><path d="M10 20c5.5-2.5 8-8 6-13" /><path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3" /><path d="M14.1 6a7 7 0 0 0-1.5 4c-1.7-.3-2.8-1-3.5-2.1" />
  </svg>
);

const GlobeIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    <circle cx="12" cy="12" r="1" fill="currentColor" />
  </svg>
);

const navLinks = [
  { href: "#about", key: "nav_about" },
  { href: "#services", key: "nav_services" },
  { href: "#gallery", key: "nav_gallery" },
  { href: "#contact", key: "nav_contact" },
];

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-dark text-white/70 py-10">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="flex items-center justify-between flex-wrap gap-4 max-md:flex-col max-md:text-center">
          {/* Logo */}
          <div className="font-heading font-bold text-lg text-white flex items-center gap-2">
            <img src="/logo.jpg" alt="BAM Sprinklers Logo" className="w-8 h-8 rounded object-contain" />
            BAM Sprinklers & Landscaping
          </div>

          {/* Links */}
          <div className="flex gap-6 flex-wrap max-md:justify-center">
            {navLinks.map((link) => (
              <a
                key={link.key}
                href={link.href}
                className="text-sm text-white/60 transition-colors duration-300 hover:text-green-light"
              >
                {t(link.key)}
              </a>
            ))}
          </div>

          {/* Social */}
          <div className="flex gap-3">
            <a
              href="https://www.instagram.com/bamsprinklers/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-10 h-10 bg-white/[0.08] rounded-full flex items-center justify-center text-white/70 transition-all duration-300 hover:bg-green hover:text-white"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
            <a
              href="tel:7204358409"
              aria-label="Call us"
              className="w-10 h-10 bg-white/[0.08] rounded-full flex items-center justify-center text-white/70 transition-all duration-300 hover:bg-green hover:text-white"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="text-center mt-6 pt-6 border-t border-white/[0.08] text-[0.85rem]">
          <p>&copy; 2026 BAM Sprinklers & Landscaping. {t("footer_rights")} {t("footer_serving")}</p>
        </div>

        {/* Subtle Stackmode backlink with schema markup */}
        <div className="text-center mt-8 pt-6 border-t border-white/[0.03]">
          <a
            href="https://stackmode.net"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 px-3 py-1.5 text-white/[0.22] text-[0.65rem] tracking-wide transition-all duration-300 hover:text-white/[0.35] rounded-full"
            title="Website created by Stackmode Network"
            itemScope
            itemType="https://schema.org/Organization"
          >
            <GlobeIcon />
            <span itemProp="name">This Website Was Created by Stackmodechris - Stackmode Network</span>
            <meta itemProp="url" content="https://stackmode.net" />
            <meta itemProp="sameAs" content="https://stackmode.net" />
          </a>
        </div>
      </div>
    </footer>
  );
}
