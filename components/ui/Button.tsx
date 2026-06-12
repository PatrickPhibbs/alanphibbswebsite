import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'solid' | 'outline' | 'outline-light';
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
    'inline-flex items-center justify-center px-7 py-3.5 text-sm font-light tracking-[0.08em] transition-all duration-250 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-charcoal-800';
  const variants = {
    solid:
      'bg-charcoal-800 text-warm-50 hover:bg-charcoal-900 dark:bg-warm-300 dark:text-charcoal-900 dark:hover:bg-warm-400',
    outline:
      'border border-charcoal-800/25 text-charcoal-800 bg-transparent hover:bg-charcoal-800 hover:text-warm-50 hover:border-charcoal-800 dark:border-warm-400 dark:text-charcoal-900 dark:hover:bg-warm-200 dark:hover:text-charcoal-900 dark:hover:border-warm-300',
    'outline-light':
      'border border-warm-50/50 text-warm-50 bg-transparent hover:bg-warm-50 hover:text-charcoal-900 hover:border-warm-50',
  };

  const classes = `${base} ${variants[variant]} ${disabled ? 'opacity-50 pointer-events-none' : ''} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} disabled={disabled}>
      {children}
    </button>
  );
}
