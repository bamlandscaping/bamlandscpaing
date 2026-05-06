"use client";

import { useState, useEffect, FormEvent } from "react";

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
  "/images/b976ebfd8d409f4ef1506c9eed049c98344f4629-4.jpeg",
  "/reviews/502975771_9914205051948133_6467113427784241552_n.jpg",
  "/images/166dd2ceb019c976667258222d4bd362e7aaff27-2.jpeg",
  "/reviews/503373610_9914205361948102_8167385946438133765_n.jpg",
  "/images/0b746d7c580693d493e1eb882b9b98a2d4d3eab6-10.jpeg",
  "/reviews/503481154_9914205358614769_7949723632707157233_n.jpg",
  "/images/166dd2ceb019c976667258222d4bd362e7aaff27-7.jpeg",
  "/reviews/503145111_9914203758614929_6450708904918730460_n.jpg",
  "/images/premium_sprinkler.png",
];

const CROP_IMAGES = [
  "/images/b976ebfd8d409f4ef1506c9eed049c98344f4629-2.jpeg",
  "/images/166dd2ceb019c976667258222d4bd362e7aaff27-10.jpeg",
  "/images/b976ebfd8d409f4ef1506c9eed049c98344f4629-1.jpeg",
];

const LOGO = "/images/466374738_1092403892489564_859775967574918326_n (1).jpg";

export default function Home() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

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
    
    return () => obs.disconnect();
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setError("");
    
    try {
      const fd = new FormData(e.currentTarget);
      const name = fd.get("name") as string;
      const phone = fd.get("phone") as string;
      const email = fd.get("email") as string;
      const service = fd.get("service") as string;
      const message = fd.get("message") as string;
      
      // Basic validation
      if (!name || !phone || !service || !message) {
        throw new Error("Please fill in all required fields.");
      }

      const subject = encodeURIComponent(`New Inquiry from ${name} — BAM Sprinklers`);
      const body = encodeURIComponent(`Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nService: ${service}\n\nMessage:\n${message}`);
      
      window.location.href = `mailto:bamsprinkers@yahoo.com?subject=${subject}&body=${body}`;
      
      // Assume success after opening mailto
      setTimeout(() => { 
        setSending(false); 
        setSubmitted(true); 
        (e.target as HTMLFormElement).reset(); 
      }, 1000);
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : "An error occurred. Please try again or call us directly.";
      setError(errorMessage);
      setSending(false);
    }
  };

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
          <a href="https://calendly.com/bamlandscaping-zohomail/30min" target="_blank" rel="noopener noreferrer" className="btn-estimate" id="btn-estimate-top">
            <CalendarIcon /> Free Estimate
          </a>
        </nav>
      </header>

      <main id="main-content">
        {/* ═══ HERO SECTION ═══ */}
        <section className="hero" id="home">
          <div style={{ position: 'absolute', inset: 0, opacity: 0.05, pointerEvents: 'none', display: 'flex', flexWrap: 'wrap', overflow: 'hidden', justifyContent: 'space-around', alignContent: 'space-around' }}>
            {Array.from({ length: 40 }).map((_, i) => (
              <div key={i} style={{ padding: '30px', color: '#fff', transform: `rotate(${i * 15}deg)` }}>
                {i % 2 === 0 ? <DropletIcon /> : <GrassIcon />}
              </div>
            ))}
          </div>
          <div className="hero-inner fade-in">
            <h1>Denver&apos;s Trusted <span className="accent">Sprinkler &amp; Landscaping</span> Professionals</h1>
            <p>Expert landscaping, sprinkler service, irrigation systems, mulch, and stone work across the Denver metro area.</p>
            
            <div className="hero-actions">
              <a href="tel:7204358409" className="hero-cta">
                <PhoneIcon /> Call: (720) 435-8409
              </a>
              <a href="https://calendly.com/bamlandscaping-zohomail/30min" target="_blank" rel="noopener noreferrer" className="hero-cta hero-cta-outline">
                <CalendarIcon /> Book Estimate
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
              data-url="https://calendly.com/bamlandscaping-zohomail/30min"
              style={{ minWidth: "320px", height: "660px" }}
            />
          </div>
        </section>

        {/* ═══ SERVICES ═══ */}
        <section className="section" id="services" aria-labelledby="services-heading">
          <div className="text-center">
            <h2 id="services-heading" className="s-title fade-in">Denver Landscaping &amp; Sprinkler Services</h2>
            <div className="s-line fade-in" />
            <p className="s-sub fade-in">Full-service, professional solutions for residential &amp; commercial properties in Colorado.</p>
          </div>

          <div className="svc-grid">
            <article className="svc-card fade-in">
              <DropletIcon />
              <h3>Sprinkler Installation</h3>
              <p>Complete sprinkler system installation for new and existing yards. We design water-efficient irrigation layouts tailored to Denver&apos;s unique climate.</p>
            </article>
            <article className="svc-card fade-in">
              <TreeIcon />
              <h3>Landscape Design</h3>
              <p>Custom landscape design from concept to completion. Flower beds, tree and shrub planting, mulch, rock gardens, and full yard makeovers that boost your home&apos;s curb appeal.</p>
            </article>
            <article className="svc-card fade-in">
              <BrickIcon />
              <h3>Hardscaping &amp; Concrete</h3>
              <p>Professional concrete work including stamped concrete, walkways, patios, retaining walls, and steps. Durable, beautiful hardscape features built to withstand Colorado winters.</p>
            </article>
            <article className="svc-card fade-in">
              <GrassIcon />
              <h3>Sod Installation &amp; Care</h3>
              <p>Fresh sod installation for an instant, lush green lawn. We expertly prepare the soil, grade the yard, and lay premium sod suitable for the Denver metro area.</p>
            </article>
            <article className="svc-card fade-in">
              <RockIcon />
              <h3>Mulch &amp; Stone</h3>
              <p>Decorative mulch, gravel pathways, river rock beds, and stone features. Enhance your property with low-maintenance, water-wise landscaping solutions.</p>
            </article>
            <article className="svc-card fade-in">
              <BroomIcon />
              <h3>Sprinkler Repair</h3>
              <p>Expert sprinkler repair services including head replacement, leak detection, valve repair, and system troubleshooting to ensure your irrigation works perfectly.</p>
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

        {/* ═══ GALLERY ═══ */}
        <section className="section bg-light" id="gallery" aria-labelledby="gallery-heading">
          <div className="text-center">
            <h2 id="gallery-heading" className="s-title fade-in">Our Denver Landscaping Projects</h2>
            <div className="s-line fade-in" />
            <p className="s-sub fade-in">Real projects, real results — see the quality BAM brings to every property.</p>
          </div>

          <div className="gal-grid">
            {CLEAN_IMAGES.map((src, i) => (
              <div key={`c-${i}`} className="gal-item fade-in">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={src} alt={`Denver Landscaping Project ${i + 1} by BAM Sprinklers`} loading="lazy" decoding="async" />
              </div>
            ))}
            {CROP_IMAGES.map((src, i) => (
              <div key={`p-${i}`} className="gal-item crop fade-in">
                 {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={src} alt={`Denver Sprinkler Installation ${i + 1}`} loading="lazy" decoding="async" />
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "40px" }}>
            <a href="https://www.facebook.com/p/BAM-Sprinklers-100064053580943/" target="_blank" rel="noopener noreferrer" className="fb-btn" aria-label="Follow BAM Sprinklers on Facebook">
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
              <p className="s-sub s-sub-light fade-in">See what our satisfied clients have to say about our work.</p>
            </div>

            <div className="rev-grid">
              {[
                {
                  text: "The owner Martin is very friendly. But his worker Antonio is a mean and rude.",
                  author: "Shantell Waters"
                },
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
                    <div className="rev-stars" aria-label="5 out of 5 stars">
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

        {/* ═══ CONTACT FORM ═══ */}
        <section className="section-alt" id="contact" aria-labelledby="contact-heading">
          <div className="s-inner">
            <div className="text-center">
              <h2 id="contact-heading" className="s-title fade-in">Get Your Free Quote</h2>
              <div className="s-line fade-in" />
              <p className="s-sub fade-in">Fill out the form below and we&apos;ll get back to you within 24 hours.</p>
            </div>

            <div className="contact-grid">
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

              <div className="fade-in">
                {submitted ? (
                  <div className="c-form success-state">
                    <div className="form-ok">
                      <h3>Thank You!</h3>
                      <p>Your inquiry has been submitted successfully. We&apos;ll get back to you within 24 hours.</p>
                    </div>
                  </div>
                ) : (
                  <form className="c-form" onSubmit={handleSubmit} id="inquiry-form" aria-label="Inquiry Form">
                    <h3>Submit Your Inquiry</h3>
                    
                    {error && <div className="form-error" role="alert">{error}</div>}
                    
                    <div className="fg">
                      <label htmlFor="name">Full Name <span aria-hidden="true">*</span></label>
                      <input type="text" id="name" name="name" placeholder="Your full name" required aria-required="true" />
                    </div>
                    <div className="fg">
                      <label htmlFor="phone">Phone Number <span aria-hidden="true">*</span></label>
                      <input type="tel" id="phone" name="phone" placeholder="(720) 000-0000" required aria-required="true" />
                    </div>
                    <div className="fg">
                      <label htmlFor="email">Email</label>
                      <input type="email" id="email" name="email" placeholder="your@email.com" />
                    </div>
                    <div className="fg">
                      <label htmlFor="service">Service Needed <span aria-hidden="true">*</span></label>
                      <select id="service" name="service" required aria-required="true" defaultValue="">
                        <option value="" disabled>Select a service...</option>
                        <option value="Sprinkler Installation">Sprinkler Installation</option>
                        <option value="Sprinkler Repair">Sprinkler Repair</option>
                        <option value="Irrigation System">Irrigation System</option>
                        <option value="Landscape Design">Landscape Design</option>
                        <option value="Sod Installation">Sod Installation</option>
                        <option value="Concrete / Hardscaping">Concrete / Hardscaping</option>
                        <option value="Mulch & Stone">Mulch &amp; Stone</option>
                        <option value="Cleanup / Maintenance">Cleanup / Maintenance</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div className="fg">
                      <label htmlFor="message">Project Details <span aria-hidden="true">*</span></label>
                      <textarea id="message" name="message" placeholder="Tell us about your project — what do you need done?" required aria-required="true" />
                    </div>
                    <button type="submit" className="btn-submit" id="submit-inquiry" disabled={sending} aria-busy={sending}>
                      {sending ? "Processing..." : "Submit Inquiry"}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ═══ FOOTER ═══ */}
      <footer className="footer" role="contentinfo">
        <div className="footer-inner">
          <div className="footer-brand">BAM Sprinklers &amp; Landscaping, Inc</div>
          <p>Quality Work. Dependable Service. Beautiful Results.</p>
          <div className="footer-socials">
            <a href="https://www.facebook.com/p/BAM-Sprinklers-100064053580943/" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Facebook"><FacebookIcon /></a>
            <a href="tel:7204358409" aria-label="Call us"><PhoneIcon /></a>
            <a href="mailto:bamsprinkers@yahoo.com" aria-label="Email us"><MailIcon /></a>
          </div>
          <p className="footer-legal">
            &copy; {new Date().getFullYear()} BAM Sprinklers &amp; Landscaping, Inc. All rights reserved.<br />
            Denver, Colorado &bull; <a href="tel:7204358409">(720) 435-8409</a> / <a href="tel:7202756691">(720) 275-6691</a><br />
            <a href="mailto:bamsprinkers@yahoo.com">bamsprinkers@yahoo.com</a>
          </p>
        </div>
      </footer>
    </>
  );
}
