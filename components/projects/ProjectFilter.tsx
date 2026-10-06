'use client';

import { categories } from '@/lib/projects';

interface ProjectFilterProps {
  active: string;
  onFilter: (category: string) => void;
}

export default function ProjectFilter({ active, onFilter }: ProjectFilterProps) {
  return (
    <div role="group" aria-label="Filter projects" className="flex flex-wrap gap-2 mb-10 md:mb-12">
      {categories.map((cat) => (
        <button
          key={cat}
          type="button"
          aria-pressed={active === cat}
          onClick={() => onFilter(cat)}
          className={`inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.12em] border transition-colors cursor-pointer ${
            active === cat
              ? 'bg-ink text-paper border-ink'
              : 'bg-transparent text-muted border-line hover:border-ink hover:text-ink'
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
