import { render, screen } from '@testing-library/react';
import ContactPage from '@/app/contact/page';

jest.mock('@emailjs/browser', () => ({
  sendForm: jest.fn(),
  init: jest.fn(),
}));

describe('ContactPage', () => {
  it('renders page title', () => {
    render(<ContactPage />);
    expect(screen.getByText('Get In Touch')).toBeInTheDocument();
  });

  it('renders correct phone number', () => {
    render(<ContactPage />);
    const matches = screen.getAllByText(/\+353 89 220 4082/);
    expect(matches.length).toBeGreaterThan(0);
  });

  it('renders correct email address', () => {
    render(<ContactPage />);
    expect(screen.getByText(/alanphibbs@alanphibbs\.ie/)).toBeInTheDocument();
  });

  it('renders business hours', () => {
    render(<ContactPage />);
    const matches = screen.getAllByText(/Mon/);
    expect(matches.length).toBeGreaterThan(0);
  });

  it('does not render address', () => {
    render(<ContactPage />);
    expect(screen.queryByText(/Construction Lane/i)).not.toBeInTheDocument();
  });

  it('does not render google maps', () => {
    render(<ContactPage />);
    expect(screen.queryByText(/Google Maps/i)).not.toBeInTheDocument();
  });

  it('does not contain old phone number', () => {
    render(<ContactPage />);
    expect(screen.queryByText(/\+353 1 234 5678/)).not.toBeInTheDocument();
  });

  it('renders FAQ section with questions', () => {
    render(<ContactPage />);
    expect(screen.getByText(/What are your working hours/i)).toBeInTheDocument();
    expect(screen.getByText(/How do I get in touch/i)).toBeInTheDocument();
    expect(screen.getByText(/Do you serve Greystones and Dublin/i)).toBeInTheDocument();
  });
});
