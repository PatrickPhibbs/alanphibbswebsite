export interface Service {
  id: string;
  title: string;
  slug: string;
  description: string;
  features: string[];
  image: string;
}

export const services: Service[] = [
  {
    id: '1',
    title: 'Restoration & Conservation',
    slug: 'restoration-conservation',
    description: 'We specialise in the restoration and conservation of period and protected buildings, with particular expertise in lime-based finishes that preserve the character and breathability of Georgian and Victorian architecture. Lime plaster and lime render are essential to the long-term health of older structures — they allow walls to move and breathe in a way that modern cement cannot. Our craftsmen are experienced in matching original finishes, repairing ornamental stonework, and restoring facades to their former condition.',
    features: [
      'Lime plaster and lime render application',
      'Georgian and Victorian facade restoration',
      'Ornamental stonework and corbel repair',
      'Graffiti removal and exterior repainting',
      'Works to protected and conservation-listed structures',
    ],
    image: '/images/projects/10-victorian-building-restoration/02.jpg',
  },
  {
    id: '2',
    title: 'Garden Projects',
    slug: 'garden-projects',
    description: 'A well-designed outdoor space adds lasting value to any property. We design and build gardens from the ground up — handling everything from groundworks and drainage to paving, decking, boundary walls, and planting areas. Whether you want a low-maintenance contemporary garden or a full landscaping transformation, our team delivers clean, durable results that complement your home.',
    features: [
      'Granite and natural stone paving',
      'Composite and timber decking',
      'Rendered and block boundary walls',
      'Timber slatted fencing and screening',
      'Groundworks, drainage, and site preparation',
    ],
    image: '/images/projects/07-garden-landscaping/01.jpg',
  },
  {
    id: '3',
    title: 'Office Fit Out & Refurbishments',
    slug: 'office-fit-out-refurbishments',
    description: 'We deliver commercial office fit-outs and refurbishments that create functional, well-finished workspaces from shell and core to fully operational. From bespoke workstations and joinery to conference rooms, suspended ceilings, and full mechanical and electrical coordination, we manage every trade on site so you don\'t have to. Our team works efficiently to minimise disruption and meet tight commercial programmes.',
    features: [
      'Full shell and core to turnkey fit-out',
      'Bespoke joinery, workstations, and cabinetry',
      'Conference rooms and breakout spaces',
      'Suspended ceilings and raised access floors',
      'Full project management and snagging',
    ],
    image: '/images/projects/01-office-fitout/01.jpg',
  },
];
