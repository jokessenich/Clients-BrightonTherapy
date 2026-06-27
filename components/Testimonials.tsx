import Script from 'next/script';
import GoogleRating from './GoogleRating';

export type Testimonial = {
  quote: string;
  author: string;
  /** Optional context line - e.g. "Google review" or a relationship note */
  context?: string;
  /** Optional star rating (usually 5) */
  rating?: number;
};

type Props = {
  eyebrow?: string;
  heading?: React.ReactNode;
  testimonials: Testimonial[];
  /** Layout variant */
  variant?: 'grid' | 'single';
  /** ID for JSON-LD schema script */
  schemaId?: string;
  /** Show the live Google rating badge above the cards */
  showRating?: boolean;
};

export default function Testimonials({
  eyebrow = "In Our Clients' Words",
  heading,
  testimonials,
  variant = 'grid',
  schemaId = 'reviews-schema',
  showRating = false,
}: Props) {
  // JSON-LD Review schema — individual reviews, attached to the business
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    name: 'William A. Presti Center For Families And Youth',
    review: testimonials.map((t) => ({
      '@type': 'Review',
      author: { '@type': 'Person', name: t.author },
      reviewBody: t.quote,
      reviewRating: t.rating
        ? {
            '@type': 'Rating',
            ratingValue: t.rating,
            bestRating: 5,
          }
        : undefined,
    })),
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue:
        testimonials.reduce((s, t) => s + (t.rating ?? 5), 0) / testimonials.length,
      reviewCount: testimonials.length,
    },
  };

  return (
    <section className={`testimonials ${variant === 'single' ? 'single' : ''}`}>
      <div className="testimonials-inner">
        {eyebrow && <div className="eyebrow r">{eyebrow}</div>}
        {heading && (
          <h2 className="testimonials-heading r d1">{heading}</h2>
        )}
        {showRating && (
          <div className="testimonials-rating r d2">
            <GoogleRating />
          </div>
        )}
        <div className={`testimonials-grid ${variant}`}>
          {testimonials.map((t, i) => (
            <figure
              key={i}
              className={`testimonial r ${i < 4 ? `d${i + 1}` : ''}`.trim()}
            >
              <span className="testimonial-mark" aria-hidden="true">
                &ldquo;
              </span>
              <blockquote className="testimonial-quote">{t.quote}</blockquote>
              <figcaption className="testimonial-meta">
                <div className="testimonial-author">— {t.author}</div>
                {t.context && (
                  <div className="testimonial-context">{t.context}</div>
                )}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
      <Script
        id={schemaId}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </section>
  );
}
