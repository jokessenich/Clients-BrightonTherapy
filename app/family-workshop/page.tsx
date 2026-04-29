import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import CredsBar from '@/components/CredsBar';
import FinalCTA from '@/components/FinalCTA';
import FAQSection from '@/components/FAQSection';
import SmartImage from '@/components/SmartImage';
import { IMAGES, SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Family Workshop | Brighton, MI',
  description:
    'Our adult-only Family Workshop at the William A. Presti Center. A small group setting where adults work on family relationships, communication, and healing together.',
  alternates: { canonical: `${SITE.url}/family-workshop` },
};

const faqs = [
  {
    q: 'Who is the workshop for?',
    a: 'The Family Workshop is for adults only — anyone 18 and over who wants to work on family-related challenges. That includes parents, adult children, siblings, partners, and adults navigating their own family-of-origin issues.',
  },
  {
    q: 'How does the workshop work?',
    a: 'It runs as a small group with a licensed clinician. You commit to the full series so the group can build trust and go deeper than a one-time meeting allows. Call us to find out when the next workshop starts.',
  },
  {
    q: 'How is this different from individual therapy?',
    a: 'A workshop gives you something individual sessions can\'t — the experience of hearing other adults talk through similar struggles. Many clients do both: individual therapy for personal work, and the workshop for community and shared learning.',
  },
  {
    q: 'What if I\'m nervous about sharing in a group?',
    a: 'Most people are. There\'s no pressure to share before you\'re ready. The clinician sets a respectful tone from day one.',
  },
  {
    q: 'How much does it cost?',
    a: 'The Family Workshop is $82 per session, the same as individual therapy. It\'s typically HSA-eligible.',
  },
  {
    q: 'How do I sign up?',
    a: `Call ${SITE.phone}. We'll let you know when the next workshop is starting and whether it sounds like a good fit for you.`,
  },
];

export default function FamilyWorkshopPage() {
  return (
    <>
      <Hero
        eyebrow="For Adults"
        title={
          <>
            The Family <em>Workshop</em>
          </>
        }
        subtitle="A small group setting for adults working through family relationships, communication, and the things we carry from the people closest to us."
        bgImage={IMAGES.workshop}
        bgAlt="Family walking together on a forest path"
        inner
      />

      <CredsBar />

      <section className="intro">
        <div>
          <div className="eyebrow r">About the Workshop</div>
          <h2 className="intro-heading r d1">
            You don&apos;t have to figure it out alone
          </h2>
          <div className="intro-body r d2">
            <p>
              Family is where some of our deepest struggles begin. It&apos;s
              also where so much of our healing happens. The Family Workshop is
              a small group for adults who want to work on family
              relationships — the ones they grew up in, the ones they&apos;re
              raising, and everything in between.
            </p>
            <p>
              You&apos;ll meet with a small group of other adults and a
              licensed clinician over the course of several sessions.
              Conversations are honest, respectful, and confidential. You set
              the pace. You share what you want to share.
            </p>
            <p>
              This is the only group we run right now, and it&apos;s for
              adults only. If you&apos;re looking for support around parenting,
              adult sibling relationships, or your own family of origin, this
              is the place.
            </p>
          </div>
        </div>
        <div className="intro-right r d3">
          <SmartImage
            image={IMAGES.familyWalk}
            alt="A family walking together on a forest path"
            className="intro-img"
            sizes="(max-width: 1024px) 100vw, 28rem"
          />
          <p className="intro-img-caption">
            Adults only — small group setting, led by a licensed clinician.
          </p>
        </div>
      </section>

      <section className="offering-section">
        <div className="offering-inner">
          <div className="eyebrow r">What to Expect</div>
          <h2
            className="section-heading r d1"
            style={{ marginBottom: '1rem' }}
          >
            How the workshop runs
          </h2>
          <p
            className="r d2"
            style={{
              fontSize: '1rem',
              color: 'var(--text-light)',
              fontWeight: 300,
              lineHeight: 1.85,
              maxWidth: 620,
              marginBottom: '2.5rem',
            }}
          >
            We run the workshop as a series so trust has a chance to build.
            Here&apos;s the basic shape of it.
          </p>
          <div className="offering-grid">
            <div className="offering-card r d1">
              <div className="o-aud">Adults Only</div>
              <h3>Small group, real talk</h3>
              <p>
                Six to ten adults meeting together with a licensed clinician.
                Small enough for everyone to be heard. Big enough that you&apos;re
                not alone with what you&apos;re working through.
              </p>
            </div>
            <div className="offering-card r d2">
              <div className="o-aud">Multi-Week</div>
              <h3>Series, not drop-in</h3>
              <p>
                The workshop runs as a series of sessions. You commit upfront so
                the group can go deeper than a one-time meeting allows.
              </p>
            </div>
            <div className="offering-card r d3">
              <div className="o-aud">Topic-Focused</div>
              <h3>Family relationships</h3>
              <p>
                Conversations stay focused on family — parenting, adult sibling
                relationships, what we learned (and inherited) from our own
                parents, and how to do things differently now.
              </p>
            </div>
            <div className="offering-card r d4">
              <div className="o-aud">$82</div>
              <h3>Same flat fee</h3>
              <p>
                The workshop is $82 per session, the same as individual therapy.
                Typically HSA-eligible. No insurance hoops.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} heading="Common questions" schemaId="workshop-faq" />

      <FinalCTA
        heading={<>Join the next workshop</>}
        body={`Call ${SITE.phone} and we'll let you know when the next workshop is starting. We're happy to talk through whether it's a good fit before you commit.`}
      />
    </>
  );
}
