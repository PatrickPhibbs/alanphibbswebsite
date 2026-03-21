import type { Metadata } from 'next';
import Image from 'next/image';
import ProjectGrid from '@/components/projects/ProjectGrid';

export const metadata: Metadata = {
  title: 'Our Projects | Alan Phibbs Construction',
  description: 'Browse our portfolio of residential new builds, renovations, extensions, and fit-out projects across Dublin and Greystones, Co. Wicklow.',
  openGraph: {
    title: 'Our Projects | Alan Phibbs Construction',
    description: 'Browse our portfolio of completed construction projects across Dublin and Co. Wicklow.',
    siteName: 'Alan Phibbs Construction',
  },
};

export default function ProjectsPage() {
  return (
    <>
      {/* Hero banner */}
      <section className="relative h-[38vh] flex items-end mt-20">
        <Image src="/images/projects/09-apartment-fitout/01.jpg" alt="Alan Phibbs Construction projects" fill priority className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-10 w-full">
          <h1 className="font-heading text-5xl md:text-7xl font-bold text-white">Our Projects</h1>
          <p className="mt-2 text-white/50 text-xs uppercase tracking-[0.2em]">Our portfolio of work across Dublin</p>
        </div>
      </section>

      {/* Project grid */}
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-20">
        <ProjectGrid />
      </section>
    </>
  );
}
