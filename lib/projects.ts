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
  /** Projects with their own write-up page link there instead of opening the gallery. */
  href?: string;
  location?: string;
  /** One caption per image, in the same order (used on the project page). */
  captions?: string[];
}

// Images are listed in display order: the first is the cover, finished work comes before
// in-progress shots. Near-duplicates and photos that read as mess rather than craft are left out.
// Project order also sets the portfolio rhythm (pairs, then a full-width row): the projects at
// positions 3, 6 and 9 fill full-width rows, so they have landscape covers.
function imgs(folder: string, order: number[]): string[] {
  return order.map((n) => `/images/projects/${folder}/${String(n).padStart(2, '0')}.jpg`);
}

function project(p: Omit<Project, 'coverImage'>): Project {
  return { ...p, coverImage: p.images[0] };
}

export const projects: Project[] = [
  project({
    id: '10-victorian-building-restoration',
    title: 'Victorian Building Restoration',
    category: 'Restoration',
    description:
      'Facade restoration of a protected Victorian building including exterior repainting, ornamental stonework repair, and corbel restoration.',
    images: imgs('10-victorian-building-restoration', [2, 3, 4, 10, 15, 12, 13, 9, 16, 14, 5, 6, 7, 11, 1]),
  }),
  project({
    id: '01-office-fitout',
    title: 'Office Fit-Out',
    category: 'Fit-Out',
    description:
      'A modern basement office transformation featuring dark slatted timber panelling, a dedicated conference room, and bespoke workstations.',
    images: imgs('01-office-fitout', [1, 3, 6, 7, 4, 2]),
  }),
  project({
    id: '11-wellington-baggot-street',
    title: 'The Wellington, Baggot Street',
    category: 'Fit-Out',
    location: 'Baggot Street, Dublin',
    href: '/projects/the-wellington-baggot-street',
    description:
      'Interior fit-out of The Wellington on Baggot Street: a bright main bar with a marble-topped counter, a darker oxblood lounge bar, a snug, leather banquette seating and new washrooms.',
    images: imgs('11-wellington-baggot-street', [1, 2, 3, 4, 5, 6, 7, 8]),
    captions: [
      'The main bar: a curved, timber-panelled counter with a marble top and brass foot rail, globe pendants overhead and a herringbone timber floor.',
      'High tables by the windows, with leather bar stools along a marble counter.',
      'Leather banquette seating against timber wall panelling, with globe wall lights and round tables.',
      'Channelled leather banquettes and high stools on the herringbone floor.',
      'The lounge bar: oxblood walls, a backlit back bar, and a panelled counter with concealed lighting and a brass foot rail.',
      'A quieter snug with banquette seating, wall lights and a patterned carpet.',
      'Washrooms finished in dark timber panelling and white wall tiling, with arched mirrors and twin basins.',
      'A hand-wash area in glazed oxblood tiles with a ceramic basin and brass wall light.',
    ],
  }),
  project({
    id: '04-country-house-renovation',
    title: 'Country House Renovation',
    category: 'Renovation',
    description:
      'Full renovation of a large rural period property: groundworks, Unilin insulation, liquid screed, flat roof with skylights, and a finished kitchen with terrazzo flooring.',
    images: imgs('04-country-house-renovation', [13, 14, 10, 8, 9, 7, 15, 5, 2, 3, 4, 18, 16, 17, 19, 11, 12, 1]),
  }),
  project({
    id: '06-period-house-interior',
    title: 'Period House Interior',
    category: 'Period Property',
    description:
      'Sensitive interior renovation of a Victorian terraced house, including restoration of original pine floors and a full bathroom installation.',
    images: imgs('06-period-house-interior', [2, 1, 3]),
  }),
  project({
    id: '09-apartment-fitout',
    title: 'Apartment Fit-Out',
    category: 'Fit-Out',
    description:
      'Contemporary apartment fit-out with a sleek white kitchen, vertically tiled bathrooms, built-in bookshelving, and floating timber shelves throughout.',
    images: imgs('09-apartment-fitout', [1, 4, 5, 3, 6, 7, 2, 8, 10]),
  }),
  project({
    id: '02-commercial-fitout',
    title: 'Bar & Restaurant Fit-Out',
    category: 'Fit-Out',
    description:
      'Urban commercial build-out featuring a curved oak bar counter, structural steel frame, and full street-facing glazing, from shell and core to finished venue.',
    images: imgs('02-commercial-fitout', [4, 3, 10, 1, 9, 8, 5, 6, 7, 11, 12]),
  }),
  project({
    id: '03-new-build-extension',
    title: 'Timber Frame New Build',
    category: 'Extension',
    description:
      'Timber frame construction from foundations up, including Rockwool insulation, breather membrane, drylining, and high-quality plastering throughout.',
    images: imgs('03-new-build-extension', [7, 8, 3, 9, 4, 6, 1, 2]),
  }),
  project({
    id: '07-garden-landscaping',
    title: 'Garden Renovation',
    category: 'Renovation',
    description:
      'Rear garden transformation featuring timber slatted fencing, granite paving, composite decking, and rendered boundary walls.',
    images: imgs('07-garden-landscaping', [4, 5, 1]),
  }),
  project({
    id: '05-commercial-kitchen',
    title: 'Commercial Kitchen',
    category: 'Fit-Out',
    description:
      'Professional commercial kitchen installation featuring navy cabinetry, white countertops, built-in appliances, and a suspended ceiling system.',
    images: imgs('05-commercial-kitchen', [1, 2]),
  }),
  project({
    id: '08-crossguns-snooker-club',
    title: 'Commercial Building Restoration',
    category: 'Restoration',
    description:
      'External restoration of a commercial building including full exterior repaint and professional graffiti removal.',
    images: imgs('08-crossguns-snooker-club', [2, 3, 4, 1]),
  }),
];

export const categories = [
  'All',
  'Restoration',
  'Renovation',
  'Extension',
  'Fit-Out',
  'Period Property',
] as const;
