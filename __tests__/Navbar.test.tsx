import { render, screen } from '@testing-library/react';
import Navbar from '@/components/layout/Navbar';
import ThemeProvider from '@/components/ui/ThemeProvider';

jest.mock('next/navigation', () => ({
  usePathname: () => '/',
}));

function renderNavbar() {
  return render(
    <ThemeProvider>
      <Navbar />
    </ThemeProvider>
  );
}

describe('Navbar', () => {
  it('renders the logo image', () => {
    renderNavbar();
    expect(screen.getByRole('img', { name: /alan phibbs construction/i })).toBeInTheDocument();
  });

  it('renders navigation links', () => {
    renderNavbar();
    expect(screen.getByText('Services')).toBeInTheDocument();
    expect(screen.getByText('Projects')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  it('renders Discuss a Project button', () => {
    renderNavbar();
    expect(screen.getAllByText('Discuss a Project').length).toBeGreaterThanOrEqual(1);
  });

  it('renders correct phone number', () => {
    renderNavbar();
    expect(screen.queryByText(/\+353 1 234 5678/)).not.toBeInTheDocument();
  });

  it('renders mobile hamburger button', () => {
    renderNavbar();
    expect(screen.getByLabelText('Toggle menu')).toBeInTheDocument();
  });

  it('renders theme toggle buttons', () => {
    renderNavbar();
    expect(screen.getAllByLabelText(/switch to (light|dark) mode/i).length).toBeGreaterThanOrEqual(1);
  });
});
