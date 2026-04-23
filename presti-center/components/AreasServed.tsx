import { SITE } from '@/lib/site';

export default function AreasServed() {
  return (
    <section className="areas">
      <div className="areas-inner">
        <div>
          <h2 className="areas-heading r">
            Serving communities across Livingston &amp; Oakland Counties
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
      </div>
    </section>
  );
}
