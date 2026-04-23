import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import CredsBar from '@/components/CredsBar';
import FinalCTA from '@/components/FinalCTA';
import FAQSection from '@/components/FAQSection';
import { IMAGES, SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Family Workshop & Groups | Brighton, MI',
  description:
    'Therapeutic groups and family workshops for children, teens, and adults at the William A. Presti Center in Brighton, MI. Healing happens in community.',
  alternates: { canonical: `${SITE.url}/family-workshop` },
};

const faqs = [
  {
    q: 'How do groups work?',
    a: 'Our groups are small — typically 6 to 10 people — and led by a licensed clinician. Each group has a specific focus (anxiety, teen identity, parenting, etc.) and runs for a set number of weeks. You commit to the full series so the group can build trust.',
  },
  {
    q: 'How is a group different from individual therapy?',
    a: 'Groups offer something individual therapy can\'t: the experience of not being alone with what you\'re facing, and the chance to hear from others walking a similar road. Many clients benefit from doing both at once — individual sessions for depth, group for community.',
  },
  {
    q: 'What if I\'m nervous about sharing in a group?',
    a: 'Most people are — and that\'s okay. Our clinicians set the tone from day one: no pressure to share, no performative processing, just real people doing real work. You go at your own pace.',
  },
  {
    q: 'Are groups covered by insurance?',
    a: 'Most of our groups are $82 per session, the same as individual therapy, and are typically HSA-eligible. Insurance coverage varies.',
  },
  {
    q: 'How do I know what group is right for me?',
    a: 'Call us. We\'ll spend a few minutes on the phone understanding what you\'re looking for and let you know what\'s coming up that might fit — including whether individual therapy would be a better starting point.',
  },
];

const offerings = [
  {
    audience: 'For Children',
    title: 'Kids\' feelings groups',
    body: 'Small, play-based groups that help children build emotional vocabulary, social skills, and confidence. Run in 6–8 week cycles and grouped by age.',
  },
  {
    audience: 'For Teens',
    title: 'Teen community groups',
    body: 'A space for teens to not feel alone. We run groups around anxiety, identity, peer and family stress, and life transitions. Facilitated by clinicians who get it.',
  },
  {
    audience: 'For Adults',
    title: 'Adult processing groups',
    body: 'Small, topic-focused groups for adults — grief, anxiety, life transitions, and more. A chance to feel less alone and build real skills alongside others.',
  },
  {
    audience: 'For Parents',
    title: 'Parent workshops',
    body: 'Workshops and support groups for parents — of young children, teens, and neurodivergent kids. Practical tools, real support, honest conversation.',
  },
  {
    audience: 'For Couples',
    title: 'Couples intensives',
    body: 'Occasional weekend intensives for couples who want focused, structured work outside the weekly cadence. Deep, practical, transformative.',
  },
  {
    audience: 'For Families',
    title: 'Family workshops',
    body: 'Half-day workshops designed for the whole family — building communication, repair skills, and shared language for big feelings.',
  },
];

export default function FamilyWorkshopPage() {
  return (
    <>
      <Hero
        eyebrow="Groups & Workshops"
        title={
          <>
            Healing happens in <em>community</em>
          </>
        }
        subtitle="Some of the most powerful work happens in groups — where you discover you're not the only one, where you learn from others on the same path, and where real belonging becomes part of getting better."
        bgImage={IMAGES.workshop}
        bgAlt="Warm group of people in conversation"
        inner
      />

      <CredsBar />

      <section className="intro">
        <div>
          <div className="eyebrow r">Why Groups Work</div>
          <h2 className="intro-heading r d1">
            The medicine of <em>not being alone</em>
          </h2>
          <div className="intro-body r d2">
            <p>
              Individual therapy is powerful — but so is the moment you sit in a circle and hear someone else describe exactly what you&apos;ve been feeling. There&apos;s research behind it, but you don&apos;t need the research. You just need to experience it once.
            </p>
            <p>
              Our groups are small, clinician-led, and carefully designed. Each one has a clear purpose and a real container. You&apos;re not thrown into a free-for-all; you&apos;re invited into a structured space where it&apos;s safe to be honest, to listen, and to grow.
            </p>
            <p>
              We run groups for children, teens, adults, parents, and couples. Some are ongoing. Some are time-limited intensives. All of them are built around the same idea: healing is a shared project.
            </p>
          </div>
        </div>
        <div className="intro-right r d3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="intro-img"
            src={IMAGES.group}
            alt="A small therapy group in warm natural light"
            loading="lazy"
          />
          <p className="intro-img-caption">
            Small groups. Real presence. Clinician-led.
          </p>
        </div>
      </section>

      {/* Offerings grid */}
      <section className="offering-section">
        <div className="offering-inner">
          <div className="eyebrow r">What We Offer</div>
          <h2 className="section-heading r d1" style={{ marginBottom: '1rem' }}>
            Our group offerings
          </h2>
          <p
            className="r d2"
            style={{
              fontSize: '1rem',
              color: 'var(--text-light)',
              fontWeight: 300,
              lineHeight: 1.85,
              maxWidth: 620,
              marginBottom: '1rem',
            }}
          >
            Specific groups rotate based on community need and clinician availability. Call us to find out what&apos;s running now or what&apos;s coming up.
          </p>
          <div className="offering-grid">
            {offerings.map((o, i) => (
              <div
                key={o.title}
                className={`offering-card r ${i < 5 ? `d${i + 1}` : ''}`.trim()}
              >
                <div className="o-aud">{o.audience}</div>
                <h3>{o.title}</h3>
                <p>{o.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} heading="Group questions" schemaId="group-faq" />

      <FinalCTA
        heading={<>Find your <em>people</em></>}
        body="Call us to hear about current and upcoming groups. We'll help you figure out what's a good fit for where you are right now."
      />
    </>
  );
}
