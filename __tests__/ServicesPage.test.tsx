import { render, screen } from '@testing-library/react';
import ServicesPage from '@/app/services/page';

describe('ServicesPage', () => {
  it('renders page title', () => {
    render(<ServicesPage />);
    expect(screen.getByText('Our services')).toBeInTheDocument();
  });

  it('renders key services', () => {
    render(<ServicesPage />);
    expect(screen.getByText('Restoration & Conservation')).toBeInTheDocument();
    expect(screen.getByText('Garden & Landscaping')).toBeInTheDocument();
    expect(screen.getByText('Office Fit Out & Refurbishments')).toBeInTheDocument();
  });

  it('renders CTA section', () => {
    render(<ServicesPage />);
    const headings = screen.getAllByRole('heading');
    const ctaHeading = headings.find((h) => h.textContent?.includes('Ready to discuss'));
    expect(ctaHeading).toBeDefined();
  });

  it('renders FAQ section with questions', () => {
    render(<ServicesPage />);
    expect(screen.getByText(/Do you offer free quotes/i)).toBeInTheDocument();
    expect(screen.getByText(/Why use lime plaster/i)).toBeInTheDocument();
    expect(screen.getByText(/Are you fully insured/i)).toBeInTheDocument();
    expect(screen.getByText(/Do you work across Dublin/i)).toBeInTheDocument();
  });

  it('FAQ answers mention Greystones and Dublin', () => {
    render(<ServicesPage />);
    const greystones = screen.getAllByText(/Greystones/i);
    expect(greystones.length).toBeGreaterThan(0);
    const dublin = screen.getAllByText(/Dublin/i);
    expect(dublin.length).toBeGreaterThan(0);
  });
});
