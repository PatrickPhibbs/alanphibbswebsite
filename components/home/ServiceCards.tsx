'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import SectionHeading from '@/components/ui/SectionHeading';
import PageContainer from '@/components/ui/PageContainer';

const services = [
  {
    title: 'Residential Renovations',
    description:
      'Full house refurbishments and room-by-room upgrades, carefully managed with respect for occupied homes.',
    href: '/services',
    image: '/images/projects/04-country-house-renovation/14.jpg',
  },
  {
    title: 'Extensions & Structural Works',
    description:
      'Timber frame builds, structural alterations and extensions from foundations through to finished plaster.',
    href: '/services#groundworks-stone-works',
    image: '/images/projects/03-new-build-extension/08.jpg',
  },
  {
    title: 'Restoration & Conservation',
    description:
      'Period property work including lime finishes, facade restoration and conservation-listed buildings.',
    href: '/services#restoration-conservation',
    image: '/images/projects/10-victorian-building-restoration/03.jpg',
  },
  {
    title: 'Kitchen, Bathroom & Interior Fit-Outs',
    description:
      'Complete fit-outs coordinated from first fix to final tile, with a high-quality finish throughout.',
    href: '/services#kitchen-bathroom-fitouts',
    image: '/images/services/bathroom-fitout.jpg',
  },
  {
    title: 'Office & Commercial Fit-Out',
    description:
      'Shell-and-core to turnkey commercial spaces, with trades coordinated on site to minimise disruption.',
    href: '/services#office-fit-out-refurbishments',
    image: '/images/projects/01-office-fitout/06.jpg',
  },
  {
    title: 'Garden & External Works',
    description:
      'Paving, decking, boundary walls and landscaping, with durable external work that suits the property.',
    href: '/services#garden-landscaping',
    image: '/images/projects/07-garden-landscaping/05.jpg',
  },
];

const credentials = ['Established 1991', 'Fully insured', 'Wicklow based', 'Dublin & Wicklow'];

export default function ServiceCards() {
  return (
    <section className="bg-paper-2 border-y border-line">
      <PageContainer className="py-20 md:py-28">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end mb-10 md:mb-12">
          <AnimateOnScroll>
            <SectionHeading subtitle="What we do" className="">
              Services
            </SectionHeading>
          </AnimateOnScroll>
          <ul className="flex flex-wrap gap-2">
            {credentials.map((item) => (
              <li
                key={item}
                className="border border-line bg-paper px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-muted"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {services.map((service, i) => (
            <AnimateOnScroll key={service.title} delay={i * 0.05} className="h-full">
              <Link
                href={service.href}
                className="group flex h-full flex-col bg-paper border border-line transition-[border-color,box-shadow] duration-300 hover:border-accent hover:shadow-[0_18px_40px_-24px_rgba(0,0,0,0.35)]"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-paper-3">
                  <Image
                    src={service.image}
                    alt=""
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                  />
                  <span className="absolute left-0 top-0 bg-night px-3 py-2 font-heading text-sm font-bold text-accent tabular-nums">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6 md:p-7">
                  <h3 className="font-heading text-xl md:text-[1.4rem] font-bold text-ink leading-snug mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted text-[15px] leading-relaxed">{service.description}</p>
                  <span aria-hidden className="mt-auto pt-6 flex items-center gap-2 text-ink group-hover:text-accent-strong transition-colors">
                    <span className="h-0.5 w-6 bg-accent transition-all duration-300 group-hover:w-12" />
                    <ArrowUpRight size={18} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            </AnimateOnScroll>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}
