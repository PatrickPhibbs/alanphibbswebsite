import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ProjectFilter from '@/components/projects/ProjectFilter';

describe('ProjectFilter', () => {
  const onFilter = jest.fn();

  it('renders all filter buttons', () => {
    render(<ProjectFilter active="All" onFilter={onFilter} />);
    expect(screen.getByText('All')).toBeInTheDocument();
    expect(screen.getByText('Restoration')).toBeInTheDocument();
    expect(screen.getByText('Renovation')).toBeInTheDocument();
    expect(screen.getByText('Extension')).toBeInTheDocument();
    expect(screen.getByText('Fit-Out')).toBeInTheDocument();
    expect(screen.getByText('Period Property')).toBeInTheDocument();
  });

  it('calls onFilter when a button is clicked', async () => {
    const user = userEvent.setup();
    render(<ProjectFilter active="All" onFilter={onFilter} />);
    await user.click(screen.getByText('Renovation'));
    expect(onFilter).toHaveBeenCalledWith('Renovation');
  });

  it('highlights active filter', () => {
    render(<ProjectFilter active="Renovation" onFilter={onFilter} />);
    const btn = screen.getByText('Renovation');
    expect(btn.className).toMatch(/bg-charcoal-800/);
  });
});
