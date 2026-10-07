import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'solid' | 'outline' | 'outline-light' | 'dark' | 'light';
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  className?: string;
  disabled?: boolean;
}

export default function Button({
  children,
  variant = 'solid',
  href,
  onClick,
  type = 'button',
  className = '',
  disabled = false,
}: ButtonProps) {
  const base =
    'group inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-[13px] font-semibold uppercase tracking-[0.1em] transition-[color,background-color,border-color,transform] duration-200 active:translate-y-px cursor-pointer';
  const variants = {
    solid: 'bg-cta text-on-cta hover:bg-cta-hover',
    dark: 'bg-ink text-paper hover:bg-ink-soft',
    outline: 'border border-ink/25 text-ink hover:border-ink hover:bg-ink hover:text-paper',
    'outline-light': 'border border-white/45 text-white hover:bg-white hover:text-night hover:border-white',
    // White square button for use over photos and dark bands.
    light: 'bg-white text-night hover:bg-white/85',
  };

  const classes = `${base} ${variants[variant]} ${disabled ? 'opacity-50 pointer-events-none' : ''} ${className}`;
  const content = (
    <>
      {children}
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
