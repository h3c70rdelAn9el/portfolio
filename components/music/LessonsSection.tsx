'use client';

import { content } from '../../types/content';
import { SectionHeader } from '../SectionHeader';

const music = content.music;

const FONT_MUSIC = 'var(--font-cormorant), serif';
const FONT_DEV = 'var(--font-space), sans-serif';

const musicBodyCopy = 'text-lg leading-relaxed md:leading-7';

const offerings = [
  {
    title: 'Beginner to Intermediate',
    desc: 'Never picked up a guitar? No problem. Already playing but feeling stuck? We start where you are.',
  },
  {
    title: 'All Styles Welcome',
    desc: 'Classical, blues, rock, metal, prog — if it involves six (or more) strings, we can work on it.',
  },
  {
    title: 'In-Person & Online',
    desc: 'Based in Los Angeles. Remote lessons available via Zoom or FaceTime. Flexible scheduling.',
  },
];

export function LessonsSection() {
  return (
    <section id="lessons" className="relative z-10 pt-10">
      <SectionHeader
        title="Lessons"
        subtitle="Learn with me"
        accentColor={music.accent}
        size="lg"
      />

      <div className="max-w-2xl mx-auto md:mx-0">
        <p className={`${musicBodyCopy} mb-6 text-[#e8d4c4]`}>
          I&rsquo;ve been playing for 30+ years and teaching for most of them. My approach is simple
          — we learn through music you actually want to play. No dry exercises, no one-size-fits-all
          method. Just real songs, real technique, real progress.
        </p>

        <p className={`${musicBodyCopy} mb-6 text-[#e8d4c4]`}>
          <span className="font-semibold text-[#fff8f0]">My approach:</span> Theory when it serves
          the music, technique when it unlocks the next level, and always — always — making it feel
          like yours.
        </p>

        {/* Offering cards */}
        <div className="flex flex-col gap-3">
          {offerings.map((o) => (
            <div
              key={o.title}
              className="rounded-2xl border border-white/10 px-5 py-4"
              style={{ background: 'rgba(255,255,255,0.03)' }}
            >
              <p
                className="text-md tracking-[0.15em] uppercase mb-1.5"
                style={{ color: music.accent, fontFamily: FONT_DEV }}
              >
                {o.title}
              </p>
              <p
                className="text-md text-white/80 leading-relaxed"
                style={{ fontFamily: FONT_MUSIC }}
              >
                {o.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
