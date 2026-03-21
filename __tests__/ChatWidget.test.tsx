import { render, screen } from '@testing-library/react';
import ChatWidget from '@/components/layout/ChatWidget';

describe('ChatWidget', () => {
  it('renders chat button', () => {
    render(<ChatWidget />);
    expect(screen.getByLabelText('Chat with us')).toBeInTheDocument();
  });

  it('has fixed positioning', () => {
    const { container } = render(<ChatWidget />);
    const widget = container.firstChild as HTMLElement;
    expect(widget.className).toMatch(/fixed/);
  });
});
