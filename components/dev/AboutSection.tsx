import Image from 'next/image';
import { SectionHeader } from '../SectionHeader';

const ACCENT = '#4f6fff';

/** Served from `public/dev-profile.png` */
const PROFILE_SRC = '/dev-profile.png';

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative z-10 pt-10">
      <SectionHeader
        title="About"
        subtitle="Who I am"
        accentColor={ACCENT}
      />
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-10 md:gap-14 md:items-start">
        <div className="shrink-0 flex justify-center md:justify-start md:pt-1">
          <div
            className="relative mx-auto w-full max-w-[240px] h-[300px] sm:h-[320px] rounded-2xl overflow-hidden border border-white/10 bg-white/3 ring-1 ring-white/6 md:mx-0"
            style={{ boxShadow: `0 0 48px -12px ${ACCENT}73, 0 25px 50px -25px rgba(0,0,0,0.55)` }}>
            <Image
              src={PROFILE_SRC}
              alt="Hector del Angel"
              width={1021}
              height={929}
              unoptimized
              className="h-full w-full object-cover object-center"
              sizes="(max-width: 768px) 240px, 280px"
              priority
            />
          </div>
        </div>
        <div className="flex-1 min-w-0 max-w-2xl mx-auto md:mx-0">
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
      </div>
    </section>
  );
}
