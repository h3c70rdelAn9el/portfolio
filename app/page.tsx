'use client';

import { useState } from 'react';
import { useGlitchText } from '../components/useGlitchText';
import { SocialLinks } from '../components/SocialLinks';
import { socials } from '../components/socials';
import { Hero } from '../components/Hero';
import { Nav } from '../components/Nav';

const FONT_DEV = 'var(--font-space), sans-serif';
const FONT_MUSIC = 'var(--font-cormorant), serif';

// ── Content ───────────────────────────────────────────────────
const content = {
  dev: {
    accent: '#4f6fff',
    label: 'Full-Stack Developer',
    subtitle: 'Code is language.',
    bio: 'Full-stack d3veloper. Just making my way through the webverse — one pull request at a time.',
    pills: ['React', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind'],
    pillColor: 'rgba(79,111,255,0.07)',
    pillBorder: 'rgba(79,111,255,0.25)',
    pillText: 'rgba(79,111,255,0.9)',
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
    accent: '#f59e0b',
    label: 'Guitarist · Instructor',
    subtitle: 'Music is language.',
    bio: "Guitarist from Los Angeles. I teach, I play, I compose. Whether you're picking up a guitar for the first time or leveling up — pull up a chair.",
    pills: ['Guitar', 'Lessons', 'Original Music', 'Los Angeles', 'Online Sessions'],
    pillColor: 'rgba(245,158,11,0.07)',
    pillBorder: 'rgba(245,158,11,0.25)',
    pillText: 'rgba(245,158,11,0.9)',
    navLinks: ['Listen', 'Lessons', 'About', 'Contact'],
    orb1: '#f59e0b',
    orb2: '#dc2626',
    orb3: '#92400e',
    cornerLabel: 'based in',
    cornerValue: 'Los Angeles, CA ✦',
    headingFont: FONT_MUSIC,
    bodyFont: FONT_DEV,
  },
};

// ── Component ─────────────────────────────────────────────────
export default function Home() {
  const [mode, setMode] = useState<'dev' | 'music'>('dev');
  const [glitching, setGlitching] = useState(false);
  const c = content[mode];
  const isMusic = mode === 'music';

  const glitchedLabel = useGlitchText(c.label, glitching);
  const glitchedSubtitle = useGlitchText(c.subtitle, glitching);
  const glitchedBio = useGlitchText(c.bio, glitching);
  const glitchedName = useGlitchText('Hector', glitching);

  const handleToggle = () => {
    setGlitching(true);
    setTimeout(() => setMode((m) => (m === 'dev' ? 'music' : 'dev')), 120);
    setTimeout(() => setGlitching(false), 600);
  };

  return (
    <main
      className="relative min-h-screen bg-[#07090f] text-[#e2ddd6] overflow-hidden"
      style={{ fontFamily: c.bodyFont, transition: 'font-family 0s' }}>
      {/* ── Orbs ── */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute -top-24 -left-24 w-[480px] h-[480px] rounded-full blur-[100px] transition-all duration-700"
          style={{ background: c.orb1, opacity: isMusic ? 0.1 : 0.12 }}
        />
        <div
          className="absolute bottom-0 right-0 w-[360px] h-[360px] rounded-full blur-[100px] transition-all duration-700"
          style={{ background: c.orb2, opacity: 0.09 }}
        />
        <div
          className="absolute top-1/2 left-1/3 w-[500px] h-[260px] rounded-full blur-[120px] transition-all duration-700"
          style={{ background: c.orb3, opacity: 0.07 }}
        />
      </div>

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
      />

      {/* ── Hero ── */}
      <Hero
        glitchedLabel={glitchedLabel}
        glitchedSubtitle={glitchedSubtitle}
        glitchedBio={glitchedBio}
        glitchedName={glitchedName}
        c={c}
        isMusic={isMusic}
      />
      <SocialLinks
        socials={socials}
        accent={c.accent}
      />

      {/* ── Corner card ── */}
      <div className="pointer-events-none absolute bottom-10 right-8 md:right-16 z-10 hidden md:block">
        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl px-6 py-4">
          <p
            className="text-[10px] tracking-[0.18em] uppercase text-white/25 mb-1"
            style={{ fontFamily: FONT_DEV }}>
            {c.cornerLabel}
          </p>
          <p
            className="text-sm text-white/60"
            style={{ fontFamily: FONT_DEV }}>
            {c.cornerValue}
          </p>
        </div>
      </div>
      {/* Socials */}
    </main>
  );
}
