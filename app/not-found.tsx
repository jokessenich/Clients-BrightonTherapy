import Link from 'next/link';
import type { Metadata } from 'next';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Page Not Found',
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main
      style={{
        minHeight: '70vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '6rem 1.5rem',
        textAlign: 'center',
      }}
    >
      <div style={{ maxWidth: 560 }}>
        <div
          style={{
            fontFamily: 'var(--sans)',
            fontSize: '0.7rem',
            fontWeight: 600,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: 'var(--rust)',
            marginBottom: '1.5rem',
          }}
        >
          Page not found
        </div>
        <h1
          style={{
            fontFamily: 'var(--serif)',
            fontSize: 'clamp(2.4rem, 4vw, 3.4rem)',
            fontWeight: 400,
            lineHeight: 1.1,
            color: 'var(--dark)',
            marginBottom: '1.25rem',
            letterSpacing: '-0.02em',
          }}
        >
          We couldn&apos;t find that page
        </h1>
        <p
          style={{
            fontSize: '1.05rem',
            lineHeight: 1.7,
            color: 'var(--text-light)',
            fontWeight: 300,
            marginBottom: '2.5rem',
          }}
        >
          The page you&apos;re looking for may have moved or no longer exists.
          Here are some places that might help.
        </p>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1rem',
            justifyContent: 'center',
            marginBottom: '2.5rem',
          }}
        >
          <Link
            href="/"
            style={{
              padding: '0.95rem 2rem',
              background: 'var(--rust)',
              color: 'var(--white)',
              textDecoration: 'none',
              fontSize: '0.85rem',
              fontWeight: 600,
              letterSpacing: '0.03em',
            }}
          >
            Return Home
          </Link>
          <Link
            href="/services"
            style={{
              padding: '0.95rem 2rem',
              border: '1.5px solid var(--rust)',
              color: 'var(--rust)',
              textDecoration: 'none',
              fontSize: '0.85rem',
              fontWeight: 600,
              letterSpacing: '0.03em',
            }}
          >
            View Services
          </Link>
        </div>
        <p
          style={{
            fontSize: '0.9rem',
            color: 'var(--text-light)',
            fontWeight: 300,
          }}
        >
          Or call us directly at{' '}
          <a
            href={`tel:${SITE.phoneRaw}`}
            style={{ color: 'var(--rust)', fontWeight: 600 }}
          >
            {SITE.phone}
          </a>
        </p>
      </div>
    </main>
  );
}
