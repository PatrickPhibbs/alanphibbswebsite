'use client';

import { categories } from '@/lib/projects';

interface ProjectFilterProps {
  active: string;
  onFilter: (category: string) => void;
}

export default function ProjectFilter({ active, onFilter }: ProjectFilterProps) {
  return (
    <div className="flex flex-wrap gap-2 mb-12">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onFilter(cat)}
          className={`px-4 py-2 text-[11px] font-light uppercase tracking-[0.15em] transition-all duration-200 cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-charcoal-800 ${
            active === cat
              ? 'bg-charcoal-800 text-warm-50 dark:bg-warm-300 dark:text-charcoal-900'
              : 'bg-transparent text-charcoal-600 border border-warm-300 hover:border-charcoal-800/30 hover:text-charcoal-900 dark:text-charcoal-600 dark:border-warm-400 dark:hover:border-warm-300 dark:hover:text-charcoal-900'
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
