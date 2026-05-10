"use client";

import { useState, useEffect, useRef } from "react";


/* ── SVG Icon Components ── */
const PhoneIcon = () => (
  <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);

const CalendarIcon = () => (
  <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
  </svg>
);

const DropletIcon = () => (
  <svg className="svc-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/>
  </svg>
);

const TreeIcon = () => (
  <svg className="svc-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 22v-7"/><path d="M17 8l-5-6-5 6h3v4h4V8z"/><path d="M19 14l-7-4-7 4h4v4h6v-4z"/>
  </svg>
);

const BrickIcon = () => (
  <svg className="svc-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="1" y="4" width="22" height="6" rx="1"/><rect x="1" y="14" width="22" height="6" rx="1"/><line x1="12" y1="4" x2="12" y2="10"/><line x1="7" y1="14" x2="7" y2="20"/><line x1="17" y1="14" x2="17" y2="20"/>
  </svg>
);

const GrassIcon = () => (
  <svg className="svc-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 22V2"/><path d="M5 22c0-4 2-7 7-10"/><path d="M19 22c0-4-2-7-7-10"/><path d="M3 22c2-6 5-8 9-10"/><path d="M21 22c-2-6-5-8-9-10"/>
  </svg>
);

const RockIcon = () => (
  <svg className="svc-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M2 17l3-7 4 2 3-6 4 4 6-3v10H2z"/><circle cx="8" cy="19" r="2"/><circle cx="16" cy="18" r="3"/>
  </svg>
);

const BroomIcon = () => (
  <svg className="svc-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 2v8"/><path d="M4 14c0-2 3-4 8-4s8 2 8 4"/><path d="M6 14v6c0 1 1 2 2 2h8c1 0 2-1 2-2v-6"/>
  </svg>
);

const MailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 4l-10 8L2 4"/>
  </svg>
);

const ChatBubbleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
  </svg>
);

const AwardIcon = () => (
  <svg className="svc-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="8" r="7"></circle>
    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
  </svg>
);

const PinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
  </svg>
);

const FacebookIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const StarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="#FFC107" stroke="#FFC107" strokeWidth="1" aria-hidden="true">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
);

/* ── Image lists ── */
const CLEAN_IMAGES = [
  "/reviews/502975771_9914205051948133_6467113427784241552_n.jpg",
  "/reviews/503373610_9914205361948102_8167385946438133765_n.jpg",
  "/reviews/503481154_9914205358614769_7949723632707157233_n.jpg",
  "/reviews/503145111_9914203758614929_6450708904918730460_n.jpg",
  "/images/premium_sprinkler.png",
];



const NEW_PICS = [
  "/new-pics/scan0009.jpg",
  "/new-pics/scan0003.jpg",
  "/new-pics/mms_picture_2.jpg",
  "/new-pics/JOB1.jpg",
  "/new-pics/IMG_20110703_115335.jpg",
  "/new-pics/IMG_20110628_175104.jpg",
  "/new-pics/IMG_20110628_175312.jpg",
  "/new-pics/IMG_20110628_175047.jpg"
];

const ALL_IMAGES = Array.from(new Set([
  ...CLEAN_IMAGES, 
  ...NEW_PICS,
  "/reviews/502912142_9914205331948105_7209494311186285293_n.jpg",
  "/reviews/502975771_9914205051948133_6467113427784241552_n.jpg",
  "/reviews/502983254_9914205068614798_5317114158553864017_n.jpg",
  "/reviews/502987390_9914205335281438_2691337993362927510_n.jpg",
  "/reviews/503145111_9914203758614929_6450708904918730460_n.jpg",
  "/reviews/503148888_9914205355281436_60515337246255763_n.jpg",
  "/reviews/503177181_9914205351948103_8781663202471035506_n.jpg",
  "/reviews/503281854_9914205321948106_7224389482565516111_n.jpg",
  "/reviews/503290996_9914205315281440_3157806799667862899_n.jpg",
  "/reviews/503373610_9914205361948102_8167385946438133765_n.jpg",
  "/reviews/503375538_9914205338614771_4185217370178791656_n.jpg",
  "/reviews/503382867_9914205318614773_7952993660806714478_n.jpg",
  "/reviews/503396292_9914205341948104_8446198837122339622_n.jpg",
  "/reviews/503440019_9914205108614794_6791083051713124524_n.jpg",
  "/reviews/503440019_9914205408614764_4739763722036637524_n.jpg",
  "/reviews/503475282_9914205045281467_8851178001700829849_n.jpg",
  "/reviews/503481154_9914205358614769_7949723632707157233_n.jpg",
  "/reviews/503490338_9914205295281442_6821182851139914093_n (1).jpg",
  "/reviews/503521449_9914205055281466_4228955493661922322_n.jpg",
  "/reviews/503527256_9914205065281465_3281435099068839706_n.jpg",
  "/reviews/503571622_9914205308614774_7340938070990505608_n.jpg",
  "/reviews/503626878_9914205311948107_7186393614696423640_n.jpg",
  "/reviews/503653575_9914205345281437_1892934531992952688_n.jpg",
  "/reviews/503675730_9914203641948274_8218788070501955909_n.jpg",
  "/reviews/503726088_9914205281948110_1498331553118040761_n.jpg",
  "/reviews/503844469_9914205328614772_1178548233980727600_n.jpg"
]));

const LOGO = "/images/466374738_1092403892489564_859775967574918326_n (1).jpg";

const MORE_PICS = [
  "/af994bb5a5fbf522ba02ec4d2272be7983f35458-1.jpeg",
  "/af994bb5a5fbf522ba02ec4d2272be7983f35458-2.jpeg",
  "/af994bb5a5fbf522ba02ec4d2272be7983f35458-4.jpeg",
  "/af994bb5a5fbf522ba02ec4d2272be7983f35458-3.jpeg",
  "/af994bb5a5fbf522ba02ec4d2272be7983f35458-5.jpeg",
  "/af994bb5a5fbf522ba02ec4d2272be7983f35458-6.jpeg",
  "/af994bb5a5fbf522ba02ec4d2272be7983f35458-8.jpeg",
  "/af994bb5a5fbf522ba02ec4d2272be7983f35458-7.jpeg",
  "/af994bb5a5fbf522ba02ec4d2272be7983f35458-10.jpeg",
  "/af994bb5a5fbf522ba02ec4d2272be7983f35458-9.jpeg",
];

function ExpandableGallery() {
  const [showMorePics, setShowMorePics] = useState(false);

  return (
    <>
      <div className="gal-grid">
        {ALL_IMAGES.map((src, i) => (
          <div key={`img-${i}`} className={`gal-item fade-in ${showMorePics ? 'visible' : ''}`}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={src} alt={`Our Work Project ${i + 1} by BAM Sprinklers`} loading="lazy" decoding="async" />
          </div>
        ))}
        {showMorePics && MORE_PICS.map((src, i) => (
          <div 
            key={`more-img-${i}`} 
            className="gal-item" 
            style={{ animation: 'fadeIn 0.6s ease-out forwards' }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={src} alt={`Our Work Additional Project ${i + 1} by BAM Sprinklers`} loading="lazy" decoding="async" />
          </div>
        ))}
      </div>

      {!showMorePics && (
        <div style={{ textAlign: "center", marginTop: "40px" }}>
          <button 
            onClick={() => setShowMorePics(true)} 
            style={{ 
              backgroundColor: '#2563eb', 
              color: 'white', 
              padding: '14px 32px', 
              borderRadius: '50px', 
              fontSize: '1.1rem', 
              fontWeight: 'bold', 
              border: 'none', 
              cursor: 'pointer',
              boxShadow: '0 4px 15px rgba(37,99,235,0.3)',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            See More Pictures
          </button>
        </div>
      )}
    </>
  );
}

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  useEffect(() => {
    // Intersection Observer for fade-in animations
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { 
        if (e.isIntersecting) e.target.classList.add("visible"); 
      }),
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" } // Slightly before viewport
    );
    
    // Fallback for older browsers
    if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      document.querySelectorAll(".fade-in").forEach((el) => obs.observe(el));
    } else {
       document.querySelectorAll(".fade-in").forEach((el) => el.classList.add("visible"));
    }

    // Load Calendly Script
    const head = document.querySelector("head");
    if (head && !document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]')) {
      const script = document.createElement("script");
      script.setAttribute("src", "https://assets.calendly.com/assets/external/widget.js");
      script.setAttribute("async", "true");
      head.appendChild(script);
    }
    
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      
      {/* ═══ TOP BAR ═══ */}
      <header className="top-bar" role="banner">
        <a href="#home" className="top-bar-logo" aria-label="BAM Sprinklers & Landscaping Home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={LOGO} alt="BAM Sprinklers Logo" width={48} height={48} />
          <span>BAM Sprinklers &amp; Landscaping</span>
        </a>
        <nav className="top-bar-actions" aria-label="Quick Actions">
          <a href="tel:7204358409" className="btn-call" id="btn-call-top" aria-label="Call (720) 435-8409">
            <PhoneIcon /> <span className="hide-mobile">Call Now</span>
          </a>
          <a href="https://calendly.com/bamlandscaping-zohomail/30min?timezone=America/Denver" target="_blank" rel="noopener noreferrer" className="btn-estimate" id="btn-estimate-top">
            <CalendarIcon /> Free Estimate
          </a>
        </nav>
      </header>

      <main id="main-content">
        {/* ═══ HERO SECTION ═══ */}
        <section className="hero" id="home">
          <div className="hero-inner fade-in">
            <div className="hero-logo-showcase">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={LOGO} alt="BAM Sprinklers & Landscaping Logo" />
            </div>
            <h1>Denver&apos;s Trusted <span className="accent">Sprinkler &amp; Landscaping</span> Professionals</h1>
            
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '15px', backgroundColor: 'rgba(255, 255, 255, 0.12)', padding: '12px 24px', borderRadius: '50px', border: '1px solid rgba(255, 255, 255, 0.25)', margin: '10px 0 25px 0', backdropFilter: 'blur(10px)', boxShadow: '0 4px 20px rgba(0,0,0,0.2)' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/bbb-logo.png" alt="BBB Accredited Business" style={{ height: "45px", width: "auto", backgroundColor: "white", borderRadius: "6px", padding: "4px" }} />
              <div style={{ textAlign: 'left', lineHeight: '1.2' }}>
                <div style={{ fontWeight: '800', fontSize: '1.1rem', color: '#fff', textTransform: 'uppercase', letterSpacing: '0.5px' }}>BBB Accredited</div>
                <div style={{ fontSize: '0.95rem', color: '#fbbf24', fontWeight: '600' }}>Over 25 Years of Excellence</div>
              </div>
            </div>

            <p>Expert landscaping, sprinkler service, irrigation systems, mulch, and stone work across the Denver metro area.</p>
            
            <div className="hero-actions">
              <a href="tel:7204358409" className="hero-cta">
                <PhoneIcon /> Call: (720) 435-8409
              </a>
              <a href="sms:7204358409" className="hero-cta" style={{ background: '#16a34a' }}>
                <ChatBubbleIcon /> Text Us
              </a>
              <a href="https://calendly.com/bamlandscaping-zohomail/30min?timezone=America/Denver" target="_blank" rel="noopener noreferrer" className="hero-cta hero-cta-book">
                <CalendarIcon /> Book Your Estimate
              </a>
            </div>
          </div>
        </section>

        {/* ═══ CALENDLY SECTION ═══ */}
        <section className="calendly-section" id="book">
          <div className="calendly-header">
            <h2 className="calendly-heading">Book Your Free Estimate</h2>
            <p className="calendly-sub">Choose a time that works for you, and we&apos;ll come out to assess your project.</p>
          </div>
          <div className="calendly-container fade-in">
            <div
              className="calendly-inline-widget"
              data-url="https://calendly.com/bamlandscaping-zohomail/30min?timezone=America/Denver"
              style={{ minWidth: "320px", height: "660px" }}
            />
          </div>
        </section>

        {/* ═══ SERVICES ═══ */}
        <section className="section" id="services" aria-labelledby="services-heading">
          <div className="text-center">
            <h2 id="services-heading" className="s-title fade-in" style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)", textTransform: 'uppercase' }}>Does Your Home or Business Need a Garden or Sprinkler System?</h2>
            <div className="s-line fade-in" />
            <p className="s-sub fade-in" style={{ maxWidth: '800px', fontSize: '1.2rem', fontWeight: 600, color: '#334155' }}>
              BAM SPRINKLERS IS A LOCAL COMPANY WITH MORE THAN 25 YEARS SERVICE OF DENVER AND ITS SURROUNDINGS OFFERING OUR SERVICES. BAM SPRINKLERS IS A BBB MEMBER THAT EVALUATES OUR QUALITY. CALL NOW TO REQUEST A COMPLETELY FREE ESTIMATE 720-275-6691 OR 720-435-8409.
            </p>
          </div>

          <div className="svc-grid">
            <article className="svc-card fade-in">
              <DropletIcon />
              <h3>Sprinkler System</h3>
              <p>Complete sprinkler system installation for new and existing yards. We design water-efficient irrigation layouts tailored to Denver&apos;s unique climate.</p>
            </article>
            <article className="svc-card fade-in">
              <DropletIcon />
              <h3>Drip System</h3>
              <p>Targeted drip irrigation systems to efficiently water your plants, trees, and shrubs while conserving water.</p>
            </article>
            <article className="svc-card fade-in">
              <TreeIcon />
              <h3>Xeriscaping (Ceroscape)</h3>
              <p>Water-wise landscaping solutions including native plants, mulch, and rock beds to create a beautiful, low-maintenance garden.</p>
            </article>
            <article className="svc-card fade-in">
              <BrickIcon />
              <h3>Stamped &amp; Regular Concrete</h3>
              <p>Professional concrete work for driveways, patios, walkways, and steps. Durable, beautiful features built to withstand Colorado winters.</p>
            </article>
            <article className="svc-card fade-in">
              <GrassIcon />
              <h3>Wooden Fences</h3>
              <p>High-quality wooden fence installation and repair for privacy, security, and enhanced curb appeal for your property.</p>
            </article>
            <article className="svc-card fade-in">
              <BrickIcon />
              <h3>Block Retaining Walls</h3>
              <p>Structural and decorative block retaining walls to manage soil erosion and create dynamic multi-level landscapes.</p>
            </article>
            <article className="svc-card fade-in">
              <RockIcon />
              <h3>Paver Patio, Paths &amp; Side Walls</h3>
              <p>Custom paver installation for stunning outdoor living spaces, decorative pathways, and elegant side walls.</p>
            </article>
            <article className="svc-card fade-in">
              <BroomIcon />
              <h3>Sprinkler Repair</h3>
              <p>Expert sprinkler repair services including head replacement, leak detection, valve repair, and system troubleshooting.</p>
            </article>
            <article className="svc-card fade-in">
              <AwardIcon />
              <h3>Quality Service for 25+ Years</h3>
              <p>Providing expert landscaping and sprinkler solutions for over two decades. A trusted local BBB member bringing you the best in Denver.</p>
            </article>
          </div>
        </section>

        {/* ═══ HOW IT WORKS ═══ */}
        <section className="section-dark" id="process" aria-labelledby="process-heading">
          <div className="s-inner">
            <div className="text-center">
              <h2 id="process-heading" className="s-title s-title-light fade-in">How Our Process Works</h2>
              <div className="s-line fade-in" />
              <p className="s-sub s-sub-light fade-in">Getting started with your landscaping project is simple.</p>
            </div>

            <div className="steps">
              <div className="step fade-in">
                <div className="step-num">1</div>
                <h3>Call or Book Online</h3>
                <p>Call us at (720) 435-8409 or use the calendar above to schedule your free on-site estimate.</p>
              </div>
              <div className="step fade-in">
                <div className="step-num">2</div>
                <h3>Free On-Site Estimate</h3>
                <p>We visit your property, assess the work, and provide a detailed quote — no hidden fees.</p>
              </div>
              <div className="step fade-in">
                <div className="step-num">3</div>
                <h3>We Get to Work</h3>
                <p>Our experienced Denver crew gets started right away, working efficiently and cleanly.</p>
              </div>
              <div className="step fade-in">
                <div className="step-num">4</div>
                <h3>Enjoy the Results</h3>
                <p>Sit back and enjoy your transformed outdoor space. We guarantee your satisfaction.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ GALLERY (OUR WORK) ═══ */}
        <section className="section bg-light" id="gallery" aria-labelledby="gallery-heading">
          <div className="text-center">
            <h2 id="gallery-heading" className="s-title fade-in">Our Work</h2>
            <div className="s-line fade-in" />
            <p className="s-sub fade-in">Real projects, real results — see the quality BAM brings to every property.</p>
          </div>

          <div className="gal-video fade-in" style={{ marginBottom: "60px", textAlign: "center" }}>
            <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px", border: "4px solid #1e293b", borderRadius: "24px", backgroundColor: "#fff", boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}>
              <h3 style={{ fontSize: "1.8rem", color: "#0f172a", marginBottom: "10px", fontWeight: "bold" }}>See Our Premium Denver Sprinkler &amp; Landscaping Services</h3>
              <p style={{ fontSize: "1.1rem", color: "#475569", marginBottom: "20px" }}>Watch our experienced team in action! We deliver top-tier sprinkler installation, hardscaping, concrete work, and lawn care across the Denver Metro area.</p>
              
              <div style={{ position: "relative", borderRadius: "12px", overflow: "hidden", border: "2px solid #e2e8f0" }}>
                <video ref={videoRef} width="100%" controls playsInline preload="metadata" style={{ display: "block", backgroundColor: "#000" }} onPlay={() => setIsPlaying(true)} onPause={() => setIsPlaying(false)}>
                  <source src="/new-pics/VID-20260418-WA0027.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                
                {!isPlaying && (
                  <div 
                    onClick={handlePlay}
                    style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.3)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", transition: "all 0.3s ease" }}
                    aria-label="Play video"
                  >
                    <div style={{ width: "80px", height: "80px", backgroundColor: "#2563eb", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 15px rgba(37,99,235,0.4)" }}>
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: "5px" }}>
                        <polygon points="5 3 19 12 5 21 5 3"></polygon>
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <ExpandableGallery />

          <div style={{ textAlign: "center", marginTop: "40px" }}>
            <a href="https://www.facebook.com/p/BAM-Sprinklers-100064053580943/" target="_blank" rel="noopener noreferrer" className="fb-btn" aria-label="Follow BAM Sprinklers on Facebook" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#1565C0', fontWeight: 'bold' }}>
              <FacebookIcon /> View Our Portfolio on Facebook
            </a>
          </div>
        </section>

        {/* ═══ REVIEWS ═══ */}
        <section className="section-dark" id="reviews" aria-labelledby="reviews-heading">
          <div className="s-inner">
            <div className="text-center">
              <h2 id="reviews-heading" className="s-title s-title-light fade-in">Trusted by Colorado Homeowners</h2>
              <div className="s-line fade-in" />
              <p className="s-sub s-sub-light fade-in">See what our satisfied clients have to say about our work!</p>
            </div>

            <div className="rev-grid">
              {[
                {
                  text: "very good service i love the work they did looking forward to doing business with them in the future",
                  author: "Luis Garfias"
                },
                {
                  text: "Very friendly owner and hard working crew! Talented !",
                  author: "Kristin Rossiter"
                }
              ].map((rev, i) => (
                <blockquote key={i} className="rev-card fade-in" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <div className="rev-stars" aria-label="5 out of 5 stars" style={{ display: 'flex', flexDirection: 'row', flexWrap: 'nowrap' }}>
                      <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon />
                    </div>
                    <p>&quot;{rev.text}&quot;</p>
                  </div>
                  <footer className="rev-author" style={{ marginTop: '1rem' }}>
                    <div style={{ marginBottom: '8px', color: 'rgba(255, 255, 255, 0.9)' }}>{rev.author}</div>
                  </footer>
                </blockquote>
              ))}
            </div>

          </div>
        </section>

        {/* ═══ FAQ SECTION (FOR SEO SCHEMA) ═══ */}
        <section className="section bg-light" id="faq" aria-labelledby="faq-heading">
           <div className="text-center">
            <h2 id="faq-heading" className="s-title fade-in">Frequently Asked Questions</h2>
            <div className="s-line fade-in" />
          </div>
          <div className="faq-grid fade-in">
            <div className="faq-item">
              <h3>How much does sprinkler installation cost in Denver?</h3>
              <p>Sprinkler installation costs in Denver vary based on yard size, number of zones, and system complexity. BAM Sprinklers offers free on-site estimates — call (720) 435-8409 for a custom quote tailored to your property.</p>
            </div>
            <div className="faq-item">
              <h3>What landscaping services do you offer?</h3>
              <p>We provide comprehensive landscaping services including landscape design, sod installation, hardscaping &amp; concrete work, mulch &amp; stone installation, sprinkler system installation &amp; repair, and seasonal cleanups throughout the Denver metro area.</p>
            </div>
            <div className="faq-item">
              <h3>Do you offer sprinkler winterization?</h3>
              <p>Yes, BAM Sprinklers offers full sprinkler winterization (blowout) services to protect your irrigation system from freezing and cracking during Denver&apos;s harsh winters. We highly recommend booking this service early in the fall.</p>
            </div>
            <div className="faq-item">
              <h3>What areas do you serve?</h3>
              <p>We proudly serve the entire Denver metro area, including Denver, Arvada, Aurora, Lakewood, Littleton, Westminster, Thornton, Broomfield, Highlands Ranch, and Centennial.</p>
            </div>
          </div>
        </section>

        {/* ═══ SERVICE AREA MAP ═══ */}
        <section className="map-section" id="service-area" aria-labelledby="map-heading">
          <div className="s-inner">
            <div className="text-center">
              <h2 id="map-heading" className="s-title fade-in">Our Service Area</h2>
              <div className="s-line fade-in" />
              <p className="s-sub fade-in" style={{ fontSize: '1.2rem', fontWeight: 600 }}>We proudly serve a 60-mile radius around Denver.</p>
            </div>
            <div className="map-cities fade-in">
              {["Denver", "Arvada", "Aurora", "Lakewood", "Littleton", "Westminster", "Thornton", "Broomfield", "Highlands Ranch", "Centennial", "Commerce City", "Englewood"].map(city => (
                <span key={city} className="map-city-tag">{city}</span>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ CONTACT US ═══ */}
        <section className="section-alt" id="contact" aria-labelledby="contact-heading">
          <div className="s-inner">
            <div className="text-center">
              <h2 id="contact-heading" className="s-title fade-in">Contact Us</h2>
              <div className="s-line fade-in" />
              <p className="s-sub fade-in">Get in touch with us today for your free estimate.</p>
            </div>

            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              <address className="contact-info fade-in" style={{ fontStyle: 'normal' }}>
                <h3>Let&apos;s Talk About Your Project</h3>
                <p>Whether you need a new sprinkler system, a full landscape makeover, concrete work, mulch, stone, or regular lawn maintenance — we&apos;re here to help. Serving the greater Denver metro area with quality work and honest pricing.</p>

                <div className="c-detail">
                  <div className="c-detail-icon"><PhoneIcon /></div>
                  <div className="c-detail-text">
                    <a href="tel:7204358409">(720) 435-8409</a><br />
                    <a href="tel:7202756691">(720) 275-6691</a><br />
                    <small>Call or Text Anytime</small>
                  </div>
                </div>

                <div className="c-detail">
                  <div className="c-detail-icon"><MailIcon /></div>
                  <div className="c-detail-text">
                    <a href="mailto:bamsprinkers@yahoo.com">bamsprinkers@yahoo.com</a>
                  </div>
                </div>

                <div className="c-detail">
                  <div className="c-detail-icon"><PinIcon /></div>
                  <div className="c-detail-text">Serving Denver, CO &amp; Surrounding Areas</div>
                </div>

                <div className="c-detail">
                  <div className="c-detail-icon"><FacebookIcon /></div>
                  <div className="c-detail-text">
                    <a href="https://www.facebook.com/p/BAM-Sprinklers-100064053580943/" target="_blank" rel="noopener noreferrer">BAM Sprinklers</a>
                  </div>
                </div>
              </address>
            </div>
          </div>
        </section>
      </main>

      {/* ═══ FOOTER ═══ */}
      <footer className="footer" role="contentinfo">
        <div className="footer-inner">
          <div className="footer-brand" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '15px', flexWrap: 'wrap' }}>
            BAM Sprinklers &amp; Landscaping, Inc
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/bbb-logo.png" alt="BBB Accredited Business" style={{ height: "48px", width: "auto", backgroundColor: "white", borderRadius: "4px", padding: "4px" }} />
          </div>
          <p>Quality Work. Dependable Service. Beautiful Results.</p>
          
          <div className="footer-contact" style={{ margin: "20px 0", lineHeight: "1.8" }}>
            <strong>Martin Aguilar</strong>, General Manager<br />
            4861 Tejon St.<br />
            Denver, CO 80221<br />
            Email: <a href="mailto:bamsprinklers@yahoo.com" style={{ color: "#fff", textDecoration: "underline" }}>bamsprinklers@yahoo.com</a><br />
            Website: <a href="https://www.Bamsprinklers.com" style={{ color: "#fff", textDecoration: "underline" }}>www.Bamsprinklers.com</a>
          </div>

          <div className="footer-socials">
            <a href="https://www.facebook.com/p/BAM-Sprinklers-100064053580943/" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Facebook"><FacebookIcon /></a>
            <a href="tel:7204358409" aria-label="Call us"><PhoneIcon /></a>
            <a href="mailto:bamsprinklers@yahoo.com" aria-label="Email us"><MailIcon /></a>
          </div>

          <p className="footer-legal">
            &copy; {new Date().getFullYear()} BAM Sprinklers &amp; Landscaping, Inc. All rights reserved.<br />
            Denver, Colorado &bull; <a href="tel:7204358409">(720) 435-8409</a> / <a href="tel:7202756691">(720) 275-6691</a><br />
          </p>

          <div style={{ marginTop: "20px", fontSize: "0.85rem", opacity: 0.8, display: "flex", gap: "15px", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="/privacy" style={{ color: "#fff", textDecoration: "underline" }}>Privacy Policy</a>
            <a href="/terms" style={{ color: "#fff", textDecoration: "underline" }}>Terms &amp; Conditions</a>
            <a href="/cookies" style={{ color: "#fff", textDecoration: "underline" }}>Cookies Policy</a>
          </div>
        </div>
      </footer>
    </>
  );
}
