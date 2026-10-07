'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, MotionConfig, motion } from 'framer-motion';
import { projects } from '@/lib/projects';
import type { Project } from '@/lib/projects';
import Button from '@/components/ui/Button';
import PageHero from '@/components/ui/PageHero';
import ProjectCard from './ProjectCard';
import ProjectFilter from './ProjectFilter';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

interface ProjectGridProps {
  /** When given, the grid renders the page header with the filter pills inside it. */
  title?: string;
  subtitle?: string;
}

/**
 * Rows alternate a pair of tiles with one full-width tile (2, 1, 2, 1, ...).
 * A lone item left at the end joins the full-width row before it as a pair,
 * so the grid never ends on two full-width rows or an empty half.
 */
function rowSpans(count: number): number[] {
  const spans: number[] = [];
  let pair = true;
  let i = 0;
  while (i < count) {
    const remaining = count - i;
    if (pair && remaining >= 2) {
      spans.push(1, 1);
      i += 2;
    } else if (remaining === 1 && spans.length > 0 && spans[spans.length - 1] === 2) {
      spans[spans.length - 1] = 1;
      spans.push(1);
      i += 1;
    } else {
      spans.push(2);
      i += 1;
    }
    pair = !pair;
  }
  return spans;
}

const lightboxStyles = {
  root: { '--yarl__color_backdrop': 'rgba(16, 18, 20, 0.95)' },
};

export default function ProjectGrid({ title, subtitle }: ProjectGridProps) {
  const [filter, setFilter] = useState('All');
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const filtered = filter === 'All' ? projects : projects.filter((p) => p.category === filter);
  const spans = rowSpans(filtered.length);
  const single = filtered.length === 1 ? filtered[0] : null;

  // Deep links from the home page (/projects#<id>) open that project's gallery.
  useEffect(() => {
    const openFromHash = () => {
      const match = projects.find((p) => p.id === window.location.hash.slice(1));
      if (match) {
        setActiveProject(match);
        setLightboxIndex(0);
      }
    };
    const frame = requestAnimationFrame(openFromHash);
    window.addEventListener('hashchange', openFromHash);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('hashchange', openFromHash);
    };
  }, []);

  function openGallery(project: Project) {
    setActiveProject(project);
    setLightboxIndex(0);
  }

  const filterPills = <ProjectFilter active={filter} onFilter={setFilter} />;
  const fade = { duration: 0.35, ease: 'easeOut' } as const;

  return (
    <MotionConfig reducedMotion="user">
      {title && subtitle ? (
        <PageHero title={title} subtitle={subtitle}>
          {filterPills}
        </PageHero>
      ) : (
        <div className="mb-8">{filterPills}</div>
      )}

      <p className="sr-only" aria-live="polite">
        {filtered.length} {filtered.length === 1 ? 'project' : 'projects'} shown
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2">
        <AnimatePresence mode="popLayout" initial={false}>
          {filtered.map((project, i) => {
            const wide = !single && spans[i] === 2;
            return (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={fade}
                className={
                  wide
                    ? 'aspect-[4/3] md:col-span-2 md:aspect-[12/5]'
                    : 'aspect-[4/5] md:aspect-[6/5]'
                }
              >
                <ProjectCard
                  project={project}
                  wide={wide}
                  hideDescription={single !== null}
                  onClick={() => openGallery(project)}
                />
              </motion.div>
            );
          })}

          {single && (
            <motion.div
              key={`${single.id}-detail`}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={fade}
              className="flex flex-col justify-center bg-paper-2 px-5 py-14 sm:px-8 lg:px-16"
            >
              <p className="max-w-xl text-lg md:text-2xl leading-snug text-ink-soft">{single.description}</p>
              <div className="mt-8">
                <Button
                  {...(single.href ? { href: single.href } : { onClick: () => openGallery(single) })}
                  variant="dark"
                >
                  {single.href ? 'View project' : `View ${single.images.length} photos`}
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <Lightbox
        open={activeProject !== null}
        close={() => setActiveProject(null)}
        index={lightboxIndex}
        on={{ view: ({ index }) => setLightboxIndex(index) }}
        styles={lightboxStyles}
        slides={
          activeProject
            ? activeProject.images.map((src, i) => ({
                src,
                alt: `${activeProject.title} photo ${i + 1}`,
              }))
            : []
        }
      />
    </MotionConfig>
  );
}
