import { render, screen } from '@testing-library/react';
import SectorTiles from '@/components/home/SectorTiles';

describe('SectorTiles', () => {
  it('renders the three areas of work as links', () => {
    render(<SectorTiles />);
    ['Residential', 'Commercial', 'Renovation'].forEach((title) => {
      expect(screen.getByRole('heading', { name: title }).closest('a')).toHaveAttribute('href');
    });
  });
});
