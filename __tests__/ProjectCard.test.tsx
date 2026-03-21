import { render, screen } from '@testing-library/react';
import ProjectCard from '@/components/projects/ProjectCard';

const mockProject = {
  id: '1',
  title: 'Modern Kitchen Renovation',
  category: 'Renovations' as const,
  description: 'A complete kitchen renovation in Dublin 4.',
  coverImage: '/images/projects/04-country-house-renovation/01.jpg',
  images: ['/images/projects/04-country-house-renovation/01.jpg'],
};

describe('ProjectCard', () => {
  it('renders project title', () => {
    render(<ProjectCard project={mockProject} />);
    expect(screen.getByText('Modern Kitchen Renovation')).toBeInTheDocument();
  });

  it('renders category badge', () => {
    render(<ProjectCard project={mockProject} />);
    expect(screen.getByText(/Renovations/)).toBeInTheDocument();
  });

  it('renders description', () => {
    render(<ProjectCard project={mockProject} />);
    expect(screen.getByText('A complete kitchen renovation in Dublin 4.')).toBeInTheDocument();
  });
});
