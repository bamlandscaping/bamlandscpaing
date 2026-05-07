import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms & Conditions | BAM Sprinklers & Landscaping Denver",
  description: "Read the Terms & Conditions for BAM Sprinklers & Landscaping. Providing the highest quality sprinkler repair, installation, and landscaping services in Denver.",
};

export default function TermsAndConditions() {
  return (
    <div className="section">
      <div className="s-inner" style={{ maxWidth: '800px', margin: '0 auto', paddingTop: '100px' }}>
        <h1 className="s-title">Terms &amp; Conditions</h1>
        <div className="s-line" style={{ margin: '0 0 24px' }} />
        <p className="s-sub">Last updated: {new Date().toLocaleDateString()}</p>
        
        <div className="legal-content">
          <p>Welcome to BAM Sprinklers &amp; Landscaping, Inc. By accessing this website, we assume you accept these terms and conditions.</p>
          
          <h2 style={{ marginTop: '24px', fontSize: '1.5rem', fontWeight: 'bold' }}>1. Services</h2>
          <p>We provide professional landscaping and sprinkler services in the Denver metro area. All quotes and estimates provided are subject to our formal review and agreement.</p>
          
          <h2 style={{ marginTop: '24px', fontSize: '1.5rem', fontWeight: 'bold' }}>2. Use of Site</h2>
          <p>You may not use our website for any unlawful or prohibited purpose. We reserve the right to terminate your use of the website for any violations.</p>
          
          <h2 style={{ marginTop: '24px', fontSize: '1.5rem', fontWeight: 'bold' }}>3. Intellectual Property</h2>
          <p>Unless otherwise stated, BAM Sprinklers &amp; Landscaping, Inc owns the intellectual property rights for all material on the website.</p>
          
          <h2 style={{ marginTop: '24px', fontSize: '1.5rem', fontWeight: 'bold' }}>4. Limitation of Liability</h2>
          <p>In no event shall BAM Sprinklers &amp; Landscaping, Inc, nor any of its officers, directors, and employees, be held liable for anything arising out of or in any way connected with your use of this website.</p>
          
          <h2 style={{ marginTop: '24px', fontSize: '1.5rem', fontWeight: 'bold' }}>5. Contact</h2>
          <p>If you have any queries regarding our terms, please contact us at bamsprinklers@yahoo.com.</p>
          
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
