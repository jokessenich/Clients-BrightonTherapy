import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import CredsBar from '@/components/CredsBar';
import FinalCTA from '@/components/FinalCTA';
import AreasServed from '@/components/AreasServed';
import { IMAGES, SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'About | A Healing Community in Brighton, Michigan',
  description:
    'Meet the William A. Presti Center For Families And Youth — a warm, evidence-based mental health practice in Brighton, MI serving Livingston and Oakland Counties since 1995.',
  alternates: { canonical: `${SITE.url}/about` },
};

export default function AboutPage() {
  return (
    <>
      <Hero
        eyebrow="About Our Center"
        title={
          <>
            A place built for <em>healing</em>
          </>
        }
        subtitle="The Presti Center has been a quiet anchor for Brighton families for years — a place where people are heard, not just treated. This is who we are and how we got here."
        bgImage={IMAGES.about}
        bgAlt="Warm, welcoming therapy office interior"
        inner
      />

      <CredsBar />

      <section className="intro">
        <div>
          <div className="eyebrow r">Our Story</div>
          <h2 className="intro-heading r d1">
            Built on the belief that <em>everyone deserves</em> to be heard
          </h2>
          <div className="intro-body r d2">
            <p>
              The William A. Presti Center For Families And Youth was founded
              on a simple idea: that emotional pain is real, that people heal
              best in safe and caring environments, and that good therapy
              should be accessible — not buried under bureaucracy or priced out
              of reach.
            </p>
            <p>
              For years, our therapists and certified coaches have walked
              alongside individuals, couples, and families across Livingston
              and Oakland Counties. We&apos;ve sat with people through grief,
              anxiety, betrayal, transitions, and the hard, ordinary moments
              of adulthood, parenting, and growing up. We&apos;ve also sat with
              them through the breakthroughs.
            </p>
            <p>
              That work has shaped us. It&apos;s why our pricing is flat and
              transparent. It&apos;s why we offer evening hours and
              teletherapy. And it&apos;s why you&apos;ll find a real human on
              the other end of the phone, not a script.
            </p>
          </div>
        </div>
        <div className="intro-right r d3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="intro-img"
            src={IMAGES.warmChat}
            alt="A warm conversation in a Presti Center therapy room"
            loading="lazy"
          />
          <p className="intro-img-caption">
            Compassionate care, every time you walk in
          </p>
        </div>
      </section>

      <section className="philosophy">
        <div className="philosophy-inner">
          <div className="philosophy-quote-side r">
            <p className="philosophy-quote">
              We are not just trained to work with a variety of emotional
              issues. We are truly committed to you.
            </p>
            <p className="philosophy-attr">— Our Commitment</p>
          </div>
          <div className="philosophy-body r d1">
            <p>
              Every therapist and coach at the Presti Center shares one core
              belief: that the relationship between client and clinician is
              the most important predictor of meaningful change. So we lead
              with that.
            </p>
            <p>
              We use evidence-based methods — CBT, DBT skills, EFT,
              trauma-informed care, mindfulness, and more — but we&apos;re not
              dogmatic about any single model. We meet you where you are and
              build the work around you, not the other way around.
            </p>
            <p>
              And we hold the line on accessibility. Flat fees. HSA-friendly.
              Evening appointments. Teletherapy that actually works. Care
              that&apos;s designed around real lives.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="values-section">
        <div className="eyebrow r">What Guides Us</div>
        <h2 className="section-heading r d1">Our values</h2>
        <div className="values-grid">
          {[
            {
              title: 'Warmth, first',
              body: 'Therapy doesn\'t work without trust. We start every relationship with care, presence, and respect — and we never lose track of those.',
            },
            {
              title: 'Evidence-based, not rigid',
              body: 'We trust the research, but we also trust the human in front of us. Treatment is shaped by what works for you, not by a manual.',
            },
            {
              title: 'Accessible by design',
              body: 'Flat $82 sessions. HSA-eligible. Evening hours. Teletherapy. We remove obstacles wherever we can.',
            },
            {
              title: 'No shame, ever',
              body: 'You don\'t have to earn our care or prove your problems are big enough. Whatever brought you here is worth taking seriously.',
            },
            {
              title: 'Strengths, not just struggles',
              body: 'We pay as much attention to what\'s working as to what\'s not. Real change is built on what\'s already strong in you.',
            },
            {
              title: 'In community',
              body: 'Healing happens in relationships — partner, family, friend, neighbor. We work with the whole picture, not the isolated symptom.',
            },
          ].map((v, i) => (
            <div key={v.title} className={`value-item r d${(i % 4) + 1}`}>
              <h3>{v.title}</h3>
              <p>{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      <AreasServed />

      <FinalCTA
        heading={<>Come see for <em>yourself</em></>}
        body="The best way to know if our center is right for you is to talk to us. We're warm, real, and never high-pressure."
      />
    </>
  );
}
