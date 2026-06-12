import type { Metadata } from 'next';
import Image from 'next/image';
import ProjectGrid from '@/components/projects/ProjectGrid';
import PageContainer from '@/components/ui/PageContainer';

export const metadata: Metadata = {
  title: 'Our Projects | Alan Phibbs Construction',
  description:
    'Browse our portfolio of residential renovations, extensions, restorations and fit-out projects across Dublin and Wicklow.',
  openGraph: {
    title: 'Our Projects | Alan Phibbs Construction',
    description:
      'Browse our portfolio of completed construction projects across Dublin and Wicklow.',
    siteName: 'Alan Phibbs Construction',
  },
};

export default function ProjectsPage() {
  return (
    <>
      <section className="relative h-[38vh] flex items-end mt-20">
        <Image
          src="/images/projects/09-apartment-fitout/01.jpg"
          alt="Alan Phibbs Construction projects"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/60" />
        <PageContainer className="relative z-10 pb-10 w-full">
          <h1 className="font-heading text-4xl md:text-6xl font-extralight text-white">
            Our projects
          </h1>
          <p className="mt-3 text-white/70 text-[11px] uppercase tracking-[0.2em] font-light">
            Renovations, restorations and fit-outs across Dublin and Wicklow
          </p>
        </PageContainer>
      </section>

      <section>
        <PageContainer className="pt-12 pb-14">
        <ProjectGrid />
        </PageContainer>
      </section>
    </>
  );
}
