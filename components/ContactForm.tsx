'use client';

import { useState } from 'react';
import { SITE } from '@/lib/site';

// ─────────────────────────────────────────────────────────────────────────
// FORMSPREE ENDPOINT — submissions POST here. The destination email is set
// in the Formspree dashboard (not in code). To change where leads are sent,
// update it there.
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xykvbwnj';
// ─────────────────────────────────────────────────────────────────────────

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(false);
  const [started, setStarted] = useState(false);

  // Fire once, when the user first interacts with any field. Paired with
  // 'contact-form-submit', this gives us the start→submit abandonment funnel.
  const handleFirstFocus = () => {
    if (started) return;
    setStarted(true);
    if (typeof window !== 'undefined' && (window as any).umami) {
      (window as any).umami.track('contact-form-start', {
        page: window.location.pathname,
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(false);
    setSubmitting(true);

    const formEl = e.currentTarget;
    const formData = new FormData(formEl);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: formData,
      });

      if (!res.ok) throw new Error('Request failed');

      // Track the conversion in Umami (a submitted request is a real lead).
      if (typeof window !== 'undefined' && (window as any).umami) {
        (window as any).umami.track('contact-form-submit', {
          service: (formData.get('service') as string) || 'unspecified',
          page: window.location.pathname,
        });
      }

      setSubmitted(true);
    } catch {
      setError(true);
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="form-success show" style={{ padding: '2rem 0' }}>
        <div className="form-success-icon">✓</div>
        <h3>Thank you</h3>
        <p>
          We&apos;ve received your request and will be in touch within one
          business day. If you need immediate support, please call{' '}
          <a
            href={`tel:${SITE.phoneRaw}`}
            style={{ color: 'var(--rust)', fontWeight: 600 }}
          >
            {SITE.phone}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} onFocus={handleFirstFocus}>
      <div className="form-group">
        <label className="form-label" htmlFor="c-name">
          Full Name
        </label>
        <input
          className="form-input"
          type="text"
          id="c-name"
          name="name"
          placeholder="Your name"
          required
        />
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="c-email">
          Email
        </label>
        <input
          className="form-input"
          type="email"
          id="c-email"
          name="email"
          placeholder="you@email.com"
          required
        />
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="c-phone">
          Phone <span className="form-optional">(optional)</span>
        </label>
        <input
          className="form-input"
          type="tel"
          id="c-phone"
          name="phone"
          placeholder="(810) 555-0123"
        />
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="c-service">
          What brings you in? <span className="form-optional">(optional)</span>
        </label>
        <select
          className="form-select"
          id="c-service"
          name="service"
          defaultValue=""
        >
          <option value="">Not sure yet / tell us below</option>
          <option>Individual Therapy</option>
          <option>Couples Counseling</option>
          <option>Child &amp; Teen Therapy</option>
          <option>Anxiety &amp; Depression</option>
          <option>Trauma / PTSD</option>
          <option>ADD / ADHD</option>
          <option>Autism Spectrum Support</option>
          <option>Life Coaching</option>
          <option>Teletherapy</option>
          <option>Other / Not Sure</option>
        </select>
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="c-msg">
          Message
        </label>
        <textarea
          className="form-textarea"
          id="c-msg"
          name="message"
          placeholder="Tell us a bit about what you're looking for..."
        />
      </div>
      {error && (
        <p
          style={{
            color: '#b91c1c',
            fontSize: '0.9rem',
            marginBottom: '1rem',
          }}
        >
          Something went wrong sending your request. Please try again, or call
          us at{' '}
          <a href={`tel:${SITE.phoneRaw}`} style={{ color: 'var(--rust)', fontWeight: 600 }}>
            {SITE.phone}
          </a>
          .
        </p>
      )}
      <button type="submit" className="form-submit" disabled={submitting}>
        {submitting ? 'Sending…' : 'Send Request'}
      </button>
    </form>
  );
}
