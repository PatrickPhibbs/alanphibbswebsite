'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import { projects } from '@/lib/projects';

export default function RecentWork() {
  const recentProjects = projects.slice(0, 6);

  return (
    <section className="max-w-7xl mx-auto px-6 pt-20 pb-16">
      <div className="flex items-end justify-between mb-10 gap-6 flex-wrap">
        <SectionHeading subtitle="Latest completed projects across Dublin">
          Recent Work
        </SectionHeading>
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-maroon-800/50 text-xs uppercase tracking-[0.15em] hover:text-maroon-800 transition-colors group shrink-0 mb-10"
        >
          View All <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-cream-300">
        {recentProjects.map((project, i) => (
          <AnimateOnScroll key={project.id} delay={i * 0.08}>
            <Link
              href="/projects"
              data-testid="project-thumb"
              className="group relative aspect-square overflow-hidden bg-cream-200 block"
            >
              <Image
                src={project.coverImage}
                alt={project.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-400 flex items-end p-5">
                <span className="text-white font-heading text-base font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 leading-tight">
                  {project.title}
                </span>
              </div>
            </Link>
          </AnimateOnScroll>
        ))}
      </div>
    </section>
  );
}
