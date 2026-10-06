'use client';

import Image from 'next/image';
import { Images } from 'lucide-react';
import type { Project } from '@/lib/projects';

interface ProjectCardProps {
  project: Project;
  onClick?: () => void;
}

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <button
      type="button"
      id={project.id}
      onClick={onClick}
      aria-label={`${project.title}: view ${project.images.length} photos`}
      className="group flex h-full w-full scroll-mt-28 flex-col text-left bg-paper border border-line transition-[border-color,box-shadow] duration-300 hover:border-accent hover:shadow-[0_18px_40px_-24px_rgba(0,0,0,0.35)] cursor-pointer"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-paper-3">
        <Image
          src={project.coverImage}
          alt=""
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
        <span className="absolute left-0 top-0 bg-accent px-2.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-on-accent">
          {project.category}
        </span>
        <span className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 bg-night/85 px-2.5 py-1.5 text-[11px] font-semibold text-white">
          <Images size={13} aria-hidden />
          {project.images.length}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5 md:p-6">
        <h3 className="font-heading text-xl md:text-2xl font-bold text-ink leading-snug">{project.title}</h3>
        <p className="text-[15px] text-muted mt-2.5 leading-relaxed">{project.description}</p>
        <span className="mt-auto pt-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-ink group-hover:text-accent-strong transition-colors">
          <span aria-hidden className="h-0.5 w-6 bg-accent transition-all duration-300 group-hover:w-10" />
          View gallery
        </span>
      </div>
    </button>
  );
}
