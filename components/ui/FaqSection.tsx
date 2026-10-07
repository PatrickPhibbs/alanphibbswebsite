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
    <section className="bg-paper border-t border-line">
      <PageContainer className="py-20 md:py-28">
        <JsonLd data={schema} />
        <div className="grid gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-20">
          <SectionHeading className="lg:sticky lg:top-28 lg:self-start">Frequently asked questions</SectionHeading>
          <div className="border-t border-line">
            {faqs.map((faq, i) => (
              <details key={faq.q} className="group border-b border-line" open={i === 0}>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 md:py-8 [&::-webkit-details-marker]:hidden">
                  <span className="font-heading text-lg md:text-2xl font-bold tracking-[-0.015em] text-ink leading-snug">{faq.q}</span>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-line text-ink transition-colors duration-300 group-hover:border-ink group-open:border-accent group-open:bg-accent group-open:text-on-accent">
                    <Plus size={18} strokeWidth={2.25} aria-hidden className="transition-transform duration-300 group-open:rotate-45" />
                  </span>
                </summary>
                <p className="pb-8 pr-4 sm:pr-16 text-muted text-base md:text-lg leading-relaxed max-w-[65ch]">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
