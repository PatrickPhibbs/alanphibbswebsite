import Image from 'next/image';
import Button from '@/components/ui/Button';
import PageContainer from '@/components/ui/PageContainer';

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80svh] items-end overflow-hidden bg-night">
      <Image
        src="/images/projects/03-new-build-extension/07.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 to-black/30" />
      <PageContainer className="relative z-10 pb-16 md:pb-24 pt-36">
        <span aria-hidden className="block h-1 w-14 bg-accent mb-6" />
        <h1 className="font-heading text-[2.6rem] sm:text-5xl md:text-7xl font-extrabold text-white tracking-[-0.03em]">
          Page not found
        </h1>
        <p className="mt-5 text-base md:text-xl text-white/80 max-w-xl">
          This page may have moved. Our projects, services and contact details are all a click away.
        </p>
        <div className="mt-9 flex flex-col sm:flex-row gap-3">
          <Button href="/" arrow>
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
