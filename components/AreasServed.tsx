import Link from 'next/link';
import { SITE } from '@/lib/site';

export default function AreasServed() {
  return (
    <section className="areas">
      <div className="areas-inner">
        <div>
          <h2 className="areas-heading r">
            Serving communities across Livingston, Oakland &amp; Washtenaw Counties
          </h2>
          <p className="areas-sub r d1">
            In-person sessions in Brighton, MI. Teletherapy available statewide
            in Michigan.
          </p>
        </div>
        <div className="areas-list r d2">
          {SITE.serviceAreas.map((area) => (
            <span key={area} className="area-tag">
              {area}
            </span>
          ))}
        </div>
        <p className="areas-sub r d3" style={{ marginTop: '1.25rem' }}>
          <Link href="/areas-served">Explore the areas we serve →</Link>
        </p>
      </div>
    </section>
  );
}
