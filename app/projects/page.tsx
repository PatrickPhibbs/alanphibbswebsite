import type { Metadata } from 'next';
import ProjectGrid from '@/components/projects/ProjectGrid';
import PageContainer from '@/components/ui/PageContainer';
import PageHero from '@/components/ui/PageHero';

export const metadata: Metadata = {
  title: 'Our Projects | AP General Contractors Ltd',
  description:
    'Browse our portfolio of residential renovations, extensions, restorations and fit-out projects across Dublin and Wicklow.',
  openGraph: {
    title: 'Our Projects | AP General Contractors Ltd',
    description:
      'Browse our portfolio of completed construction projects across Dublin and Wicklow.',
    siteName: 'AP General Contractors Ltd',
  },
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        title="Our projects"
        subtitle="Renovations, restorations and fit-outs across Dublin and Wicklow"
        image="/images/projects/09-apartment-fitout/04.jpg"
        alt="Finished apartment kitchen"
      />

      <section>
        <PageContainer className="py-14 md:py-20">
          <ProjectGrid />
        </PageContainer>
      </section>
    </>
  );
}
