import JsonLd from '@/components/JsonLd';

export interface Faq {
  q: string;
  a: string;
}

export default function FaqSection({ faqs }: { faqs: Faq[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <JsonLd data={schema} />
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-maroon-800 mb-10">
        Frequently Asked Questions
      </h2>
      <dl className="space-y-px bg-cream-300">
        {faqs.map((faq) => (
          <div key={faq.q} className="bg-white px-8 py-6">
            <dt className="font-heading font-bold text-maroon-800 text-base mb-2">{faq.q}</dt>
            <dd className="text-maroon-800/60 text-sm leading-relaxed">{faq.a}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
