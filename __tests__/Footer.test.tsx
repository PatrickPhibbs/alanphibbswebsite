import { render, screen } from '@testing-library/react';
import Footer from '@/components/layout/Footer';

describe('Footer', () => {
  it('renders navigation column', () => {
    render(<Footer />);
    expect(screen.getByText('Navigation')).toBeInTheDocument();
  });

  it('renders services column', () => {
    render(<Footer />);
    expect(screen.getByRole('heading', { name: 'Services' })).toBeInTheDocument();
  });

  it('renders contact column', () => {
    render(<Footer />);
    expect(screen.getByRole('heading', { name: 'Contact' })).toBeInTheDocument();
  });

  it('renders phone number as a tel: link', () => {
    render(<Footer />);
    const link = screen.getByRole('link', { name: '+353 89 220 4082' });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', 'tel:+353892204082');
  });

  it('renders correct email', () => {
    render(<Footer />);
    expect(screen.getByText('alanphibbs@alanphibbs.ie')).toBeInTheDocument();
  });

  it('does not render address', () => {
    render(<Footer />);
    expect(screen.queryByText(/Construction Lane/i)).not.toBeInTheDocument();
  });

  it('renders copyright with current year', () => {
    render(<Footer />);
    const year = new Date().getFullYear().toString();
    expect(screen.getByText(new RegExp(`© ${year} Alan Phibbs Construction`))).toBeInTheDocument();
  });

  it('renders a Jobs link in navigation', () => {
    render(<Footer />);
    const jobsLinks = screen.getAllByRole('link', { name: /jobs/i });
    expect(jobsLinks.length).toBeGreaterThan(0);
  });
});
