import Link from 'next/link';
import Image from 'next/image';

const sectors = [
  {
    title: 'Residential',
    href: '/services',
    image: '/images/projects/09-apartment-fitout/04.jpg',
    alt: 'Finished apartment kitchen with handleless units and oak flooring',
  },
  {
    title: 'Commercial',
    href: '/services#office-fit-out-refurbishments',
    image: '/images/projects/01-office-fitout/01.jpg',
    alt: 'Office meeting room with slatted timber wall panelling',
  },
  {
    title: 'Renovation',
    href: '/services#restoration-conservation',
    image: '/images/projects/10-victorian-building-restoration/02.jpg',
    alt: 'Restored Victorian facade with repainted ornamental stonework',
  },
];

/** Three gapless full-bleed tiles for the brand's three areas of work. */
export default function SectorTiles() {
  return (
    <section aria-label="Areas of work" className="grid grid-cols-1 md:grid-cols-3">
      {sectors.map((sector) => (
        <Link
          key={sector.title}
          href={sector.href}
          className="group relative block aspect-[4/3] md:aspect-[3/4] lg:aspect-[4/5] overflow-hidden bg-night focus-visible:outline-offset-[-4px]"
        >
          <Image
            src={sector.image}
            alt={sector.alt}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />
          <div aria-hidden className="absolute inset-x-0 top-0 h-2/5 bg-gradient-to-b from-black/70 to-transparent" />
          <h2 className="absolute left-6 top-6 md:left-8 md:top-8 font-heading text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold tracking-[-0.03em] text-white">
            {sector.title}
          </h2>
        </Link>
      ))}
    </section>
  );
}
