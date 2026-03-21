'use client';

export default function ScrollIndicator() {
  return (
    <div className="absolute left-6 bottom-12 z-10 hidden md:flex flex-col items-center gap-4">
      <span
        className="text-white text-xs tracking-[0.2em] uppercase"
        style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
      >
        SCROLL DOWN
      </span>
      <div className="w-px h-16 bg-white/50" />
    </div>
  );
}
