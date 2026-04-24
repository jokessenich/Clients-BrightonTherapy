import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import CredsBar from '@/components/CredsBar';
import FinalCTA from '@/components/FinalCTA';
import SmartImage from '@/components/SmartImage';
import { IMAGES, SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Our Staff | Licensed Therapists & Certified Coaches',
  description:
    'Meet the licensed therapists and certified coaches at the William A. Presti Center in Brighton, MI. Warm, experienced professionals who genuinely care.',
  alternates: { canonical: `${SITE.url}/staff` },
};

// Placeholder staff — to be replaced with actual team bios and photos
const STAFF = [
  {
    name: 'Clinical Team',
    credentials: 'LPC · LMSW · LMFT',
    photo: IMAGES.therapist,
    alt: 'Warm therapy session',
    bio: 'Our licensed therapists bring years of clinical experience across anxiety, depression, trauma, couples work, and family systems. Each therapist tailors their approach to fit the client — not the other way around.',
  },
  {
    name: 'Couples Specialists',
    credentials: 'EFT · Gottman-Trained',
    photo: IMAGES.couples,
    alt: 'Couples counseling session',
    bio: 'Our couples team works with partnerships at every stage — from pre-marital coaching to trust repair after infidelity. We hold space for whatever outcome feels true, whether that\'s rebuilding or thoughtfully letting go.',
  },
  {
    name: 'Child & Teen Therapists',
    credentials: 'Play Therapy · DBT',
    photo: IMAGES.children,
    alt: 'Children\'s therapy supplies',
    bio: 'Working with young people is its own craft. Our child and teen therapists combine clinical rigor with genuine warmth — the kind of care that helps a nine-year-old feel safe drawing their feelings and a sixteen-year-old actually want to come back.',
  },
  {
    name: 'Certified Coaches',
    credentials: 'ICF-Credentialed',
    photo: IMAGES.coaching,
    alt: 'Coaching session',
    bio: 'Our certified coaches work alongside our clinical team, providing forward-focused, goal-oriented support for adults and teens who want structure, accountability, and real partnership in their growth.',
  },
  {
    name: 'Neurodiversity Specialists',
    credentials: 'ASD · ADHD-Informed',
    photo: IMAGES.autism,
    alt: 'Calm natural light',
    bio: 'Our neurodiversity-affirming team supports autistic and ADHD clients of every age — never asking you to mask, always working with how your brain actually operates. Evidence-based, affirming, and deeply practical.',
  },
  {
    name: 'Support Team',
    credentials: 'Client Care',
    photo: IMAGES.contact,
    alt: 'Welcoming reception',
    bio: 'When you call us, you\'ll speak with a real person who takes the time to understand what you need. Our support team handles scheduling, billing, and the thousand small things that make our practice feel human.',
  },
];

export default function StaffPage() {
  return (
    <>
      <Hero
        eyebrow="Our People"
        title={
          <>
            Real people who <em>genuinely</em> care
          </>
        }
        subtitle="The most important part of therapy is the relationship. Our therapists, coaches, and support staff bring clinical skill, deep experience, and something harder to teach — actual warmth."
        bgImage={IMAGES.staff}
        bgAlt="Warm, welcoming professional setting"
        inner
      />

      <CredsBar />

      <section style={{ padding: '5rem 3.5rem 2rem', maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ maxWidth: 720 }}>
          <div className="eyebrow r">Meet the Team</div>
          <h2 className="section-heading r d1">
            Experienced clinicians. <em>Human</em> first.
          </h2>
          <p
            className="r d2"
            style={{
              fontSize: '1rem',
              lineHeight: 1.85,
              color: 'var(--text-light)',
              fontWeight: 300,
              marginBottom: '2rem',
            }}
          >
            Our team brings a wide range of specialties across therapy and coaching — but what holds us together is a shared commitment to treating every client like a whole person. You won&apos;t get cookie-cutter care here.
          </p>
          <p
            className="r d3"
            style={{
              fontSize: '0.9rem',
              color: 'var(--text-faint)',
              fontStyle: 'italic',
              marginBottom: '1rem',
            }}
          >
            Individual staff bios and photos coming soon. For now, here&apos;s an overview of our specialties. To be matched with the right therapist or coach for you, call us or request an appointment — we take matching seriously.
          </p>
        </div>
      </section>

      <section className="staff-grid">
        {STAFF.map((person, i) => (
          <div key={person.name} className={`staff-card r ${i < 3 ? `d${i + 1}` : ''}`}>
            <SmartImage
              image={person.photo}
              alt={person.alt}
              className="staff-photo"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div className="staff-name">{person.name}</div>
            <div className="staff-cred">{person.credentials}</div>
            <p className="staff-bio">{person.bio}</p>
          </div>
        ))}
      </section>

      <FinalCTA
        heading={<>Let&apos;s find your <em>right fit</em></>}
        body="We put real care into matching you with the therapist or coach most likely to help. Tell us a bit about what you're looking for and we'll take it from there."
      />
    </>
  );
}
