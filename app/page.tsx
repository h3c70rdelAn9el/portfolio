'use client';

import { useState, useEffect } from 'react';
import { useGlitchText } from '../components/useGlitchText';
import { SocialLinks } from '../components/SocialLinks';
import { socials } from '../components/socials';
import { Hero } from '../components/Hero';
import { Nav } from '../components/Nav';
import { CornerCard } from '../components/CornerCard';
import { SiteAtmosphere } from '../components/site/SiteAtmosphere';

const FONT_DEV = 'var(--font-space), sans-serif';
const FONT_MUSIC = 'var(--font-cormorant), serif';

// ── Content ───────────────────────────────────────────────────
import { content } from '../types/content';

const NAME_REST = ' del Angel';
/** Dev hero: glitch-reveal only this part (after delay), not the handle. */
const DEV_FIRST_ALIAS = 'h3c70r';
const DEV_FIRST_REVEALED = 'Hector';
const DEV_NAME_GLITCH_MS = 480;

// ── Component ─────────────────────────────────────────────────
export default function Home() {
  const [mode, setMode] = useState<'dev' | 'music'>('dev');
  const [glitching, setGlitching] = useState(false);
  const [devFirstNameGlitch, setDevFirstNameGlitch] = useState(false);
  const [devNameRevealDone, setDevNameRevealDone] = useState(false);
  const c = content[mode];
  const isMusic = mode === 'music';

  useEffect(() => {
    if (mode !== 'dev') {
      setTimeout(() => {
        setDevFirstNameGlitch(false);
        setDevNameRevealDone(false);
      }, 0);
      return;
    }
    setTimeout(() => {
      setDevFirstNameGlitch(false);
      setDevNameRevealDone(false);
    }, 0);
    const startGlitch = window.setTimeout(() => setDevFirstNameGlitch(true), 2000);
    const finishReveal = window.setTimeout(() => {
      setDevFirstNameGlitch(false);
      setDevNameRevealDone(true);
    }, 2000 + DEV_NAME_GLITCH_MS);
    return () => {
      window.clearTimeout(startGlitch);
      window.clearTimeout(finishReveal);
    };
  }, [mode]);

  // Always call the hook at the top level
  const glitchedDevFirstName = useGlitchText(DEV_FIRST_ALIAS, devFirstNameGlitch);

  const glitchedLabel = useGlitchText(c.label, glitching);
  const glitchedSubtitle = useGlitchText(c.subtitle, glitching);
  const glitchedBio = useGlitchText(c.bio, glitching);
  const glitchedMusicName = useGlitchText(content.music.name, glitching);
  const glitchedDevFirst = useGlitchText(DEV_FIRST_REVEALED, devFirstNameGlitch);

  const glitchedName = isMusic
    ? glitchedMusicName
    : devNameRevealDone
      ? `${DEV_FIRST_REVEALED}${NAME_REST}`
      : devFirstNameGlitch
        ? `${glitchedDevFirst}${NAME_REST}`
        : `${DEV_FIRST_ALIAS}${NAME_REST}`;

  const handleToggle = () => {
    setGlitching(true);
    setTimeout(() => setMode((m) => (m === 'dev' ? 'music' : 'dev')), 120);
    setTimeout(() => setGlitching(false), 600);
  };

  return (
    <main
      className="relative min-h-screen overflow-hidden text-[#f2ebe0]"
      style={{ fontFamily: c.bodyFont, transition: 'font-family 0s', backgroundColor: '#07090f' }}>
      <SiteAtmosphere mode={mode} />

      {/* ── Nav ── */}
      <Nav
        navLinks={c.navLinks}
        accent={c.accent}
        isMusic={isMusic}
        onToggle={handleToggle}
        brandColor={c.navBrandColor}
        linkColor={c.navLinkColor}
        linkHoverColor={c.navLinkHover}
      />

      {/* ── Hero ── */}
      <Hero
        glitchedLabel={glitchedLabel}
        glitchedSubtitle={glitchedSubtitle}
        glitchedBio={glitchedBio}
        firstName={
          isMusic
            ? c.name.split(' ')[0]
            : devNameRevealDone
              ? DEV_FIRST_REVEALED
              : glitchedDevFirstName
        }
        lastName={isMusic ? c.name.split(' ').slice(1).join(' ') : NAME_REST.trim()}
        c={c}
        isMusic={isMusic}
      />
      <SocialLinks
        socials={socials}
        accent={c.accent}
      />

      {/* ── Corner card ── */}
      <CornerCard
        cornerLabel={c.cornerLabel}
        cornerValue={c.cornerValue}
        fontFamily={FONT_DEV}
      />
      {/* Socials */}
    </main>
  );
}
