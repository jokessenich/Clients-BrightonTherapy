import type { Metadata } from 'next';
import Link from 'next/link';
import Hero from '@/components/Hero';
import CredsBar from '@/components/CredsBar';
import FAQSection from '@/components/FAQSection';
import FinalCTA from '@/components/FinalCTA';
import SmartImage from '@/components/SmartImage';
import { IMAGES, SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Areas We Serve — Brighton, MI & Teletherapy Across Michigan',
  description:
    'In-person therapy in Brighton, MI — serving Howell, Hartland, South Lyon, Pinckney, Milford, Fenton, Whitmore Lake and surrounding Livingston, Oakland & Washtenaw County communities — plus secure teletherapy anywhere in Michigan. $82 flat fee, HSA qualified.',
  alternates: { canonical: `${SITE.url}/areas-served` },
};

const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  `${SITE.address.street}, ${SITE.address.city}, ${SITE.address.state} ${SITE.address.zip}`
)}`;

const faqs = [
  {
    q: 'Do you only see clients who live in Brighton?',
    a: "Not at all. Our office is in Brighton, but clients come to us from across Livingston, Oakland, and Washtenaw Counties — places like Howell, Hartland, South Lyon, Pinckney, Milford, and Whitmore Lake. And through teletherapy, we can work with anyone located anywhere in Michigan.",
  },
  {
    q: 'Where is your office located?',
    a: `We're at ${SITE.address.street}, ${SITE.address.city}, ${SITE.address.state} ${SITE.address.zip}, right on Grand River Avenue with easy parking. Our hours are ${SITE.hours}.`,
  },
  {
    q: "What if I don't live near Brighton?",
    a: 'Then teletherapy is likely your best fit. Our therapists and coaches are licensed in Michigan, so we can see you over a secure, HIPAA-compliant video connection wherever you are in the state — the same care, without the commute.',
  },
  {
    q: 'Can I mix in-person and virtual sessions?',
    a: 'Yes, and many clients do. Some start in the office and switch to virtual once they feel settled; others do the reverse. We build the schedule around your life.',
  },
  {
    q: 'How do I get started?',
    a: `Call us at ${SITE.phone} or send a message through our contact page. We'll set up a short conversation to understand what you're looking for and match you with the right therapist — usually within the week.`,
  },
];

export default function AreasServedPage() {
  return (
    <>
      <Hero
        eyebrow="Where We Work"
        title={
          <>
            Care that reaches <em>across Michigan</em>
          </>
        }
        subtitle="In-person therapy in our Brighton office for families across Livingston County and the communities nearby — and secure teletherapy for anyone, anywhere in Michigan."
        bgImage={IMAGES.sunrisePath}
        bgAlt="A path winding through a sunlit Michigan meadow"
        inner
      />

      <CredsBar />

      <section className="intro">
        <div>
          <div className="eyebrow r">Rooted in Brighton</div>
          <h2 className="intro-heading r d1">
            A local practice,
            <br />
            <em>open to everyone</em>
          </h2>
          <div className="intro-body r d2">
            <p>
              Our home is on Grand River Avenue in Brighton, and it&apos;s where
              we&apos;ve cared for individuals, couples, and families since{' '}
              {SITE.foundingYear}. Many of our clients drive in from the towns
              nearby — Howell, Hartland, Pinckney, South Lyon, and beyond.
            </p>
            <p>
              But we&apos;ve never believed your zip code should decide whether
              you can get good care. If getting to Brighton is easy, we&apos;d
              love to see you in the office. If it isn&apos;t, teletherapy brings
              the same support to wherever you are.
            </p>
          </div>
          <div className="r d3" style={{ marginTop: '2rem' }}>
            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-dark"
            >
              Get directions
            </a>
          </div>
        </div>
        <div className="intro-right r d3">
          <SmartImage
            image={IMAGES.office}
            alt="A calm, welcoming therapy office space"
            className="intro-img"
            sizes="(max-width: 1024px) 100vw, 28rem"
          />
          <p className="intro-img-caption">
            {SITE.address.street}, {SITE.address.city}, {SITE.address.state}
          </p>
        </div>
      </section>

      <section className="areas">
        <div className="areas-inner">
          <div>
            <h2 className="areas-heading r">Communities we serve in person</h2>
            <p className="areas-sub r d1">
              Clients travel to our Brighton office from across Livingston,
              Oakland &amp; Washtenaw Counties. A few of the towns we see most:
            </p>
          </div>
          <div className="areas-list r d2">
            {SITE.serviceAreas.map((area) => (
              <span key={area} className="area-tag">
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="fit-section">
        <div style={{ maxWidth: 720, marginBottom: '3rem' }}>
          <div className="eyebrow r">Two Ways to Meet</div>
          <h2 className="section-heading r d1">In our office, or from your own</h2>
          <p
            className="r d2"
            style={{
              fontSize: '1rem',
              color: 'var(--text-light)',
              fontWeight: 300,
              lineHeight: 1.85,
            }}
          >
            However you choose to work with us, the care is the same — and so is
            the {SITE.pricing}.
          </p>
        </div>

        <div className="fit-grid">
          <div className="fit-col r">
            <h3>In person, in Brighton</h3>
            <ul className="fit-list yes">
              <li>A calm, welcoming office on Grand River Avenue</li>
              <li>The right fit for play therapy with young children</li>
              <li>Easy reach from Howell, Hartland, Pinckney &amp; South Lyon</li>
              <li>Free, simple parking</li>
            </ul>
          </div>

          <div className="fit-col r d1">
            <h3>Virtually, anywhere in Michigan</h3>
            <ul className="fit-list yes">
              <li>Secure, HIPAA-compliant video sessions</li>
              <li>No commute and no waiting room</li>
              <li>Great for busy schedules and rural areas</li>
              <li>
                <Link href="/teletherapy">Learn how teletherapy works →</Link>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <FAQSection
        faqs={faqs}
        eyebrow="Location Questions"
        heading="Serving you, wherever you are"
        schemaId="areas-faq"
      />

      <FinalCTA
        heading={
          <>
            Wherever you are, <em>we&apos;re close</em>
          </>
        }
        body="Whether you're around the corner in Brighton or across the state, reaching out is the same first step. We'll help you find the right fit."
      />
    </>
  );
}
