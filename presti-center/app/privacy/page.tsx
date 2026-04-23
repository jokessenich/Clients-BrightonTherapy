import type { Metadata } from 'next';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Privacy policy for the William A. Presti Center For Families And Youth — how we handle personal information, HIPAA, and website data.',
  alternates: { canonical: `${SITE.url}/privacy` },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <div className="prose-page">
      <h1>Privacy Policy</h1>
      <p
        style={{
          fontSize: '0.85rem',
          color: 'var(--text-faint)',
          marginBottom: '2rem',
        }}
      >
        Last updated: {new Date().toLocaleDateString('en-US', {
          month: 'long',
          year: 'numeric',
        })}
      </p>

      <p>
        At {SITE.name} (&quot;we,&quot; &quot;us,&quot; or &quot;the Center&quot;), your privacy and the confidentiality of your health information are central to the work we do. This policy explains how we handle information you share with us through this website and how we protect your health information as a clinical practice.
      </p>

      <h2>Our commitment to your health information (HIPAA)</h2>
      <p>
        As a licensed mental health practice, we are bound by the Health Insurance Portability and Accountability Act (HIPAA) and Michigan state law. All clinical records, session notes, and personal health information are kept strictly confidential and are only shared with your written consent or when required by law.
      </p>
      <p>
        Our clients receive a separate, detailed Notice of Privacy Practices at intake, which explains how your protected health information (PHI) is used and your rights regarding it. This website privacy policy is a separate document covering only website and general contact interactions.
      </p>

      <h2>Information we collect through this website</h2>
      <p>We may collect the following when you visit or interact with our website:</p>
      <ul>
        <li>
          <strong>Information you provide directly:</strong> name, email address, phone number, service interest, and any message you submit via our contact or request forms.
        </li>
        <li>
          <strong>Automatically collected:</strong> standard web analytics data such as your approximate location, device type, browser, and pages visited. This data is aggregated and used to improve the site.
        </li>
        <li>
          <strong>Cookies:</strong> essential cookies required for the site to function, and analytics cookies to understand site usage. You can disable non-essential cookies in your browser settings.
        </li>
      </ul>

      <h2>How we use your information</h2>
      <p>We use the information you provide to:</p>
      <ul>
        <li>Respond to inquiries and scheduling requests</li>
        <li>Match you with an appropriate therapist or coach</li>
        <li>Send appointment-related communications (if you become a client)</li>
        <li>Improve our website and services</li>
      </ul>
      <p>
        We do not sell or rent your information to any third party. Ever.
      </p>

      <h2>How your information is protected</h2>
      <p>
        Contact form submissions are transmitted securely. Clinical information (once you are a client) is stored in a HIPAA-compliant electronic health record system with industry-standard encryption and access controls. Only authorized clinical and administrative staff have access, and they are bound by both clinical and legal confidentiality obligations.
      </p>

      <h2>Third-party services</h2>
      <p>
        We use a small number of trusted third-party tools to operate this website, such as hosting, analytics, and form delivery providers. Where applicable, we ensure those providers have appropriate safeguards in place. Our telehealth platform is separately HIPAA-compliant and covered under a Business Associate Agreement.
      </p>

      <h2>Your rights</h2>
      <p>You have the right to:</p>
      <ul>
        <li>Access information we hold about you</li>
        <li>Request correction of inaccurate information</li>
        <li>Request deletion of personal information (subject to legal record-retention requirements)</li>
        <li>Opt out of non-essential communications</li>
        <li>Receive a copy of our Notice of Privacy Practices (if you are or become a client)</li>
      </ul>

      <h2>Children&apos;s privacy</h2>
      <p>
        Our website is not directed to children under 13, and we do not knowingly collect information from them. When working with minor clients, we gather information from parents or legal guardians as part of the clinical intake process.
      </p>

      <h2>Changes to this policy</h2>
      <p>
        We may update this policy from time to time. Material changes will be reflected in the &quot;last updated&quot; date at the top of this page.
      </p>

      <h2>Contact us</h2>
      <p>
        Questions about this policy? Reach out:
      </p>
      <p>
        <strong>{SITE.name}</strong>
        <br />
        {SITE.address.street}
        <br />
        {SITE.address.city}, {SITE.address.state} {SITE.address.zip}
        <br />
        Phone:{' '}
        <a href={`tel:${SITE.phoneRaw}`} style={{ color: 'var(--rust)' }}>
          {SITE.phone}
        </a>
      </p>
    </div>
  );
}
