import { render, screen } from '@testing-library/react';
import Button from '@/components/ui/Button';

describe('Button', () => {
  it('renders children text', () => {
    render(<Button>Click Me</Button>);
    expect(screen.getByText('Click Me')).toBeInTheDocument();
  });

  it('renders solid variant by default with maroon background', () => {
    render(<Button>Solid</Button>);
    const btn = screen.getByRole('button');
    expect(btn.className).toMatch(/bg-maroon-800/);
  });

  it('renders outline variant with border', () => {
    render(<Button variant="outline">Outline</Button>);
    const btn = screen.getByRole('button');
    expect(btn.className).toMatch(/border/);
  });

  it('renders as a link when href is provided', () => {
    render(<Button href="/test">Link Button</Button>);
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/test');
  });
});
