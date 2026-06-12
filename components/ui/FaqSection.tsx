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
    <section className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-10 py-12 md:py-14">
      <JsonLd data={schema} />
      <h2 className="font-heading text-3xl md:text-4xl font-light text-charcoal-900 mb-10">
        Frequently asked questions
      </h2>
      <dl className="border border-warm-300/60 divide-y divide-warm-300/60">
        {faqs.map((faq) => (
          <div key={faq.q} className="bg-warm-50 px-8 py-6">
            <dt className="font-heading font-light text-charcoal-900 text-base mb-2">{faq.q}</dt>
            <dd className="text-charcoal-600 text-sm leading-relaxed font-light">{faq.a}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
