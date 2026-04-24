import { SectionHeader } from '../SectionHeader';
import { useRef } from 'react';

const ACCENT = '#4f6fff';
const skills = [
  { name: 'TypeScript', link: 'https://www.typescriptlang.org/' },
  { name: 'React', link: 'https://react.dev/' },
  { name: 'Next.js', link: 'https://nextjs.org/' },
  { name: 'Node.js', link: 'https://nodejs.org/' },
  { name: 'Tailwind CSS', link: 'https://tailwindcss.com/' },
  { name: 'GraphQL', link: 'https://graphql.org/' },
  { name: 'PostgreSQL', link: 'https://www.postgresql.org/' },
  { name: 'Prisma', link: 'https://www.prisma.io/' },
  { name: 'Docker', link: 'https://www.docker.com/' },
  { name: 'AWS', link: 'https://aws.amazon.com/' },
  { name: 'Figma', link: 'https://www.figma.com/' },
  { name: 'Jest', link: 'https://jestjs.io/' },
  { name: 'Cypress', link: 'https://www.cypress.io/' },
  { name: 'Git', link: 'https://git-scm.com/' },
];

// Custom color palette for unique pill look
const pillColors = [
  'from-[#0ea5e9] to-[#6366f1]', // blue to indigo
  'from-[#f43f5e] to-[#f59e42]', // pink to orange
  'from-[#10b981] to-[#06b6d4]', // green to cyan
  'from-[#f59e42] to-[#f43f5e]', // orange to pink
  'from-[#6366f1] to-[#a21caf]', // indigo to fuchsia
  'from-[#a21caf] to-[#0ea5e9]', // fuchsia to blue
  'from-[#fbbf24] to-[#10b981]', // yellow to green
  'from-[#06b6d4] to-[#6366f1]', // cyan to indigo
  'from-[#f43f5e] to-[#10b981]', // pink to green
  'from-[#6366f1] to-[#fbbf24]', // indigo to yellow
  'from-[#0ea5e9] to-[#f43f5e]', // blue to pink
  'from-[#fbbf24] to-[#a21caf]', // yellow to fuchsia
  'from-[#10b981] to-[#f59e42]', // green to orange
  'from-[#a21caf] to-[#fbbf24]', // fuchsia to yellow
];

export function SkillsSection() {
  const carouselRef = useRef<HTMLDivElement>(null);

  // Simple scroll buttons for carousel
  const scroll = (dir: 'left' | 'right') => {
    if (!carouselRef.current) return;
    const { scrollLeft, clientWidth } = carouselRef.current;
    const scrollAmount = clientWidth * 0.7;
    carouselRef.current.scrollTo({
      left: dir === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <section
      id="skills"
      className="relative z-10 px-8 md:px-16 py-24">
      <SectionHeader
        title="Skills"
        subtitle="What I use"
        accentColor={ACCENT}
      />
      <div className="relative max-w-3xl mx-auto mt-8">
        {/* Carousel controls */}
        <button
          aria-label="Scroll skills left"
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/60 hover:bg-black/80 text-white rounded-full p-2 shadow-md transition-colors duration-150"
          style={{ display: 'block' }}
          onClick={() => scroll('left')}>
          <svg
            width="22"
            height="22"
            fill="none"
            viewBox="0 0 24 24">
            <path
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <div
          ref={carouselRef}
          className="flex gap-4 overflow-x-auto no-scrollbar py-2 px-8 scroll-smooth"
          style={{ scrollSnapType: 'x mandatory' }}>
          {skills.map((skill, i) => {
            const color = pillColors[i % pillColors.length];
            const pillClass = `bg-gradient-to-r ${color} text-white font-semibold px-6 py-2 rounded-full text-base shadow-lg hover:scale-110 hover:shadow-xl transition-transform duration-200 cursor-pointer select-none outline-none focus:ring-2 focus:ring-cyan-300`;
            return skill.link ? (
              <a
                key={skill.name}
                href={skill.link}
                target="_blank"
                rel="noopener noreferrer"
                className={pillClass}
                title={skill.name}
                style={{ scrollSnapAlign: 'center' }}>
                {skill.name}
              </a>
            ) : (
              <span
                key={skill.name}
                className={pillClass}
                style={{ scrollSnapAlign: 'center' }}>
                {skill.name}
              </span>
            );
          })}
        </div>
        <button
          aria-label="Scroll skills right"
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/60 hover:bg-black/80 text-white rounded-full p-2 shadow-md transition-colors duration-150"
          style={{ display: 'block' }}
          onClick={() => scroll('right')}>
          <svg
            width="22"
            height="22"
            fill="none"
            viewBox="0 0 24 24">
            <path
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}
