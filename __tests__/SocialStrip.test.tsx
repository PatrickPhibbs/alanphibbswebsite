import { render, screen } from '@testing-library/react';
import SocialStrip from '@/components/layout/SocialStrip';

describe('SocialStrip', () => {
  it('renders social media links', () => {
    render(<SocialStrip />);
    const links = screen.getAllByRole('link');
    expect(links.length).toBeGreaterThanOrEqual(4);
  });

  it('has fixed positioning', () => {
    const { container } = render(<SocialStrip />);
    const strip = container.firstChild as HTMLElement;
    expect(strip.className).toMatch(/fixed/);
  });
});
