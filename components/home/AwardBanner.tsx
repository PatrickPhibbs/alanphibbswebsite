'use client';

import AnimateOnScroll from '@/components/ui/AnimateOnScroll';

export default function AwardBanner() {
  return (
    <section className="bg-maroon-800 overflow-hidden">
      <AnimateOnScroll direction="fade">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 grid grid-cols-1 md:grid-cols-[auto_1fr] gap-x-16 gap-y-4 items-end">
          {/* Ghost number — creates depth and tension */}
          <div className="select-none leading-none">
            <span className="font-heading font-black text-[7rem] md:text-[11rem] text-white/8 leading-none block">
              35
            </span>
            <span className="font-heading font-bold text-5xl md:text-6xl text-gold-500 leading-none -mt-6 md:-mt-10 block">
              Years
            </span>
          </div>

          {/* Text — sits at baseline with the number */}
          <div className="pb-1 md:pb-3">
            <p className="text-cream-100 text-xl md:text-2xl font-light leading-snug mb-4 max-w-md">
              Trusted by homeowners across Wicklow and Dublin for over three decades.
            </p>
            <p className="text-cream-200/40 text-xs uppercase tracking-[0.25em]">
              Est. 1991
            </p>
          </div>
        </div>
      </AnimateOnScroll>
    </section>
  );
}
