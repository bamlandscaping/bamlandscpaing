import type { Metadata } from "next";
import "./globals.css";

const SITE_URL = "https://bamsprinklersco.com";
const PHONE = "(720) 435-8409";
const PHONE_LINK = "7204358409";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  /* ── Primary Title & Description (keyword-optimized for Denver) ── */
  title:
    "BAM Sprinklers & Landscaping | #1 Sprinkler Installation & Landscaping in Denver, CO",
  description:
    "Denver's top-rated sprinkler installation, irrigation repair & landscaping company. Sod, hardscaping, mulch, stone & lawn care. Free estimates — call (720) 435-8409. Serving Denver, Arvada, Aurora & the entire metro area.",

  /* ── Additional Keywords ── */
  keywords: [
    "sprinkler installation Denver",
    "sprinkler repair Denver",
    "landscaping company Denver",
    "irrigation system Denver CO",
    "sod installation Denver",
    "hardscaping Denver",
    "lawn care Denver",
    "mulch and stone Denver",
    "landscape design Denver",
    "sprinkler winterization Denver",
    "Denver landscaper",
    "BAM Sprinklers",
    "landscaping near me",
    "sprinkler system near me",
    "concrete patio Denver",
    "lawn maintenance Denver CO",
    "residential landscaping Denver",
    "commercial landscaping Denver",
  ],

  /* ── OpenGraph (Facebook, LinkedIn, iMessage) ── */
  openGraph: {
    title: "BAM Sprinklers & Landscaping — Denver's #1 Sprinkler & Landscaping Pros",
    description:
      "Professional sprinkler installation, repair, landscaping, sod, hardscaping & more in Denver, CO. Free on-site estimates. Call (720) 435-8409.",
    url: SITE_URL,
    siteName: "BAM Sprinklers & Landscaping",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/images/og-cover.jpg`,
        width: 1200,
        height: 630,
        alt: "BAM Sprinklers & Landscaping — Denver Colorado",
      },
    ],
  },

  /* ── Twitter Card ── */
  twitter: {
    card: "summary_large_image",
    title: "BAM Sprinklers & Landscaping | Denver, CO",
    description:
      "Sprinkler installation, landscaping, sod, hardscaping & irrigation in Denver. Free estimates — call (720) 435-8409.",
    images: [`${SITE_URL}/images/og-cover.jpg`],
  },

  /* ── Robots ── */
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  /* ── Canonical ── */
  alternates: {
    canonical: SITE_URL,
  },

  /* ── Icons ── */
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },

  /* ── Other ── */
  category: "Home Services",
};

/* ── JSON-LD Structured Data ── */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}/#business`,
      name: "BAM Sprinklers & Landscaping, Inc",
      alternateName: "BAM Sprinklers",
      description:
        "Denver's premier sprinkler installation, irrigation repair, and full-service landscaping company. We specialize in sprinkler systems, landscape design, sod installation, hardscaping, concrete work, mulch & stone, and seasonal cleanups.",
      url: SITE_URL,
      telephone: `+1${PHONE_LINK}`,
      email: "bamlandscaping@zohomail.com",
      image: `${SITE_URL}/images/og-cover.jpg`,
      logo: `${SITE_URL}/images/466374738_1092403892489564_859775967574918326_n (1).jpg`,
      priceRange: "$$",
      currenciesAccepted: "USD",
      paymentAccepted: "Cash, Credit Card, Check",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Denver",
        addressRegion: "CO",
        addressCountry: "US",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 39.7392,
        longitude: -104.9903,
      },
      areaServed: [
        { "@type": "City", name: "Denver" },
        { "@type": "City", name: "Arvada" },
        { "@type": "City", name: "Aurora" },
        { "@type": "City", name: "Lakewood" },
        { "@type": "City", name: "Littleton" },
        { "@type": "City", name: "Westminster" },
        { "@type": "City", name: "Thornton" },
        { "@type": "City", name: "Broomfield" },
        { "@type": "City", name: "Highlands Ranch" },
        { "@type": "City", name: "Centennial" },
      ],
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "07:00",
          closes: "18:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Saturday",
          opens: "08:00",
          closes: "16:00",
        },
      ],
      sameAs: ["https://www.instagram.com/bamsprinklers/"],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Sprinkler & Landscaping Services",
        itemListElement: [
          {
            "@type": "OfferCatalog",
            name: "Sprinkler Services",
            itemListElement: [
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Sprinkler System Installation" } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Sprinkler Repair" } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Irrigation System Design" } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Sprinkler Winterization" } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Spring Sprinkler Startup" } },
            ],
          },
          {
            "@type": "OfferCatalog",
            name: "Landscaping Services",
            itemListElement: [
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Landscape Design" } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Sod Installation" } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Hardscaping & Concrete" } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Mulch & Stone" } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Seasonal Cleanup" } },
            ],
          },
        ],
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5",
        bestRating: "5",
        worstRating: "1",
        ratingCount: "47",
        reviewCount: "47",
      },
      review: [
        {
          "@type": "Review",
          reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
          author: { "@type": "Person", name: "Denver Homeowner" },
          reviewBody:
            "BAM did an amazing job on our sprinkler system and new sod. The lawn looks incredible and the sprinklers work perfectly. Very professional crew and fair pricing. Highly recommend!",
        },
        {
          "@type": "Review",
          reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
          author: { "@type": "Person", name: "Arvada Homeowner" },
          reviewBody:
            "They built beautiful concrete steps and a walkway for our front yard. The work was done quickly and the quality is outstanding. Our neighbors keep asking who did the work!",
        },
        {
          "@type": "Review",
          reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
          author: { "@type": "Person", name: "Aurora Homeowner" },
          reviewBody:
            "Best landscaping company in Denver. They transformed our backyard with new sod, rock beds, and a stamped concrete patio. Showed up on time, cleaned up after themselves. 10/10!",
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "BAM Sprinklers & Landscaping",
      publisher: { "@id": `${SITE_URL}/#business` },
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "How much does sprinkler installation cost in Denver?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sprinkler installation costs in Denver vary based on yard size, number of zones, and system complexity. BAM Sprinklers offers free on-site estimates — call (720) 435-8409 for a custom quote.",
          },
        },
        {
          "@type": "Question",
          name: "What landscaping services does BAM offer in Denver?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "BAM provides comprehensive landscaping services including landscape design, sod installation, hardscaping & concrete, mulch & stone, sprinkler systems, irrigation repair, and seasonal cleanups throughout the Denver metro area.",
          },
        },
        {
          "@type": "Question",
          name: "Does BAM offer sprinkler winterization in Denver?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, BAM Sprinklers offers full sprinkler winterization (blowout) services to protect your irrigation system from Denver's harsh winters. We also provide spring startup services.",
          },
        },
        {
          "@type": "Question",
          name: "What areas does BAM Sprinklers & Landscaping serve?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "BAM serves the entire Denver metro area including Denver, Arvada, Aurora, Lakewood, Littleton, Westminster, Thornton, Broomfield, Highlands Ranch, and Centennial.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${SITE_URL}/#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: SITE_URL,
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts — Inter for modern typography */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />

        {/* Calendly widget (async, non-blocking) */}
        <script
          type="text/javascript"
          src="https://assets.calendly.com/assets/external/widget.js"
          async
        />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
