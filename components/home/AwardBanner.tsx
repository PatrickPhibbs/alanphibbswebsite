'use client';

import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import SectionHeading from '@/components/ui/SectionHeading';

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
    <section className="bg-charcoal-900 overflow-hidden">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-10 py-14 md:py-16">
        <AnimateOnScroll direction="fade">
          <SectionHeading light subtitle="How we work">
            Built properly, finished carefully.
          </SectionHeading>
          <p className="text-warm-200/75 text-base md:text-lg font-light leading-relaxed max-w-2xl -mt-4 mb-10">
            From first visit to final handover, the work is planned clearly, managed on site and finished
            with attention to the details that make a project feel complete.
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-warm-50/10">
          {qualities.map((item, i) => (
            <AnimateOnScroll key={item.title} delay={i * 0.05}>
              <div className="bg-charcoal-900 p-6 md:p-7 h-full border border-warm-50/5">
                <h3 className="font-heading text-lg font-light text-warm-50 mb-3 leading-snug">
                  {item.title}
                </h3>
                <p className="text-warm-300/70 text-sm font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
