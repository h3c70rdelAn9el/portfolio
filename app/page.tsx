'use client';

import { useState, useEffect } from 'react';
import { useGlitchText } from '../components/useGlitchText';
import { SocialLinks } from '../components/SocialLinks';
import { socials } from '../components/socials';
import { Hero } from '../components/Hero';
import { Nav } from '../components/Nav';
import { Orbs } from '../components/Orbs';
import { CornerCard } from '../components/CornerCard';

const FONT_DEV = 'var(--font-space), sans-serif';
const FONT_MUSIC = 'var(--font-cormorant), serif';

// ── Content ───────────────────────────────────────────────────
const content = {
  dev: {
    name: 'h3c70r del Angel',
    accent: '#a5c8ff', // lighter blue for nav, glows, UI
    heroNameAccent: '#3d9fff', // vivid blue — first name only, pops vs heroLineColor
    label: 'Full-Stack Developer',
    subtitle: 'Code is language.',
    bio: 'Full-stack d3veloper. Just making my way through the webverse — one pull request at a time.',
    pills: ['React', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind'],
    labelBioColor: '#9eb6e3',
    subtitleColor: '#b8ccef',
    bioColor: '#87a0d4',
    heroLineColor: '#d8e4ff',
    pillColor: 'rgba(79,111,255,0.07)',
    pillBorder: 'rgba(79,111,255,0.35)',
    pillText: '#c8d6f0',
    navBrandColor: '#d5e2ff',
    navLinkColor: 'rgba(142, 164, 212, 0.9)',
    navLinkHover: '#edf2ff',
    navLinks: ['About', 'Projects', 'Skills', 'Contact'],
    orb1: '#2a4fff',
    orb2: '#7c3aed',
    orb3: '#1e3a8a',
    cornerLabel: 'currently building',
    cornerValue: 'something cool ✦',
    headingFont: FONT_DEV,
    bodyFont: FONT_DEV,
  },
  music: {
    name: 'Hector del Angel',
    accent: '#ffe9a7', // softer gold for nav, glows, UI
    heroNameAccent: '#ffb020', // vivid amber-gold — first name only, pops vs heroLineColor
    label: 'Guitarist · Instructor',
    subtitle: 'Music is language.',
    bio: "Guitarist from Los Angeles. I teach, I play, I write. Whether you're picking up a guitar for the first time or leveling up. <br /> Join me, and listen here, we can.",
    pills: ['Guitar', 'Lessons', 'Original Music', 'Los Angeles', 'Online Sessions'],
    labelBioColor: '#e8c47a',
    subtitleColor: '#f5daa3',
    bioColor: '#d4a85a',
    heroLineColor: '#fff0cc',
    pillColor: 'rgba(245,158,11,0.07)',
    pillBorder: 'rgba(245,158,11,0.35)',
    pillText: '#f2dfb0',
    navBrandColor: '#ffefcf',
    navLinkColor: 'rgba(212, 176, 102, 0.92)',
    navLinkHover: '#fff8e6',
    navLinks: ['Listen', 'Lessons', 'About', 'Contact'],
    orb1: '#f59e0b',
    orb2: '#dc2626',
    orb3: '#92400e',
    cornerLabel: 'based in',
    cornerValue: 'Los Angeles, CA ✦',
    headingFont: FONT_MUSIC,
    bodyFont: FONT_MUSIC,
  },
};

const NAME_REST = ' del Angel';
/** Dev hero: glitch-reveal only this part (after delay), not the handle. */
const DEV_FIRST_ALIAS = 'h3c70r';
const DEV_FIRST_REVEALED = 'Hector';
const DEV_NAME_GLITCH_MS = 480;

const HERO_BG_DEV = '/keyboard.jpeg';
const HERO_BG_MUSIC = '/fretboard.jpeg';

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
      setDevFirstNameGlitch(false);
      setDevNameRevealDone(false);
      return;
    }
    setDevFirstNameGlitch(false);
    setDevNameRevealDone(false);
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
      {/* Isolate only the crossfading photos so they flatten like one bg layer; vignette stays outside (same order as pre-fade: photo → multiply) */}
      <div className="pointer-events-none absolute inset-0 z-0" aria-hidden>
        <div className="absolute inset-0 isolate">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-700 ease-in-out"
            style={{
              backgroundImage: `url(${HERO_BG_DEV})`,
              opacity: isMusic ? 0 : 1,
            }}
          />
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-700 ease-in-out"
            style={{
              backgroundImage: `url(${HERO_BG_MUSIC})`,
              opacity: isMusic ? 1 : 0,
            }}
          />
        </div>
        <div className={`vignette ${mode === 'music' ? 'vignette-music' : 'vignette-dark'}`} />
      </div>
      {/* ── Orbs ── */}
      <Orbs
        orb1={c.orb1}
        orb2={c.orb2}
        orb3={c.orb3}
        isMusic={isMusic}
      />

      {/* ── Grid texture ── */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03] px-4"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

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
