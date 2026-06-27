import Link from 'next/link';
import type { Metadata } from 'next';
import { SERVICE_CONTENT } from '@/lib/services-content';
import { IMAGES, SITE } from '@/lib/site';
import Hero from '@/components/Hero';
import CredsBar from '@/components/CredsBar';
import FinalCTA from '@/components/FinalCTA';

export const metadata: Metadata = {
  title: 'Services | Therapy & Coaching for Every Stage of Life',
  description:
    'Explore our full range of therapy and coaching services in Brighton, MI — for adults, teens, children, and couples. Anxiety, depression, ADHD, trauma, and more. $82 flat fee.',
  alternates: { canonical: `${SITE.url}/services` },
};

const groups = [
  {
    title: 'Children & Teens',
    audience: 'Developmentally-attuned, family-aware care',
    services: ['childrens-therapy', 'teenage-therapy', 'teen-coaching'],
  },
  {
    title: 'Adults',
    audience: 'For adult individuals and partnerships',
    services: ['adult-counseling', 'anxiety-therapy', 'depression-therapy', 'couples-counseling', 'couples-coaching', 'coaching-and-mentoring'],
  },
  {
    title: 'All Ages',
    audience: 'Specialized support across the lifespan',
    services: ['add-therapy', 'autism-spectrum-disorder'],
  },
];

export default function ServicesIndex() {
  return (
    <>
      <Hero
        eyebrow="What We Treat"
        title={
          <>
            Care for <em>every</em> stage of life
          </>
        }
        subtitle="Whatever brought you here, we're glad you came. Our therapists and certified coaches offer compassionate support for children, teens, adults, couples, and families across Brighton, MI."
        bgImage={IMAGES.couples2}
        bgAlt="Two people holding hands at sunset"
        inner
      />
      <CredsBar />

      {groups.map((group, gi) => (
        <section key={group.title} className="svc-index-section">
          <div className="svc-index-header">
            <div className="eyebrow r">{group.audience}</div>
            <h2 className="svc-index-heading r d1">{group.title}</h2>
          </div>
          <div className="svc-index-grid">
            {group.services.map((slug, si) => {
              const delayClass = si < 4 ? `d${si + 1}` : '';
              const svc = SERVICE_CONTENT.find((s) => s.slug === slug);
              if (!svc) return null;
              return (
                <Link
                  key={slug}
                  href={`/services/${slug}`}
                  className={`svc-index-card r ${delayClass} ${gi % 2 === 0 ? 'alt' : ''}`.trim()}
                >
                  <div className="svc-audience">{svc.audience}</div>
                  <div className="svc-title">{svc.shortTitle}</div>
                  <p className="svc-summary">{svc.intro.slice(0, 160)}…</p>
                  <span className="svc-more">Learn more →</span>
                </Link>
              );
            })}
          </div>
        </section>
      ))}

      <FinalCTA
        heading={<>Find the right <em>fit</em> for you</>}
        body="Not sure which service is the right starting point? Give us a call. We'll help you figure out what makes sense for your situation, no pressure."
      />
    </>
  );
}
