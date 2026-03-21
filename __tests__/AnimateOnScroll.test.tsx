import { render, screen } from '@testing-library/react';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';

describe('AnimateOnScroll', () => {
  it('renders children', () => {
    render(<AnimateOnScroll><p>Hello World</p></AnimateOnScroll>);
    expect(screen.getByText('Hello World')).toBeInTheDocument();
  });
});
