'use client';

import { useState } from 'react';
import { SITE } from '@/lib/site';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: wire to Formspree, Netlify Forms, or your form handler
    setSubmitted(true);
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
    <form onSubmit={handleSubmit}>
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
          Phone
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
        <label className="form-label" htmlFor="c-pref">
          Preferred Contact Method
        </label>
        <select className="form-select" id="c-pref" name="preferred" defaultValue="email">
          <option value="email">Email</option>
          <option value="phone">Phone</option>
          <option value="text">Text</option>
        </select>
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="c-service">
          What brings you in?
        </label>
        <select
          className="form-select"
          id="c-service"
          name="service"
          defaultValue=""
        >
          <option value="" disabled>
            Select a service...
          </option>
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
        <label className="form-label" htmlFor="c-time">
          Ideal Appointment Time
        </label>
        <input
          className="form-input"
          type="text"
          id="c-time"
          name="ideal_time"
          placeholder="e.g., Weekday evenings, Saturday mornings"
        />
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
      <button type="submit" className="form-submit">
        Send Request
      </button>
    </form>
  );
}
