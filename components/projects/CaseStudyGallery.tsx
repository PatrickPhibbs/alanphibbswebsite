'use client';

import { useState } from 'react';
import Image from 'next/image';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import PageContainer from '@/components/ui/PageContainer';

export interface GalleryGroup {
  title: string;
  /** Indexes into `images` / `captions`. */
  items: { index: number; span?: string; aspect: string }[];
  /** Grid columns for the group at desktop width. */
  columns: string;
}

interface CaseStudyGalleryProps {
  title: string;
  images: string[];
  captions: string[];
  groups: GalleryGroup[];
}

const lightboxStyles = {
  root: { '--yarl__color_backdrop': 'rgba(20, 20, 19, 0.96)' },
};

/** Photo groups for a project page; captions are used as alt text, and any photo opens the full set in a lightbox. */
export default function CaseStudyGallery({ title, images, captions, groups }: CaseStudyGalleryProps) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <>
      {groups.map((group, g) => (
        <section
          key={group.title}
          aria-labelledby={`gallery-${g}`}
          className={g % 2 === 0 ? 'bg-paper' : 'bg-paper-2 border-y border-line'}
        >
          <PageContainer className="py-16 md:py-24">
            <h2
              id={`gallery-${g}`}
              className="font-heading text-3xl md:text-4xl font-bold tracking-[-0.025em] text-ink mb-8 md:mb-12"
            >
              {group.title}
            </h2>
            <div className={`grid grid-cols-1 gap-4 md:gap-5 ${group.columns}`}>
              {group.items.map(({ index, span = '', aspect }) => (
                <figure key={index} className={span}>
                  <button
                    type="button"
                    onClick={() => setOpen(index)}
                    aria-label={`Enlarge photo: ${captions[index]}`}
                    className={`group relative block w-full overflow-hidden bg-paper-3 cursor-zoom-in ${aspect}`}
                  >
                    <Image
                      src={images[index]}
                      alt={captions[index]}
                      fill
                      sizes="(max-width: 768px) 100vw, 60vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    />
                  </button>
                </figure>
              ))}
            </div>
          </PageContainer>
        </section>
      ))}

      <Lightbox
        open={open !== null}
        close={() => setOpen(null)}
        index={open ?? 0}
        styles={lightboxStyles}
        slides={images.map((src, i) => ({ src, alt: captions[i] ?? `${title} photo ${i + 1}` }))}
      />
    </>
  );
}
