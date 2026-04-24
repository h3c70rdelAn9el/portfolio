
import { SectionHeader } from '../SectionHeader';

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

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative z-10 px-8 md:px-16 py-24">
      <SectionHeader
        title="Skills"
        subtitle="What I use"
        accentColor={ACCENT}
      />
      <div className="max-w-3xl mx-auto flex flex-wrap gap-3 justify-center mt-8">
        {skills.map((skill) => (
          skill.link ? (
            <a
              key={skill.name}
              href={skill.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-indigo-500 to-fuchsia-700 text-white font-semibold px-5 py-2 rounded-full text-base shadow-md hover:scale-105 hover:shadow-lg transition-transform duration-150 cursor-pointer select-none outline-none focus:ring-2 focus:ring-fuchsia-400"
              title={skill.name}
            >
              {skill.name}
            </a>
          ) : (
            <span
              key={skill.name}
              className="bg-gradient-to-r from-indigo-500 to-fuchsia-700 text-white font-semibold px-5 py-2 rounded-full text-base shadow-md hover:scale-105 hover:shadow-lg transition-transform duration-150 cursor-default select-none"
            >
              {skill.name}
            </span>
          )
        ))}
      </div>
    </section>
  );
}
