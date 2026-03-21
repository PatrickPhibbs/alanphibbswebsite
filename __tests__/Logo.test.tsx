import { render, screen } from '@testing-library/react';
import Logo from '@/components/ui/Logo';

describe('Logo', () => {
  it('renders logo image', () => {
    render(<Logo />);
    expect(screen.getByRole('img', { name: /alan phibbs construction/i })).toBeInTheDocument();
  });

  it('wraps in a link to home', () => {
    render(<Logo />);
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/');
  });
});
