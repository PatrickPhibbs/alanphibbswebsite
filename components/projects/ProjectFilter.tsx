'use client';

import { categories } from '@/lib/projects';

interface ProjectFilterProps {
  active: string;
  onFilter: (category: string) => void;
}

export default function ProjectFilter({ active, onFilter }: ProjectFilterProps) {
  return (
    <div className="flex flex-wrap gap-px mb-12 border border-maroon-800/15">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onFilter(cat)}
          className={`px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.15em] transition-all duration-200 ${
            active === cat
              ? 'bg-maroon-800 text-white'
              : 'bg-transparent text-maroon-800/50 hover:text-maroon-800 hover:bg-cream-200'
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
