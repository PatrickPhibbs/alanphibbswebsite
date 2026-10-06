import Image from 'next/image';
import PageContainer from '@/components/ui/PageContainer';

interface PageHeroProps {
  title: string;
  subtitle: string;
  image: string;
  alt: string;
  imagePosition?: string;
}

export default function PageHero({ title, subtitle, image, alt, imagePosition = 'object-center' }: PageHeroProps) {
  return (
    <section className="relative flex min-h-[46vh] md:min-h-[54vh] items-end overflow-hidden bg-night">
      <Image src={image} alt={alt} fill priority sizes="100vw" className={`object-cover ${imagePosition}`} />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/30" />
      <PageContainer className="relative z-10 pb-12 md:pb-16 pt-36">
        <span aria-hidden className="block h-1 w-14 bg-accent mb-6" />
        <h1 className="font-heading text-[2.6rem] sm:text-5xl md:text-7xl font-extrabold text-white tracking-[-0.03em] max-w-4xl">
          {title}
        </h1>
        <p className="mt-5 text-xs md:text-sm font-semibold uppercase tracking-[0.2em] text-white/75">
          {subtitle}
        </p>
      </PageContainer>
    </section>
  );
}
