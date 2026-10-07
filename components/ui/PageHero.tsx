import PageContainer from '@/components/ui/PageContainer';

interface PageHeroProps {
  title: string;
  /** Intro line under the title. */
  subtitle: string;
  /** Optional controls under the intro (e.g. filter buttons). */
  children?: React.ReactNode;
  /** Unused: inner pages open on a plain text header, not a photo. Kept so callers needn't change. */
  image?: string;
  alt?: string;
  imagePosition?: string;
}

// Plain text header on the always-dark band, so the transparent navbar stays readable at the top.
export default function PageHero({ title, subtitle, children }: PageHeroProps) {
  return (
    <section className="bg-night text-white">
      <PageContainer className="pt-36 md:pt-44 pb-12 md:pb-16">
        <span aria-hidden className="block h-1 w-14 bg-accent mb-7" />
        <h1 className="font-heading text-5xl sm:text-6xl md:text-[5.5rem] font-extrabold leading-[0.98] tracking-[-0.03em]">
          {title}
        </h1>
        <p className="mt-6 text-lg md:text-2xl leading-snug text-white/80 max-w-3xl">{subtitle}</p>
        {children && <div className="mt-9">{children}</div>}
      </PageContainer>
    </section>
  );
}
