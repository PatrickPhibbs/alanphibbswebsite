'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { projects } from '@/lib/projects';
import type { Project } from '@/lib/projects';
import ProjectCard from './ProjectCard';
import ProjectFilter from './ProjectFilter';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

export default function ProjectGrid() {
  const [filter, setFilter] = useState('All');
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const filtered = filter === 'All' ? projects : projects.filter((p) => p.category === filter);

  function openGallery(project: Project) {
    setActiveProject(project);
    setLightboxIndex(0);
  }

  return (
    <div>
      <ProjectFilter active={filter} onFilter={setFilter} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <ProjectCard
                project={project}
                onClick={() => openGallery(project)}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <Lightbox
        open={activeProject !== null}
        close={() => setActiveProject(null)}
        index={lightboxIndex}
        on={{ view: ({ index }) => setLightboxIndex(index) }}
        slides={
          activeProject
            ? activeProject.images.map((src, i) => ({
                src,
                alt: `${activeProject.title} photo ${i + 1}`,
              }))
            : []
        }
      />
    </div>
  );
}
