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
    title: 'FOSH',
    description:
      'FOSH is a real-time event discovery platform that helps users find live events and local experiences nearby through an interactive map.',
    image: '/fosh_map.png',
    liveUrl: 'https://fosh.live',
    repoUrl: 'https://github.com/YOUR_HANDLE/project-one',
    tech: ['Laravel', 'Vue.js', 'MySQL'],
  },
  {
    id: '2',
    title: 'Therapist Dashboard',
    description:
      'A dashboard application for therapists to manage their appointments, clients, and session notes efficiently.',
    image: '/pine.png',
    tech: ['React', 'Node.js', 'MongoDB'],
    liveUrl: 'https://yoursite.com',
    repoUrl: 'https://github.com/YOUR_HANDLE/project-two',
  },
  {
    id: '3',
    title: 'Project Three',
    description: 'A short description of what this project does and the problem it solves.',
    image: '/tonevault.png',
    tech: ['TypeScript', 'Prisma', 'PostgreSQL'],
    liveUrl: 'https://yoursite.com',
    repoUrl: 'https://github.com/YOUR_HANDLE/project-three',
  },
  {
    id: '4',
    title: 'Project Four',
    description: 'A short description of what this project does and the problem it solves.',
    image: '/site.png',
    tech: ['React', 'Tailwind', 'Supabase'],
    liveUrl: 'https://yoursite.com',
    repoUrl: 'https://github.com/YOUR_HANDLE/project-four',
  },
];
