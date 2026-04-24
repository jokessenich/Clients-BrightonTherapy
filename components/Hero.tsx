import RequestButton from './RequestButton';
import RevealOnMount from './RevealOnMount';
import SmartImage, { ImageRef } from './SmartImage';
import { SITE } from '@/lib/site';

type Props = {
  eyebrow: string;
  title: React.ReactNode;
  subtitle: string;
  bgImage: ImageRef;
  bgAlt?: string;
  showStats?: boolean;
  inner?: boolean;
  /** Pass true for the site's top-of-page hero on first paint (LCP). */
  priority?: boolean;
};

export default function Hero({
  eyebrow,
  title,
  subtitle,
  bgImage,
  bgAlt,
  showStats = false,
  inner = false,
  priority = true,
}: Props) {
  return (
    <section className={`hero ${inner ? 'hero-inner' : ''}`}>
      <div className="hero-bg">
        <SmartImage
          image={bgImage}
          alt={bgAlt ?? bgImage.alt}
          fill
          priority={priority}
          sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: 'center 75%' }}
        />
      </div>
      <div className="hero-content">
        <RevealOnMount as="div" className="hero-eyebrow">
          {eyebrow}
        </RevealOnMount>
        <RevealOnMount as="h1" className="hero-h1" delay={1}>
          {title}
        </RevealOnMount>
        <RevealOnMount as="p" className="hero-sub" delay={2}>
          {subtitle}
        </RevealOnMount>
        <RevealOnMount as="div" className="hero-actions" delay={3}>
          <a href={`tel:${SITE.phoneRaw}`} className="btn btn-fill">
            Call {SITE.phone}
          </a>
          <RequestButton className="btn btn-outline" />
        </RevealOnMount>
      </div>
      {showStats && (
        <div className="hero-meta">
          <div className="hero-stat">
            <div className="hero-stat-value">$82</div>
            <div className="hero-stat-label">Flat Fee</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-value">HSA</div>
            <div className="hero-stat-label">Qualified</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-value">All Ages</div>
            <div className="hero-stat-label">Welcome</div>
          </div>
        </div>
      )}
    </section>
  );
}
