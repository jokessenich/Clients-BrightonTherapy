'use client';

import Link from 'next/link';

/**
 * Price + reassurance CTA. Sits high on the homepage (directly under Services)
 * because scroll data shows fewer than half of visitors reach the pricing
 * content further down, and "how much does a session cost" is the most-clicked
 * FAQ on the site. Links to /affordable-care for the full insurance / HSA story.
 */
export default function PriceStrip() {
  const trackPricing = () => {
    if (typeof window !== 'undefined' && (window as any).umami) {
      (window as any).umami.track('pricing-interest-click', {
        location: 'home-price-strip',
      });
    }
  };

  return (
    <section className="price-strip">
      <div className="price-strip-inner">
        <div className="price-strip-lead r">
          <div className="price-strip-fee">
            <span className="price-strip-amt">$82</span>
            <span className="price-strip-per">per session</span>
          </div>
        </div>

        <div className="price-strip-body r d1">
          <h2 className="price-strip-heading">
            One flat fee. <em>No surprises.</em>
          </h2>
          <p className="price-strip-sub">
            The same $82 for individual, couples, family, and teen sessions —
            no intake fees, no add-ons. <strong>Eligible for insurance
            reimbursement</strong> (we provide an invoice with the diagnostic
            codes to submit to your plan), and HSA/FSA qualified.
          </p>
          <ul className="price-strip-points">
            <li>Insurance reimbursement eligible</li>
            <li>HSA &amp; FSA qualified</li>
            <li>Ideal for high-deductible plans</li>
          </ul>
        </div>

        <div className="price-strip-cta r d2">
          <Link
            href="/affordable-care"
            className="btn btn-fill"
            onClick={trackPricing}
          >
            How our pricing works
          </Link>
          <p className="price-strip-note">
            Insurance, HSA &amp; why we charge $82 →
          </p>
        </div>
      </div>
    </section>
  );
}
