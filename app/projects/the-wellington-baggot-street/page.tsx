import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { projects } from '@/lib/projects';
import Button from '@/components/ui/Button';
import PageContainer from '@/components/ui/PageContainer';
import CaseStudyGallery, { type GalleryGroup } from '@/components/projects/CaseStudyGallery';

const project = projects.find((p) => p.id === '11-wellington-baggot-street');

export const metadata: Metadata = {
  title: 'The Wellington, Baggot Street | AP General Contractors Ltd',
  description:
    'Fit-out of The Wellington pub on Baggot Street, Dublin, from shell and core to finished venue: structural steel, street-facing glazing, a curved oak bar and new washrooms.',
  openGraph: {
    title: 'The Wellington, Baggot Street | AP General Contractors Ltd',
    description: 'Interior fit-out of The Wellington pub on Baggot Street, Dublin.',
    siteName: 'AP General Contractors Ltd',
    images: [{ url: '/images/projects/11-wellington-baggot-street/01.jpg' }],
  },
};

const facts = [
  { label: 'Location', value: 'Baggot Street, Dublin' },
  { label: 'Sector', value: 'Commercial, hospitality' },
  { label: 'Work', value: 'Shell and core to finished venue' },
  { label: 'Spaces', value: 'Main bar, lounge bar, snug, washrooms' },
];

// Photo order matches lib/projects.ts: 0 main bar (hero), 1-3 seating, 4 lounge bar, 5 snug, 6-7 washrooms.
// Photos 0, 1 and 3 already appear in the header and the before/after pairs, so the gallery shows the rest.
const groups: GalleryGroup[] = [
  {
    title: 'Lounge bar, snug and seating',
    columns: 'md:grid-cols-3',
    items: [
      { index: 4, aspect: 'aspect-[4/5]' },
      { index: 5, aspect: 'aspect-[4/5]' },
      { index: 2, aspect: 'aspect-[4/5]' },
    ],
  },
  {
    title: 'Washrooms',
    columns: 'md:grid-cols-2',
    items: [
      { index: 6, aspect: 'aspect-[4/5]' },
      { index: 7, aspect: 'aspect-[4/5]' },
    ],
  },
];

export default function WellingtonPage() {
  if (!project || !project.captions) notFound();
  const { title, images, captions, beforeAfter = [] } = project;

  return (
    <>
      <section className="relative flex min-h-[78svh] md:min-h-[88svh] items-end overflow-hidden bg-night text-white">
        <Image src={images[0]} alt={captions[0]} fill priority sizes="100vw" className="object-cover" />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/10 to-black/80" />
        <PageContainer className="relative z-10 pt-36 pb-12 md:pb-16">
          <Link
            href="/projects"
            className="inline-block text-sm font-semibold uppercase tracking-[0.14em] text-white/80 underline decoration-white/40 underline-offset-4 hover:text-white"
          >
            All projects
          </Link>
          <h1 className="mt-6 max-w-4xl font-heading text-5xl sm:text-6xl md:text-[5.5rem] font-extrabold leading-[0.98] tracking-[-0.03em]">
            {title}
          </h1>
          <p className="mt-5 text-lg md:text-2xl text-white/85">Bar and pub fit-out, Baggot Street, Dublin</p>
        </PageContainer>
      </section>

      <section className="bg-paper">
        <PageContainer className="py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-7">
              <p className="font-heading text-2xl md:text-[2rem] font-bold leading-snug tracking-[-0.02em] text-ink">
                A city pub fitted out as a set of distinct rooms, each with its own character.
              </p>
              <div className="mt-8 space-y-5 text-base md:text-lg leading-relaxed text-muted max-w-[65ch]">
                <p>
                  We took The Wellington on Baggot Street from shell and core to a finished venue, including a
                  structural steel frame, full street-facing glazing and a curved oak bar counter. The main bar
                  pairs that counter with a marble top, a brass foot rail, globe pendants and a herringbone
                  timber floor.
                </p>
                <p>
                  The lounge bar takes a warmer, lower-lit approach, with oxblood walls, a backlit back bar and
                  concealed lighting under the counter. Seating throughout mixes leather banquettes, high
                  tables and bar stools, and the washrooms are finished in timber panelling and glazed tile.
                </p>
              </div>
            </div>

            <dl className="lg:col-span-5 lg:border-l lg:border-line lg:pl-12 divide-y divide-line border-y border-line lg:border-y-0">
              {facts.map((fact) => (
                <div key={fact.label} className="grid grid-cols-[7.5rem_1fr] gap-4 py-5 lg:first:pt-0">
                  <dt className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted pt-1">{fact.label}</dt>
                  <dd className="text-ink font-semibold">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </PageContainer>
      </section>

      {beforeAfter.length > 0 && (
        <section aria-labelledby="before-after" className="bg-paper-2 border-y border-line">
          <PageContainer className="py-16 md:py-24">
            <h2
              id="before-after"
              className="font-heading text-3xl md:text-4xl font-bold tracking-[-0.025em] text-ink mb-8 md:mb-12"
            >
              Before and after
            </h2>
            <div className="space-y-14 md:space-y-20">
              {beforeAfter.map((pair) => (
                <figure key={pair.before}>
                  <div className="grid grid-cols-2 gap-2 md:gap-4">
                    {[
                      { src: pair.before, label: 'Before', alt: `During the fit-out: ${pair.caption}` },
                      { src: images[pair.after], label: 'After', alt: captions[pair.after] },
                    ].map((photo) => (
                      <div key={photo.label} className="relative aspect-[3/4] md:aspect-[4/5] overflow-hidden bg-paper-3">
                        <Image
                          src={photo.src}
                          alt={photo.alt}
                          fill
                          sizes="(max-width: 768px) 50vw, 45vw"
                          className="object-cover"
                        />
                        <span className="absolute left-0 top-0 bg-night/85 px-3 py-1.5 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.16em] text-white">
                          {photo.label}
                        </span>
                      </div>
                    ))}
                  </div>
                  <figcaption className="mt-4 max-w-[60ch] text-[15px] md:text-base leading-relaxed text-muted">
                    {pair.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </PageContainer>
        </section>
      )}

      <CaseStudyGallery title={title} images={images} captions={captions} groups={groups} />

      <section className="bg-night text-white">
        <PageContainer className="py-16 md:py-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <h2 className="font-heading text-3xl md:text-5xl font-extrabold leading-tight tracking-[-0.03em]">
              Planning a bar or restaurant fit-out?
            </h2>
            <p className="mt-4 max-w-md text-base md:text-lg text-white/75">
              Get in touch for a site visit and an honest conversation about what is involved.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button href="/contact" variant="light">
              Discuss a Project
            </Button>
            <Button href="/projects" variant="outline-light">
              All projects
            </Button>
          </div>
        </PageContainer>
      </section>
    </>
  );
}
