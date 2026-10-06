import { Plus } from 'lucide-react';
import JsonLd from '@/components/JsonLd';
import PageContainer from '@/components/ui/PageContainer';
import SectionHeading from '@/components/ui/SectionHeading';

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
    <section className="border-t border-line">
      <PageContainer className="py-20 md:py-24">
        <JsonLd data={schema} />
        <div className="grid gap-10 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] lg:gap-20">
          <SectionHeading subtitle="FAQ" className="">
            Frequently asked questions
          </SectionHeading>
          <div className="border-t border-line">
            {faqs.map((faq, i) => (
              <details key={faq.q} className="group border-b border-line" open={i === 0}>
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-6 [&::-webkit-details-marker]:hidden">
                  <span className="font-heading text-lg md:text-xl font-bold text-ink leading-snug">{faq.q}</span>
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center border border-line text-ink transition-colors duration-300 group-open:border-accent group-open:bg-accent group-open:text-on-accent">
                    <Plus size={16} strokeWidth={2.25} aria-hidden className="transition-transform duration-300 group-open:rotate-45" />
                  </span>
                </summary>
                <p className="pb-7 pr-14 text-muted text-base leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
