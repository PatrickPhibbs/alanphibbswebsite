import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ProjectFilter from '@/components/projects/ProjectFilter';

describe('ProjectFilter', () => {
  const onFilter = jest.fn();

  it('renders all filter buttons', () => {
    render(<ProjectFilter active="All" onFilter={onFilter} />);
    expect(screen.getByText('All')).toBeInTheDocument();
    expect(screen.getByText('New Builds')).toBeInTheDocument();
    expect(screen.getByText('Renovations')).toBeInTheDocument();
    expect(screen.getByText('Fit-Outs')).toBeInTheDocument();
    expect(screen.getByText('Landscaping')).toBeInTheDocument();
    expect(screen.getByText('Restoration')).toBeInTheDocument();
  });

  it('calls onFilter when a button is clicked', async () => {
    const user = userEvent.setup();
    render(<ProjectFilter active="All" onFilter={onFilter} />);
    await user.click(screen.getByText('Renovations'));
    expect(onFilter).toHaveBeenCalledWith('Renovations');
  });

  it('highlights active filter', () => {
    render(<ProjectFilter active="Renovations" onFilter={onFilter} />);
    const btn = screen.getByText('Renovations');
    expect(btn.className).toMatch(/bg-maroon-800/);
  });
});
