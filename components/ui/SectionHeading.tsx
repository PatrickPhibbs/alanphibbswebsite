interface SectionHeadingProps {
  children: React.ReactNode;
  subtitle?: string;
  light?: boolean;
  centered?: boolean;
}

export default function SectionHeading({
  children,
  subtitle,
  light = false,
  centered = false,
}: SectionHeadingProps) {
  return (
    <div className={`mb-8 md:mb-10 ${centered ? 'text-center' : ''}`}>
      {subtitle && (
        <p
          className={`text-[11px] uppercase tracking-[0.22em] font-light mb-3 ${
            light ? 'text-warm-200/70' : 'text-stone-400'
          }`}
        >
          {subtitle}
        </p>
      )}
      <h2
        className={`font-heading text-3xl md:text-[2.65rem] font-light leading-[1.12] ${
          light ? 'text-warm-50' : 'text-charcoal-900'
        }`}
      >
        {children}
      </h2>
    </div>
  );
}
