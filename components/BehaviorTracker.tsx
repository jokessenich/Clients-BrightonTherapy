'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * BehaviorTracker — centralized, privacy-respecting behavior events for Umami.
 *
 * Uses event delegation on the document, so it automatically covers every
 * link/button across the site without instrumenting each component. Captures
 * the "Crazy Egg insight layer" (where people click, how far they scroll,
 * where they get frustrated) as data we can actually read — not heatmaps.
 *
 * Every event is tagged with the current page so we know WHERE conversions
 * and friction happen, not just that they happened.
 */
export default function BehaviorTracker() {
  const pathname = usePathname();

  useEffect(() => {
    const track = (event: string, data?: Record<string, unknown>) => {
      if (typeof window !== 'undefined' && (window as any).umami) {
        (window as any).umami.track(event, { page: pathname, ...data });
      }
    };

    // ── Click delegation: call links, CTAs, dead clicks, rage clicks ──
    let lastClickTarget: EventTarget | null = null;
    let lastClickTime = 0;
    let rapidClickCount = 0;

    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      const link = target.closest('a');
      const button = target.closest('button');
      const interactive = link || button;

      // Rage-click detection: 3+ clicks on the same element within 1s.
      const now = Date.now();
      if (target === lastClickTarget && now - lastClickTime < 1000) {
        rapidClickCount += 1;
        if (rapidClickCount >= 3) {
          const label =
            interactive?.textContent?.trim().slice(0, 40) ||
            target.tagName.toLowerCase();
          track('rage-click', { element: label });
          rapidClickCount = 0;
        }
      } else {
        rapidClickCount = 1;
      }
      lastClickTarget = target;
      lastClickTime = now;

      // Dead click: a click that isn't on (or inside) anything interactive.
      if (!interactive) {
        // Ignore clicks on plain layout containers that no one expects to act.
        // Only log dead clicks on elements that LOOK clickable (have a pointer
        // cursor) to avoid noise from people clicking whitespace/text.
        const cursor = window.getComputedStyle(target).cursor;
        if (cursor === 'pointer') {
          track('dead-click', {
            element: target.textContent?.trim().slice(0, 40) || target.tagName,
          });
        }
        return;
      }

      // Call-link clicks — labeled by where on the page they sit.
      if (link && link.getAttribute('href')?.startsWith('tel:')) {
        // Infer location from the nearest landmark for useful segmentation.
        let location = 'body';
        if (link.closest('nav')) location = 'nav';
        else if (link.closest('footer')) location = 'footer';
        else if (link.closest('[class*="hero"]')) location = 'hero';
        else if (link.closest('[class*="mobile-cta"]')) location = 'mobile-bar';
        else if (link.closest('[class*="sidebar"]')) location = 'sidebar';
        track('call-click', { location });
        return;
      }

      // Text-link (SMS) clicks — same landmark labeling as call clicks.
      if (link && link.getAttribute('href')?.startsWith('sms:')) {
        let location = 'body';
        if (link.closest('nav')) location = 'nav';
        else if (link.closest('footer')) location = 'footer';
        else if (link.closest('[class*="hero"]')) location = 'hero';
        else if (link.closest('[class*="mobile-cta"]')) location = 'mobile-bar';
        else if (link.closest('[class*="sidebar"]')) location = 'sidebar';
        else if (link.closest('[class*="cta"]')) location = 'final-cta';
        track('text-click', { location });
        return;
      }

      // "Request Appointment" / primary CTA clicks.
      const text = interactive.textContent?.toLowerCase() || '';
      if (text.includes('request') || text.includes('appointment')) {
        track('request-cta-click');
        return;
      }

      // Affordable-care / $82 interest clicks.
      const href = link?.getAttribute('href') || '';
      if (href.includes('affordable-care') || text.includes('$82')) {
        track('pricing-interest-click');
      }
    };

    document.addEventListener('click', onClick, true);

    // ── Scroll depth: fire once each at 25/50/75/100% per page ──
    const fired = new Set<number>();
    const thresholds = [25, 50, 75, 100];

    const onScroll = () => {
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;
      if (scrollable <= 0) return;
      const pct = Math.round((window.scrollY / scrollable) * 100);
      for (const t of thresholds) {
        if (pct >= t && !fired.has(t)) {
          fired.add(t);
          track('scroll-depth', { depth: t });
        }
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      document.removeEventListener('click', onClick, true);
      window.removeEventListener('scroll', onScroll);
    };
  }, [pathname]);

  return null;
}
