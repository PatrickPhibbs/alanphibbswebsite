'use client';

import { categories } from '@/lib/projects';

interface ProjectFilterProps {
  active: string;
  onFilter: (category: string) => void;
}

export default function ProjectFilter({ active, onFilter }: ProjectFilterProps) {
  return (
    <div role="group" aria-label="Filter projects" className="flex flex-wrap gap-2">
      {categories.map((cat) => (
        <button
          key={cat}
          type="button"
          aria-pressed={active === cat}
          onClick={() => onFilter(cat)}
          className={`border px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.12em] transition-colors duration-200 cursor-pointer active:translate-y-px ${
            active === cat
              ? 'bg-white text-night border-white'
              : 'border-white/20 text-white/70 hover:border-white hover:text-white'
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
