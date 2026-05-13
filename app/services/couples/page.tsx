import type { Metadata } from 'next';
import Link from 'next/link';
import Hero from '@/components/Hero';
import CredsBar from '@/components/CredsBar';
import FinalCTA from '@/components/FinalCTA';
import FAQSection from '@/components/FAQSection';
import SmartImage from '@/components/SmartImage';
import { IMAGES, SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Couples Therapy & Coaching in Brighton, MI',
  description:
    'Two paths for couples at the William A. Presti Center — clinical couples counseling for deeper work, and certified couples coaching for forward-focused practical tools. Find the right fit for your relationship.',
  alternates: { canonical: `${SITE.url}/services/couples` },
};

const faqs = [
  {
    q: 'What\'s the difference between couples counseling and couples coaching?',
    a: 'Couples counseling is clinical work led by a licensed therapist. It\'s the right path when there are deeper issues at play — trust ruptures, recurring conflict patterns, mental health concerns, or the relationship is in real difficulty. Couples coaching is a forward-focused, structured approach led by our Certified Couples Coach. It works well when the relationship is fundamentally healthy and you want practical tools and accountability to make it stronger.',
  },
  {
    q: 'How do I know which one is right for us?',
    a: 'A quick conversation when you call is usually enough to figure it out. If you\'re not sure, start with counseling — it\'s the broader scope. We can always shift gears if coaching turns out to be a better fit.',
  },
  {
    q: 'Can we switch between the two?',
    a: 'Yes. Our coaches work in conjunction with our clinical team. If you start with coaching and realize you need deeper clinical work, the transition is seamless. We facilitate an internal referral with a therapist who is the best fit for you.',
  },
  {
    q: 'Do you accept insurance?',
    a: 'We are a flat-fee practice at $82 per session for couples counseling. Couples coaching is generally not billable to insurance, but most HSA accounts cover both. We can provide superbills for out-of-network reimbursement if your plan offers it.',
  },
  {
    q: 'What if my partner isn\'t sure about coming?',
    a: 'That\'s common. Sometimes a single session — just to ask questions — is enough to ease that. You\'re also welcome to start individually; relationship work often shifts even when only one partner is in the room at first.',
  },
];

export default function CouplesOverviewPage() {
  return (
    <>
      <Hero
        eyebrow="For Couples"
        title={
          <>
            Two paths for <em>couples</em>
          </>
        }
        subtitle="At the William A. Presti Center we offer both clinical counseling and certified coaching for couples — different approaches for different needs. We'll help you figure out which one fits."
        bgImage={IMAGES.couples2}
        bgAlt="Two people holding hands at sunset"
        inner
      />

      <CredsBar />

      <section className="intro">
        <div>
          <div className="eyebrow r">Find Your Fit</div>
          <h2 className="intro-heading r d1">
            Couples counseling, or couples coaching?
          </h2>
          <div className="intro-body r d2">
            <p>
              We offer two paths because couples come to us for different
              reasons. Some are working through real difficulty and need
              clinical care. Others are in a fundamentally good place and want
              tools and accountability to make a strong relationship stronger.
              Both are valid reasons to be here, and the right path depends on
              where you and your partner are.
            </p>
            <p>
              Below is a short guide. If you&apos;re still not sure after
              reading, give us a call. A short conversation is usually all it
              takes to figure out which one fits.
            </p>
          </div>
        </div>
        <div className="intro-right r d3">
          <SmartImage
            image={IMAGES.couples}
            alt="A couple sitting together in soft natural light"
            className="intro-img"
            sizes="(max-width: 1024px) 100vw, 28rem"
          />
          <p className="intro-img-caption">
            Both paths are led by experienced practitioners who know the
            relationship terrain.
          </p>
        </div>
      </section>

      <section className="offering-section">
        <div className="offering-inner">
          <div className="eyebrow r">Two Paths</div>
          <h2
            className="section-heading r d1"
            style={{ marginBottom: '1rem' }}
          >
            Which one is for you?
          </h2>
          <div className="offering-grid">
            <Link
              href="/services/couples-counseling"
              className="offering-card r d1"
              style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
            >
              <div className="o-aud">Clinical</div>
              <h3>Couples Counseling</h3>
              <p>
                Led by a licensed therapist. The right path when there are
                deeper issues at play — trust ruptures, recurring conflict,
                emotional disconnection, or mental health concerns affecting
                the relationship. Counseling helps you understand what&apos;s
                underneath the patterns and rebuild trust.
              </p>
              <p style={{ marginTop: '1.2rem' }}>
                <strong>Good fit for:</strong> Couples with longer-term
                unresolved conflicts, infidelity, major life challenges, or
                deeper communication breakdowns.
              </p>
              <span
                style={{
                  display: 'inline-block',
                  marginTop: '1.5rem',
                  color: 'var(--rust)',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  letterSpacing: '0.02em',
                }}
              >
                Learn more about Couples Counseling →
              </span>
            </Link>
            <Link
              href="/services/couples-coaching"
              className="offering-card r d2"
              style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
            >
              <div className="o-aud">Forward-Focused</div>
              <h3>Couples Coaching</h3>
              <p>
                Led by our Certified Couples Coach. Forward-focused, structured
                work for couples who want practical tools and accountability.
                It works well when the relationship is fundamentally healthy
                and you want to deepen connection, improve communication, or
                navigate a transition together.
              </p>
              <p style={{ marginTop: '1.2rem' }}>
                <strong>Good fit for:</strong> Pre-marital couples, new
                parents, couples in healthy relationships seeking growth, or
                couples wanting to reconnect and improve their dynamics.
              </p>
              <span
                style={{
                  display: 'inline-block',
                  marginTop: '1.5rem',
                  color: 'var(--rust)',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  letterSpacing: '0.02em',
                }}
              >
                Learn more about Couples Coaching →
              </span>
            </Link>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />

      <FinalCTA
        heading={<>Not sure which is the <em>right fit</em>?</>}
        body={`Give us a call at ${SITE.phone}. A short conversation is usually all it takes to know whether counseling or coaching makes more sense for you.`}
      />
    </>
  );
}
