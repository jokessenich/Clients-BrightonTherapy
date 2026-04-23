import { SITE } from '@/lib/site';

export default function MobileCTA() {
  return (
    <a
      href={`tel:${SITE.phoneRaw}`}
      className="mobile-cta"
      aria-label={`Call ${SITE.phoneDisplay}`}
    >
      Call us — {SITE.phone}
    </a>
  );
}
