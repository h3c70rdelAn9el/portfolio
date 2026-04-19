import React from 'react';

interface NavProps {
  navLinks: string[];
  accent: string;
  isMusic: boolean;
  onToggle: () => void;
}

const FONT_DEV = 'var(--font-space), sans-serif';

export function Nav({ navLinks, accent, isMusic, onToggle }: NavProps) {
  return (
    <nav className="relative z-10 flex items-center justify-between px-8 py-7 md:px-16">
      <span
        className="text-lg font-bold tracking-tight text-white"
        style={{ fontFamily: FONT_DEV }}>
        hda<span style={{ color: accent, transition: 'color 0.5s' }}>.</span>
      </span>
      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((l) => (
          <a
            key={l}
            href={`#${l.toLowerCase()}`}
            className="text-xs tracking-widest text-white/35 hover:text-white/80 transition-colors uppercase"
            style={{ fontFamily: FONT_DEV }}>
            {l}
          </a>
        ))}
      </div>
      <button
        onClick={onToggle}
        className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/50 backdrop-blur-md hover:text-white/80 hover:border-white/20 transition-all duration-300 cursor-pointer"
        style={{ fontFamily: FONT_DEV }}>
        <span>{isMusic ? '💻' : '🎸'}</span>
        <span className="tracking-widest uppercase">{isMusic ? 'Dev' : 'Music'}</span>
      </button>
    </nav>
  );
}
