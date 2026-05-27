import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/context/LanguageContext";

export const metadata: Metadata = {
  title: "BAM Sprinklers & Landscaping | Denver, CO — Sprinkler Systems, Xeriscaping, Concrete & More",
  description:
    "BAM Sprinklers & Landscaping — Denver's trusted local company with 25+ years serving the Denver metro area. Expert sprinkler systems, drip irrigation, xeriscaping / xeriscaping, stamped & regular concrete, wooden fences, block retaining walls, paver patios & pathways. BBB member. Free estimates. Call (720) 435-8409 or (720) 275-6691.",
  keywords: [
    "BAM Sprinklers",
    "sprinkler system Denver",
    "drip system Denver",
    "xeriscaping Denver",
    "xeriscaping Denver",
    "stamped concrete Denver",
    "concrete contractor Denver",
    "wooden fence Denver",
    "block retaining wall Denver",
    "paver patio Denver",
    "paver paths Denver",
    "landscaping Denver",
    "irrigation system Denver",
    "sprinkler repair Denver",
    "lawn irrigation Denver",
    "Denver landscaping company",
    "Denver sprinkler installation",
    "BBB landscaping Denver",
    "free estimate landscaping Denver",
  ],
  openGraph: {
    title: "BAM Sprinklers & Landscaping | Denver, CO",
    description:
      "25+ years serving Denver. Sprinkler systems, drip irrigation, xeriscaping, stamped concrete, fences, retaining walls, paver patios. BBB member. Free estimates.",
    type: "website",
  },
  icons: {
    icon: "/favicon.jpg",
    apple: "/favicon.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "BAM Sprinklers & Landscaping",
    "alternateName": "BAM Sprinklers",
    "description": "Denver's trusted landscaping company with 25+ years of service. Specializing in sprinkler systems, drip systems, xeriscaping, stamped concrete, wooden fences, block retaining walls, and paver patios.",
    "url": "https://bamsprinklers.com",
    "telephone": ["+17204358409", "+17202756691"],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Denver",
      "addressRegion": "CO",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "39.7392",
      "longitude": "-104.9903"
    },
    "openingHours": "Mo-Fr 08:00-16:00",
    "priceRange": "$$",
    "hasMap": "https://maps.google.com/?q=Denver+CO",
    "sameAs": [
      "https://www.instagram.com/bamsprinklers/",
      "https://www.facebook.com/people/BAM-Sprinklers/100057059760260/",
      "https://stackmode.net"
    ],
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "39.7392",
        "longitude": "-104.9903"
      },
      "geoRadius": "50000"
    },
    "knowsAbout": [
      "Sprinkler System Installation",
      "Drip Irrigation Systems",
      "Xeriscaping",
      "Stamped Concrete",
      "Regular Concrete",
      "Wooden Fence Installation",
      "Block Retaining Walls",
      "Paver Patios",
      "Paver Pathways",
      "Paver Side Walls",
      "Landscaping",
      "Irrigation Systems"
    ],
    "award": "BBB Member",
    "slogan": "Ideas That Transform",
    "creator": {
      "@type": "Organization",
      "name": "Stackmode Network",
      "alternateName": "Stackmodechris",
      "url": "https://stackmode.net",
      "logo": "https://stackmode.net/logo.png"
    }
  };

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Inter:wght@400;600;700;800&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body>
        <LanguageProvider>
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
