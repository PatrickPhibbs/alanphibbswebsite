'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import Button from '@/components/ui/Button';
import { projects } from '@/lib/projects';

// Each featured project is paired with one of its own photos for the full-bleed backdrop.
const featured = [
  { id: '04-country-house-renovation', image: '/images/projects/04-country-house-renovation/13.jpg' },
  { id: '10-victorian-building-restoration', image: '/images/projects/10-victorian-building-restoration/03.jpg' },
  { id: '06-period-house-interior', image: '/images/projects/06-period-house-interior/02.jpg' },
  { id: '01-office-fitout', image: '/images/projects/01-office-fitout/03.jpg' },
  { id: '07-garden-landscaping', image: '/images/projects/07-garden-landscaping/04.jpg' },
].flatMap((item) => {
  const project = projects.find((p) => p.id === item.id);
  return project ? [{ ...item, title: project.title }] : [];
});

/** Featured projects: the backdrop follows whichever project name is hovered or focused. */
export default function RecentWork() {
  const [active, setActive] = useState(0);

  return (
    <section
      aria-labelledby="featured-projects"
      className="relative flex min-h-[40rem] md:min-h-[100svh] items-center overflow-hidden bg-night"
    >
      {featured.map((item, i) => (
        <Image
          key={item.id}
          src={item.image}
          alt=""
          fill
          sizes="100vw"
          className={`object-cover transition-opacity duration-700 ease-out ${
            i === active ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
      <div aria-hidden className="absolute inset-0 bg-night/60" />

      <div className="relative z-10 w-full px-5 py-24 md:py-32 text-center">
        <h2 id="featured-projects" className="text-base md:text-lg font-normal text-white/80 mb-8 md:mb-10">
          Featured projects
        </h2>

        <ul className="flex flex-col items-center gap-2 md:gap-3">
          {featured.map((item, i) => {
            const isActive = i === active;
            return (
              <li key={item.id}>
                <Link
                  href={`/projects#${item.id}`}
                  data-testid="project-thumb"
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  className={`relative inline-flex items-center font-heading text-[1.75rem] leading-tight sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-[-0.03em] transition-colors duration-300 ${
                    isActive ? 'text-white' : 'text-white/70 hover:text-white'
                  }`}
                >
                  <ArrowRight
                    aria-hidden
                    strokeWidth={2}
                    className={`absolute right-full hidden sm:block mr-3 md:mr-5 h-7 w-7 md:h-12 md:w-12 transition-[opacity,transform] duration-300 ${
                      isActive ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'
                    }`}
                  />
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>

        <Button href="/projects" variant="light" className="mt-12 md:mt-14">
          View all projects
        </Button>
      </div>
    </section>
  );
}
