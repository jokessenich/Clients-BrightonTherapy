'use client';

import { useEffect, useRef, useState } from 'react';
import { SITE } from '@/lib/site';
import { SIDEBAR_EVENT } from '@/lib/sidebar';

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener(SIDEBAR_EVENT, handler);
    return () => window.removeEventListener(SIDEBAR_EVENT, handler);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: wire to Formspree, Netlify Forms, or your form handler
    // Example: await fetch('https://formspree.io/f/YOUR_ID', { method: 'POST', body: new FormData(e.currentTarget) });
    setSubmitted(true);
  };

  const close = () => {
    setOpen(false);
    setTimeout(() => setSubmitted(false), 400);
  };

  return (
    <>
      <div
        className={`sidebar-overlay ${open ? 'open' : ''}`}
        onClick={close}
        aria-hidden="true"
      />
      <aside
        className={`sidebar ${open ? 'open' : ''}`}
        role="dialog"
        aria-label="Request appointment"
        aria-hidden={!open}
      >
        <div className="sidebar-header">
          <span className="sidebar-title">Request Appointment</span>
          <button
            className="sidebar-close"
            aria-label="Close form"
            onClick={close}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="sidebar-body">
          {!submitted && (
            <>
              <p className="sidebar-intro">
                Fill out the form below and we&apos;ll get back to you within
                one business day. You can also call us directly at{' '}
                <a
                  href={`tel:${SITE.phoneRaw}`}
                  style={{ color: 'var(--rust)', fontWeight: 600 }}
                >
                  {SITE.phone}
                </a>
                .
              </p>
              <form ref={formRef} onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="form-label" htmlFor="fname">
                    Full Name
                  </label>
                  <input
                    className="form-input"
                    type="text"
                    id="fname"
                    name="name"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="femail">
                    Email
                  </label>
                  <input
                    className="form-input"
                    type="email"
                    id="femail"
                    name="email"
                    placeholder="you@email.com"
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="fphone">
                    Phone
                  </label>
                  <input
                    className="form-input"
                    type="tel"
                    id="fphone"
                    name="phone"
                    placeholder="(810) 555-0123"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="fservice">
                    Service Interest
                  </label>
                  <select
                    className="form-select"
                    id="fservice"
                    name="service"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select a service...
                    </option>
                    <option>Individual Therapy</option>
                    <option>Couples Counseling</option>
                    <option>Child &amp; Teen Therapy</option>
                    <option>Group Therapy</option>
                    <option>Anxiety &amp; Depression</option>
                    <option>Trauma / PTSD</option>
                    <option>Addiction</option>
                    <option>Life Coaching</option>
                    <option>Teletherapy</option>
                    <option>Other / Not Sure</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="fmsg">
                    Message
                  </label>
                  <textarea
                    className="form-textarea"
                    id="fmsg"
                    name="message"
                    placeholder="Tell us a little about what you're looking for..."
                  />
                </div>
                <button type="submit" className="form-submit">
                  Send Request
                </button>
              </form>
            </>
          )}
          {submitted && (
            <div className="form-success show">
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
          )}
        </div>
        <div className="sidebar-footer">
          <p>
            Or call directly: <a href={`tel:${SITE.phoneRaw}`}>{SITE.phone}</a>
          </p>
        </div>
      </aside>
    </>
  );
}
