import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import CredsBar from '@/components/CredsBar';
import FinalCTA from '@/components/FinalCTA';
import FAQSection from '@/components/FAQSection';
import SmartImage from '@/components/SmartImage';
import { IMAGES, SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Teletherapy | Secure Virtual Therapy Across Michigan',
  description:
    'HIPAA-compliant teletherapy with the Presti Center. Available to anyone in Michigan — same warmth, same care, from the comfort of your own space. $82 flat fee. HSA qualified.',
  alternates: { canonical: `${SITE.url}/teletherapy` },
};

const faqs = [
  {
    q: 'Is teletherapy as effective as in-person?',
    a: 'For most people and most concerns, yes. Research consistently shows that teletherapy is as effective as in-person therapy for anxiety, depression, relationship issues, and many other conditions. Some clients actually prefer it — the familiarity of home helps them open up faster.',
  },
  {
    q: 'Who is teletherapy available to?',
    a: 'Anyone located in Michigan. Our therapists are licensed in Michigan, which means we can provide teletherapy to clients anywhere in the state — not just Brighton and the surrounding area.',
  },
  {
    q: 'Is it private and secure?',
    a: 'Yes. We use a HIPAA-compliant video platform built specifically for telehealth. Your sessions are encrypted, and nothing is recorded.',
  },
  {
    q: 'What do I need to get started?',
    a: 'A reliable internet connection, a device with a camera and microphone (phone, tablet, or computer), and a private space where you can speak freely. That\'s it.',
  },
  {
    q: 'What if I want to mix in-person and virtual sessions?',
    a: 'Many of our clients do. Some prefer in-person for the first few sessions, then switch to virtual. Others do the reverse. Flexibility is part of how we work.',
  },
  {
    q: 'Does teletherapy work for couples, families, or children?',
    a: 'It can. Teletherapy works well for most adult individual and couples work. For young children and certain family dynamics, in-person is sometimes the better fit — we\'ll talk through it with you.',
  },
];

export default function TeletherapyPage() {
  return (
    <>
      <Hero
        eyebrow="Virtual Care, Statewide"
        title={
          <>
            Therapy from <em>anywhere</em> in Michigan
          </>
        }
        subtitle="Secure, HIPAA-compliant teletherapy with the same care you'd get in our Brighton office. For when the commute is too much, the schedule is too tight, or you just work better from your own space."
        bgImage={IMAGES.teletherapy}
        bgAlt="Person on a video call in a calm, sunlit space"
        inner
      />

      <CredsBar />

      <section className="intro">
        <div>
          <div className="eyebrow r">Why Teletherapy</div>
          <h2 className="intro-heading r d1">
            Same warmth. <em>Same care.</em>
            <br />
            Your own couch.
          </h2>
          <div className="intro-body r d2">
            <p>
              Life is busy. Commutes are long. Childcare is expensive. And sometimes, the hardest thing about starting therapy is the part where you have to physically get there.
            </p>
            <p>
              Teletherapy removes that friction. You meet your therapist over a secure video connection, from anywhere you have privacy and internet. That&apos;s it. The work is the same. The rapport is the same. The results are, for most people, the same.
            </p>
            <p>
              We&apos;ve been doing virtual sessions for years — it&apos;s a real part of our practice, not an afterthought. Our therapists are trained for it, our platform is built for it, and our clients find it genuinely effective.
            </p>
          </div>
        </div>
        <div className="intro-right r d3">
          <SmartImage
            image={IMAGES.teletherapy}
            alt="Warm conversation between therapist and client"
            className="intro-img"
            sizes="(max-width: 1024px) 100vw, 28rem"
          />
          <p className="intro-img-caption">
            Your space, your schedule, our care
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="steps-section">
        <div className="steps-inner">
          <div className="eyebrow r">How It Works</div>
          <h2 className="section-heading r d1">Three steps to your first session</h2>
          <div className="steps-grid">
            {[
              {
                n: '01',
                t: 'Reach out',
                b: 'Call us or fill out our form. We\'ll schedule a quick conversation to understand what you\'re looking for and match you with the right therapist.',
              },
              {
                n: '02',
                t: 'Get set up',
                b: 'We\'ll send you a secure link to our HIPAA-compliant video platform, along with a few simple intake forms to complete before your first session.',
              },
              {
                n: '03',
                t: 'Meet your therapist',
                b: 'At your scheduled time, click the link. Your therapist will be there, and your first session will feel a lot like any first session — just from your living room.',
              },
            ].map((step, i) => (
              <div key={step.n} className={`step-item r d${i + 1}`}>
                <div className="step-num">{step.n}</div>
                <h3>{step.t}</h3>
                <p>{step.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Good fit */}
      <section className="fit-section">
        <div style={{ maxWidth: 720, marginBottom: '3rem' }}>
          <div className="eyebrow r">Is Teletherapy Right for You?</div>
          <h2 className="section-heading r d1">Who teletherapy works best for</h2>
          <p
            className="r d2"
            style={{
              fontSize: '1rem',
              color: 'var(--text-light)',
              fontWeight: 300,
              lineHeight: 1.85,
            }}
          >
            Teletherapy isn&apos;t just a fallback — for many clients it&apos;s actually the preferred way to work. Here&apos;s who tends to benefit most.
          </p>
        </div>

        <div className="fit-grid">
          <div className="fit-col r">
            <h3>Great for</h3>
            <ul className="fit-list yes">
              {[
                'Busy professionals with tight schedules',
                'Parents juggling childcare',
                'Clients in rural Michigan far from a quality therapist',
                'People with mobility or transportation barriers',
                'Anyone who opens up more easily from their own space',
                'Clients balancing in-person and virtual sessions',
              ].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="fit-col r d1">
            <h3>In-person may be a better fit if</h3>
            <ul className="fit-list no">
              {[
                'You\'re in acute crisis',
                'You\'re working through significant trauma with a trusted in-person provider',
                'You\'re doing play therapy with young children',
                'You don\'t have a reliably private, quiet space',
                'You simply prefer being in a room with someone',
              ].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <FAQSection
        faqs={faqs}
        heading="Teletherapy questions"
        schemaId="tele-faq"
      />

      <FinalCTA
        heading={<>Ready to get <em>started</em>?</>}
        body="Reach out today and we'll schedule your first teletherapy session. Available anywhere in Michigan, usually within the week."
      />
    </>
  );
}
