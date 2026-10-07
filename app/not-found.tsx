import Image from 'next/image';
import Button from '@/components/ui/Button';
import PageContainer from '@/components/ui/PageContainer';

export default function NotFound() {
  return (
    <section className="relative flex min-h-[85svh] items-end overflow-hidden bg-night">
      <Image
        src="/images/projects/03-new-build-extension/07.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-35"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-night via-night/75 to-night/40" />
      <PageContainer className="relative z-10 pt-40 pb-28 md:pb-28">
        <span aria-hidden className="block h-1 w-14 bg-accent mb-7" />
        <h1 className="font-heading text-5xl sm:text-6xl md:text-[5.5rem] font-extrabold leading-[0.98] tracking-[-0.03em] text-white">
          Page not found
        </h1>
        <p className="mt-6 text-lg md:text-2xl leading-snug text-white/85 max-w-2xl">
          This page may have moved. Our projects, services and contact details are all a click away.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-3">
          <Button href="/" variant="solid" arrow>
            Back to home
          </Button>
          <Button href="/projects" variant="outline-light">
            View Recent Work
          </Button>
        </div>
      </PageContainer>
    </section>
  );
}
