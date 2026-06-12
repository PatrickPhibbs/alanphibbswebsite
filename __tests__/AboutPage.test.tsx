import { render, screen } from '@testing-library/react';
import AboutPage from '@/app/about/page';

describe('AboutPage', () => {
  it('renders page title', () => {
    render(<AboutPage />);
    expect(screen.getByText('About us')).toBeInTheDocument();
  });

  it('renders story section', () => {
    render(<AboutPage />);
    expect(screen.getByText('Our story')).toBeInTheDocument();
  });

  it('renders why choose us features without award-winning', () => {
    render(<AboutPage />);
    expect(screen.getByText('35+ years in the trade')).toBeInTheDocument();
    expect(screen.getByText('Fully insured')).toBeInTheDocument();
    expect(screen.getByText('Hands-on approach')).toBeInTheDocument();
    expect(screen.getByText('Wicklow and Dublin')).toBeInTheDocument();
    expect(screen.queryByText(/award.winning/i)).not.toBeInTheDocument();
  });

  it('does not render a team section with placeholder names', () => {
    render(<AboutPage />);
    expect(screen.queryByText("Sarah O'Brien")).not.toBeInTheDocument();
    expect(screen.queryByText('Declan Murphy')).not.toBeInTheDocument();
    expect(screen.queryByText('Emma Walsh')).not.toBeInTheDocument();
  });

  it('renders FAQ section with questions', () => {
    render(<AboutPage />);
    expect(screen.getByText(/How long has Alan Phibbs been in the trade/i)).toBeInTheDocument();
    expect(screen.getByText(/Where are you based/i)).toBeInTheDocument();
    expect(screen.getByText(/What types of projects do you take on/i)).toBeInTheDocument();
  });

  it('FAQ answers mention Greystones', () => {
    render(<AboutPage />);
    expect(screen.getByText(/Greystones/i)).toBeInTheDocument();
  });
});
