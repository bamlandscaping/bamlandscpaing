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
    <footer className="bg-bam-dark text-white/85 py-16">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col items-center gap-8 max-md:text-center">
          {/* Logo */}
          <div className="font-heading font-bold text-xl text-white flex items-center gap-3">
            <img src="/logo.jpg" alt="BAM Sprinklers Logo" className="w-10 h-10 rounded-lg object-contain shadow-lg" />
            <span className="tracking-tight">BAM Sprinklers & Landscaping</span>
          </div>

          {/* Links */}
          <div className="flex gap-8 flex-wrap justify-center">
            {navLinks.map((link) => (
              <a
                key={link.key}
                href={link.href}
                className="text-sm font-medium text-white/70 hover:text-white transition-all duration-300 hover:scale-105"
              >
                {t(link.key)}
              </a>
            ))}
          </div>

          {/* Social */}
          <div className="flex gap-4">
            <a
              href="https://www.facebook.com/profile.php?id=61589439458372"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white/80 hover:bg-bam-green hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-bam-green/30"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a
              href="https://www.tiktok.com/@bamsprinklers_?_r=1&_t=ZP-96hSNvVMa2p"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white/80 hover:bg-bam-green hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-bam-green/30"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
              </svg>
            </a>
            <a
              href="https://www.instagram.com/bamsprinklers_landscaping?igsh=Y2xhM3V1M3drODdj&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white/80 hover:bg-bam-green hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-bam-green/30"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
            <a
              href="tel:7204358409"
              aria-label="Call us"
              className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white/80 hover:bg-bam-green hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-bam-green/30"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="text-center mt-12 pt-8 border-t border-white/10 text-sm text-white/60">
          <p>&copy; 2026 BAM Sprinklers & Landscaping. {t("footer_rights")} {t("footer_serving")}</p>
        </div>

        {/* Bottom footer with Stackmode backlink and WhatsApp */}
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col items-center gap-6 max-md:text-center">
          {/* WhatsApp Button */}
          <a
            href="https://wa.me/17204358409?text=Hi%20BAM%20Sprinklers%2C%20I%20have%20a%20question"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Message us on WhatsApp"
            className="w-14 h-14 bg-bam-green rounded-full flex items-center justify-center text-black transition-all duration-300 hover:bg-bam-green-light hover:scale-110 hover:shadow-xl hover:shadow-bam-green/40"
            title="Message us on WhatsApp"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
          </a>

          {/* Subtle Stackmode backlink with schema markup */}
          <div itemScope itemType="https://schema.org/Organization" style={{ display: 'contents' }}>
            <a
              href="https://stackmode.net"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-white/40 text-xs tracking-wide transition-all duration-300 hover:text-white/60 rounded-lg hover:bg-white/5"
              title="Website created by Stackmode Network - Stackmodechris"
              itemProp="url"
            >
              <GlobeIcon />
              <span itemProp="name">This Website Was Created by Stackmodechris - Stackmode Network</span>
            </a>
            <span itemProp="alternateName" style={{ display: 'none' }}>Stackmodechris</span>
            <span itemProp="description" style={{ display: 'none' }}>Professional web design and development by Stackmode Network</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
