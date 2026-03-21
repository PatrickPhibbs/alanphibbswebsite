interface SectionHeadingProps {
  children: React.ReactNode;
  subtitle?: string;
  light?: boolean;
  centered?: boolean;
}

export default function SectionHeading({ children, subtitle, light = false, centered = false }: SectionHeadingProps) {
  return (
    <div className={`mb-10 ${centered ? 'text-center' : ''}`}>
      {subtitle && (
        <p className={`text-xs uppercase tracking-[0.2em] font-medium mb-3 ${light ? 'text-cream-200/60' : 'text-maroon-800/40'}`}>
          {subtitle}
        </p>
      )}
      <h2 className={`font-heading text-4xl md:text-5xl font-bold leading-tight ${light ? 'text-white' : 'text-maroon-800'}`}>
        {children}
      </h2>
    </div>
  );
}
