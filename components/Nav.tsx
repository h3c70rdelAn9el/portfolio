import Link from 'next/link';
import React from 'react';

interface NavProps {
  navLinks: string[];
  accent: string;
  isMusic: boolean;
  onToggle: () => void;
  brandColor: string;
  linkColor: string;
  linkHoverColor: string;
  /** When set, the brand becomes a link (e.g. home from /dev/* routes). */
  brandHref?: string;
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
  brandHref,
}: NavProps) {
  const linkClassName =
    'text-[0.62rem] tracking-wider uppercase transition-colors duration-300 sm:tracking-widest sm:text-xs';
  const linkStyle: React.CSSProperties = {
    fontFamily: FONT_DEV,
    color: linkColor,
  };
  const setHover = (e: React.MouseEvent<HTMLAnchorElement>, hover: string) => {
    e.currentTarget.style.color = hover;
  };

  const brand = (
    <>
      hda<span style={{ color: accent, transition: 'color 0.5s' }}>.</span>
    </>
  );
  const brandClassName = 'text-lg font-bold tracking-tight transition-colors duration-500';

  return (
    <nav className="sticky top-0 z-50 flex w-full items-center justify-between  bg-black/15 px-8 py-7 backdrop-blur-2xl backdrop-saturate-150 md:px-16 ">
      {brandHref ? (
        <Link
          href={brandHref}
          className={brandClassName}
          style={{ fontFamily: FONT_DEV, color: brandColor }}>
          {brand}
        </Link>
      ) : (
        <span
          className={brandClassName}
          style={{ fontFamily: FONT_DEV, color: brandColor }}>
          {brand}
        </span>
      )}
      <div
        className="mx-1 flex min-w-0 max-w-[min(100%,58vw)] flex-1 items-center justify-center gap-1.5 overflow-x-auto whitespace-nowrap sm:max-w-none sm:gap-3 md:mx-0 md:gap-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {navLinks.map((l) => {
          let href = `#${l.toLowerCase()}`;
          if (!isMusic) {
            if (l.toLowerCase() === 'about') {
              href = '/dev/about';
            } else if (l.toLowerCase() === 'projects') {
              href = '/dev/projects';
            }
          }
          const isClientRoute = href.startsWith('/dev/') || href === '/music' || href.startsWith('/music/');
          if (isClientRoute) {
            return (
              <Link
                key={l}
                href={href}
                className={linkClassName}
                style={linkStyle}
                onMouseEnter={(e) => setHover(e, linkHoverColor)}
                onMouseLeave={(e) => setHover(e, linkColor)}>
                {l}
              </Link>
            );
          }
          return (
            <a
              key={l}
              href={href}
              className={linkClassName}
              style={linkStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = linkHoverColor;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = linkColor;
              }}>
              {l}
            </a>
          );
        })}
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
