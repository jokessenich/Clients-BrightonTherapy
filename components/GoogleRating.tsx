import { SITE } from '@/lib/site';

type Props = {
  /** Visual variant. 'inline' fits in headers/footers; 'block' is a centered standalone block. */
  variant?: 'inline' | 'block';
  /** Optional theme override; 'light' is for use on dark backgrounds. */
  theme?: 'default' | 'light';
};

/**
 * Live Google rating + review count badge.
 * Numbers come from SITE.google so they update in one place.
 */
export default function GoogleRating({ variant = 'inline', theme = 'default' }: Props) {
  const { rating, reviewCount, reviewUrl } = SITE.google;
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.4;

  return (
    <a
      href={reviewUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`google-rating ${variant} ${theme}`}
      aria-label={`Rated ${rating} out of 5 stars on Google with ${reviewCount} reviews. Opens in a new tab.`}
    >
      <span className="google-rating-stars" aria-hidden="true">
        {Array.from({ length: 5 }).map((_, i) => {
          const isFull = i < fullStars;
          const isHalf = i === fullStars && hasHalf;
          return (
            <svg
              key={i}
              className={`google-rating-star ${isFull ? 'full' : isHalf ? 'half' : 'empty'}`}
              viewBox="0 0 24 24"
              width="16"
              height="16"
            >
              <defs>
                {isHalf && (
                  <linearGradient id={`half-${i}`}>
                    <stop offset="50%" stopColor="currentColor" />
                    <stop offset="50%" stopColor="transparent" />
                  </linearGradient>
                )}
              </defs>
              <path
                d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                fill={isFull ? 'currentColor' : isHalf ? `url(#half-${i})` : 'none'}
                stroke="currentColor"
                strokeWidth={isFull ? 0 : 1.5}
              />
            </svg>
          );
        })}
      </span>
      <span className="google-rating-text">
        <strong>{rating.toFixed(1)}</strong>
        <span className="google-rating-divider" aria-hidden="true">·</span>
        <span>{reviewCount} Google reviews</span>
      </span>
    </a>
  );
}
