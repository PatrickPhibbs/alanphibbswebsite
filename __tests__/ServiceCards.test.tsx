import { render, screen } from '@testing-library/react';
import ServiceCards from '@/components/home/ServiceCards';

describe('ServiceCards', () => {
  it('renders all three service card titles', () => {
    render(<ServiceCards />);
    expect(screen.getByText('Restoration & Conservation')).toBeInTheDocument();
    expect(screen.getByText('Garden Projects')).toBeInTheDocument();
    expect(screen.getByText('Office Fit Out & Refurbishments')).toBeInTheDocument();
  });

  it('does not render old service names', () => {
    render(<ServiceCards />);
    expect(screen.queryByText('Residential New Builds')).not.toBeInTheDocument();
    expect(screen.queryByText('Renovations & Extensions')).not.toBeInTheDocument();
    expect(screen.queryByText('Project Gallery')).not.toBeInTheDocument();
  });

  it('renders stats bar with years experience', () => {
    render(<ServiceCards />);
    expect(screen.getByText(/28/)).toBeInTheDocument();
    expect(screen.getByText(/Years/i)).toBeInTheDocument();
  });

  it('renders stats bar with projects figure', () => {
    render(<ServiceCards />);
    expect(screen.getByText(/300\+/)).toBeInTheDocument();
  });

  it('renders stats bar with insured stat', () => {
    render(<ServiceCards />);
    expect(screen.getByText(/Fully Insured/i)).toBeInTheDocument();
  });

  it('renders cards as links', () => {
    render(<ServiceCards />);
    const links = screen.getAllByRole('link');
    expect(links.length).toBeGreaterThanOrEqual(3);
  });
});
