import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cookies Policy | BAM Sprinklers & Landscaping Denver",
  description: "Read the Cookies Policy for BAM Sprinklers & Landscaping. The top-rated landscaping and sprinkler repair company in Denver, Colorado.",
};

export default function CookiesPolicy() {
  return (
    <div className="section">
      <div className="s-inner" style={{ maxWidth: '800px', margin: '0 auto', paddingTop: '100px' }}>
        <h1 className="s-title">Cookies Policy</h1>
        <div className="s-line" style={{ margin: '0 0 24px' }} />
        <p className="s-sub">Last updated: {new Date().toLocaleDateString()}</p>
        
        <div className="legal-content">
          <p>This Cookies Policy explains what Cookies are and how We use them. You should read this policy so You can understand what type of cookies We use, or the information We collect using Cookies and how that information is used.</p>
          
          <h2 style={{ marginTop: '24px', fontSize: '1.5rem', fontWeight: 'bold' }}>1. What Are Cookies?</h2>
          <p>Cookies are small files that are placed on Your computer, mobile device, or any other device by a website, containing the details of Your browsing history on that website among its many uses.</p>
          
          <h2 style={{ marginTop: '24px', fontSize: '1.5rem', fontWeight: 'bold' }}>2. How We Use Cookies</h2>
          <p>We use cookies to improve your experience on our site, analyze site traffic, and understand where our audience comes from. We do not use cookies for tracking purposes across other websites.</p>
          
          <h2 style={{ marginTop: '24px', fontSize: '1.5rem', fontWeight: 'bold' }}>3. Your Choices Regarding Cookies</h2>
          <p>If You prefer to avoid the use of Cookies on the Website, first You must disable the use of Cookies in your browser and then delete the Cookies saved in your browser associated with this website.</p>
          
          <h2 style={{ marginTop: '24px', fontSize: '1.5rem', fontWeight: 'bold' }}>4. Contact Us</h2>
          <p>If you have any questions about this Cookies Policy, You can contact us at bamsprinklers@yahoo.com.</p>
          
          <div style={{ marginTop: '40px' }}>
            <Link href="/" style={{ color: 'var(--color-bam-blue)', textDecoration: 'underline', fontWeight: 'bold' }}>
              &larr; Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
