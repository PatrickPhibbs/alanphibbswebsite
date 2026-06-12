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

  it('renders credibility line', () => {
    render(<ServiceCards />);
    expect(screen.getByText(/Established 1991/)).toBeInTheDocument();
    expect(screen.getByText(/Fully insured/)).toBeInTheDocument();
  });

  it('renders cards as links', () => {
    render(<ServiceCards />);
    const links = screen.getAllByRole('link');
    expect(links.length).toBeGreaterThanOrEqual(6);
  });
});
