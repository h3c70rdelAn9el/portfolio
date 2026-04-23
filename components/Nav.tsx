'use client';

import Link from 'next/link';
import type { DevSection } from './site/DevViewContext';
import React from 'react';

interface NavProps {
  navLinks: string[];
  accent: string;
  isMusic: boolean;
  onToggle: () => void;
  brandColor: string;
  linkColor: string;
  linkHoverColor: string;
  /** HDA is plain text (no link) on the dev home hero. */
  isDevHomeHero: boolean;
  /** HDA and / target home without a Next full navigation. */
  onBrandHome: () => void;
  /** Use pushState + context for /dev/* instead of <Link> (avoids remounting the page slot). */
  useClientDevNav: boolean;
  onDevClientNav: (s: DevSection) => void;
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
  isDevHomeHero,
  onBrandHome,
  useClientDevNav,
  onDevClientNav,
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
      {isDevHomeHero ? (
        <span
          className={brandClassName}
          style={{ fontFamily: FONT_DEV, color: brandColor }}>
          {brand}
        </span>
      ) : (
        <Link
          href="/"
          scroll={false}
          className={brandClassName}
          style={{ fontFamily: FONT_DEV, color: brandColor, cursor: 'pointer' }}
          onClick={(e) => {
            e.preventDefault();
            onBrandHome();
          }}>
          {brand}
        </Link>
      )}
      <div className="mx-1 flex min-w-0 max-w-[min(100%,58vw)] flex-1 items-center justify-center gap-1.5 overflow-x-auto whitespace-nowrap sm:max-w-none sm:gap-3 md:mx-0 md:gap-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {navLinks.map((l) => {
          let href = `#${l.toLowerCase()}`;
          if (!isMusic) {
            if (l.toLowerCase() === 'about') {
              href = '/dev/about';
            } else if (l.toLowerCase() === 'projects') {
              href = '/dev/projects';
            } else if (l.toLowerCase() === 'contact') {
              href = '#contact';
            }
          }
          // Special client nav for contact
          if (
            useClientDevNav &&
            (l.toLowerCase() === 'about' ||
              l.toLowerCase() === 'projects' ||
              l.toLowerCase() === 'contact')
          ) {
            return (
              <a
                key={l}
                href={href}
                className={linkClassName}
                style={linkStyle}
                onClick={(e) => {
                  e.preventDefault();
                  onDevClientNav(l.toLowerCase() as DevSection);
                }}
                onMouseEnter={(e) => setHover(e, linkHoverColor)}
                onMouseLeave={(e) => setHover(e, linkColor)}>
                {l}
              </a>
            );
          }
          const isClientRoute =
            href.startsWith('/dev/') || href === '/music' || href.startsWith('/music/');
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
              onMouseEnter={(e) => setHover(e, linkHoverColor)}
              onMouseLeave={(e) => setHover(e, linkColor)}>
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
