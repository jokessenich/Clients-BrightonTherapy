import { notFound } from 'next/navigation';
import Link from 'next/link';
import Script from 'next/script';
import type { Metadata } from 'next';
import { SERVICE_CONTENT, getServiceBySlug } from '@/lib/services-content';
import { SITE } from '@/lib/site';
import RequestButton from '@/components/RequestButton';
import FAQSection from '@/components/FAQSection';
import FinalCTA from '@/components/FinalCTA';
import CredsBar from '@/components/CredsBar';
import SmartImage from '@/components/SmartImage';
import Testimonials from '@/components/Testimonials';

export function generateStaticParams() {
  return SERVICE_CONTENT.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const svc = getServiceBySlug(params.slug);
  if (!svc) return {};
  return {
    title: svc.metaTitle,
    description: svc.metaDesc,
    alternates: {
      canonical: `${SITE.url}/services/${svc.slug}`,
    },
    openGraph: {
      title: svc.metaTitle,
      description: svc.metaDesc,
      url: `${SITE.url}/services/${svc.slug}`,
      type: 'article',
    },
  };
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const svc = getServiceBySlug(params.slug);
  if (!svc) return notFound();

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalTherapy',
    name: svc.title,
    description: svc.metaDesc,
    url: `${SITE.url}/services/${svc.slug}`,
    provider: {
      '@type': 'MedicalBusiness',
      name: SITE.name,
      telephone: SITE.phoneRaw,
      address: {
        '@type': 'PostalAddress',
        streetAddress: SITE.address.street,
        addressLocality: SITE.address.city,
        addressRegion: SITE.address.state,
        postalCode: SITE.address.zip,
      },
    },
  };

  return (
    <>
      {/* Inner hero */}
      <section className="hero hero-inner">
        <div className="hero-bg">
          <SmartImage
            image={svc.heroImage}
            alt={svc.heroAlt}
            fill
            priority
            sizes="100vw"
            style={{ objectFit: 'cover', objectPosition: 'center 75%' }}
          />
        </div>
        <div className="hero-content">
          <div className="hero-eyebrow r v">{svc.audience}</div>
          <h1 className="hero-h1 r d1 v">{svc.title}</h1>
          <p className="hero-sub r d2 v">{svc.intro}</p>
          <div className="hero-actions r d3 v">
            <a href={`tel:${SITE.phoneRaw}`} className="btn btn-fill">
              Call {SITE.phone}
            </a>
            <RequestButton className="btn btn-outline" />
          </div>
        </div>
      </section>

      <CredsBar />

      <nav className="crumb" aria-label="Breadcrumb">
        <Link href="/">Home</Link>
        <span className="sep">/</span>
        <Link href="/services">Services</Link>
        <span className="sep">/</span>
        <span style={{ color: 'var(--rust)' }}>{svc.shortTitle}</span>
      </nav>

      {/* Body */}
      <section className="service-page">
        <div className="service-grid">
          <div className="service-prose">
            {svc.sections.map((sec, i) => (
              <div key={sec.heading} className="r svc-section">
                <span className="svc-section-num">
                  {String(i + 1).padStart(2, '0')} — Section
                </span>
                <h2>{sec.heading}</h2>
                {sec.body.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            ))}

            <div className="r svc-section">
              <span className="svc-section-num">
                {String(svc.sections.length + 1).padStart(2, '0')} — How we work
              </span>
              <h2>Our approach</h2>
              <ul>
                {svc.approach.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
            </div>

            <div className="r svc-section">
              <span className="svc-section-num">
                {String(svc.sections.length + 2).padStart(2, '0')} — Who this is for
              </span>
              <h2>Is this the right fit?</h2>
              <ul>
                {svc.whoFor.map((w) => (
                  <li key={w}>{w}</li>
                ))}
              </ul>
            </div>
          </div>

          <aside className="svc-aside">
            <div className="svc-card">
              <div className="svc-card-meta">{svc.audience}</div>
              <div className="svc-card-title">{svc.shortTitle}</div>
              <ul className="svc-card-list">
                <li>$82 flat fee</li>
                <li>HSA qualified</li>
                <li>Evening appointments</li>
                <li>Teletherapy available</li>
              </ul>
              <RequestButton className="btn btn-fill" />
              <a href={`tel:${SITE.phoneRaw}`} className="svc-card-phone">
                {SITE.phone}
              </a>
            </div>
          </aside>
        </div>
      </section>

      {svc.testimonial && (
        <Testimonials
          eyebrow="Real words from real clients"
          testimonials={[svc.testimonial]}
          variant="single"
          schemaId={`review-${svc.slug}`}
        />
      )}

      <FAQSection
        faqs={svc.faqs}
        eyebrow={`Common Questions`}
        heading={`Questions about ${svc.shortTitle.toLowerCase()}`}
        schemaId={`faq-${svc.slug}`}
      />

      {/* Related */}
      {svc.related.length > 0 && (
        <section className="related-section">
          <div className="related-inner">
            <div className="eyebrow">Related Services</div>
            <h2 className="services-title" style={{ marginBottom: '2rem' }}>
              You might also explore
            </h2>
            <div className="related-grid">
              {svc.related.map((slug) => {
                const r = getServiceBySlug(slug);
                if (!r) return null;
                return (
                  <Link
                    key={slug}
                    href={`/services/${slug}`}
                    className="related-card"
                  >
                    <div className="r-aud">{r.audience}</div>
                    <div className="r-title">{r.shortTitle}</div>
                    <p className="r-body">{r.intro.slice(0, 130)}…</p>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      <FinalCTA
        heading={
          <>
            Ready to take the <em>first step</em>?
          </>
        }
        body={`Reach out today to learn more about ${svc.shortTitle.toLowerCase()} or schedule a first session. We're here when you're ready.`}
      />

      <Script
        id={`svc-schema-${svc.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </>
  );
}
