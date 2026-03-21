import { render, screen } from '@testing-library/react';
import ScrollIndicator from '@/components/ui/ScrollIndicator';

describe('ScrollIndicator', () => {
  it('renders SCROLL DOWN text', () => {
    render(<ScrollIndicator />);
    expect(screen.getByText('SCROLL DOWN')).toBeInTheDocument();
  });
});
