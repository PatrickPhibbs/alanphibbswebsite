import { render, screen } from '@testing-library/react';
import ServiceCards from '@/components/home/ServiceCards';

describe('ServiceCards', () => {
  it('renders service section heading', () => {
    render(<ServiceCards />);
    expect(screen.getByText('Services')).toBeInTheDocument();
  });

  it('renders all six service titles', () => {
    render(<ServiceCards />);
    expect(screen.getByText('Residential Renovations')).toBeInTheDocument();
    expect(screen.getByText('Extensions & Structural Works')).toBeInTheDocument();
    expect(screen.getByText('Restoration & Conservation')).toBeInTheDocument();
    expect(screen.getByText('Kitchen, Bathroom & Interior Fit-Outs')).toBeInTheDocument();
    expect(screen.getByText('Office & Commercial Fit-Out')).toBeInTheDocument();
    expect(screen.getByText('Garden & External Works')).toBeInTheDocument();
  });

  it('does not repeat the credentials shown in the trust bar', () => {
    render(<ServiceCards />);
    expect(screen.queryByText(/Established 1991/)).not.toBeInTheDocument();

  });

  it('renders cards as links', () => {
    render(<ServiceCards />);
    const links = screen.getAllByRole('link');
    expect(links.length).toBeGreaterThanOrEqual(6);
  });
});
