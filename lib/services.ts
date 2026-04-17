export interface Service {
  id: string;
  title: string;
  slug: string;
  description: string;
  features: string[];
  image: string;
  beforeImage?: string;
}

export const services: Service[] = [
  {
    id: '1',
    title: 'Restoration & Conservation',
    slug: 'restoration-conservation',
    description: 'We specialise in the restoration and conservation of period and protected buildings, with particular expertise in lime-based finishes that preserve the character and breathability of Georgian and Victorian architecture. Lime plaster and lime render are essential to the long-term health of older structures, as they allow walls to move and breathe in a way that modern cement cannot. Our craftsmen are experienced in matching original finishes, repairing ornamental stonework, and restoring facades to the standard they deserve.',
    features: [
      'Lime plaster and lime render application',
      'Georgian and Victorian facade restoration',
      'Ornamental stonework and corbel repair',
      'Graffiti removal and exterior repainting',
      'Works to protected and conservation-listed structures',
    ],
    image: '/images/services/restoration-after.jpg',
    beforeImage: '/images/services/restoration-before.jpg',
  },
  {
    id: '2',
    title: 'Kitchen & Bathroom Fitouts',
    slug: 'kitchen-bathroom-fitouts',
    description: 'A well-built kitchen or bathroom makes a difference every single day. We handle the full fit-out from first fix to final tile, coordinating plumbing, electrical, tiling, and joinery so you deal with one contractor from start to finish. Whether you are upgrading a single bathroom or refitting an entire floor, the standard of finish stays the same throughout.',
    features: [
      'Full bathroom and en-suite fit-out',
      'Bespoke kitchen installation and joinery',
      'Tiling, wet rooms, and walk-in shower enclosures',
      'Plumbing first and second fix',
      'Project management from strip-out to snagging',
    ],
    image: '/images/services/kitchen-fitout.jpg',
  },
  {
    id: '3',
    title: 'Interior Painting & Decoration',
    slug: 'painting-decoration',
    description: 'A good paint job is about preparation as much as the finish. We strip back, fill, prime, and apply to a standard that holds up over time and looks right when the light hits it. We work across residential refurbishments, period properties, and new builds, matching colours and finishes to the character of each space.',
    features: [
      'Interior and exterior painting and decoration',
      'Period property plasterwork preparation',
      'Spray finishing for cabinetry and joinery',
      'Lime wash and specialist period finishes',
      'Full preparation, filling, and priming included',
    ],
    image: '/images/services/painting-interior.jpg',
  },
  {
    id: '4',
    title: 'Electrical & Plumbing',
    slug: 'electrical-plumbing',
    description: 'We carry out full rewires, new installations, and plumbing works as part of our refurbishment and fit-out projects, or as standalone jobs. All electrical work is completed by registered electricians and certified on completion. Plumbing covers everything from boiler replacement and underfloor heating to bathroom first fix and full repipes.',
    features: [
      'Full rewires and new consumer unit installation',
      'Lighting design and installation',
      'Boiler replacement and heating systems',
      'Underfloor heating installation',
      'Bathroom and kitchen plumbing first and second fix',
    ],
    image: '/images/services/electrical-plumbing.jpg',
  },
  {
    id: '5',
    title: 'Groundworks & Stone Works',
    slug: 'groundworks-stone-works',
    description: 'Before anything goes up, the groundwork has to be right. We handle site clearance, excavation, foundations, drainage, concrete and screed floors, and structural alterations. Our stone work covers chimney stacks, boundary walls, pointed stonework, and lead flashing, carried out properly so it lasts.',
    features: [
      'Site clearance, excavation, and drainage',
      'Concrete foundations and floor screeds',
      'Structural alterations and steel beam installation',
      'Chimney stacks, stone walls, and pointing',
      'Lead flashing and flat roof installation',
    ],
    image: '/images/services/roof-chimney-after.jpg',
    beforeImage: '/images/services/groundworks-before.jpg',
  },
  {
    id: '6',
    title: 'Garden & Landscaping',
    slug: 'garden-landscaping',
    description: 'A well-designed outdoor space adds lasting value to any property. We design and build gardens from the ground up, handling everything from groundworks and drainage to paving, decking, boundary walls, and planting areas. Whether you want a low-maintenance contemporary garden or a full landscaping overhaul, we deliver clean, durable work that suits your home.',
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
    id: '7',
    title: 'Office Fit Out & Refurbishments',
    slug: 'office-fit-out-refurbishments',
    description: 'We deliver commercial office fit-outs and refurbishments that create functional, well-finished workspaces from shell and core to fully operational. From bespoke workstations and joinery to conference rooms, suspended ceilings, and full mechanical and electrical coordination, we manage every trade on site so you do not have to. Our team works efficiently to minimise disruption and meet tight commercial programmes.',
    features: [
      'Full shell and core to turnkey fit-out',
      'Bespoke joinery, workstations, and cabinetry',
      'Conference rooms and breakout spaces',
      'Suspended ceilings and raised access floors',
      'Full project management and snagging',
    ],
    image: '/images/services/office-fitout.jpg',
  },
];
