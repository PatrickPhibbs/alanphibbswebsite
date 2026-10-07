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
    image: '/images/projects/09-apartment-fitout/04.jpg'
  },
  {
    title: 'Restoration & Conservation',
    description:
      'Period property work including lime finishes, facade restoration and conservation-listed buildings.',
    href: '/services#restoration-conservation',
    image: '/images/projects/10-victorian-building-restoration/03.jpg'
  },
  {
    title: 'Extensions & Structural Works',
    description:
      'Timber frame builds, structural alterations and extensions from foundations through to finished plaster.',
    href: '/services#groundworks-stone-works',
    image: '/images/projects/03-new-build-extension/08.jpg'
  },
  {
    title: 'Kitchen, Bathroom & Interior Fit-Outs',
    description:
      'Complete fit-outs coordinated from first fix to final tile, with a high-quality finish throughout.',
    href: '/services#kitchen-bathroom-fitouts',
    image: '/images/services/bathroom-fitout.jpg'
  },
  {
    title: 'Office & Commercial Fit-Out',
    description:
      'Shell-and-core to turnkey commercial spaces, with trades coordinated on site to minimise disruption.',
    href: '/services#office-fit-out-refurbishments',
    image: '/images/projects/01-office-fitout/06.jpg'
  },
  {
    title: 'Garden & External Works',
    description:
      'Paving, decking, boundary walls and landscaping, with durable external work that suits the property.',
    href: '/services#garden-landscaping',
    image: '/images/projects/07-garden-landscaping/05.jpg'
  },
];

export default function ServiceCards() {
  const [first, second, ...rest] = services;

  return (
    <section className="bg-paper-2 border-y border-line">
      <PageContainer className="py-20 md:py-28">
        <AnimateOnScroll>
          <SectionHeading>Services</SectionHeading>
        </AnimateOnScroll>

        {/* Two feature tiles, then four compact ones: the grid follows the content instead of six equal cards. */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 md:gap-5">
          {[first, second].map((service, i) => (
            <AnimateOnScroll key={service.title} delay={i * 0.05} className="sm:col-span-2 lg:col-span-6">
              <Link
                href={service.href}
                className="group relative flex h-full min-h-[22rem] md:min-h-[26rem] items-end overflow-hidden bg-night"
              >
                <Image
                  src={service.image}
                  alt=""
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />
                <div className="relative p-6 md:p-8 max-w-xl">
                  <h3 className="font-heading text-2xl md:text-3xl font-bold text-white leading-tight mb-3">
                    {service.title}
                  </h3>
                  <p className="text-white/80 text-[15px] md:text-base leading-relaxed">{service.description}</p>
                  <span aria-hidden className="mt-5 flex items-center gap-2 text-white group-hover:text-accent transition-colors">
                    <span className="h-0.5 w-6 bg-accent transition-all duration-300 group-hover:w-12" />
                    <ArrowUpRight size={18} />
                  </span>
                </div>
              </Link>
            </AnimateOnScroll>
          ))}

          {rest.map((service, i) => (
            <AnimateOnScroll key={service.title} delay={0.1 + i * 0.05} className="lg:col-span-3">
              <Link
                href={service.href}
                className="group flex h-full flex-col bg-paper border border-line transition-[border-color,box-shadow] duration-300 hover:border-accent hover:shadow-[0_18px_40px_-24px_rgba(21,22,24,0.35)]"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-paper-3">
                  <Image
                    src={service.image}
                    alt=""
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5 md:p-6">
                  <h3 className="font-heading text-lg md:text-xl font-bold text-ink leading-snug mb-2.5">
                    {service.title}
                  </h3>
                  <p className="text-muted text-[15px] leading-relaxed">{service.description}</p>
                  <span aria-hidden className="mt-auto pt-5 flex items-center gap-2 text-ink group-hover:text-accent-strong transition-colors">
                    <span className="h-0.5 w-6 bg-accent transition-all duration-300 group-hover:w-12" />
                    <ArrowUpRight size={18} />
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
