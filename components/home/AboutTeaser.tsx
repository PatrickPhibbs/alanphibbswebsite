'use client';

import Link from 'next/link';
import Image from 'next/image';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import SectionHeading from '@/components/ui/SectionHeading';
import PageContainer from '@/components/ui/PageContainer';

export default function AboutTeaser() {
  return (
    <section>
      <PageContainer className="py-14 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <AnimateOnScroll>
          <div className="relative aspect-[4/3] lg:aspect-[5/4] overflow-hidden bg-warm-200">
            <Image
              src="/images/projects/04-country-house-renovation/01.jpg"
              alt="Country house renovation project in Wicklow"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              loading="lazy"
            />
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.1}>
          <SectionHeading subtitle="About Alan Phibbs">Hands-on delivery, trusted locally.</SectionHeading>
          <div className="space-y-4 text-charcoal-600 font-light leading-relaxed -mt-4">
            <p>
              Alan has been in construction since 1987, with experience across residential renovations,
              period property work, commercial fit-outs and restoration projects in Dublin, London and
              Wicklow.
            </p>
            <p>
              Based in Kilquade, Co. Wicklow, he manages every project personally, from the first site
              visit through to handover, so clients always know who they are dealing with and the
              standard stays consistent.
            </p>
          </div>
          <Link
            href="/about"
            className="inline-block mt-8 text-[11px] uppercase tracking-[0.18em] text-charcoal-800 font-light border-b border-charcoal-800/25 hover:border-charcoal-800 pb-px transition-colors"
          >
            Read our story
          </Link>
        </AnimateOnScroll>
        </div>
      </PageContainer>
    </section>
  );
}
