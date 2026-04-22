'use client';

import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { projects } from '../../data/projects';
import { ProjectCard } from '../Card/ProjectCard';
import { ThumbnailCard } from '../Card/ThumbnailCard';

// ── Main Projects component ───────────────────────────────────
export function ProjectsSection() {
  const [activeId, setActiveId] = useState(projects[0].id);
  const activeProject = projects.find((p) => p.id === activeId)!;
  const otherProjects = projects.filter((p) => p.id !== activeId);

  return (
    <section
      id="projects"
      className="relative z-10 px-8 md:px-16 py-24">
      {/* Section header */}
      <div className="mb-12">
        <p className="text-xs tracking-[0.2em] uppercase mb-3 text-[#4f6fff]">Selected work</p>
        <h2 className="text-3xl md:text-4xl font-bold text-white">Projects</h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-4 h-[520px]">
        {/* Featured — left */}
        <AnimatePresence mode="wait">
          <ProjectCard
            key={activeId}
            project={activeProject}
            imagePriority={activeId === projects[0].id}
          />
        </AnimatePresence>

        {/* Thumbnails — right */}
        <div className="flex flex-col gap-3 overflow-y-auto pr-1">
          {projects.map((p) => (
            <ThumbnailCard
              key={p.id}
              project={p}
              isActive={p.id === activeId}
              onClick={() => setActiveId(p.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
