export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  liveUrl: string;
  repoUrl: string;
  image: string;
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'Project One',
    description: 'A short description of what this project does and the problem it solves.',
    tech: ['Next.js', 'TypeScript', 'Tailwind'],
    liveUrl: 'https://yoursite.com',
    repoUrl: 'https://github.com/YOUR_HANDLE/project-one',
    image: '/images/project1.png',
  },
  {
    id: '2',
    title: 'Project Two',
    description: 'A short description of what this project does and the problem it solves.',
    tech: ['React', 'Node.js', 'MongoDB'],
    liveUrl: 'https://yoursite.com',
    repoUrl: 'https://github.com/YOUR_HANDLE/project-two',
    image: '/images/project2.png',
  },
  {
    id: '3',
    title: 'Project Three',
    description: 'A short description of what this project does and the problem it solves.',
    tech: ['TypeScript', 'Prisma', 'PostgreSQL'],
    liveUrl: 'https://yoursite.com',
    repoUrl: 'https://github.com/YOUR_HANDLE/project-three',
    image: '/images/project3.png',
  },
  {
    id: '4',
    title: 'Project Four',
    description: 'A short description of what this project does and the problem it solves.',
    tech: ['React', 'Tailwind', 'Supabase'],
    liveUrl: 'https://yoursite.com',
    repoUrl: 'https://github.com/YOUR_HANDLE/project-four',
    image: '/images/project4.png',
  },
];
