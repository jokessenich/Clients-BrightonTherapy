import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import CredsBar from '@/components/CredsBar';
import ContactForm from '@/components/ContactForm';
import { IMAGES, SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Contact | Therapy Appointments in Brighton, MI',
  description:
    'Contact the William A. Presti Center in Brighton, MI. Call (810) 626-3282 or request an appointment online. Evening hours and teletherapy available throughout Michigan.',
  alternates: { canonical: `${SITE.url}/contact` },
};

export default function ContactPage() {
  return (
    <>
      <Hero
        eyebrow="Get in Touch"
        title={
          <>
            Ready when <em>you</em> are
          </>
        }
        subtitle="Reach out by phone or with the form below. Your first call is always free — typically 10 to 15 minutes to ask questions and see if we're the right fit. We respond within one business day."
        bgImage={IMAGES.contact}
        bgAlt="Warm, inviting space"
        inner
      />

      <CredsBar />

      <section className="contact-grid">
        <div>
          <div className="eyebrow r">Contact Details</div>
          <h2 className="section-heading r d1" style={{ marginBottom: '2rem' }}>
            We&apos;re here to help
          </h2>

          <div className="contact-info-row r d2">
            <div className="contact-info-icon">☏</div>
            <div>
              <div className="contact-info-label">Phone</div>
              <a
                href={`tel:${SITE.phoneRaw}`}
                className="contact-info-value"
                style={{ color: 'var(--rust)' }}
              >
                {SITE.phone}
              </a>
            </div>
          </div>

          <div className="contact-info-row r d3">
            <div className="contact-info-icon">✦</div>
            <div>
              <div className="contact-info-label">Address</div>
              <div className="contact-info-value">
                {SITE.address.street}
                <br />
                {SITE.address.city}, {SITE.address.state} {SITE.address.zip}
              </div>
            </div>
          </div>

          <div className="contact-info-row r d4">
            <div className="contact-info-icon">⏱</div>
            <div>
              <div className="contact-info-label">Hours</div>
              <div className="contact-info-value">{SITE.hours}</div>
            </div>
          </div>

          <div className="contact-info-row r d5">
            <div className="contact-info-icon">✉</div>
            <div>
              <div className="contact-info-label">Appointments</div>
              <div className="contact-info-value">
                Evening &amp; virtual available on request
              </div>
            </div>
          </div>

          <div
            className="r"
            style={{
              marginTop: '3rem',
              padding: '1.75rem',
              background: 'var(--dark)',
              color: 'var(--white)',
            }}
          >
            <div
              style={{
                fontSize: '0.68rem',
                fontWeight: 600,
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: 'var(--rust-light)',
                marginBottom: '0.75rem',
              }}
            >
              In Crisis?
            </div>
            <p
              style={{
                fontSize: '0.95rem',
                lineHeight: 1.65,
                color: 'rgba(255,255,255,0.85)',
                fontWeight: 300,
              }}
            >
              If you or someone you love is in immediate danger, call{' '}
              <strong style={{ color: 'var(--white)' }}>988</strong> (Suicide &amp;
              Crisis Lifeline) or <strong style={{ color: 'var(--white)' }}>911</strong>.
              You can also text <strong style={{ color: 'var(--white)' }}>HOME</strong> to{' '}
              <strong style={{ color: 'var(--white)' }}>741741</strong> to reach the Crisis
              Text Line.
            </p>
          </div>
        </div>

        <div className="contact-form-card r d2">
          <h2
            style={{
              fontFamily: 'var(--serif)',
              fontSize: '2rem',
              color: 'var(--dark)',
              marginBottom: '0.5rem',
              fontWeight: 400,
            }}
          >
            Request an appointment
          </h2>
          <p
            style={{
              fontSize: '0.95rem',
              color: 'var(--text-light)',
              fontWeight: 300,
              lineHeight: 1.7,
              marginBottom: '2rem',
            }}
          >
            Fill out the form and we&apos;ll reach out within one business day.
          </p>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
