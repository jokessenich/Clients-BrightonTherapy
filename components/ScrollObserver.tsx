'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollObserver() {
  const pathname = usePathname();

  useEffect(() => {
    // Only enable the hide/reveal behavior once JS is actually running
    document.body.classList.add('js-reveal');

    // Reset: any element from a previous page that's still in memory but
    // wasn't yet revealed can stay marked. New page content gets observed fresh.
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('v');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
    );

    // Delay one frame to let the new route's DOM render, then observe everything
    const raf = requestAnimationFrame(() => {
      document
        .querySelectorAll('.r:not(.v):not([data-no-observe])')
        .forEach((el) => obs.observe(el));
    });

    // Fail-safe: reveal anything still hidden after 1.5s
    const fallback = window.setTimeout(() => {
      document.querySelectorAll('.r:not(.v)').forEach((el) => {
        el.classList.add('v');
      });
    }, 1500);

    return () => {
      cancelAnimationFrame(raf);
      obs.disconnect();
      window.clearTimeout(fallback);
    };
  }, [pathname]);

  return null;
}
