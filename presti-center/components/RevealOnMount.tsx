'use client';

import { useEffect, useRef, ElementType } from 'react';

type Props = {
  as?: ElementType;
  className?: string;
  delay?: 1 | 2 | 3 | 4 | 5;
  children: React.ReactNode;
  observe?: boolean;
};

export default function RevealOnMount({
  as: Tag = 'div',
  className = '',
  delay,
  children,
  observe = false,
}: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!observe) {
      // Reveal immediately on mount (next tick for transition to apply)
      requestAnimationFrame(() => el.classList.add('v'));
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) el.classList.add('v');
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [observe]);

  const delayClass = delay ? `d${delay}` : '';
  return (
    // @ts-expect-error - dynamic ref typing
    <Tag ref={ref} className={`r ${delayClass} ${className}`.trim()}>
      {children}
    </Tag>
  );
}
