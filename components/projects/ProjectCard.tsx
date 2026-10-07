'use client';

import Image from 'next/image';
import type { Project } from '@/lib/projects';

interface ProjectCardProps {
  project: Project;
  onClick?: () => void;
  /** Full-width tiles get a wider crop and a larger `sizes` hint. */
  wide?: boolean;
  /** Hide the description on the tile when it is shown alongside instead. */
  hideDescription?: boolean;
}

export default function ProjectCard({ project, onClick, wide = false, hideDescription = false }: ProjectCardProps) {
  const photos = `${project.images.length} ${project.images.length === 1 ? 'photo' : 'photos'}`;
  const descId = `${project.id}-desc`;

  return (
    <article id={project.id} className="group relative h-full w-full scroll-mt-28 overflow-hidden bg-night-2">
      <Image
        src={project.coverImage}
        alt=""
        fill
        sizes={wide ? '100vw' : '(max-width: 768px) 100vw, 50vw'}
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-3/5 bg-gradient-to-b from-night/80 via-night/35 to-transparent"
      />

      <div className="pointer-events-none absolute inset-x-0 top-0 p-5 sm:p-8 lg:p-10">
        <h3 className="max-w-[16ch] text-[2.1rem] sm:text-5xl lg:text-[3.5rem] font-extrabold leading-[1] tracking-[-0.03em] text-white">
          {project.title}
        </h3>
        <p className="mt-3 md:mt-4 text-[15px] md:text-lg text-white/80">
          <span>{project.category}</span>
          <span aria-hidden className="mx-2">·</span>
          {photos}
        </p>
      </div>

      {!hideDescription && (
        <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-night/90 via-night/60 to-transparent px-5 pb-6 pt-20 sm:px-8 sm:pb-8 lg:px-10 lg:pb-10 transition-opacity duration-300 pointer-fine:opacity-0 pointer-fine:group-hover:opacity-100 pointer-fine:group-has-[:focus-visible]:opacity-100">
          <p id={descId} className="max-w-xl text-[15px] md:text-base leading-relaxed text-white/90">
            {project.description}
          </p>
        </div>
      )}

      <button
        type="button"
        onClick={onClick}
        aria-label={`${project.title}: view ${photos}`}
        aria-describedby={hideDescription ? undefined : descId}
        className="absolute inset-0 z-10 cursor-pointer focus-visible:outline-offset-[-6px]"
      />
    </article>
  );
}
