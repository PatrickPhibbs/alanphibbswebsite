'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/components/ui/ThemeProvider';

interface ThemeToggleProps {
  className?: string;
}

export default function ThemeToggle({ className = '' }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      className={`p-1.5 text-charcoal-700 dark:text-warm-300 hover:text-charcoal-900 dark:hover:text-warm-50 transition-colors cursor-pointer ${className}`}
    >
      {theme === 'dark' ? <Sun size={18} strokeWidth={1.5} /> : <Moon size={18} strokeWidth={1.5} />}
    </button>
  );
}
