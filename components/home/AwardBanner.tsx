'use client';

import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import SectionHeading from '@/components/ui/SectionHeading';
import PageContainer from '@/components/ui/PageContainer';

const qualities = [
  {
    title: 'Site visits and clear scope',
    description: 'Every project starts with a practical visit and an honest conversation about what is involved.',
  },
  {
    title: 'Practical advice before work begins',
    description: 'Straightforward guidance on sequencing, materials and what to expect before anything starts on site.',
  },
  {
    title: 'Coordination of trades',
    description: 'Plumbing, electrical, tiling and joinery managed together so you deal with one contractor.',
  },
  {
    title: 'Respect for occupied homes',
    description: 'Work planned around how you live in the property, with care taken to protect finished spaces.',
  },
  {
    title: 'Clean finish and tidy handover',
    description: 'Snagging addressed properly and sites left ready to move back into.',
  },
  {
    title: 'Fully insured work',
    description: 'Public liability and employers\' liability cover on every project.',
  },
];

export default function AwardBanner() {
  return (
    <section className="bg-night text-white overflow-hidden">
      <PageContainer className="py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-20">
          <AnimateOnScroll direction="fade" className="lg:sticky lg:top-32 lg:self-start">
            <SectionHeading light subtitle="How we work" className="mb-6">
              Built properly, finished carefully.
            </SectionHeading>
            <p className="text-white/70 text-base md:text-lg leading-relaxed max-w-xl">
              From first visit to final handover, the work is planned clearly, managed on site and finished
              with attention to the details that make a project feel complete.
            </p>
          </AnimateOnScroll>

          <ol className="border-t border-night-line">
            {qualities.map((item, i) => (
              <li key={item.title} className="border-b border-night-line">
                <AnimateOnScroll delay={i * 0.04} className="grid grid-cols-[3.5rem_1fr] md:grid-cols-[5rem_1fr] gap-4 py-7 md:py-8">
                  <span className="font-heading text-2xl md:text-3xl font-extrabold text-accent tabular-nums leading-none">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="font-heading text-xl md:text-2xl font-bold text-white mb-2 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-white/65 text-[15px] leading-relaxed max-w-xl">{item.description}</p>
                  </div>
                </AnimateOnScroll>
              </li>
            ))}
          </ol>
        </div>
      </PageContainer>
    </section>
  );
}
