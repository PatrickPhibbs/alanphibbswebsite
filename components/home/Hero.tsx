'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, MapPin, CalendarCheck } from 'lucide-react';
import Button from '@/components/ui/Button';
import PageContainer from '@/components/ui/PageContainer';

const clips = [
  { src: '/videos/video1.mp4', poster: '/images/hero/video1-poster.jpg' },
  { src: '/videos/video2.mp4', poster: '/images/hero/video2-poster.jpg' },
];

const trust = [
  { icon: CalendarCheck, label: 'Established 1991' },
  { icon: ShieldCheck, label: 'Fully insured' },
  { icon: MapPin, label: 'Dublin & Wicklow' },
];

/** Plays the clips back to back, cross-fading between them. */
function HeroReel() {
  const refs = useRef<(HTMLVideoElement | null)[]>([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const current = refs.current[active];
    if (!current) return;
    current.currentTime = 0;
    // play() rejects when autoplay is blocked; the poster frame stays visible instead.
    current.play()?.catch(() => {});
    const next = () => setActive((i) => (i + 1) % clips.length);
    current.addEventListener('ended', next);
    return () => current.removeEventListener('ended', next);
  }, [active]);

  return (
    <div className="absolute inset-0">
      {clips.map((clip, i) => (
        <video
          key={clip.src}
          ref={(el) => {
            refs.current[i] = el;
          }}
          src={clip.src}
          poster={clip.poster}
          muted
          playsInline
          preload={i === 0 ? 'auto' : 'metadata'}
          autoPlay={i === 0}
          aria-hidden
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
            i === active ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative flex min-h-[calc(100svh-9rem)] md:min-h-[calc(100dvh-4.75rem)] items-end overflow-hidden bg-night">
      <HeroReel />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/25" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />

      <div className="relative z-10 w-full">
        <PageContainer className="pt-28 md:pt-32 pb-10 md:pb-20">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-3 text-[10.5px] md:text-xs font-semibold uppercase tracking-[0.14em] sm:tracking-[0.22em] text-accent mb-6"
          >
            <span aria-hidden className="h-px w-10 bg-accent" />
            Dublin & Wicklow · Established 1991
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-heading font-extrabold text-white text-[2.05rem] leading-[1.06] sm:text-5xl md:text-6xl lg:text-[4.5rem] tracking-[-0.03em] max-w-6xl mb-6"
          >
            Renovations, restorations and <span className="whitespace-nowrap">fit-outs</span> finished with care.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-white/85 text-base md:text-xl leading-relaxed max-w-2xl mb-9"
          >
            Alan Phibbs delivers residential and commercial construction work across Dublin and
            Wicklow, with a focus on careful planning, reliable delivery and a high-quality finish.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row sm:items-center gap-3"
          >
            <Button href="/contact" arrow>
              Discuss a Project
            </Button>
            <Button href="/projects" variant="outline-light">
              View Recent Work
            </Button>
          </motion.div>
        </PageContainer>

      </div>
    </section>
  );
}

/** Trust signals sit in their own band directly under the hero, not inside it. */
export function TrustBar() {
  return (
    <section aria-label="Credentials" className="bg-night border-t border-night-line">
      <PageContainer>
        <ul className="grid grid-cols-3 divide-x divide-night-line">
          {trust.map((item) => (
            <li
              key={item.label}
              className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 py-5 md:py-6 px-2 text-center sm:text-left"
            >
              <item.icon size={20} strokeWidth={1.75} aria-hidden className="text-accent shrink-0" />
              <span className="text-[10px] sm:text-xs md:text-sm font-semibold uppercase tracking-[0.12em] text-white">
                {item.label}
              </span>
            </li>
          ))}
        </ul>
      </PageContainer>
    </section>
  );
}
