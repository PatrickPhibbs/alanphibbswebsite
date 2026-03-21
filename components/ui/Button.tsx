import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'solid' | 'outline';
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
  const base = 'inline-flex items-center justify-center px-6 py-3 text-sm font-semibold uppercase tracking-wider transition-all duration-200';
  const variants = {
    solid: 'bg-maroon-800 text-white hover:bg-maroon-900',
    outline: 'border border-white/60 text-white bg-transparent hover:bg-white hover:text-black',
  };

  const classes = `${base} ${variants[variant]} ${className}`;

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
