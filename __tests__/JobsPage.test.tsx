import { render, screen } from '@testing-library/react';
import JobsPage from '@/app/jobs/page';

describe('JobsPage', () => {
  it('renders a page heading', () => {
    render(<JobsPage />);
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  });

  it('renders a careers/jobs heading', () => {
    render(<JobsPage />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/careers|jobs|hiring|work with us/i);
  });

  it('renders at least one job role', () => {
    render(<JobsPage />);
    const roles = screen.getAllByTestId('job-role');
    expect(roles.length).toBeGreaterThanOrEqual(1);
  });

  it('renders a contact or apply prompt', () => {
    render(<JobsPage />);
    const prompts = screen.getAllByText(/apply|get in touch|send.*cv|email/i);
    expect(prompts.length).toBeGreaterThan(0);
  });

  it('renders a link to contact or email', () => {
    render(<JobsPage />);
    const links = screen.getAllByRole('link');
    const hasContactOrMailLink = links.some(
      (l) => l.getAttribute('href')?.startsWith('/contact') || l.getAttribute('href')?.startsWith('mailto:')
    );
    expect(hasContactOrMailLink).toBe(true);
  });
});
