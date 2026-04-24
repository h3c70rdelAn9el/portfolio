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
      'Co-built FOSH, a real-time event discovery platform focused on Philadelphia, helping users find live events and local experiences through an interactive map. The platform features a dynamic map interface and personalized recommendations, making it easy to explore what’s happening around the city.',
    image: '/fosh_map.png',
    liveUrl: 'https://fosh.live',
    repoUrl: 'https://github.com/YOUR_HANDLE/project-one',
    tech: ['Laravel', 'Vue.js', 'MySQL'],
  },
  {
    id: '2',
    title: 'Therapist Dashboard',
    description:
      'Demo of a custom dashboard application for therapists to manage their appointments, clients, and session notes efficiently.',
    image: '/pine.png',
    tech: ['React', 'Node.js', 'MongoDB'],
    liveUrl: 'https://yoursite.com',
    repoUrl: 'https://github.com/YOUR_HANDLE/project-two',
  },
  {
    id: '3',
    title: 'ToneVault',
    description:
      'Built Tone Vault, a platform for Neural Amp Modeler users to store, organize, and explore amp captures, tones, and settings. The platform features a clean interactive interface designed to make managing and discovering sounds fast and intuitive.',
    image: '/tonevault.png',
    tech: ['TypeScript', 'Prisma', 'PostgreSQL'],
    liveUrl: 'https://yoursite.com',
    repoUrl: 'https://github.com/YOUR_HANDLE/project-three',
  },
  {
    id: '4',
    title: 'site',
    description:
      'A custom Next.js portfolio with animated section navigation, a looping glassmorphic skills carousel, and dynamic dev/music themes—all built from scratch with Tailwind and Framer Motion.',
    image: '/site.png',
    tech: ['React', 'Tailwind', 'Supabase'],
    liveUrl: 'https://yoursite.com',
    repoUrl: 'https://github.com/YOUR_HANDLE/project-four',
  },
  {
    id: '5',
    title: 'Spicy Gigs',
    description:
      'Co-built a full-stack scheduling platform for the adult entertainment industry, connecting producers, directors, talent, and crew to manage city-based bookings, calendars, payments, and subscriber access.',
    image: '/spicy.png',
    tech: ['Laravel', 'Vue.js', 'MySQL'],
    liveUrl: 'https://spicygigs.com',
    repoUrl: '',
  },
];
