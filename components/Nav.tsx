import React from 'react';

interface NavProps {
  navLinks: string[];
  accent: string;
  isMusic: boolean;
  onToggle: () => void;
  brandColor: string;
  linkColor: string;
  linkHoverColor: string;
}

const FONT_DEV = 'var(--font-space), sans-serif';

export function Nav({
  navLinks,
  accent,
  isMusic,
  onToggle,
  brandColor,
  linkColor,
  linkHoverColor,
}: NavProps) {
  return (
    <nav className="sticky top-0 z-50 flex w-full items-center justify-between  bg-black/15 px-8 py-7 backdrop-blur-2xl backdrop-saturate-150 md:px-16 ">
      <span
        className="text-lg font-bold tracking-tight transition-colors duration-500"
        style={{ fontFamily: FONT_DEV, color: brandColor }}>
        hda<span style={{ color: accent, transition: 'color 0.5s' }}>.</span>
      </span>
      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((l) => (
          <a
            key={l}
            href={`#${l.toLowerCase()}`}
            className="text-xs tracking-widest uppercase transition-colors duration-300"
            style={{
              fontFamily: FONT_DEV,
              color: linkColor,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = linkHoverColor;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = linkColor;
            }}>
            {l}
          </a>
        ))}
      </div>
      <button
        onClick={onToggle}
        className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs backdrop-blur-md hover:border-white/20 transition-all duration-300 cursor-pointer"
        style={{
          fontFamily: FONT_DEV,
          color: linkColor,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.color = linkHoverColor;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.color = linkColor;
        }}>
        <span>{isMusic ? '💻' : '🎸'}</span>
        <span className="tracking-widest uppercase">{isMusic ? 'Dev' : 'Music'}</span>
      </button>
    </nav>
  );
}
