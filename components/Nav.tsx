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

  const isHome = pathname === '/';

  return (
    <nav className={`nav ${stuck ? 'stuck' : ''} ${isHome ? '' : 'nav-solid'}`}>
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
          className={`nav-links ${mobileOpen ? 'mobile-open' : ''}`}
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
          {(pathname === '/'
            ? NAV_LINKS
            : [{ href: '/', label: 'Home' }, ...NAV_LINKS]
          ).map((link) => {
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
        <a
          href={`tel:${SITE.phoneRaw}`}
          className="nav-phone-icon"
          aria-label={`Call ${SITE.phoneDisplay}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="22"
            height="22"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
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
