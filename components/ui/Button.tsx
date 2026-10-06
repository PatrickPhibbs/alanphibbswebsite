import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'solid' | 'outline' | 'outline-light' | 'dark';
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  className?: string;
  disabled?: boolean;
  arrow?: boolean;
}

export default function Button({
  children,
  variant = 'solid',
  href,
  onClick,
  type = 'button',
  className = '',
  disabled = false,
  arrow = false,
}: ButtonProps) {
  const base =
    'group inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-[13px] font-semibold uppercase tracking-[0.1em] transition-colors duration-200 cursor-pointer';
  const variants = {
    solid: 'bg-accent text-on-accent hover:bg-accent-strong',
    dark: 'bg-ink text-paper hover:bg-ink-soft',
    outline: 'border border-ink/25 text-ink hover:border-ink hover:bg-ink hover:text-paper',
    'outline-light': 'border border-white/45 text-white hover:bg-white hover:text-night hover:border-white',
  };

  const classes = `${base} ${variants[variant]} ${disabled ? 'opacity-50 pointer-events-none' : ''} ${className}`;
  const content = (
    <>
      {children}
      {arrow && (
        <ArrowRight
          size={16}
          strokeWidth={2}
          aria-hidden
          className="transition-transform duration-200 group-hover:translate-x-0.5"
        />
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} onClick={onClick} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} disabled={disabled}>
      {content}
    </button>
  );
}
