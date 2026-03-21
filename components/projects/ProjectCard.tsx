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
      className="group relative overflow-hidden bg-cream-200 cursor-pointer"
      onClick={onClick}
    >
      {/* Cover image */}
      <div className="aspect-[4/3] relative overflow-hidden">
        <Image
          src={project.coverImage}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="p-5 border-t border-cream-300">
        <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-maroon-800/35 block mb-1.5">
          {project.category} &middot; {project.images.length} photos
        </span>
        <h3 className="font-heading text-lg font-bold text-maroon-800 leading-tight">
          {project.title}
        </h3>
        <p className="text-sm text-maroon-800/55 mt-1.5 leading-relaxed">{project.description}</p>
      </div>

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
        <span className="px-5 py-2 bg-white text-black font-semibold text-xs uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          View Gallery
        </span>
      </div>
    </div>
  );
}
