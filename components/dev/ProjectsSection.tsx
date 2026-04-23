'use client';
import { useState, useEffect } from 'react';
import { useDevView } from '../../components/site/DevViewContext';
import { LayoutGroup } from 'framer-motion';
import { projects } from '../../data/projects';
import { ProjectCard } from '../Card/ProjectCard';
import { SectionHeader } from '../SectionHeader';
import { ThumbnailCard } from '../Card/ThumbnailCard';
import { ProjectsGrid } from './ProjectsGrid';

const ACCENT = '#4f6fff';

export function ProjectsSection() {
  const { section } = useDevView();
  const [activeId, setActiveId] = useState(projects[0].id);

  // Reset to first card whenever section changes to 'projects'
  useEffect(() => {
    if (section === 'projects') {
      setActiveId(projects[0].id);
    }
  }, [section]);

  return (
    <section
      id="projects"
      className="relative z-10 px-8 md:px-16 py-24">
      <SectionHeader
        title="Projects"
        subtitle="Selected work"
        accentColor={ACCENT}
      />
      <LayoutGroup>
        <ProjectsGrid>
          {/* Featured — left */}
          <div className="relative w-full h-full">
            {projects.map(
              (p) =>
                p.id === activeId && (
                  <ProjectCard
                    key={p.id}
                    project={p}
                    imagePriority={p.id === projects[0].id}
                    accentColor={ACCENT}
                  />
                ),
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
      </LayoutGroup>
    </section>
  );
}
