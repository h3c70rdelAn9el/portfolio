'use client';

import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { projects } from '../../data/projects';
import { ProjectCard } from '../Card/ProjectCard';
import { SectionHeader } from '../SectionHeader';
import { ThumbnailCard } from '../Card/ThumbnailCard';
import { ProjectsGrid } from './ProjectsGrid';

// ── Main Projects component ───────────────────────────────────
export function ProjectsSection() {
  const [activeId, setActiveId] = useState(projects[0].id);
  const activeProject = projects.find((p) => p.id === activeId)!;
  const ACCENT = '#4f6fff';

  return (
    <section
      id="projects"
      className="relative z-10 px-8 md:px-16 py-24">
      <SectionHeader
        title="Projects"
        subtitle="Selected work"
        accentColor={ACCENT}
      />

      <ProjectsGrid>
        {/* Featured — left */}
        <AnimatePresence mode="wait">
          <ProjectCard
            key={activeId}
            project={activeProject}
            imagePriority={activeId === projects[0].id}
            accentColor={ACCENT}
          />
        </AnimatePresence>

        {/* Thumbnails — right */}
        <div className="flex flex-col gap-3 overflow-y-auto pr-1 pl-4">
          {projects.map((p) => (
            <ThumbnailCard
              key={p.id}
              project={p}
              isActive={p.id === activeId}
              onClick={() => setActiveId(p.id)}
              accentColor={ACCENT}
            />
          ))}
        </div>
      </ProjectsGrid>
    </section>
  );
}
