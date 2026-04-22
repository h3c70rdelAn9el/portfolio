import React from 'react';

interface HeroContent {
  name: string;
  accent: string;
  label: string;
  subtitle: string;
  bio: string;
  pills: string[];
  labelBioColor: string;
  subtitleColor: string;
  bioColor: string;
  heroLineColor: string;
  pillColor: string;
  pillBorder: string;
  pillText: string;
  navLinks: string[];
  orb1: string;
  orb2: string;
  orb3: string;
  cornerLabel: string;
  cornerValue: string;
  headingFont: string;
  bodyFont: string;
  heroNameAccent?: string;
}

interface HeroProps {
  glitchedLabel: string;
  glitchedSubtitle: string;
  glitchedBio: string;
  firstName: string;
  lastName: string;
  c: HeroContent;
  isMusic: boolean;
}

export function Hero({
  glitchedLabel,
  glitchedSubtitle,
  glitchedBio,
  firstName,
  lastName,
  c,
  isMusic,
}: HeroProps) {
  const nameAccent = c.heroNameAccent ?? c.accent;
  const legibleShadow = `0 2px 20px rgba(0,0,0,0.92), 0 1px 3px rgba(0,0,0,0.85), 0 0 28px ${c.accent}33`;
  const accentShadow = `0 2px 24px rgba(0,0,0,0.9), 0 0 42px ${nameAccent}66, 0 0 1px rgba(255,255,255,0.4)`;

  return (
    <section className="relative z-10 flex flex-col justify-center min-h-[calc(100vh-88px)] px-8 md:px-16 pb-20">
      {/* Dark overlay: z-0 so copy above always paints on top */}
      <div
        className="hero-overlay"
        aria-hidden
      />
      <div className="relative z-1 flex flex-col flex-1 justify-center min-h-0">
        {/* Mode label */}
        <p
          className="mb-5 tracking-[0.2em] uppercase transition-colors duration-500"
          style={{
            color: c.labelBioColor,
            fontFamily: c.bodyFont,
            fontSize: 'clamp(1.1rem, 2vw, 1.7rem)',
            letterSpacing: '0.18em',
            fontWeight: 600,
            textShadow: legibleShadow,
          }}>
          {glitchedLabel}
        </p>
        {/* Heading — font switches on toggle */}
        <h1
          className="font-bold leading-[1.05] mb-3 transition-all duration-500"
          style={{
            fontFamily: c.headingFont,
            fontSize: 'clamp(36px, 6vw, 80px)',
            color: c.heroLineColor,
            textShadow: legibleShadow,
          }}>
          Hey, I&apos;m
          <br />
          <span
            style={{
              position: 'relative',
              display: 'inline-block',
            }}>
            {isMusic && (
              <svg
                aria-hidden="true"
                width="100%"
                height="1.2em"
                viewBox="0 0 200 24"
                style={{
                  position: 'absolute',
                  left: 0,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  zIndex: 0,
                  pointerEvents: 'none',
                }}>
                {[0, 6, 12, 18, 24].map((y) => (
                  <line
                    key={y}
                    x1="0"
                    x2="200"
                    y1={y}
                    y2={y}
                    stroke="currentColor"
                    strokeWidth="1"
                    opacity="0.25"
                  />
                ))}
              </svg>
            )}
            <em
              className={isMusic ? 'italic' : 'not-italic'}
              style={{
                color: nameAccent,
                transition: 'color 0.5s',
                position: 'relative',
                zIndex: 1,
                background: 'transparent',
                textShadow: accentShadow,
              }}>
              {firstName}
            </em>
            <span
              style={{
                marginLeft: 8,
                textShadow: legibleShadow,
              }}>
              {lastName}
            </span>
          </span>
        </h1>
        {/* Subtitle — glitches, italic for music */}
        <p
          className="mb-6 font-light transition-all duration-500"
          style={{
            fontFamily: c.headingFont,
            fontSize: 'clamp(18px, 2.5vw, 26px)',
            fontStyle: isMusic ? 'italic' : 'normal',
            minHeight: '2rem',
            color: c.subtitleColor,
            textShadow: legibleShadow,
          }}>
          {glitchedSubtitle}
        </p>
        {/* Bio — glitches */}
        <p
          className="max-w-2xl leading-normal mb-6"
          style={{
            fontFamily: c.bodyFont,
            color: c.bioColor,
            fontSize: 'clamp(1.1rem, 2.1vw, 1.45rem)',
            lineHeight: 1.7,
            textShadow: legibleShadow,
          }}>
          {glitchedBio.split(/<br\s*\/?>\s*/i).map((part, idx, arr) =>
            idx < arr.length - 1 ? (
              <React.Fragment key={idx}>
                {part}
                <span style={{ display: 'block', height: '0.09rem' }} />
              </React.Fragment>
            ) : (
              part
            ),
          )}
        </p>
        {/* Pills */}
        <div className="flex flex-wrap gap-2 mb-12">
          {c.pills.map((pill: string) => (
            <span
              key={pill}
              className="rounded-full px-4 py-1.5 text-[11px] tracking-wider border transition-all duration-500"
              style={{
                fontFamily: c.bodyFont,
                background: c.pillColor,
                borderColor: c.pillBorder,
                color: c.pillText,
              }}>
              {pill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
