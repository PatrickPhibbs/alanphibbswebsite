import { render, screen, fireEvent } from '@testing-library/react';
import Hero from '@/components/home/Hero';

describe('Hero', () => {
  beforeAll(() => {
    // jsdom does not implement media playback.
    jest.spyOn(HTMLMediaElement.prototype, 'play').mockImplementation(() => Promise.resolve());
    jest.spyOn(HTMLMediaElement.prototype, 'pause').mockImplementation(() => {});
  });

  it('renders main heading', () => {
    render(<Hero />);
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 1 }).textContent).toMatch(/Renovations/);
  });

  it('renders CTA buttons', () => {
    render(<Hero />);
    expect(screen.getByText('Discuss a Project')).toBeInTheDocument();
    expect(screen.getByText('View Recent Work')).toBeInTheDocument();
  });

  it('renders Dublin established text', () => {
    render(<Hero />);
    expect(screen.getAllByText(/Dublin & Wicklow/).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Established 1991/).length).toBeGreaterThan(0);
  });

  it('has a pause control for the background video', () => {
    render(<Hero />);
    const toggle = screen.getByRole('button', { name: 'Pause background video' });
    fireEvent.click(toggle);
    expect(screen.getByRole('button', { name: 'Play background video' })).toBeInTheDocument();
  });
});
