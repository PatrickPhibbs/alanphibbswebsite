import { render, screen } from '@testing-library/react';
import SectionHeading from '@/components/ui/SectionHeading';

describe('SectionHeading', () => {
  it('renders heading text', () => {
    render(<SectionHeading>Our Services</SectionHeading>);
    expect(screen.getByText('Our Services')).toBeInTheDocument();
  });

  it('renders subtitle when provided', () => {
    render(<SectionHeading subtitle="We offer the best">Title</SectionHeading>);
    expect(screen.getByText('We offer the best')).toBeInTheDocument();
  });

  it('does not render subtitle element when not provided', () => {
    const { container } = render(<SectionHeading>Title</SectionHeading>);
    expect(container.querySelectorAll('p').length).toBe(0);
  });
});
