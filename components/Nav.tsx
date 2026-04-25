'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { NAV_LINKS, SITE } from '@/lib/site';
import RequestButton from './RequestButton';

export default function Nav() {
  const [stuck, setStuck] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <nav className={`nav ${stuck ? 'stuck' : ''}`}>
      <Link href="/" className="nav-brand" aria-label="Home">
        <Image
          src="/images/logo.png"
          alt="William A. Presti Center logo"
          width={200}
          height={200}
          className="nav-logo-img"
          priority
        />
        <span className="nav-brand-text">
          William A. Presti Center
          <small>For Families &amp; Youth</small>
        </span>
      </Link>
      <div className="nav-right">
        <ul
          className="nav-links"
          style={
            mobileOpen
              ? {
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'absolute',
                  top: '100%',
                  left: 0,
                  right: 0,
                  background: 'rgba(254,252,249,0.97)',
                  padding: '1.5rem 2rem',
                  gap: '1rem',
                  backdropFilter: 'blur(20px)',
                  boxShadow: '0 8px 30px rgba(0,0,0,0.08)',
                }
              : undefined
          }
        >
          {NAV_LINKS.map((link) => {
            const active =
              pathname === link.href ||
              (link.href !== '/' && pathname.startsWith(link.href));
            return (
              <li key={link.href}>
                <Link href={link.href} className={active ? 'active' : ''}>
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
        <RequestButton className="nav-cta-secondary">
          Request Appointment
        </RequestButton>
        <a
          href={`tel:${SITE.phoneRaw}`}
          className="nav-phone"
          aria-label={`Call ${SITE.phoneDisplay}`}
        >
          {SITE.phone}
        </a>
        <button
          className="hamburger"
          aria-label="Menu"
          onClick={() => setMobileOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  );
}
