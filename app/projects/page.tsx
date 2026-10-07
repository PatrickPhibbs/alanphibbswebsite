import type { Metadata } from 'next';
import ProjectGrid from '@/components/projects/ProjectGrid';

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
    <ProjectGrid
      title="Our projects"
      subtitle="Renovations, restorations and fit-outs across Dublin and Wicklow"
    />
  );
}
