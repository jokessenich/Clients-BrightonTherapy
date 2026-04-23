'use client';

import { useEffect } from 'react';

export default function ScrollObserver() {
  useEffect(() => {
    // Only enable the hide/reveal behavior once JS is actually running
    document.body.classList.add('js-reveal');

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
    document
      .querySelectorAll('.r:not(.v):not([data-no-observe])')
      .forEach((el) => obs.observe(el));

    // Fail-safe: if for any reason an element never hits the viewport
    // (e.g., inside a closed <details>, or observer missed it), reveal
    // everything after 1.5s so nothing stays permanently hidden.
    const fallback = window.setTimeout(() => {
      document.querySelectorAll('.r:not(.v)').forEach((el) => {
        el.classList.add('v');
      });
    }, 1500);

    return () => {
      obs.disconnect();
      window.clearTimeout(fallback);
    };
  }, []);
  return null;
}
