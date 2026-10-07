'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import { projects } from '@/lib/projects';
import PageContainer from '@/components/ui/PageContainer';

// Mosaic: a feature tile spanning two columns and rows, then five standard tiles (fills a 3×3 grid).
const tileClasses = ['md:col-span-2 md:row-span-2', '', '', '', '', ''];

export default function RecentWork() {
  const recentProjects = projects.slice(0, 6);

  return (
    <section>
      <PageContainer className="py-20 md:py-28">
        <div className="flex items-end justify-between gap-6 flex-wrap mb-10 md:mb-12">
          <SectionHeading lead="Selected work across Dublin and Wicklow" className="">
            Recent projects
          </SectionHeading>
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-ink border-b-2 border-accent pb-1 hover:text-accent-strong transition-colors"
          >
            View all
            <ArrowRight size={15} strokeWidth={2} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:auto-rows-[18rem] lg:auto-rows-[21rem] gap-3 md:gap-4">
          {recentProjects.map((project, i) => (
            <AnimateOnScroll key={project.id} delay={i * 0.05} className={tileClasses[i]}>
              <Link
                href={`/projects#${project.id}`}
                data-testid="project-thumb"
                className="group relative block h-full min-h-[18rem] overflow-hidden bg-paper-3"
              >
                <Image
                  src={project.coverImage}
                  alt={project.title}
                  fill
                  sizes={i === 0 ? '(max-width: 768px) 100vw, 66vw' : '(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw'}
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 md:p-6">
                  <div>
                    <span className="mb-1.5 block text-xs font-medium text-white/75">{project.category}</span>
                    <h3
                      className={`font-heading font-bold text-white leading-tight ${
                        i === 0 ? 'text-2xl md:text-4xl' : 'text-xl md:text-2xl'
                      }`}
                    >
                      {project.title}
                    </h3>
                  </div>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-white/40 text-white transition-colors group-hover:border-accent group-hover:bg-accent group-hover:text-on-accent">
                    <ArrowUpRight size={18} aria-hidden />
                  </span>
                </div>
              </Link>
            </AnimateOnScroll>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}
