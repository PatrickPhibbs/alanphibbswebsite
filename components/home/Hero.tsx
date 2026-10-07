'use client';

import { useEffect, useRef, useState } from 'react';
import { Pause, Play } from 'lucide-react';
import Button from '@/components/ui/Button';
import PageContainer from '@/components/ui/PageContainer';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';

const clips = [
  { src: '/videos/video1.mp4', poster: '/images/hero/video1-poster.jpg' },
  { src: '/videos/video2.mp4', poster: '/images/hero/video2-poster.jpg' },
];

const trust = [
  { label: 'Established 1991' },
  { label: 'Fully insured' },
  { label: 'Dublin & Wicklow' },
];

/** Plays the clips back to back, cross-fading between them, with a pause control. */
function HeroReel() {
  const refs = useRef<(HTMLVideoElement | null)[]>([]);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [ready, setReady] = useState(false);

  // Respect reduced motion: start on the poster frame and let the visitor press play.
  useEffect(() => {
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;
    // eslint-disable-next-line react-hooks/set-state-in-effect -- reads a browser-only preference once on mount
    setPaused(reduce);
    setReady(true);
  }, []);

  useEffect(() => {
    const current = refs.current[active];
    if (!current) return;
    current.currentTime = 0;
    const next = () => setActive((i) => (i + 1) % clips.length);
    current.addEventListener('ended', next);
    return () => current.removeEventListener('ended', next);
  }, [active]);

  useEffect(() => {
    if (!ready) return;
    const current = refs.current[active];
    if (!current) return;
    if (paused) {
      current.pause?.();
    } else {
      // play() rejects when autoplay is blocked; the poster frame stays visible instead.
      current.play?.()?.catch(() => {});
    }
  }, [active, paused, ready]);

  return (
    <>
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
            aria-hidden
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
              i === active ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
      </div>

      {/* Keeps the white navigation readable over bright frames. */}
      <div aria-hidden className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-black/60 to-transparent" />

      <div className="absolute inset-x-0 bottom-20 md:bottom-10 z-10 flex items-center justify-center gap-2">
        <a
          href="#intro"
          className="inline-flex h-12 items-center gap-2.5 bg-white px-6 text-[13px] font-semibold uppercase tracking-[0.1em] text-night transition-colors hover:bg-white/85"
        >
          More
        </a>
        <button
          type="button"
          onClick={() => setPaused((p) => !p)}
          aria-label={paused ? 'Play background video' : 'Pause background video'}
          className="flex h-12 w-12 items-center justify-center bg-white text-night transition-colors hover:bg-white/85 cursor-pointer"
        >
          {paused ? (
            <Play size={16} strokeWidth={2.5} aria-hidden className="translate-x-px" />
          ) : (
            <Pause size={16} strokeWidth={2.5} aria-hidden />
          )}
        </button>
      </div>
    </>
  );
}

export default function Hero() {
  return (
    <>
      <section aria-label="Project reel" className="relative h-[100svh] min-h-[560px] overflow-hidden bg-night">
        <HeroReel />
      </section>

      <section id="intro" className="bg-paper">
        <PageContainer className="py-24 md:py-36 text-center">
          <AnimateOnScroll>
            <h1 className="mx-auto max-w-5xl font-heading text-[2.1rem] leading-[1.06] sm:text-5xl lg:text-[4rem] font-extrabold tracking-[-0.03em] text-ink">
              Renovations, restorations and <span className="whitespace-nowrap">fit-outs</span> finished with care.
            </h1>
            <p className="mx-auto mt-7 max-w-2xl text-lg md:text-xl leading-relaxed text-muted">
              Alan Phibbs delivers residential and commercial construction work across Dublin and
              Wicklow, with a focus on careful planning, reliable delivery and a high-quality finish.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button href="/contact" variant="solid">
                Discuss a Project
              </Button>
              <Button href="/projects" variant="outline">
                View Recent Work
              </Button>
            </div>
          </AnimateOnScroll>

          <ul
            aria-label="Credentials"
            className="mx-auto mt-16 md:mt-24 grid max-w-3xl grid-cols-3 divide-x divide-line border-y border-line"
          >
            {trust.map((item) => (
              <li
                key={item.label}
                className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 py-5 px-2 text-center sm:text-left"
              >
                <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.12em] text-ink">
                  {item.label}
                </span>
              </li>
            ))}
          </ul>
        </PageContainer>
      </section>
    </>
  );
}
