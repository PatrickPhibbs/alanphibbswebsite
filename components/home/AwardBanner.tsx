'use client';

import Image from 'next/image';
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
    <section className="bg-night text-white grid grid-cols-1 lg:grid-cols-12">
      <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:col-span-5 lg:min-h-full bg-night-2">
        <Image
          src="/images/projects/04-country-house-renovation/10.jpg"
          alt="Finished flat roof and restored chimney stacks on a country house"
          fill
          sizes="(max-width: 1024px) 100vw, 42vw"
          className="object-cover"
        />
      </div>

      <div className="lg:col-span-7 px-5 sm:px-8 lg:px-16 xl:px-24 py-16 md:py-24 lg:py-28">
        <AnimateOnScroll direction="fade">
          <SectionHeading light subtitle="How we work" className="mb-6">
            Built properly, finished carefully.
          </SectionHeading>
          <p className="text-white/70 text-base md:text-lg leading-relaxed max-w-xl">
            From first visit to final handover, the work is planned clearly, managed on site and finished
            with attention to the details that make a project feel complete.
          </p>
        </AnimateOnScroll>

        <ul className="mt-12 md:mt-14 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8 md:gap-y-10">
          {qualities.map((item, i) => (
            <li key={item.title} className="border-t border-night-line pt-5">
              <AnimateOnScroll delay={i * 0.04}>
                <div>
                  <h3 className="font-heading text-lg md:text-xl font-bold tracking-[-0.015em] leading-snug mb-2 text-white">
                    {item.title}
                  </h3>
                  <p className="text-white/65 text-[15px] leading-relaxed">{item.description}</p>
                </div>
              </AnimateOnScroll>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
