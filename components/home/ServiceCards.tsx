'use client';

import Link from 'next/link';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import SectionHeading from '@/components/ui/SectionHeading';

const services = [
  {
    title: 'Residential Renovations',
    description:
      'Full house refurbishments and room-by-room upgrades, carefully managed with respect for occupied homes.',
    href: '/services',
  },
  {
    title: 'Extensions & Structural Works',
    description:
      'Timber frame builds, structural alterations and extensions from foundations through to finished plaster.',
    href: '/services',
  },
  {
    title: 'Restoration & Conservation',
    description:
      'Period property work including lime finishes, facade restoration and conservation-listed buildings.',
    href: '/services',
  },
  {
    title: 'Kitchen, Bathroom & Interior Fit-Outs',
    description:
      'Complete fit-outs coordinated from first fix to final tile, with a high-quality finish throughout.',
    href: '/services',
  },
  {
    title: 'Office & Commercial Fit-Out',
    description:
      'Shell-and-core to turnkey commercial spaces, with trades coordinated on site to minimise disruption.',
    href: '/services',
  },
  {
    title: 'Garden & External Works',
    description:
      'Paving, decking, boundary walls and landscaping, with durable external work that suits the property.',
    href: '/services',
  },
];

export default function ServiceCards() {
  return (
    <section className="bg-warm-100 border-y border-warm-300/50">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-10 py-14 md:py-16">
        <AnimateOnScroll>
          <SectionHeading subtitle="What we do">Services</SectionHeading>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-warm-300/60 border border-warm-300/60">
          {services.map((service, i) => (
            <AnimateOnScroll key={service.title} delay={i * 0.05}>
              <Link
                href={service.href}
                className="group block bg-warm-50 p-6 md:p-8 h-full hover:bg-warm-100 transition-colors duration-300 cursor-pointer"
              >
                <h3 className="font-heading text-xl font-light text-charcoal-900 mb-3 leading-snug group-hover:text-charcoal-700 transition-colors">
                  {service.title}
                </h3>
                <p className="text-charcoal-600 text-sm font-light leading-relaxed">
                  {service.description}
                </p>
              </Link>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll delay={0.2}>
          <div className="mt-8 flex flex-wrap gap-x-10 gap-y-4 text-[11px] uppercase tracking-[0.18em] text-stone-400 font-light">
            <span>Established 1991</span>
            <span>Fully insured</span>
            <span>Wicklow based</span>
            <span>Dublin & Wicklow</span>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
