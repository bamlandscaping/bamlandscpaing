import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | BAM Sprinklers & Landscaping Denver",
  description: "Read the BAM Sprinklers & Landscaping Privacy Policy. We are Denver's #1 trusted local company for sprinkler systems, landscaping, and concrete with over 25 years of service.",
};

export default function PrivacyPolicy() {
  return (
    <div className="section">
      <div className="s-inner" style={{ maxWidth: '800px', margin: '0 auto', paddingTop: '100px' }}>
        <h1 className="s-title">Privacy Policy</h1>
        <div className="s-line" style={{ margin: '0 0 24px' }} />
        <p className="s-sub">Last updated: {new Date().toLocaleDateString()}</p>
        
        <div className="legal-content">
          <p>At BAM Sprinklers &amp; Landscaping, Inc, we are committed to protecting your privacy and ensuring the security of your personal information.</p>
          
          <h2 style={{ marginTop: '24px', fontSize: '1.5rem', fontWeight: 'bold' }}>1. Information We Collect</h2>
          <p>We collect personal information that you voluntarily provide to us when you fill out forms on our website, such as your name, email address, phone number, and project details.</p>
          
          <h2 style={{ marginTop: '24px', fontSize: '1.5rem', fontWeight: 'bold' }}>2. How We Use Your Information</h2>
          <p>We use the information we collect to communicate with you, provide our services, schedule estimates, and improve our website and customer service.</p>
          
          <h2 style={{ marginTop: '24px', fontSize: '1.5rem', fontWeight: 'bold' }}>3. Information Sharing</h2>
          <p>We do not sell, trade, or otherwise transfer to outside parties your Personally Identifiable Information. This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential.</p>
          
          <h2 style={{ marginTop: '24px', fontSize: '1.5rem', fontWeight: 'bold' }}>4. Security</h2>
          <p>We implement a variety of security measures to maintain the safety of your personal information.</p>
          
          <h2 style={{ marginTop: '24px', fontSize: '1.5rem', fontWeight: 'bold' }}>5. Contact Us</h2>
          <p>If you have any questions regarding this privacy policy, you may contact us at bamsprinklers@yahoo.com.</p>
          
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
