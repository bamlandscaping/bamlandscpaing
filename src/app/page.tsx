"use client";

import { useState, useEffect } from "react";
import Script from "next/script";

const PhoneIcon = () => (
  <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);

const CalendarIcon = () => (
  <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
  </svg>
);

const DropletIcon = () => (
  <svg className="svc-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/>
  </svg>
);

const TreeIcon = () => (
  <svg className="svc-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22v-7"/><path d="M17 8l-5-6-5 6h3v4h4V8z"/><path d="M19 14l-7-4-7 4h4v4h6v-4z"/>
  </svg>
);

const BrickIcon = () => (
  <svg className="svc-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="1" y="4" width="22" height="6" rx="1"/><rect x="1" y="14" width="22" height="6" rx="1"/><line x1="12" y1="4" x2="12" y2="10"/><line x1="7" y1="14" x2="7" y2="20"/><line x1="17" y1="14" x2="17" y2="20"/>
  </svg>
);

const FenceIcon = () => (
  <svg className="svc-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <line x1="4" y1="3" x2="4" y2="21"/><line x1="12" y1="3" x2="12" y2="21"/><line x1="20" y1="3" x2="20" y2="21"/><line x1="2" y1="8" x2="22" y2="8"/><line x1="2" y1="16" x2="22" y2="16"/>
  </svg>
);

const RockIcon = () => (
  <svg className="svc-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 17l3-7 4 2 3-6 4 4 6-3v10H2z"/>
  </svg>
);

const PaverIcon = () => (
  <svg className="svc-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="9" height="9" rx="1"/><rect x="13" y="2" width="9" height="9" rx="1"/><rect x="2" y="13" width="9" height="9" rx="1"/><rect x="13" y="13" width="9" height="9" rx="1"/>
  </svg>
);

const MailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 4l-10 8L2 4"/>
  </svg>
);

const PinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
  </svg>
);

const InstaIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

const FbIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const ClockIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
  </svg>
);

const StarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="#FFC107" stroke="#FFC107" strokeWidth="1">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
);

const HERO_BG = "/images/JOB1.jpg";
const LOGO = "/images/466374738_1092403892489564_859775967574918326_n (1).jpg";

const GALLERY_IMAGES = [
  "/images/0b746d7c580693d493e1eb882b9b98a2d4d3eab6-4.jpeg",
  "/images/0b746d7c580693d493e1eb882b9b98a2d4d3eab6-5.jpeg",
  "/images/0b746d7c580693d493e1eb882b9b98a2d4d3eab6-6.jpeg",
  "/images/0b746d7c580693d493e1eb882b9b98a2d4d3eab6-7.jpeg",
  "/images/0b746d7c580693d493e1eb882b9b98a2d4d3eab6-8.jpeg",
  "/images/0b746d7c580693d493e1eb882b9b98a2d4d3eab6-9.jpeg",
  "/images/166dd2ceb019c976667258222d4bd362e7aaff27-2.jpeg",
  "/images/166dd2ceb019c976667258222d4bd362e7aaff27-4.jpeg",
  "/images/0b746d7c580693d493e1eb882b9b98a2d4d3eab6-10.jpeg",
  "/images/b976ebfd8d409f4ef1506c9eed049c98344f4629-2.jpeg",
  "/images/b976ebfd8d409f4ef1506c9eed049c98344f4629-3.jpeg",
  "/images/b976ebfd8d409f4ef1506c9eed049c98344f4629-1.jpeg",
  "/images/IMG_20110628_175047.jpg",
  "/images/IMG_20110628_175104.jpg",
  "/images/IMG_20110628_175312.jpg",
  "/images/IMG_20110703_115335.jpg",
  "/images/mms_picture_2.jpg",
  "/images/scan0003.jpg",
  "/images/scan0009.jpg",
  "/images/502975771_9914205051948133_6467113427784241552_n.jpg",
  "/images/503145111_9914203758614929_6450708904918730460_n.jpg",
  "/images/503373610_9914205361948102_8167385946438133765_n.jpg",
  "/images/503440019_9914205408614764_4739763722036637524_n.jpg",
  "/images/503481154_9914205358614769_7949723632707157233_n.jpg",
  "/images/502987390_9914205335281438_2691337993362927510_n.jpg",
  "/images/503281854_9914205321948106_7224389482565516111_n.jpg",
  "/images/503396292_9914205341948104_8446198837122339622_n.jpg",
  "/images/503440019_9914205108614794_6791083051713124524_n.jpg",
  "/images/503475282_9914205045281467_8851178001700829849_n.jpg",
  "/images/503527256_9914205065281465_3281435099068839706_n.jpg",
  "/images/503675730_9914203641948274_8218788070501955909_n.jpg",
];

const GALLERY_VISIBLE_INITIAL = 9;

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [galVisible, setGalVisible] = useState(GALLERY_VISIBLE_INITIAL);

  useEffect(() => {
    setMounted(true);
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1 }
    );
    document.querySelectorAll(".fade-in").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      {/* ═══ TOP BAR ═══ */}
      <header className="top-bar">
        <a href="#" className="top-bar-logo">
          <img src={LOGO} alt="BAM Sprinklers & Landscaping" />
          <span>BAM Sprinklers &amp; Landscaping</span>
        </a>
        <div className="top-bar-center">
          <a href="tel:7204358409" className="top-bar-phone">
            <PhoneIcon /> (720) 435-8409
          </a>
        </div>
        <div className="top-bar-actions">
          <a href="tel:7204358409" className="btn-call" id="btn-call-top">
            <PhoneIcon /> Call Now
          </a>
          <a href="#book" className="btn-estimate" id="btn-estimate-top">
            <CalendarIcon /> Free Estimate
          </a>
        </div>
      </header>

      {/* ═══ HERO ═══ */}
      <section className="hero" id="home">
        <img src={HERO_BG} alt="BAM Sprinklers landscaping project Denver" className="hero-bg" fetchPriority="high" />
        <div className="hero-overlay" />
        <div className="hero-inner">
          <div className="hero-badge">BBB Member · 25+ Years Serving Denver</div>
          <h1>Denver&apos;s Trusted <span className="accent">Sprinkler, Landscaping &amp; Xeriscaping</span> Professionals</h1>
          <p>Expert landscaping, sprinkler service, irrigation systems, xeriscaping, mulch, and stone work across the Denver metro area. Ideas that transform your outdoor space.</p>
          <div className="hero-btns">
            <a href="tel:7204358409" className="hero-cta" id="hero-call-1">
              <PhoneIcon /> (720) 435-8409
            </a>
            <a href="tel:7202756691" className="hero-cta hero-cta-alt" id="hero-call-2">
              <PhoneIcon /> (720) 275-6691
            </a>
          </div>
          <div className="hero-hours">
            <ClockIcon /> Open Mon–Fri 8am–4pm (Mountain Time)
          </div>
          <div className="hero-slogan">Ideas That Transform</div>
        </div>
      </section>

      {/* ═══ CALENDLY ═══ */}
      {mounted && (
        <section className="calendly-section" id="book">
          <h2 className="calendly-heading">Book Your Free Estimate</h2>
          <p className="calendly-sub">Pick a time that works — we come out and give you a free quote, no obligation</p>
          <div className="calendly-container">
            <div
              className="calendly-inline-widget"
              data-url="https://calendly.com/bamlandscaping-zohomail/30min"
              style={{ minWidth: "320px", height: "660px" }}
            />
          </div>
          <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="afterInteractive" />
        </section>
      )}

      {/* ═══ SERVICES ═══ */}
      <section className="section" id="services">
        <h2 className="s-title fade-in">Our Services</h2>
        <div className="s-line" />
        <p className="s-sub fade-in">Full-service sprinkler, landscaping &amp; hardscaping solutions for residential &amp; commercial properties in Denver</p>

        <div className="svc-grid">
          <div className="svc-card fade-in">
            <DropletIcon />
            <h3>Sprinkler Systems</h3>
            <p>Complete sprinkler system installation, repair, and seasonal maintenance. Efficient irrigation layouts that keep your lawn green and save water. Includes winterization and spring start-ups.</p>
          </div>
          <div className="svc-card fade-in">
            <DropletIcon />
            <h3>Drip Systems</h3>
            <p>Targeted drip irrigation systems for gardens, flower beds, trees, and shrubs. Save water while delivering precise moisture directly to plant roots for healthier growth.</p>
          </div>
          <div className="svc-card fade-in">
            <RockIcon />
            <h3>Xeriscaping</h3>
            <p>Water-wise xeriscaping designs using native plants, decorative rock, and drought-tolerant landscaping. Beautiful, low-maintenance yards that thrive in Colorado&apos;s climate.</p>
          </div>
          <div className="svc-card fade-in">
            <BrickIcon />
            <h3>Stamped &amp; Regular Concrete</h3>
            <p>Professional stamped and regular concrete work including walkways, patios, driveways, and steps. Durable, beautiful concrete features built to last for decades in Denver&apos;s climate.</p>
          </div>
          <div className="svc-card fade-in">
            <FenceIcon />
            <h3>Wooden Fences</h3>
            <p>Custom wooden fence installation for privacy, security, and curb appeal. Quality lumber, expert craftsmanship, and designs tailored to complement your property.</p>
          </div>
          <div className="svc-card fade-in">
            <BrickIcon />
            <h3>Block Retaining Walls</h3>
            <p>Structural and decorative block retaining walls that prevent erosion, create usable yard space, and add lasting value to your property.</p>
          </div>
          <div className="svc-card fade-in">
            <PaverIcon />
            <h3>Paver Patios, Paths &amp; Side Walls</h3>
            <p>Beautiful paver installations for patios, garden paths, driveways, and side walls. Durable interlocking pavers in a variety of styles and colors to enhance your outdoor living space.</p>
          </div>
          <div className="svc-card fade-in">
            <TreeIcon />
            <h3>Landscape Design</h3>
            <p>Custom landscape design from concept to completion — sod, flower beds, mulch, rock gardens, and full yard makeovers that boost your Denver home&apos;s curb appeal.</p>
          </div>
        </div>
      </section>

      {/* ═══ HOW IT WORKS ═══ */}
      <section className="section-dark" id="process">
        <div className="s-inner">
          <h2 className="s-title s-title-light fade-in">How It Works</h2>
          <div className="s-line" />
          <p className="s-sub s-sub-light fade-in">Getting started is simple — call us today</p>
          <div className="steps">
            <div className="step fade-in">
              <div className="step-num">1</div>
              <h3>Call or Book Online</h3>
              <p>Call (720) 435-8409 or (720) 275-6691, or use the calendar above to schedule your free on-site estimate.</p>
            </div>
            <div className="step fade-in">
              <div className="step-num">2</div>
              <h3>Free On-Site Estimate</h3>
              <p>We visit your property, assess the work, and give you a detailed quote — no hidden fees, no pressure.</p>
            </div>
            <div className="step fade-in">
              <div className="step-num">3</div>
              <h3>We Get to Work</h3>
              <p>Our experienced crew gets started right away. We work efficiently and leave your property clean.</p>
            </div>
            <div className="step fade-in">
              <div className="step-num">4</div>
              <h3>Enjoy the Results</h3>
              <p>Sit back and enjoy your transformed outdoor space. We stand behind our work — Ideas That Transform.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ GALLERY ═══ */}
      <section className="section" id="gallery">
        <h2 className="s-title fade-in">Our Work</h2>
        <div className="s-line" />
        <p className="s-sub fade-in">Real projects across Denver — see what BAM can do for your property</p>

        <div className="gal-grid">
          {GALLERY_IMAGES.slice(0, galVisible).map((src, i) => (
            <div key={i} className="gal-item fade-in">
              <img src={src} alt={`BAM Sprinklers landscaping project Denver ${i + 1}`} loading={i < 6 ? "eager" : "lazy"} />
            </div>
          ))}
        </div>

        {galVisible < GALLERY_IMAGES.length && (
          <div style={{ textAlign: "center", marginTop: "28px" }}>
            <button className="see-more-btn" onClick={() => setGalVisible(GALLERY_IMAGES.length)} id="btn-see-more-gallery">
              See More Photos
            </button>
          </div>
        )}
      </section>

      {/* ═══ REVIEWS + REVIEW IMAGES ═══ */}
      <section className="section-dark" id="reviews">
        <div className="s-inner">
          <h2 className="s-title s-title-light fade-in">What Our Clients Say</h2>
          <div className="s-line" />

          <div className="rev-grid">
            <div className="rev-card fade-in">
              <div className="rev-stars"><StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon /></div>
              <p>&quot;Very friendly owner and hard working crew! Talented!&quot;</p>
              <div className="rev-author">— Kristin Rossiter</div>
            </div>
            <div className="rev-card fade-in">
              <div className="rev-stars"><StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon /></div>
              <p>&quot;Very good service, I love the work they did. Looking forward to doing business with them in the future.&quot;</p>
              <div className="rev-author">— Luis Garfias</div>
            </div>
            <div className="rev-card fade-in">
              <div className="rev-stars"><StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon /></div>
              <p>&quot;BAM Sprinklers transformed our yard completely. Professional, on time, and the results were beyond our expectations!&quot;</p>
              <div className="rev-author">— Denver Homeowner</div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CONTACT INFO (no form) ═══ */}
      <section className="section-alt" id="contact">
        <div className="s-inner">
          <h2 className="s-title fade-in">Get Your Free Quote</h2>
          <div className="s-line" />
          <p className="s-sub fade-in">Call us today — free estimates, no obligation. Serving Denver &amp; surrounding areas.</p>

          <div className="contact-cards">
            <div className="contact-card fade-in">
              <div className="c-detail-icon"><PhoneIcon /></div>
              <div className="c-detail-text">
                <strong>Call or Text</strong><br />
                <a href="tel:7204358409">(720) 435-8409</a><br />
                <a href="tel:7202756691">(720) 275-6691</a>
              </div>
            </div>
            <div className="contact-card fade-in">
              <div className="c-detail-icon"><ClockIcon /></div>
              <div className="c-detail-text">
                <strong>Hours</strong><br />
                Mon – Fri: 8:00 AM – 4:00 PM<br />
                <small>Mountain Time (Denver)</small>
              </div>
            </div>
            <div className="contact-card fade-in">
              <div className="c-detail-icon"><MailIcon /></div>
              <div className="c-detail-text">
                <strong>Email</strong><br />
                <a href="mailto:bamlandscaping@zohomail.com">bamlandscaping@zohomail.com</a>
              </div>
            </div>
            <div className="contact-card fade-in">
              <div className="c-detail-icon"><PinIcon /></div>
              <div className="c-detail-text">
                <strong>Service Area</strong><br />
                Denver, CO &amp; Surrounding Areas<br />
                <small>25+ Years of Local Service</small>
              </div>
            </div>
          </div>

          <div style={{ textAlign: "center", marginTop: "32px" }} className="fade-in">
            <a href="tel:7204358409" className="hero-cta" id="contact-call-cta">
              <PhoneIcon /> Call Now: (720) 435-8409
            </a>
          </div>
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-brand">BAM Sprinklers &amp; Landscaping, Inc</div>
          <div className="footer-slogan">Ideas That Transform</div>
          <p style={{ margin: "8px 0 16px", fontSize: "0.9rem" }}>
            Sprinkler Systems · Drip Systems · Xeriscaping · Stamped &amp; Regular Concrete · Wooden Fences · Block Retaining Walls · Paver Patios, Paths &amp; Side Walls
          </p>
          <p style={{ margin: "0 0 4px", fontSize: "0.9rem" }}>
            <strong style={{ color: "#fff" }}>Open Mon–Fri 8am–4pm Mountain Time</strong>
          </p>
          <div className="footer-phones">
            <a href="tel:7204358409">(720) 435-8409</a>
            <span>&nbsp;·&nbsp;</span>
            <a href="tel:7202756691">(720) 275-6691</a>
          </div>
          <div className="footer-socials">
            <a href="https://www.instagram.com/bamsprinklers/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><InstaIcon /></a>
            <a href="https://www.facebook.com/people/BAM-Sprinklers/100057059760260/" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FbIcon /></a>
            <a href="tel:7204358409" aria-label="Call"><PhoneIcon /></a>
            <a href="mailto:bamlandscaping@zohomail.com" aria-label="Email"><MailIcon /></a>
          </div>
          <p style={{ marginTop: "16px", fontSize: "0.8rem" }}>
            &copy; {new Date().getFullYear()} BAM Sprinklers &amp; Landscaping, Inc. All rights reserved. &bull; Denver, Colorado &bull; BBB Member
          </p>
        </div>
      </footer>
    </>
  );
}
