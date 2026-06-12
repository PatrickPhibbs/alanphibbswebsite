import { render, screen } from '@testing-library/react';
import RecentWork from '@/components/home/RecentWork';

describe('RecentWork', () => {
  it('renders section heading', () => {
    render(<RecentWork />);
    expect(screen.getByText('Recent projects')).toBeInTheDocument();
  });

  it('renders 6 project thumbnails', () => {
    const { container } = render(<RecentWork />);
    const thumbnails = container.querySelectorAll('[data-testid="project-thumb"]');
    expect(thumbnails.length).toBe(6);
  });

  it('renders view all projects link', () => {
    render(<RecentWork />);
    expect(screen.getByText(/View all/)).toBeInTheDocument();
  });
});
