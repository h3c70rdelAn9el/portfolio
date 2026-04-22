export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  liveUrl: string;
  repoUrl: string;
  /** Path under `public/`, e.g. `/shot.png` → `public/shot.png`. Omit until the file exists or Next image optimization errors. */
  image?: string;
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'Project One',
    description: 'A short description of what this project does and the problem it solves.',
    tech: ['Laravel', 'Vue.js', 'MySQL'],
    liveUrl: 'https://fosh.live',
    repoUrl: 'https://github.com/YOUR_HANDLE/project-one',
    image: '/fosh_map.png',
  },
  {
    id: '2',
    title: 'Project Two',
    description: 'A short description of what this project does and the problem it solves.',
    tech: ['React', 'Node.js', 'MongoDB'],
    liveUrl: 'https://yoursite.com',
    repoUrl: 'https://github.com/YOUR_HANDLE/project-two',
  },
  {
    id: '3',
    title: 'Project Three',
    description: 'A short description of what this project does and the problem it solves.',
    tech: ['TypeScript', 'Prisma', 'PostgreSQL'],
    liveUrl: 'https://yoursite.com',
    repoUrl: 'https://github.com/YOUR_HANDLE/project-three',
  },
  {
    id: '4',
    title: 'Project Four',
    description: 'A short description of what this project does and the problem it solves.',
    tech: ['React', 'Tailwind', 'Supabase'],
    liveUrl: 'https://yoursite.com',
    repoUrl: 'https://github.com/YOUR_HANDLE/project-four',
  },
];
