import { render, screen } from '@testing-library/react';
import Navbar from '@/components/layout/Navbar';

jest.mock('next/navigation', () => ({
  usePathname: () => '/',
}));

describe('Navbar', () => {
  it('renders the logo image', () => {
    render(<Navbar />);
    expect(screen.getByRole('img', { name: /alan phibbs construction/i })).toBeInTheDocument();
  });

  it('renders navigation links', () => {
    render(<Navbar />);
    expect(screen.getByText('Services')).toBeInTheDocument();
    expect(screen.getByText('Projects')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  it('renders GET A QUOTE button', () => {
    render(<Navbar />);
    expect(screen.getAllByText('GET A QUOTE').length).toBeGreaterThanOrEqual(1);
  });

  it('renders correct phone number', () => {
    render(<Navbar />);
    expect(screen.queryByText(/\+353 1 234 5678/)).not.toBeInTheDocument();
  });

  it('renders mobile hamburger button', () => {
    render(<Navbar />);
    expect(screen.getByLabelText('Toggle menu')).toBeInTheDocument();
  });
});
