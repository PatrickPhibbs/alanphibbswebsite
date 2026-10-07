'use client';

import { useState } from 'react';
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
    image: '/images/projects/09-apartment-fitout/01.jpg'
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
  const [active, setActive] = useState(0);

  return (
    <section className="bg-paper border-t border-line">
      <PageContainer className="py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <AnimateOnScroll>
                <SectionHeading className="mb-0 lg:mb-10">Services</SectionHeading>
              </AnimateOnScroll>
              {/* Preview follows the hovered or focused service; hidden on small screens. */}
              <div aria-hidden className="relative hidden lg:block aspect-[4/5] max-h-[34rem] overflow-hidden bg-paper-3">
                {services.map((service, i) => (
                  <Image
                    key={service.title}
                    src={service.image}
                    alt=""
                    fill
                    sizes="40vw"
                    className={`object-cover transition-opacity duration-500 ease-out ${
                      i === active ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          <ul className="lg:col-span-7 border-t border-line">
            {services.map((service, i) => (
              <li key={service.title} className="border-b border-line">
                <Link
                  href={service.href}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  className="group grid grid-cols-[1fr_auto] gap-x-6 py-7 md:py-9 focus-visible:outline-offset-[-2px]"
                >
                  <h3
                    className={`font-heading text-2xl md:text-[2rem] font-bold tracking-[-0.025em] leading-tight transition-colors duration-300 ${
                      i === active ? 'text-ink' : 'text-ink lg:text-muted'
                    }`}
                  >
                    {service.title}
                  </h3>
                  <ArrowUpRight
                    size={28}
                    strokeWidth={1.75}
                    aria-hidden
                    className="row-span-2 self-start mt-1 text-subtle transition-[color,transform] duration-300 group-hover:text-accent-strong group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                  <p className="mt-3 max-w-xl text-base md:text-lg leading-relaxed text-muted">
                    {service.description}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </PageContainer>
    </section>
  );
}
