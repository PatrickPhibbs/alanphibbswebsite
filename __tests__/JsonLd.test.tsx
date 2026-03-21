import { render } from '@testing-library/react';
import JsonLd from '@/components/JsonLd';

const businessData = {
  '@context': 'https://schema.org',
  '@type': 'GeneralContractor',
  name: 'Alan Phibbs Construction',
  telephone: '+353892204082',
  url: 'https://www.alanphibbs.ie',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Greystones',
    addressRegion: 'County Wicklow',
    addressCountry: 'IE',
  },
  areaServed: ['Dublin', 'Greystones', 'County Wicklow', 'County Dublin'],
};

describe('JsonLd', () => {
  it('renders a script tag with type application/ld+json', () => {
    const { container } = render(<JsonLd data={businessData} />);
    const script = container.querySelector('script[type="application/ld+json"]');
    expect(script).toBeInTheDocument();
  });

  it('embeds valid JSON in the script tag', () => {
    const { container } = render(<JsonLd data={businessData} />);
    const script = container.querySelector('script[type="application/ld+json"]');
    expect(() => JSON.parse(script!.textContent!)).not.toThrow();
  });

  it('contains the correct @type', () => {
    const { container } = render(<JsonLd data={businessData} />);
    const script = container.querySelector('script[type="application/ld+json"]');
    const parsed = JSON.parse(script!.textContent!);
    expect(parsed['@type']).toBe('GeneralContractor');
  });

  it('contains the correct business name', () => {
    const { container } = render(<JsonLd data={businessData} />);
    const script = container.querySelector('script[type="application/ld+json"]');
    const parsed = JSON.parse(script!.textContent!);
    expect(parsed.name).toBe('Alan Phibbs Construction');
  });

  it('contains the correct domain', () => {
    const { container } = render(<JsonLd data={businessData} />);
    const script = container.querySelector('script[type="application/ld+json"]');
    const parsed = JSON.parse(script!.textContent!);
    expect(parsed.url).toContain('alanphibbs.ie');
  });

  it('contains Greystones in the address', () => {
    const { container } = render(<JsonLd data={businessData} />);
    const script = container.querySelector('script[type="application/ld+json"]');
    const parsed = JSON.parse(script!.textContent!);
    expect(parsed.address.addressLocality).toBe('Greystones');
  });

  it('lists Dublin in areaServed', () => {
    const { container } = render(<JsonLd data={businessData} />);
    const script = container.querySelector('script[type="application/ld+json"]');
    const parsed = JSON.parse(script!.textContent!);
    expect(parsed.areaServed).toContain('Dublin');
  });
});
