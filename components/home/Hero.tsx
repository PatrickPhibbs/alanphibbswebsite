'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import ScrollIndicator from '@/components/ui/ScrollIndicator';

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
    <section className="relative h-screen flex items-end overflow-hidden">
      {/* Background videos */}
      <div className="absolute inset-0 flex">
        <div className="relative w-1/2 h-full overflow-hidden">
          <HeroVideo src="/videos/video1.mp4" poster="/images/projects/04-country-house-renovation/01.jpg" />
        </div>
        <div className="relative w-1/2 h-full overflow-hidden">
          <HeroVideo src="/videos/video2.mp4" poster="/images/projects/01-office-fitout/01.jpg" />
        </div>
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      {/* Scroll indicator */}
      <ScrollIndicator />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20 w-full">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="font-heading text-[4rem] md:text-[7rem] lg:text-[9rem] font-black text-white leading-[0.88] tracking-tight mb-8"
        >
          General Contractor
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex items-center gap-8 flex-wrap"
        >
          <Button href="/projects">Our Projects</Button>
          <a
            href="/contact"
            className="text-cream-200/80 text-sm uppercase tracking-[0.15em] hover:text-white transition-colors border-b border-cream-200/30 hover:border-white pb-px"
          >
            Get in Touch →
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-8 text-cream-200/50 text-xs uppercase tracking-[0.25em]"
        >
          Wicklow & Dublin · Est. 1991
        </motion.p>
      </div>
    </section>
  );
}
