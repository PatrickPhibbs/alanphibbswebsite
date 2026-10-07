import { render, screen } from '@testing-library/react';
import WellingtonPage from '@/app/projects/the-wellington-baggot-street/page';
import { projects } from '@/lib/projects';

const project = projects.find((p) => p.id === '11-wellington-baggot-street')!;

describe('The Wellington project page', () => {
  it('renders the project title as the page heading', () => {
    render(<WellingtonPage />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('The Wellington, Baggot Street');
  });

  it('has one caption per photo', () => {
    expect(project.captions).toHaveLength(project.images.length);
  });

  it('shows every gallery photo with its caption', () => {
    render(<WellingtonPage />);
    project.captions!.slice(1).forEach((caption) => {
      expect(screen.getByText(caption)).toBeInTheDocument();
    });
  });

  it('links back to the projects page', () => {
    render(<WellingtonPage />);
    expect(screen.getAllByRole('link', { name: 'All projects' })[0]).toHaveAttribute('href', '/projects');
  });
});

describe('Wellington project card', () => {
  it('is listed with a link to its own page', () => {
    expect(project.href).toBe('/projects/the-wellington-baggot-street');
  });
});
