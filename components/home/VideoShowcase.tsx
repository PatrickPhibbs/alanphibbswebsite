'use client';

import { useEffect, useRef } from 'react';

function LoopWithPause({ src }: { src: string }) {
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
      autoPlay
      muted
      playsInline
      className="w-full h-full object-cover"
    />
  );
}

export default function VideoShowcase() {
  return (
    <section className="max-w-7xl mx-auto px-6 pt-4 pb-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-cream-300">
        <div className="aspect-video bg-cream-200 overflow-hidden">
          <LoopWithPause src="/videos/video1.mp4" />
        </div>
        <div className="aspect-video bg-cream-200 overflow-hidden">
          <LoopWithPause src="/videos/video2.mp4" />
        </div>
      </div>
    </section>
  );
}
