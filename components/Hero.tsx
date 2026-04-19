import React from 'react';

interface HeroProps {
  glitchedLabel: string;
  glitchedSubtitle: string;
  glitchedBio: string;
  glitchedName: string;
  c: any;
  isMusic: boolean;
}

export function Hero({ glitchedLabel, glitchedSubtitle, glitchedBio, glitchedName, c, isMusic }: HeroProps) {
  return (
    <section className="relative z-10 flex flex-col justify-center min-h-[calc(100vh-88px)] px-8 md:px-16 pb-20">
      {/* Mode label */}
      <p
        className="mb-5 text-xs tracking-[0.2em] uppercase transition-colors duration-500"
        style={{ color: c.accent, fontFamily: c.bodyFont }}>
        {glitchedLabel}
      </p>
      {/* Heading — font switches on toggle */}
      <h1
        className="font-bold leading-[1.05] text-white mb-3 transition-all duration-500"
        style={{
          fontFamily: c.headingFont,
          fontSize: 'clamp(36px, 6vw, 80px)',
        }}>
        Hey, I&apos;m
        <br />
        <em
          className={isMusic ? 'italic' : 'not-italic'}
          style={{ color: c.accent, transition: 'color 0.5s' }}>
          {glitchedName}
        </em>{' '}
        del Angel.
      </h1>
      {/* Subtitle — glitches, italic for music */}
      <p
        className="mb-6 font-light text-white/50 transition-all duration-500"
        style={{
          fontFamily: c.headingFont,
          fontSize: 'clamp(18px, 2.5vw, 26px)',
          fontStyle: isMusic ? 'italic' : 'normal',
          minHeight: '2rem',
        }}>
        {glitchedSubtitle}
      </p>
      {/* Bio — glitches */}
      <p
        className="max-w-md text-sm leading-loose text-white/40 mb-10 min-h-[80px]"
        style={{ fontFamily: c.bodyFont }}>
        {glitchedBio}
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
