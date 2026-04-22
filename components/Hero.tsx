import React from 'react';

interface HeroProps {
  glitchedLabel: string;
  glitchedSubtitle: string;
  glitchedBio: string;
  firstName: string;
  lastName: string;
  c: any;
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
  return (
    <section className="relative z-10 flex flex-col justify-center min-h-[calc(100vh-88px)] px-8 md:px-16 pb-20">
      {/* Dark overlay above background/vignette, below content */}
      <div className="hero-overlay" />
      {/* Mode label */}
      <p
        className="mb-5 tracking-[0.2em] uppercase transition-colors duration-500"
        style={{
          color: c.labelBioColor,
          fontFamily: c.bodyFont,
          fontSize: 'clamp(1.1rem, 2vw, 1.7rem)',
          letterSpacing: '0.18em',
          fontWeight: 600,
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
              color: c.accent,
              transition: 'color 0.5s',
              position: 'relative',
              zIndex: 1,
              background: 'transparent',
            }}>
            {firstName}
          </em>
          <span style={{ marginLeft: 8 }}>{lastName}</span>
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
        }}>
        {glitchedBio.split(/<br\s*\/?>(\s*)?/i).map((part, idx, arr) =>
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
    </section>
  );
}
