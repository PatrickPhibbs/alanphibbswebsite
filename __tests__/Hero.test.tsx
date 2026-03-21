import { render, screen } from '@testing-library/react';
import Hero from '@/components/home/Hero';

describe('Hero', () => {
  it('renders main heading', () => {
    render(<Hero />);
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 1 }).textContent).toMatch(/Building/);
  });

  it('renders CTA buttons', () => {
    render(<Hero />);
    expect(screen.getByText('Our Projects')).toBeInTheDocument();
    expect(screen.getByText(/Get a Quote/)).toBeInTheDocument();
  });

  it('renders scroll indicator', () => {
    render(<Hero />);
    expect(screen.getByText('SCROLL DOWN')).toBeInTheDocument();
  });

  it('renders Dublin established text', () => {
    render(<Hero />);
    expect(screen.getByText(/Dublin/)).toBeInTheDocument();
  });
});
