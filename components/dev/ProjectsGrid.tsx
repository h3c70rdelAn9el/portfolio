import { ReactNode } from 'react';

interface ProjectsGridProps {
  children: ReactNode;
}

export function ProjectsGrid({ children }: ProjectsGridProps) {
  return (
    <div className="grid grid-cols-1  lg:grid-cols-[1fr_280px] gap-4 h-[520px]">{children}</div>
  );
}
