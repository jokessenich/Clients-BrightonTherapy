import RequestButton from './RequestButton';
import { SITE } from '@/lib/site';

type Props = {
  eyebrow?: string;
  heading: React.ReactNode;
  body: string;
};

export default function FinalCTA({
  eyebrow = 'Take the First Step',
  heading,
  body,
}: Props) {
  return (
    <section className="cta" id="contact">
      <div className="cta-inner">
        <div className="eyebrow r">{eyebrow}</div>
        <h2 className="cta-heading r d1">{heading}</h2>
        <p className="cta-body r d2">{body}</p>
        <a href={`tel:${SITE.phoneRaw}`} className="cta-phone r d3">
          {SITE.phone}
        </a>
        <p className="cta-note r d3">Call our center today</p>
        <div className="cta-btns r d4">
          <a href={`tel:${SITE.phoneRaw}`} className="btn btn-fill">
            Call Now
          </a>
          <RequestButton className="btn btn-dark" />
        </div>
      </div>
    </section>
  );
}
