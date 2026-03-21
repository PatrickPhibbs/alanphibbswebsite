import { render, screen } from '@testing-library/react';
import ProjectGrid from '@/components/projects/ProjectGrid';

describe('ProjectGrid', () => {
  it('renders project cards', () => {
    render(<ProjectGrid />);
    expect(screen.getByText('Office Fit-Out')).toBeInTheDocument();
  });

  it('renders filter buttons', () => {
    render(<ProjectGrid />);
    const buttons = screen.getAllByRole('button');
    const filterLabels = buttons.map((b) => b.textContent);
    expect(filterLabels).toContain('All');
    expect(filterLabels).toContain('New Builds');
    expect(filterLabels).toContain('Renovations');
    expect(filterLabels).toContain('Fit-Outs');
    expect(filterLabels).toContain('Landscaping');
    expect(filterLabels).toContain('Restoration');
  });
});
