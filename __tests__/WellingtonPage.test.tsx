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

  it('shows every photo, described by its caption', () => {
    render(<WellingtonPage />);
    project.captions!.forEach((caption) => {
      expect(screen.queryAllByText(caption).length + screen.queryAllByAltText(caption).length).toBeGreaterThan(0);
    });
  });

  it('links back to the projects page', () => {
    render(<WellingtonPage />);
    expect(screen.getAllByRole('link', { name: 'All projects' })[0]).toHaveAttribute('href', '/projects');
  });
});

describe('Before and after', () => {
  it('pairs each in-progress photo with a finished photo', () => {
    render(<WellingtonPage />);
    expect(screen.getByRole('heading', { name: 'Before and after' })).toBeInTheDocument();
    expect(screen.getAllByText('Before')).toHaveLength(project.beforeAfter!.length);
    expect(screen.getAllByText('After')).toHaveLength(project.beforeAfter!.length);
  });

  it('is the only listing for the bar fit-out', () => {
    expect(projects.find((p) => p.id === '02-commercial-fitout')).toBeUndefined();
  });
});

describe('Wellington project card', () => {
  it('is listed with a link to its own page', () => {
    expect(project.href).toBe('/projects/the-wellington-baggot-street');
  });
});
