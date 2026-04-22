'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// import { projects, Project } from './projects';

const FONT_DEV = 'var(--font-space), sans-serif';
const ACCENT = '#4f6fff';

// ── Placeholder image ─────────────────────────────────────────
function Placeholder({ title }: { title: string }) {
  return (
    <div className="w-full h-full flex items-center justify-center bg-white/5 rounded-xl">
      <span
        className="text-white/20 text-sm tracking-widest uppercase"
        style={{ fontFamily: FONT_DEV }}>
        {title}
      </span>
    </div>
  );
}

// ── External link icon ────────────────────────────────────────
function IconExternal() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      className="w-4 h-4">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
      />
    </svg>
  );
}

// ── GitHub icon ───────────────────────────────────────────────
function IconGitHub() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-4 h-4">
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.34-3.369-1.34-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .268.18.58.688.482C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
    </svg>
  );
}

// ── Featured card ─────────────────────────────────────────────
function FeaturedCard({ project }: { project: Project }) {
  return (
    <motion.div
      key={project.id}
      layoutId={`card-${project.id}`}
      className="relative w-full h-full rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden"
      style={{ fontFamily: FONT_DEV }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}>
      {/* Screenshot */}
      <div className="relative w-full h-[55%] overflow-hidden">
        <Placeholder title={project.title} />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#07090f] via-transparent to-transparent" />
      </div>

      {/* Content */}
      <motion.div
        className="p-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}>
        <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
        <p className="text-sm text-white/40 leading-relaxed mb-4">{project.description}</p>

        {/* Tech pills */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-full px-3 py-1 text-[11px] tracking-wider border"
              style={{
                background: 'rgba(79,111,255,0.07)',
                borderColor: 'rgba(79,111,255,0.25)',
                color: 'rgba(79,111,255,0.9)',
              }}>
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-3">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs tracking-wider text-white/70 border border-white/10 bg-white/5 hover:border-white/25 hover:text-white transition-all">
            <IconExternal />
            Live site
          </a>
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs tracking-wider text-white/70 border border-white/10 bg-white/5 hover:border-white/25 hover:text-white transition-all">
            <IconGitHub />
            Repo
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ── Thumbnail card ────────────────────────────────────────────
function ThumbnailCard({
  project,
  isActive,
  onClick,
}: {
  project: Project;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <motion.button
      layoutId={`card-${project.id}`}
      onClick={onClick}
      className="relative w-full rounded-xl border overflow-hidden text-left cursor-pointer transition-all duration-300"
      style={{
        borderColor: isActive ? ACCENT + '55' : 'rgba(255,255,255,0.08)',
        background: isActive ? 'rgba(79,111,255,0.08)' : 'rgba(255,255,255,0.03)',
        fontFamily: FONT_DEV,
      }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 300, damping: 25 }}>
      {/* Thumbnail image */}
      <div className="h-20 overflow-hidden">
        <Placeholder title={project.title} />
      </div>

      {/* Title + tech */}
      <div className="px-3 py-2">
        <p className="text-xs font-medium text-white/70 truncate">{project.title}</p>
        <p className="text-[10px] text-white/30 truncate mt-0.5">
          {project.tech.slice(0, 2).join(' · ')}
        </p>
      </div>

      {/* Active indicator */}
      {isActive && (
        <motion.div
          layoutId="active-indicator"
          className="absolute left-0 top-0 bottom-0 w-[2px] rounded-full"
          style={{ background: ACCENT }}
        />
      )}
    </motion.button>
  );
}

// ── Main Projects component ───────────────────────────────────
export function Projects() {
  const [activeId, setActiveId] = useState(projects[0].id);
  const activeProject = projects.find((p) => p.id === activeId)!;
  const otherProjects = projects.filter((p) => p.id !== activeId);

  return (
    <section
      id="projects"
      className="relative z-10 px-8 md:px-16 py-24"
      style={{ fontFamily: FONT_DEV }}>
      {/* Section header */}
      <div className="mb-12">
        <p
          className="text-xs tracking-[0.2em] uppercase mb-3"
          style={{ color: ACCENT }}>
          Selected work
        </p>
        <h2
          className="text-3xl md:text-4xl font-bold text-white"
          style={{ fontFamily: FONT_DEV }}>
          Projects
        </h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-4 h-[520px]">
        {/* Featured — left */}
        <AnimatePresence mode="wait">
          <FeaturedCard
            key={activeId}
            project={activeProject}
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
