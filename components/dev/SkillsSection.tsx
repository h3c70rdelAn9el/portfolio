'use client';

import { useRef } from 'react';
import { SectionHeader } from '../SectionHeader';

const FONT_DEV = 'var(--font-space), sans-serif';
const ACCENT = '#4f6fff';

const skills = [
  { name: 'Laravel' },
  { name: 'Vue 3' },
  { name: 'React' },
  { name: 'TailwindCSS' },
  { name: 'Next.js' },
  { name: 'Supabase' },
  { name: 'TypeScript' },
  { name: 'Node.js' },
  { name: 'PostgreSQL' },
  { name: 'Prisma' },
  { name: 'Git' },
  { name: 'REST APIs' },
];

export function SkillsSection() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 'left' | 'right') => {
    if (!carouselRef.current) return;
    const { scrollLeft, clientWidth } = carouselRef.current;
    carouselRef.current.scrollTo({
      left: dir === 'left' ? scrollLeft - clientWidth * 0.7 : scrollLeft + clientWidth * 0.7,
      behavior: 'smooth',
    });
  };

  return (
    <section id="skills" className="relative z-10 px-8 md:px-16 mt-10">
      <SectionHeader
        title="Skills"
        subtitle="What I use"
        accentColor={ACCENT}
      />

      <div className="relative mt-8">
        {/* Left arrow */}
        <button
          aria-label="Scroll left"
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-8 h-8 rounded-full border border-white/10 bg-white/5 text-white/40 hover:text-white hover:border-white/25 transition-all duration-200"
        >
          <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Pills row */}
        <div
          ref={carouselRef}
          className="flex gap-2 overflow-x-auto py-2 px-10"
          style={{
            scrollSnapType: 'x mandatory',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            fontFamily: FONT_DEV,
          }}
        >
          {skills.map((s) => (
            <span
              key={s.name}
              className="flex-shrink-0 rounded-full px-4 py-1.5 text-[11px] tracking-wider border cursor-default"
              style={{
                scrollSnapAlign: 'center',
                background: 'rgba(255,255,255,0.04)',
                borderColor: 'rgba(255,255,255,0.1)',
                color: 'rgba(255,255,255,0.45)',
                whiteSpace: 'nowrap',
              }}
            >
              {s.name}
            </span>
          ))}
        </div>

        {/* Right arrow */}
        <button
          aria-label="Scroll right"
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-8 h-8 rounded-full border border-white/10 bg-white/5 text-white/40 hover:text-white hover:border-white/25 transition-all duration-200"
        >
          <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Hide webkit scrollbar */}
      <style>{`#skills ::-webkit-scrollbar { display: none; }`}</style>
    </section>
  );
}
