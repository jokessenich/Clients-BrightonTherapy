import Script from 'next/script';

export type FAQ = {
  q: string;
  a: string;
};

type Props = {
  eyebrow?: string;
  heading?: string;
  faqs: FAQ[];
  schemaId?: string;
};

export default function FAQSection({
  eyebrow = 'Common Questions',
  heading = 'Frequently asked questions',
  faqs,
  schemaId = 'faq-schema',
}: Props) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.a,
      },
    })),
  };

  return (
    <section className="faq-section">
      <div className="eyebrow r">{eyebrow}</div>
      <h2 className="section-heading r d1" style={{ marginBottom: '2.5rem' }}>
        {heading}
      </h2>
      {faqs.map((faq, idx) => (
        <details key={idx} className="faq-item r">
          <summary className="faq-q">{faq.q}</summary>
          <div className="faq-a">{faq.a}</div>
        </details>
      ))}
      <Script
        id={schemaId}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </section>
  );
}
