'use client';

import Image from 'next/image';
import type { Project } from '@/lib/projects';

interface ProjectCardProps {
  project: Project;
  onClick?: () => void;
}

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <div
      className="group relative overflow-hidden bg-warm-50 cursor-pointer border border-warm-300/50"
      onClick={onClick}
    >
      <div className="aspect-[5/4] relative overflow-hidden">
        <Image
          src={project.coverImage}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          loading="lazy"
        />
      </div>

      <div className="p-4 md:p-5 border-t border-warm-300/60">
        <span className="text-[10px] uppercase tracking-[0.2em] text-stone-400 font-light block mb-2">
          {project.category}
        </span>
        <h3 className="font-heading text-xl font-light text-charcoal-900 leading-snug">
          {project.title}
        </h3>
        <p className="text-sm text-charcoal-600 mt-2 leading-relaxed font-light">
          {project.description}
        </p>
      </div>

      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-400 flex items-center justify-center pointer-events-none">
        <span className="px-5 py-2.5 border border-warm-50/80 text-warm-50 text-[11px] uppercase tracking-[0.15em] font-light opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          View gallery
        </span>
      </div>
    </div>
  );
}
