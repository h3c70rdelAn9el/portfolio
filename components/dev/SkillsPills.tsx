'use client';

const FONT_DEV = 'var(--font-space), sans-serif';

const skills = [
  { name: 'React' },
  { name: 'Next.js' },
  { name: 'TypeScript' },
  { name: 'Node.js' },
  { name: 'Tailwind CSS' },
  { name: 'Laravel' },
  { name: 'PostgreSQL' },
  { name: 'MongoDB' },
  { name: 'Supabase' },
  { name: 'Git' },
  { name: 'REST APIs' },
];

export function SkillsPills() {
  return (
    <div className="w-full">
      <p
        className="text-xs tracking-[0.2em] uppercase text-white/25 mb-3"
        style={{ fontFamily: FONT_DEV }}>
        What I use
      </p>

      {/* Scrollable row — hides scrollbar cross-browser */}
      <div
        className="flex gap-2 overflow-x-auto pb-2"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}>
        {skills.map((s) => (
          <span
            key={s.name}
            className="flex-shrink-0 rounded-full px-4 py-1.5 text-[11px] tracking-wider border transition-all duration-300 hover:border-[#4f6fff]/50 hover:text-[#4f6fff] hover:bg-[#4f6fff]/10 cursor-default"
            style={{
              fontFamily: FONT_DEV,
              background: 'rgba(255,255,255,0.04)',
              borderColor: 'rgba(255,255,255,0.1)',
              color: 'rgba(255,255,255,0.45)',
              whiteSpace: 'nowrap',
            }}>
            {s.name}
          </span>
        ))}
      </div>

      {/* Hide webkit scrollbar */}
      <style>{`
        div::-webkit-scrollbar { display: none; }
      `}</style>
    </div>
  );
}
