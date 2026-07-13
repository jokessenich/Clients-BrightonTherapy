import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import CredsBar from '@/components/CredsBar';
import FinalCTA from '@/components/FinalCTA';
import FAQSection from '@/components/FAQSection';
import SmartImage from '@/components/SmartImage';
import { IMAGES, SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Affordable Therapy in Brighton, MI | $82 Flat Fee',
  description:
    'A flat $82 per session. No insurance, no surprise bills, HSA-qualified. The William A. Presti Center has been private-pay since the start — because therapy works best when the conversation is between you and your therapist, not your insurance company.',
  alternates: { canonical: `${SITE.url}/affordable-care` },
};

const faqs = [
  {
    q: 'Why don\'t you take insurance?',
    a: 'Two reasons. The first is clinical — insurance companies require a diagnosis to pay, usually after the first session, and they get input on what counts as covered care. We don\'t want a third party deciding how long you get to see a therapist or whether what brought you in qualifies. The second is about labels. We don\'t want to assign a mental health diagnosis to a child or teen just to get a session reimbursed. A 10-year-old working through their parents\' divorce doesn\'t need a diagnosis — they need someone to talk to. Private pay lets us focus on that.',
  },
  {
    q: 'Is it actually more affordable than going through insurance?',
    a: 'For many people, yes — especially anyone with a high-deductible plan. If your deductible is $3,000, $5,000, or more, you\'re paying full price out of pocket for therapy anyway, and you may end up paying more per session than our $82 flat fee. Plus there\'s no copay confusion, no surprise bills, and no end-of-year billing reconciliation.',
  },
  {
    q: 'How long is a session?',
    a: 'We typically schedule 50–60 minutes per session. Children sometimes need a little less time, but not always. The $82 covers the session in full — no separate intake fees, no per-form charges, no add-ons.',
  },
  {
    q: 'Can I use my HSA or FSA?',
    a: 'Yes. Therapy at the Center is HSA and FSA qualified. Most plans cover it without pre-authorization. We provide receipts after every session for your records.',
  },
  {
    q: 'Can I get reimbursed by my insurance?',
    a: 'In most cases, yes. Our services are eligible for insurance reimbursement. We provide an invoice with the appropriate diagnostic codes that you submit to your insurer. We can\'t guarantee reimbursement — that\'s between you and your plan — but with the major insurance companies, our clients haven\'t had issues. If you want to confirm ahead of time, call your plan and ask: "What are my out-of-network mental health benefits?"',
  },
  {
    q: 'Is the fee the same for couples and family sessions?',
    a: 'Yes. Our flat fee applies across the full range of services we offer — individual therapy, couples counseling, family work, teen therapy, and coaching. The fee is per session, not per person.',
  },
  {
    q: 'What if I can\'t afford $82?',
    a: 'Call us. We\'d rather have a conversation than have you not reach out at all.',
  },
];

export default function AffordableCarePage() {
  return (
    <>
      <Hero
        eyebrow="Brighton, Michigan"
        title={
          <>
            A flat <em>$82</em> per session
          </>
        }
        subtitle="No insurance, no surprise bills, HSA-qualified. We've been private-pay since the start — because the conversation that matters most is the one between you and your therapist."
        bgImage={IMAGES.quietMorning}
        bgAlt="A quiet morning light through a window"
        inner
      />

      <CredsBar />

      <section className="intro">
        <div>
          <div className="eyebrow r">Our Pricing Philosophy</div>
          <h2 className="intro-heading r d1">
            One price. No insurance. No surprises.
          </h2>
          <div className="intro-body r d2">
            <p>
              Sessions are a flat $82 — for individual therapy, couples
              counseling, family work, teen therapy, and coaching. There are
              no intake fees, no per-form charges, no separate billing for
              the first session. $82 is what you pay every time.
            </p>
            <p>
              We&apos;ve been a private-pay practice since the beginning. It&apos;s
              a choice we made, and it&apos;s a choice that shapes how the
              work feels. Therapy is between you and your therapist —
              not you, your therapist, and an insurance company asking
              for a diagnosis after the first hour.
            </p>
          </div>
        </div>
        <div className="intro-right r d3">
          <SmartImage
            image={IMAGES.quietMorning}
            alt="A quiet, peaceful setting"
            className="intro-img"
            sizes="(max-width: 1024px) 100vw, 28rem"
          />
          <p className="intro-img-caption">
            $82 every time. No coding gymnastics, no surprise bills.
          </p>
        </div>
      </section>

      <section
        className="intro"
        style={{
          background: 'var(--stone-soft)',
          borderTop: '1px solid var(--stone)',
          borderBottom: '1px solid var(--stone)',
        }}
      >
        <div>
          <div className="eyebrow r">In Johanna&apos;s Words</div>
          <h2 className="intro-heading r d1">
            Why we built it this way
          </h2>
          <div className="intro-body r d2">
            <p
              style={{
                fontStyle: 'italic',
                fontSize: '1.15rem',
                lineHeight: 1.75,
                color: 'var(--dark)',
                borderLeft: '3px solid var(--rust)',
                paddingLeft: '1.5rem',
                marginBottom: '1.25rem',
              }}
            >
              &ldquo;Early in my career, my supervisor asked for a young
              client&apos;s diagnosis. I told him I didn&apos;t have one — he
              was a 10-year-old whose parents were getting divorced, and he
              just needed someone to talk to. My supervisor pushed me to give
              him a label anyway, so we could bill insurance. I said no. I
              wasn&apos;t putting a mental-health diagnosis on a child who
              didn&apos;t need one. That moment stayed with me.&rdquo;
            </p>
            <p
              style={{
                fontStyle: 'italic',
                fontSize: '1.15rem',
                lineHeight: 1.75,
                color: 'var(--dark)',
                borderLeft: '3px solid var(--rust)',
                paddingLeft: '1.5rem',
                marginBottom: '1.5rem',
              }}
            >
              &ldquo;Rates that put therapy out of reach for working people,
              with no insurance option, leave a lot of folks with no way to
              get help. I built this practice the opposite way — affordable,
              transparent, available. I think that&apos;s how mental health
              care should work.&rdquo;
            </p>
            <p
              style={{
                fontSize: '0.95rem',
                color: 'var(--text-light)',
                marginBottom: '1.5rem',
              }}
            >
              — Johanna Ciak, Executive Director
            </p>
            <p>
              Two convictions, one practice. Going private pay means we never
              have to choose between honoring what a client actually needs
              and what an insurance company will reimburse. And keeping our
              rate where it is means people can actually walk through the
              door. Some clients come in for a clear clinical reason; some
              come because they want a thoughtful space during a hard season.
              Both are valid, and neither needs a billing code — or a
              luxury-tier price — to justify it.
            </p>
          </div>
        </div>
      </section>

      <section className="offering-section">
        <div className="offering-inner">
          <div className="eyebrow r">High Deductible? Read This.</div>
          <h2
            className="section-heading r d1"
            style={{ marginBottom: '1rem' }}
          >
            For most people on high-deductible plans, $82 is the cheaper option
          </h2>
          <p
            className="r d2"
            style={{
              fontSize: '1rem',
              color: 'var(--text-light)',
              fontWeight: 300,
              lineHeight: 1.85,
              maxWidth: 680,
              marginBottom: '2.5rem',
            }}
          >
            If your plan has a $3,000, $5,000, or $7,000 deductible, you&apos;re
            paying out of pocket for therapy anyway until you hit that number.
            And the per-session price for an in-network therapist can run
            higher than ours. The math often works out in favor of skipping
            insurance entirely — and you don&apos;t have to deal with copays,
            prior authorizations, or year-end billing surprises.
          </p>
          <div className="offering-grid">
            <div className="offering-card r d1">
              <div className="o-aud">50–60 minutes</div>
              <h3>A real therapy session</h3>
              <p>
                Sessions are scheduled at 50–60 minutes. Children may need a
                little less, but not always. The session is the session.
              </p>
            </div>
            <div className="offering-card r d2">
              <div className="o-aud">No add-ons</div>
              <h3>One price, every time</h3>
              <p>
                $82 covers the session in full. No separate intake fees, no
                per-form charges, no end-of-year reconciliations. You always
                know what your next session costs.
              </p>
            </div>
            <div className="offering-card r d3">
              <div className="o-aud">HSA &amp; FSA</div>
              <h3>Tax-advantaged eligible</h3>
              <p>
                Therapy with us qualifies for HSA and FSA reimbursement. Most
                plans cover it without pre-authorization. We provide receipts
                after every session.
              </p>
            </div>
            <div className="offering-card r d4">
              <div className="o-aud">Out-of-Network</div>
              <h3>Superbills available</h3>
              <p>
                Many plans reimburse part of out-of-network therapy. We
                provide superbills (receipts with diagnostic codes) that you
                can submit to your insurer for partial reimbursement.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />

      <FinalCTA
        heading={
          <>
            Let&apos;s talk about what <em>fits</em> for you
          </>
        }
        body={`Call ${SITE.phone}. If you have a high-deductible plan, an HSA, or want to talk through whether we're a fit financially, we're happy to walk through it with you.`}
      />
    </>
  );
}
