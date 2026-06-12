import { render, screen } from '@testing-library/react';
import AwardBanner from '@/components/home/AwardBanner';

describe('AwardBanner', () => {
  it('renders quality section heading', () => {
    render(<AwardBanner />);
    expect(screen.getByText(/Built properly, finished carefully/)).toBeInTheDocument();
  });

  it('renders how we work qualities', () => {
    render(<AwardBanner />);
    expect(screen.getByText(/Site visits and clear scope/)).toBeInTheDocument();
    expect(screen.getByText(/Fully insured work/)).toBeInTheDocument();
  });

  it('does not contain award-winning text', () => {
    render(<AwardBanner />);
    expect(screen.queryByText(/award.winning/i)).not.toBeInTheDocument();
  });

  it('has charcoal background', () => {
    const { container } = render(<AwardBanner />);
    const section = container.firstChild as HTMLElement;
    expect(section.className).toMatch(/bg-charcoal/);
  });
});
