import { render, screen } from '@testing-library/react';
import AwardBanner from '@/components/home/AwardBanner';

describe('AwardBanner', () => {
  it('renders 35 years heading', () => {
    render(<AwardBanner />);
    expect(screen.getByText('35')).toBeInTheDocument();
    expect(screen.getByText('Years')).toBeInTheDocument();
  });

  it('does not render outdated 28 years figure', () => {
    render(<AwardBanner />);
    expect(screen.queryByText('28')).not.toBeInTheDocument();
  });

  it('renders trust message', () => {
    render(<AwardBanner />);
    expect(screen.getByText(/Trusted by homeowners/)).toBeInTheDocument();
  });

  it('does not contain award-winning text', () => {
    render(<AwardBanner />);
    expect(screen.queryByText(/award.winning/i)).not.toBeInTheDocument();
  });

  it('has maroon background', () => {
    const { container } = render(<AwardBanner />);
    const section = container.firstChild as HTMLElement;
    expect(section.className).toMatch(/bg-maroon/);
  });
});
