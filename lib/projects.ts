export type ProjectCategory =
  | 'Restoration'
  | 'Renovation'
  | 'Extension'
  | 'Fit-Out'
  | 'Period Property';

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  description: string;
  coverImage: string;
  images: string[];
}

function imgs(folder: string, count: number): string[] {
  return Array.from({ length: count }, (_, i) =>
    `/images/projects/${folder}/${String(i + 1).padStart(2, '0')}.jpg`
  );
}

export const projects: Project[] = [
  {
    id: '07-garden-landscaping',
    title: 'Garden Renovation',
    category: 'Renovation',
    description:
      'Rear garden transformation featuring timber slatted fencing, granite paving, composite decking, and rendered boundary walls.',
    coverImage: '/images/projects/07-garden-landscaping/01.jpg',
    images: imgs('07-garden-landscaping', 5),
  },
  {
    id: '10-victorian-building-restoration',
    title: 'Victorian Building Restoration',
    category: 'Restoration',
    description:
      'Facade restoration of a protected Victorian building including exterior repainting, ornamental stonework repair, and corbel restoration.',
    coverImage: '/images/projects/10-victorian-building-restoration/02.jpg',
    images: imgs('10-victorian-building-restoration', 16),
  },
  {
    id: '01-office-fitout',
    title: 'Office Fit-Out',
    category: 'Fit-Out',
    description:
      'A modern basement office transformation featuring dark slatted timber panelling, a dedicated conference room, and bespoke workstations.',
    coverImage: '/images/projects/01-office-fitout/03.jpg',
    images: imgs('01-office-fitout', 8),
  },
  {
    id: '09-apartment-fitout',
    title: 'Apartment Fit-Out',
    category: 'Fit-Out',
    description:
      'Contemporary apartment fit-out with a sleek white kitchen, vertically tiled bathrooms, built-in bookshelving, and floating timber shelves throughout.',
    coverImage: '/images/projects/09-apartment-fitout/01.jpg',
    images: imgs('09-apartment-fitout', 10),
  },
  {
    id: '06-period-house-interior',
    title: 'Period House Interior',
    category: 'Period Property',
    description:
      'Sensitive interior renovation of a Victorian terraced house, including restoration of original pine floors and a full bathroom installation.',
    coverImage: '/images/services/painting-interior.jpg',
    images: imgs('06-period-house-interior', 4),
  },
  {
    id: '04-country-house-renovation',
    title: 'Country House Renovation',
    category: 'Renovation',
    description:
      'Full renovation of a large rural period property: groundworks, Unilin insulation, liquid screed, flat roof with skylights, and a finished kitchen with terrazzo flooring.',
    coverImage: '/images/services/country-house-kitchen.jpg',
    images: imgs('04-country-house-renovation', 19),
  },
  {
    id: '02-commercial-fitout',
    title: 'Bar & Restaurant Fit-Out',
    category: 'Fit-Out',
    description:
      'Urban commercial build-out featuring a curved oak bar counter, structural steel frame, and full street-facing glazing, from shell and core to finished venue.',
    coverImage: '/images/projects/02-commercial-fitout/09.jpg',
    images: imgs('02-commercial-fitout', 12),
  },
  {
    id: '03-new-build-extension',
    title: 'Timber Frame New Build',
    category: 'Extension',
    description:
      'Timber frame construction from foundations up, including Rockwool insulation, breather membrane, drylining, and high-quality plastering throughout.',
    coverImage: '/images/projects/03-new-build-extension/01.jpg',
    images: imgs('03-new-build-extension', 9),
  },
  {
    id: '05-commercial-kitchen',
    title: 'Commercial Kitchen',
    category: 'Fit-Out',
    description:
      'Professional commercial kitchen installation featuring navy cabinetry, white countertops, built-in appliances, and a suspended ceiling system.',
    coverImage: '/images/projects/05-commercial-kitchen/01.jpg',
    images: imgs('05-commercial-kitchen', 3),
  },
  {
    id: '08-crossguns-snooker-club',
    title: 'Commercial Building Restoration',
    category: 'Restoration',
    description:
      'External restoration of a commercial building including full exterior repaint and professional graffiti removal.',
    coverImage: '/images/projects/08-crossguns-snooker-club/01.jpg',
    images: imgs('08-crossguns-snooker-club', 4),
  },
];

export const categories = [
  'All',
  'Restoration',
  'Renovation',
  'Extension',
  'Fit-Out',
  'Period Property',
] as const;
