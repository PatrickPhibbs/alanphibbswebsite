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
    <section className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-10 py-14 md:py-16">
      <div className="flex items-end justify-between gap-4 flex-wrap mb-8 md:mb-10">
        <SectionHeading subtitle="Selected work across Dublin and Wicklow">
          Recent projects
        </SectionHeading>
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-stone-400 text-[11px] uppercase tracking-[0.18em] font-light hover:text-charcoal-800 transition-colors group shrink-0 mb-8"
        >
          View all
          <ArrowRight size={14} strokeWidth={1.5} className="group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
        {recentProjects.map((project, i) => (
          <AnimateOnScroll key={project.id} delay={i * 0.05}>
            <Link
              href="/projects"
              data-testid="project-thumb"
              className="group block cursor-pointer"
            >
              <div className="relative aspect-[5/4] overflow-hidden bg-warm-200 mb-3">
                <Image
                  src={project.coverImage}
                  alt={project.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>
              <div className="border-t border-warm-300 pt-3">
                <span className="text-[10px] uppercase tracking-[0.2em] text-stone-400 font-light block mb-1.5">
                  {project.category}
                </span>
                <h3 className="font-heading text-lg md:text-xl font-light text-charcoal-900 leading-snug group-hover:text-charcoal-700 transition-colors">
                  {project.title}
                </h3>
              </div>
            </Link>
          </AnimateOnScroll>
        ))}
      </div>
    </section>
  );
}
