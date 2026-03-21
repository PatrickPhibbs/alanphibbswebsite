'use client';

import Link from 'next/link';
import Image from 'next/image';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';

interface ServiceCard {
  title: string;
  href: string;
  image: string;
}

const serviceCards: ServiceCard[] = [
  { title: 'Restoration & Conservation', href: '/services', image: '/images/projects/10-victorian-building-restoration/02.jpg' },
  { title: 'Garden Projects', href: '/services', image: '/images/projects/07-garden-landscaping/01.jpg' },
  { title: 'Office Fit Out & Refurbishments', href: '/services', image: '/images/projects/01-office-fitout/01.jpg' },
];

const stats = [
  { value: '28', label: 'Years\nEstablished' },
  { value: '300+', label: 'Projects\nCompleted' },
  { value: 'Fully Insured', label: 'Every\nProject' },
  { value: 'Dublin', label: 'Based &\nOperating' },
];

function Card({ card, className }: { card: ServiceCard; className?: string }) {
  return (
    <Link
      href={card.href}
      className={`group relative overflow-hidden block ${className || ''}`}
    >
      <Image
        src={card.image}
        alt={card.title}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />
      <div className="absolute top-0 left-0 z-10">
        <div className="bg-black/85 px-5 py-3">
          <span className="text-white font-heading text-sm md:text-base font-semibold group-hover:underline decoration-white/60 underline-offset-4 transition-all">
            {card.title}
          </span>
        </div>
      </div>
    </Link>
  );
}

export default function ServiceCards() {
  return (
    <section className="max-w-7xl mx-auto px-6 pt-3 pb-12">
      <div className="bg-cream-300 flex flex-col gap-px">
        {/* Service cards: 50% + 25% + 25% */}
        <AnimateOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-cream-300">
            <Card card={serviceCards[0]} className="md:col-span-2 h-64 md:h-80" />
            <Card card={serviceCards[1]} className="h-64 md:h-80" />
            <Card card={serviceCards[2]} className="h-64 md:h-80" />
          </div>
        </AnimateOnScroll>

        {/* Stats bar */}
        <AnimateOnScroll delay={0.1}>
          <div className="grid grid-cols-2 md:grid-cols-4 bg-maroon-800">
            {stats.map((stat, i) => (
              <div
                key={stat.value}
                className={`px-8 py-10 flex flex-col gap-1 ${i < stats.length - 1 ? 'border-r border-white/10' : ''}`}
              >
                <span className="font-heading font-black text-3xl md:text-4xl text-gold-500 leading-none">
                  {stat.value}
                </span>
                <span className="text-white/45 text-[10px] uppercase tracking-[0.2em] leading-snug whitespace-pre-line">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
