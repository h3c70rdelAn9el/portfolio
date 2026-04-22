import { motion } from 'framer-motion';
import { Project } from '../../data/projects';
import { ProjectCover } from './shared';
import { ACCENT, FONT_DEV } from '../constants';

export function ThumbnailCard({
  project,
  isActive,
  onClick,
  accentColor = ACCENT,
}: {
  project: Project;
  isActive: boolean;
  onClick: () => void;
  accentColor?: string;
}) {
  return (
    <motion.button
      layoutId={`card-${project.id}`}
      onClick={onClick}
      className="relative w-full rounded-xl border-2 overflow-hidden text-left cursor-pointer transition-all duration-300"
      style={{
        borderColor: isActive ? accentColor : '#4f6fff',
        background: isActive ? 'rgba(79,111,255,0.08)' : 'rgba(255,255,255,0.03)',
        fontFamily: FONT_DEV,
      }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 300, damping: 25 }}>
      {/* Thumbnail image */}
      <div className="relative h-20 w-full overflow-hidden">
        <ProjectCover
          project={project}
          className="object-cover object-top"
          sizes="280px"
        />
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
          style={{ background: accentColor }}
        />
      )}
    </motion.button>
  );
}
