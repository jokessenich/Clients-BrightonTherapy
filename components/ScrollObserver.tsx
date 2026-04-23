'use client';

import { useEffect } from 'react';

export default function ScrollObserver() {
  useEffect(() => {
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
    return () => obs.disconnect();
  }, []);
  return null;
}
