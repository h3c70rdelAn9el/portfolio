'use client';
import { useState } from 'react';
import { LayoutGroup } from 'framer-motion';
import { projects } from '../../data/projects';
import { ProjectCard } from '../Card/ProjectCard';
import { SectionHeader } from '../SectionHeader';
import { ThumbnailCard } from '../Card/ThumbnailCard';
import { ProjectsGrid } from './ProjectsGrid';

const ACCENT = '#4f6fff';

export function ProjectsSection() {
  // No need to sync with section, just use initial state
  const [activeId, setActiveId] = useState(projects[0].id);

  // Find the active project
  const activeProject = projects.find((p) => p.id === activeId);

  return (
    <section
      id="projects"
      className="relative z-10 pt-10">
      <SectionHeader
        title="Projects"
        subtitle="Selected work"
        accentColor={ACCENT}
      />
      <LayoutGroup>
        {/* On mobile, featured card needs relative + height: ProjectCard is position:absolute */}
        <div className="block lg:hidden mb-4 relative w-full h-[min(360px,72vh)] shrink-0 overflow-hidden rounded-2xl isolate">
          {activeProject && (
            <ProjectCard
              project={activeProject}
              imagePriority={activeProject.id === projects[0].id}
              accentColor={ACCENT}
              sharedLayout={false}
            />
          )}
        </div>
        {/* On desktop, use the grid layout */}
        <div className="hidden lg:block">
          <ProjectsGrid>
            {/* Featured — left */}
            <div className="relative w-full h-full">
              {activeProject && (
                <ProjectCard
                  key={activeProject.id}
                  project={activeProject}
                  imagePriority={activeProject.id === projects[0].id}
                  accentColor={ACCENT}
                />
              )}
            </div>

            {/* Thumbnails — right */}
            <div className="flex flex-col gap-3 overflow-y-auto pr-1 pl-4">
              {projects
                .filter((p) => p.id !== activeId)
                .map((p) => (
                  <ThumbnailCard
                    key={p.id}
                    project={p}
                    isActive={false}
                    onClick={() => setActiveId(p.id)}
                    accentColor={ACCENT}
                  />
                ))}
            </div>
          </ProjectsGrid>
        </div>
        {/* On mobile, show thumbnails below the card */}
        <div className="flex lg:hidden mt-4 flex-col gap-3 overflow-y-auto pr-1">
          {projects
            .filter((p) => p.id !== activeId)
            .map((p) => (
              <ThumbnailCard
                key={p.id}
                project={p}
                isActive={false}
                onClick={() => setActiveId(p.id)}
                accentColor={ACCENT}
                sharedLayout={false}
              />
            ))}
        </div>
      </LayoutGroup>
    </section>
  );
}
