import Hero from '@/components/Hero';
import CredsBar from '@/components/CredsBar';
import FinalCTA from '@/components/FinalCTA';
import AreasServed from '@/components/AreasServed';
import FAQSection from '@/components/FAQSection';
import SmartImage from '@/components/SmartImage';
import { IMAGES, SITE } from '@/lib/site';

export const metadata = {
  title: 'Therapy & Coaching in Brighton, MI | Couples, Family, Teen & Adult',
  description:
    'Hope and healing for every family. Compassionate, evidence-based therapy for individuals, couples, teens, and children in Brighton, MI. $82 flat-fee sessions. HSA qualified. In-person and teletherapy.',
  alternates: { canonical: SITE.url },
};

const homeFaqs = [
  {
    q: 'Do you offer a free consultation?',
    a: 'Yes. Your first phone call with us is always free — typically 10 to 15 minutes. We use it to understand what you\'re looking for, answer your questions, and figure out together whether we\'re the right fit. No commitment, no pressure.',
  },
  {
    q: 'How much does a therapy session cost at the Presti Center?',
    a: 'We charge a flat fee of $82 per session. Many clients use HSA funds, and our pricing is especially helpful for people with high-deductible insurance plans.',
  },
  {
    q: 'Do you offer evening or virtual appointments?',
    a: 'Yes. We have evening hours that work around school and work schedules, and we offer secure teletherapy throughout Michigan for clients who prefer to meet from home.',
  },
  {
    q: 'What ages do you work with?',
    a: 'We see children, teens, adults, couples, and families. Our therapists and certified coaches specialize in care across the lifespan.',
  },
  {
    q: 'What areas do you serve in person?',
    a: 'Our office is in Brighton, MI. We commonly serve clients from Howell, Milford, South Lyon, Hartland, Fenton, Pinckney, Whitmore Lake, and Hamburg Township across Livingston and Oakland Counties.',
  },
  {
    q: 'How do I get started?',
    a: 'You can call us at (810) 626-3282 or use our request form. We typically respond within one business day to schedule your first session.',
  },
];

export default function Home() {
  return (
    <>
      <Hero
        eyebrow="Brighton, Michigan"
        title={
          <>
            Hope and healing<br />
            for <em>every</em> family
          </>
        }
        subtitle="Compassionate, evidence-based therapy for individuals, couples, and families. Serving Livingston & Oakland Counties with in-person and teletherapy sessions."
        bgImage={IMAGES.hero}
        bgAlt="Brick building with painted mural asking 'How are you, really?'"
        showStats
      />

      <CredsBar />

      {/* INTRO */}
      <section className="intro" id="about">
        <div>
          <div className="eyebrow r">A Healing Community</div>
          <h2 className="intro-heading r d1">
            A warm place to be <em>heard,</em>
            <br />
            validated, and supported
          </h2>
          <div className="intro-body r d2">
            <p>
              At William A. Presti Center For Families And Youth, we serve
              individuals, couples, and families across Brighton, Howell,
              Milford, South Lyon, Hartland, Fenton, Pinckney, Whitmore Lake,
              and Hamburg Township with compassionate, evidence-based mental
              health care.
            </p>
            <p>
              Whether you&apos;re navigating relationship challenges, parenting
              stress, or emotional struggles, our licensed therapists offer
              personalized support tailored to your unique needs. Our goal is
              to help you build stronger connections, foster resilience, and
              create lasting change — one conversation at a time.
            </p>
          </div>
        </div>
        <div className="intro-right r d3">
          <SmartImage
            image={IMAGES.warmChat}
            alt="Two women in a warm, supportive conversation with a therapist"
            className="intro-img"
            sizes="(max-width: 1024px) 100vw, 28rem"
          />
          <p className="intro-img-caption">
            Compassionate support for couples, families, and individuals
          </p>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="philosophy">
        <div className="philosophy-inner">
          <div className="philosophy-quote-side r">
            <p className="philosophy-quote">
              We believe that everyone can heal from emotional pain in a caring
              and warm environment. We want you to feel heard and validated.
            </p>
            <p className="philosophy-attr">— Our Philosophy</p>
          </div>
          <div className="philosophy-body r d1">
            <p>
              Our therapists will compassionately listen and validate your
              experience. We understand how emotional pain can cause issues in
              many parts of a person&apos;s life.
            </p>
            <p>
              We will teach you new and healthy ways to cope with trauma,
              depression, anxiety, anger, and other emotional issues. We have a
              dynamic, committed team of therapists and Certified Coaches that
              will help you realize your strengths and live an empowered life.
            </p>
            <p>
              Our center offers a variety of groups for children, teens, and
              adults — because healing often happens in community, not just in
              isolation.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="services" id="services">
        <div className="services-header">
          <div className="eyebrow r">What We Treat</div>
          <h2 className="services-title r d1">Services for all ages</h2>
          <p className="services-note r d2">
            We specialize in therapeutic services for adults, teens, and
            children. Every treatment plan is personalized.
          </p>
        </div>

        <div className="svc-block r">
          <div className="svc-img-col">
            <SmartImage
              image={IMAGES.couples}
              alt="Adult couple in counseling with a therapist"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              style={{ objectFit: 'cover' }}
            />
            <div className="svc-img-label">Adults &amp; Couples</div>
          </div>
          <div className="svc-list-col">
            <div className="svc-cat">Adults &amp; Couples</div>
            <ul className="svc-list">
              {[
                'Anxiety',
                'Depression',
                'Trauma',
                'Relationship Issues',
                'Grief & Loss',
                'Life Transitions',
                'Addiction',
                'Divorce',
                'Codependency',
                'Low Self-Esteem',
              ].map((item) => (
                <li key={item} className="svc-item">
                  <span className="svc-name">{item}</span>
                  <svg className="svc-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="svc-block r">
          <div className="svc-img-col">
            <SmartImage
              image={IMAGES.teen}
              alt="Teen in session with a therapist"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              style={{ objectFit: 'cover' }}
            />
            <div className="svc-img-label">Children &amp; Teens</div>
          </div>
          <div className="svc-list-col">
            <div className="svc-cat">Children &amp; Teens</div>
            <ul className="svc-list">
              {[
                'ADD / ADHD',
                'Anxiety',
                'Depression',
                'Trauma',
                'Addiction Issues',
                'Internet & Gaming Addiction',
                'Peer Issues',
                'Autism Spectrum Disorder',
                'Gender Identity Issues',
                'Emotional Dysregulation',
              ].map((item) => (
                <li key={item} className="svc-item">
                  <span className="svc-name">{item}</span>
                  <svg className="svc-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* MOSAIC */}
      <section className="mosaic">
        <div className="mosaic-text">
          <h2 className="mosaic-heading r">
            We are not just trained to help — we are{' '}
            <em>truly committed</em> to you
          </h2>
          <p className="mosaic-body r d1">
            When you come to our center, you will enter a warm, caring
            environment. If you are looking for therapists and coaches that
            believe in you, call us for an appointment.
          </p>
        </div>
        <div className="mosaic-grid">
          <div className="mosaic-img mosaic-tall r">
            <SmartImage
              image={IMAGES.therapist}
              alt="Experienced therapist in a warm individual session"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              style={{ objectFit: 'cover' }}
            />
            <span className="mosaic-label">Individual</span>
          </div>
          <div className="mosaic-img r d1">
            <SmartImage
              image={IMAGES.couples}
              alt="Couple in counseling session"
              fill
              sizes="(max-width: 1024px) 50vw, 25vw"
              style={{ objectFit: 'cover' }}
            />
            <span className="mosaic-label">Couples</span>
          </div>
          <div className="mosaic-img r d2">
            <SmartImage
              image={IMAGES.teen}
              alt="Teenager in conversation with therapist"
              fill
              sizes="(max-width: 1024px) 50vw, 25vw"
              style={{ objectFit: 'cover' }}
            />
            <span className="mosaic-label">Teens</span>
          </div>
          <div className="mosaic-img r d3">
            <SmartImage
              image={IMAGES.group}
              alt="Supportive conversation between two women"
              fill
              sizes="(max-width: 1024px) 50vw, 25vw"
              style={{ objectFit: 'cover' }}
            />
            <span className="mosaic-label">Group</span>
          </div>
          <div className="mosaic-img r d4">
            <SmartImage
              image={IMAGES.couples2}
              alt="Young person in therapy session"
              fill
              sizes="(max-width: 1024px) 50vw, 25vw"
              style={{ objectFit: 'cover' }}
            />
            <span className="mosaic-label">Youth</span>
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="why" id="why">
        <div className="why-top">
          <h2 className="why-heading r">
            Why families choose
            <br />
            our center
          </h2>
          <p className="why-body r d1">
            We make quality mental health care accessible and convenient. No
            surprises, no complexity — just compassionate professionals ready
            to help.
          </p>
        </div>
        <div className="why-grid">
          {[
            { icon: '$82', title: 'Flat Fee', desc: 'Transparent pricing. Ideal for people with high deductibles.' },
            { icon: 'HSA', title: 'HSA Qualified', desc: 'Use your Health Savings Account for sessions.', size: '1.6rem' },
            { icon: 'PM', title: 'Evening Hours', desc: 'Appointments that fit around work and school schedules.' },
            { icon: '↗', title: 'Teletherapy', desc: 'Secure virtual sessions from the comfort of home.', size: '1.5rem' },
            { icon: '∞', title: 'All Ages', desc: 'Children, teens, adults, couples, and families welcome.' },
          ].map((it, i) => (
            <div key={it.title} className={`why-item r ${i ? `d${i}` : ''}`}>
              <div
                className="why-icon"
                style={it.size ? { fontSize: it.size } : undefined}
              >
                {it.icon}
              </div>
              <div className="why-item-title">{it.title}</div>
              <div className="why-item-desc">{it.desc}</div>
            </div>
          ))}
        </div>
      </section>

      <AreasServed />

      {/* WHAT TO EXPECT — lowers activation barrier */}
      <section className="testimonial-section">
        <div className="testimonial-inner" style={{ maxWidth: 760, textAlign: 'left' }}>
          <div className="testimonial-eyebrow r" style={{ textAlign: 'left' }}>What Happens When You Call</div>
          <h2 className="r d1" style={{
            fontFamily: 'var(--serif)',
            fontSize: 'clamp(1.8rem, 2.6vw, 2.4rem)',
            color: 'var(--dark)',
            lineHeight: 1.2,
            marginBottom: '2rem',
            fontWeight: 400,
            letterSpacing: '-0.01em',
          }}>
            No script. No pressure. Just a real conversation.
          </h2>
          <div className="r d2" style={{
            fontSize: '1rem',
            color: 'var(--text-light)',
            fontWeight: 300,
            lineHeight: 1.85,
          }}>
            <p style={{ marginBottom: '1.2rem' }}>
              When you call <a href={`tel:${SITE.phoneRaw}`} style={{ color: 'var(--rust)', fontWeight: 600 }}>{SITE.phone}</a>, you&apos;ll reach a real person — not a phone tree. We&apos;ll spend a few minutes understanding what brought you here and what you&apos;re looking for.
            </p>
            <p style={{ marginBottom: '1.2rem' }}>
              From there, we match you with a therapist or coach we genuinely think will be a good fit, and we get you scheduled — usually within the same week. First sessions are about getting to know each other, not diving into the deep end.
            </p>
            <p>
              That&apos;s it. No insurance hoops, no long intake forms before we&apos;ve even met. Just a doorway in.
            </p>
          </div>
        </div>
      </section>

      <FAQSection faqs={homeFaqs} />

      <FinalCTA
        heading={<>Start a new <em>journey</em></>}
        body="Call us and take the first step to personal fulfillment and happiness. Evening appointments and teletherapy appointments available upon request."
      />
    </>
  );
}
