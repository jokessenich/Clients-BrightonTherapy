import Link from 'next/link';
import { SITE, SERVICES } from '@/lib/site';
import GoogleRating from './GoogleRating';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-grid">
          <div>
            <div className="footer-brand">{SITE.shortName}</div>
            <p className="footer-brand-text">
              Compassionate, evidence-based mental health care for individuals,
              couples, and families. Serving Brighton, MI and surrounding
              communities in Livingston &amp; Oakland Counties since {SITE.foundingYear}.
            </p>
            <div className="footer-rating">
              <GoogleRating />
            </div>
          </div>
          <div>
            <div className="footer-col-title">Services</div>
            <ul className="footer-links">
              {SERVICES.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`}>{s.shortTitle}</Link>
                </li>
              ))}
              <li>
                <Link href="/services">View all services →</Link>
              </li>
            </ul>
          </div>
          <div>
            <div className="footer-col-title">About</div>
            <ul className="footer-links">
              <li><Link href="/about">About the Center</Link></li>
              <li><Link href="/staff">Our Staff</Link></li>
              <li><Link href="/teletherapy">Teletherapy</Link></li>
              <li><Link href="/family-workshop">Family Workshop</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <div className="footer-col-title">Contact</div>
            <ul className="footer-links">
              <li>
                <a href={`tel:${SITE.phoneRaw}`}>{SITE.phone}</a>
              </li>
              <li>{SITE.address.street}</li>
              <li>
                {SITE.address.city}, {SITE.address.state} {SITE.address.zip}
              </li>
              <li>{SITE.hours}</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span className="footer-copy">
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </span>
          <div className="footer-legal">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
