import { render, screen, fireEvent } from '@testing-library/react';
import RecentWork from '@/components/home/RecentWork';

describe('RecentWork', () => {
  it('renders section heading', () => {
    render(<RecentWork />);
    expect(screen.getByRole('heading', { name: 'Featured projects' })).toBeInTheDocument();
  });

  it('renders 5 featured project links that deep-link into the gallery', () => {
    const { container } = render(<RecentWork />);
    const links = container.querySelectorAll('[data-testid="project-thumb"]');
    expect(links.length).toBe(5);
    links.forEach((link) => expect(link.getAttribute('href')).toMatch(/^\/projects(#|\/).+/));
  });

  it('swaps the backdrop when a project name is focused', () => {
    const { container } = render(<RecentWork />);
    const links = container.querySelectorAll('[data-testid="project-thumb"]');
    const backdrops = container.querySelectorAll('img');
    expect(backdrops[0].className).toMatch(/opacity-100/);
    fireEvent.focus(links[2]);
    expect(backdrops[2].className).toMatch(/opacity-100/);
    expect(backdrops[0].className).toMatch(/opacity-0/);
  });

  it('renders view all projects link', () => {
    render(<RecentWork />);
    expect(screen.getByText(/View all/)).toBeInTheDocument();
  });
});
