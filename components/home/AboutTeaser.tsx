'use client';

import Image from 'next/image';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import SectionHeading from '@/components/ui/SectionHeading';
import PageContainer from '@/components/ui/PageContainer';
import Button from '@/components/ui/Button';

export default function AboutTeaser() {
  return (
    <section>
      <PageContainer className="py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <AnimateOnScroll className="relative">
            <div className="relative aspect-[4/3] lg:aspect-[5/4] overflow-hidden bg-paper-3">
              <Image
                src="/images/projects/10-victorian-building-restoration/15.jpg"
                alt="Restoring ornamental plasterwork on a Victorian facade"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 right-4 md:-right-6 bg-accent px-6 py-5 md:px-8 md:py-6 text-on-accent shadow-xl">
              <span className="block font-heading text-4xl md:text-5xl font-extrabold leading-none tabular-nums">1987</span>
              <span className="mt-2 block text-[11px] font-bold uppercase tracking-[0.16em]">In construction since</span>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.1}>
            <SectionHeading className="mb-6">
              Hands-on delivery, trusted locally.
            </SectionHeading>
            <div className="space-y-4 text-muted text-base md:text-lg leading-relaxed">
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
            <Button href="/about" variant="outline" arrow className="mt-9">
              Read our story
            </Button>
          </AnimateOnScroll>
        </div>
      </PageContainer>
    </section>
  );
}
