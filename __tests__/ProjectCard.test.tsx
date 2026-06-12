import { render, screen } from '@testing-library/react';
import ProjectCard from '@/components/projects/ProjectCard';

const mockProject = {
  id: '1',
  title: 'Modern Kitchen Fit-Out',
  category: 'Renovation' as const,
  description: 'A complete kitchen fit-out in Dublin 4.',
  coverImage: '/images/projects/04-country-house-renovation/01.jpg',
  images: ['/images/projects/04-country-house-renovation/01.jpg'],
};

describe('ProjectCard', () => {
  it('renders project title', () => {
    render(<ProjectCard project={mockProject} />);
    expect(screen.getByText('Modern Kitchen Fit-Out')).toBeInTheDocument();
  });

  it('renders category badge', () => {
    render(<ProjectCard project={mockProject} />);
    expect(screen.getByText('Renovation', { selector: 'span' })).toBeInTheDocument();
  });

  it('renders description', () => {
    render(<ProjectCard project={mockProject} />);
    expect(screen.getByText('A complete kitchen fit-out in Dublin 4.')).toBeInTheDocument();
  });
});
