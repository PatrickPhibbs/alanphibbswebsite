interface SectionHeadingProps {
  children: React.ReactNode;
  /** Small uppercase label above the heading. Use sparingly: at most one in three sections. */
  subtitle?: string;
  /** Sentence-case supporting line under the heading. */
  lead?: string;
  light?: boolean;
  centered?: boolean;
  className?: string;
}

export default function SectionHeading({
  children,
  subtitle,
  lead,
  light = false,
  centered = false,
  className = 'mb-10 md:mb-12',
}: SectionHeadingProps) {
  return (
    <div className={`${className} ${centered ? 'text-center' : ''}`}>
      {subtitle && (
        <p
          className={`inline-flex items-center gap-3 text-[11px] md:text-xs font-semibold uppercase tracking-[0.2em] mb-4 ${
            light ? 'text-accent' : 'text-accent-strong'
          }`}
        >
          <span aria-hidden className="h-px w-8 bg-current" />
          {subtitle}
        </p>
      )}
      <h2
        className={`font-heading text-[2rem] sm:text-4xl md:text-5xl font-bold leading-[1.05] tracking-[-0.025em] max-w-3xl ${
          centered ? 'mx-auto' : ''
        } ${light ? 'text-white' : 'text-ink'}`}
      >
        {children}
      </h2>
      {lead && (
        <p className={`mt-4 text-base md:text-lg max-w-2xl ${light ? 'text-white/70' : 'text-muted'}`}>{lead}</p>
      )}
    </div>
  );
}
