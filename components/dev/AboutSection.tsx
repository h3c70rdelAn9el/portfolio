import { SectionHeader } from '../SectionHeader';

const ACCENT = '#4f6fff';

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative z-10 px-8 md:px-16  pt-10">
      <SectionHeader
        title="About"
        subtitle="Who I am"
        accentColor={ACCENT}
      />
      <div className="max-w-2xl mx-auto">
        <p className="mb-6 text-base leading-relaxed text-[#c8d4ed]">
          Welcome. I’m <span className="font-semibold text-[#dce6fb]">Hector del Angel</span> — a
          full-stack developer based in Los Angeles, focused on building clean, modern web
          experiences from polished frontends to scalable backend systems. My journey is rooted in
          learning, shipping, and constantly improving through real-world projects.
        </p>
        <p className="mb-4 text-[#c8d4ed]">
          <span className="font-semibold text-[#e8eefc]">Stack:</span> React, Next.js, Laravel,
          TypeScript, Node.js, Tailwind CSS
        </p>
        <p className="mb-4 text-[#c8d4ed]">
          <span className="font-semibold text-[#e8eefc]">Philosophy:</span> Code is language. I
          believe in writing clear, maintainable code that solves real problems and creates smooth
          user experiences.
        </p>
        <p className="mt-8 text-[#a5c8ff] ">
          Always learning, always building, always pushing forward.
        </p>
      </div>
    </section>
  );
}
