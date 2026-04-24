import Image from 'next/image';
import { content } from '../../types/content';
import { SectionHeader } from '../SectionHeader';

const music = content.music;

function hexToRgbTuple(hex: string): [number, number, number] {
  const h = hex.replace('#', '');
  const n = parseInt(h.length === 3 ? h.split('').map((c) => c + c).join('') : h, 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

const imageGlow = (() => {
  const [r, g, b] = hexToRgbTuple(music.orb1);
  return {
    boxShadow: `0 0 40px rgba(${r},${g},${b},0.15),0 0 64px rgba(${r},${g},${b},0.08)`,
  } as const;
})();

/** Image under `public/guitar.jpg` — swap for a portrait when you have one. */
const PROFILE_SRC = '/guitar.jpg';

export function AboutSection() {
  return (
    <section id="about" className="relative z-10 pt-10">
      <SectionHeader title="About" subtitle="Who I am" accentColor={music.accent} size="lg" />
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-10 md:gap-14 md:items-start">
        <div className="shrink-0 flex justify-center md:justify-start md:pt-1">
          <div
            className="mx-auto w-full max-w-[240px] rounded-2xl md:mx-0"
            style={imageGlow}
          >
            <div className="group relative h-[300px] sm:h-[320px] w-full rounded-2xl overflow-hidden border border-white/10 bg-white/3">
              <Image
                src={PROFILE_SRC}
                alt="Guitar and playing"
                width={4748}
                height={2479}
                unoptimized
                className="h-full w-full object-cover object-center grayscale transition-[filter] duration-300 ease-out group-hover:grayscale-0"
                sizes="(max-width: 768px) 240px, 280px"
                priority
              />
            </div>
          </div>
        </div>
        <div className="flex-1 min-w-0 max-w-2xl mx-auto md:mx-0">
          <p className="mb-6 text-lg leading-relaxed text-[#e8d4c4] md:text-xl md:leading-8">
            I&rsquo;m <span className="font-semibold text-[#fff5e6]">H3c70r del Angel</span>, a
            guitarist, creator, and teacher with 30+ years of experience playing and teaching music. I
            move between technical metal, progressive textures, and all styles in between, always
            focusing on feel as much as complexity—chasing riffs and ideas that actually move people.
          </p>

          <p className="mb-4 text-lg leading-relaxed text-[#e8d4c4] md:text-xl md:leading-8">
            <span className="font-semibold text-[#fff8f0]">Philosophy:</span> Teaching across
            styles—breaking things down so theory, technique, and real musical expression connect.
            Whether I&rsquo;m building sounds, writing parts, or helping others level up, I&rsquo;m
            always learning, refining, and exploring.
          </p>
          <p className="mt-8 text-lg leading-relaxed md:text-xl md:leading-8" style={{ color: music.accent }}>
            For me, music is discovery—turning ideas into motion and noise into something honest.
          </p>
        </div>
      </div>
    </section>
  );
}
