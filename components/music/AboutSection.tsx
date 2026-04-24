import Image from 'next/image';
import { content } from '../../types/content';
import { SectionHeader } from '../SectionHeader';
import { SkillsSection } from './SkillsSection';

const music = content.music;

function hexToRgbTuple(hex: string): [number, number, number] {
  const h = hex.replace('#', '');
  const n = parseInt(
    h.length === 3
      ? h
          .split('')
          .map((c) => c + c)
          .join('')
      : h,
    16,
  );
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

const imageGlow = (() => {
  const [r, g, b] = hexToRgbTuple(music.orb1);
  return {
    boxShadow: `0 0 40px rgba(${r},${g},${b},0.15),0 0 64px rgba(${r},${g},${b},0.08)`,
  } as const;
})();

/** `public/guitar_selfie.jpg` — landscape; framed 3:2 to match asset. */
const PROFILE_SRC = '/guitar_selfie.jpg';

/** Shared body size for all About paragraphs (`text-base` ≈ medium body). */
const musicAboutCopy = 'text-base leading-relaxed md:leading-7';

export function AboutSection() {
  return (
    <>
      <section id="about" className="relative z-10 pt-10">
        <SectionHeader title="About" subtitle="Who I am" accentColor={music.accent} size="lg" />
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-10 md:gap-14 md:items-start">
          <div className="flex-1 min-w-0 max-w-2xl mx-auto md:mx-0 order-2 md:order-1">
            <p className={`${musicAboutCopy} mb-6 text-[#e8d4c4]`}>
              I&rsquo;m <span className="font-semibold text-[#fff5e6]">Hector del Angel</span> — a
              guitarist, creator, and teacher with 30+ years across styles, from technical metal to
              progressive textures and beyond. I value feel as much as complexity, always chasing
              riffs and ideas that connect.
            </p>

            <p className={`${musicAboutCopy} mb-4 text-[#e8d4c4]`}>
              <span className="font-semibold text-[#fff8f0]">Philosophy:</span> I believe learning
              happens through songs, riffs, and real musical moments where theory, technique, and
              expression come together. Whether breaking down parts, writing music, or helping
              others grow, I’m always learning by doing, refining, and exploring.
            </p>
            <p className={`${musicAboutCopy} mt-8`} style={{ color: music.accent }}>
              Somewhere between the first note and the next riff…
            </p>
          </div>
          <div className="shrink-0 flex justify-center md:justify-end md:pt-1 order-1 md:order-2 w-full md:w-auto">
            <div className="mx-auto w-full max-w-[380px] rounded-2xl md:mx-0" style={imageGlow}>
              <div className="group relative aspect-3/2 w-full rounded-2xl overflow-hidden border border-white/10 bg-white/3">
                <Image
                  src={PROFILE_SRC}
                  alt="H3c70r with guitar"
                  width={720}
                  height={480}
                  unoptimized
                  className="h-full w-full object-cover object-center grayscale transition-[filter] duration-300 ease-out group-hover:grayscale-0"
                  sizes="(max-width: 768px) 100vw, 380px"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <SkillsSection />
    </>
  );
}
