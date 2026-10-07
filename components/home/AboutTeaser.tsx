'use client';

import Image from 'next/image';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import Button from '@/components/ui/Button';

export default function AboutTeaser() {
  return (
    <section className="bg-paper-2 border-t border-line grid grid-cols-1 lg:grid-cols-2">
      <div className="relative aspect-[4/3] lg:aspect-auto lg:order-2 lg:min-h-[40rem] bg-paper-3">
        <Image
          src="/images/projects/10-victorian-building-restoration/15.jpg"
          alt="Restoring ornamental plasterwork on a Victorian facade"
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover"
        />
      </div>

      <div className="flex items-center px-5 sm:px-8 lg:px-16 xl:px-24 py-16 md:py-24 lg:py-28">
        <AnimateOnScroll>
          <h2 className="font-heading text-[2rem] sm:text-4xl md:text-5xl font-bold tracking-[-0.025em] leading-[1.05] text-ink max-w-xl mb-7">
            Hands-on delivery, trusted locally.
          </h2>
          <div className="space-y-4 max-w-xl text-muted text-base md:text-lg leading-relaxed">
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
          <Button href="/about" variant="dark" className="mt-10">
            Read our story
          </Button>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
