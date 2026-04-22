import { motion } from 'framer-motion';
import { Project } from '../../data/projects';
import { IconExternal, IconGitHub, ProjectCover } from './shared';
import { TechPills } from '../TechPills';
import { ACCENT, FONT_DEV } from '../constants';

export function ProjectCard({
  project,
  imagePriority,
  accentColor = ACCENT,
}: {
  project: Project;
  imagePriority?: boolean;
  accentColor?: string;
}) {
  return (
    <motion.div
      key={project.id}
      layoutId={`card-${project.id}`}
      className="relative w-full h-full flex flex-col rounded-2xl border-2 bg-white/5 backdrop-blur-xl overflow-hidden"
      style={{ fontFamily: FONT_DEV, borderColor: accentColor }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}>
      {/* Screenshot */}
      <div className="relative w-full h-[55%] min-h-0 overflow-hidden">
        <ProjectCover
          project={project}
          className="object-cover object-top"
          sizes="(min-width: 1024px) 55vw, 100vw"
          priority={imagePriority}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07090f] via-transparent to-transparent" />
      </div>
      {/* Content */}
      <motion.div
        className="p-6 flex-1 min-h-0 overflow-y-auto"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}>
        <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
        <p className="text-sm text-white/40 leading-relaxed mb-4">{project.description}</p>
        <TechPills
          tech={project.tech}
          accentColor={accentColor}
        />
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
