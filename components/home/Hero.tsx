'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import PageContainer from '@/components/ui/PageContainer';

function HeroVideo({ src, poster }: { src: string; poster?: string }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const handleEnded = () => {
      setTimeout(() => {
        video.currentTime = 0;
        video.play();
      }, 5000);
    };
    video.addEventListener('ended', handleEnded);
    return () => video.removeEventListener('ended', handleEnded);
  }, []);

  return (
    <video
      ref={ref}
      src={src}
      poster={poster}
      autoPlay
      muted
      playsInline
      className="absolute inset-0 w-full h-full object-cover"
    />
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] md:min-h-screen flex items-end overflow-hidden">
      <div className="absolute inset-0 flex">
        <div className="relative w-1/2 h-full overflow-hidden">
          <HeroVideo
            src="/videos/video1.mp4"
            poster="/images/projects/04-country-house-renovation/01.jpg"
          />
        </div>
        <div className="relative w-1/2 h-full overflow-hidden">
          <HeroVideo
            src="/videos/video2.mp4"
            poster="/images/projects/01-office-fitout/01.jpg"
          />
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/88 via-black/40 to-black/15" />

      <PageContainer className="relative z-10 pb-12 md:pb-16 pt-28">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-[11px] uppercase tracking-[0.24em] text-white/80 font-light mb-4"
        >
          Dublin & Wicklow · Established 1991
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-heading font-extralight text-white text-[2.35rem] sm:text-5xl md:text-6xl lg:text-[4.5rem] leading-[1.06] max-w-5xl mb-4"
        >
          Renovations, restorations and fit-outs finished with care.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="text-white/80 text-base md:text-lg font-light leading-relaxed max-w-2xl mb-7"
        >
          Alan Phibbs delivers residential and commercial construction work across Dublin and
          Wicklow, with a focus on careful planning, reliable delivery and a high-quality finish.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex flex-wrap items-center gap-3 md:gap-4"
        >
          <Button href="/contact">Discuss a Project</Button>
          <Button
            href="/projects"
            variant="outline-light"
            className="!border-white/50 !text-white hover:!bg-white hover:!text-black hover:!border-white"
          >
            View Recent Work
          </Button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.65 }}
          className="mt-7 text-[11px] uppercase tracking-[0.2em] text-white/55 font-light"
        >
          Established 1991 · Fully insured · Dublin & Wicklow
        </motion.p>
      </PageContainer>
    </section>
  );
}
