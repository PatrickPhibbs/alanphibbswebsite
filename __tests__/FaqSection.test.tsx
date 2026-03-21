import { render, screen } from '@testing-library/react';
import FaqSection from '@/components/ui/FaqSection';

const faqs = [
  { q: 'Do you offer free quotes?', a: 'Yes, we offer a free initial consultation for all projects.' },
  { q: 'Are you fully insured?', a: 'Yes, we carry full public liability insurance on every project.' },
];

describe('FaqSection', () => {
  it('renders all questions', () => {
    render(<FaqSection faqs={faqs} />);
    expect(screen.getByText('Do you offer free quotes?')).toBeInTheDocument();
    expect(screen.getByText('Are you fully insured?')).toBeInTheDocument();
  });

  it('renders all answers', () => {
    render(<FaqSection faqs={faqs} />);
    expect(screen.getByText(/free initial consultation/)).toBeInTheDocument();
    expect(screen.getByText(/public liability insurance/)).toBeInTheDocument();
  });

  it('renders FAQPage schema script tag', () => {
    const { container } = render(<FaqSection faqs={faqs} />);
    const script = container.querySelector('script[type="application/ld+json"]');
    expect(script).toBeInTheDocument();
  });

  it('schema contains @type FAQPage', () => {
    const { container } = render(<FaqSection faqs={faqs} />);
    const script = container.querySelector('script[type="application/ld+json"]');
    const parsed = JSON.parse(script!.textContent!);
    expect(parsed['@type']).toBe('FAQPage');
  });

  it('schema contains all questions', () => {
    const { container } = render(<FaqSection faqs={faqs} />);
    const script = container.querySelector('script[type="application/ld+json"]');
    const parsed = JSON.parse(script!.textContent!);
    const names = parsed.mainEntity.map((e: { name: string }) => e.name);
    expect(names).toContain('Do you offer free quotes?');
    expect(names).toContain('Are you fully insured?');
  });
});
