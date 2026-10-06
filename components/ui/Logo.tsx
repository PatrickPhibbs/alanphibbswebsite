import Link from 'next/link';
import Image from 'next/image';
import { site } from '@/lib/site';

interface LogoProps {
  /** Render on an always-dark surface (hero overlay, footer). */
  light?: boolean;
  className?: string;
}

// The logo artwork is black line work on transparent; it is inverted to white on dark surfaces.
export default function Logo({ light = false, className = '' }: LogoProps) {
  return (
    <Link href="/" className={`group inline-flex items-center gap-3 md:gap-4 ${className}`}>
      <Image
        src={site.logo}
        alt={site.name}
        width={840}
        height={216}
        priority
        className={`h-10 md:h-12 w-auto shrink-0 ${light ? 'brightness-0 invert' : 'dark:brightness-0 dark:invert'}`}
      />
      <span
        aria-hidden
        className={`flex flex-col border-l pl-3 md:pl-4 text-[8.5px] md:text-[10px] font-semibold uppercase leading-[1.5] tracking-[0.16em] ${
          light ? 'border-white/30 text-white/80' : 'border-line text-muted'
        }`}
      >
        {site.taglineParts.map((part) => (
          <span key={part}>{part}</span>
        ))}
      </span>
      <span className="sr-only">{site.tagline}</span>
    </Link>
  );
}
