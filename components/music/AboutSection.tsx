import Image from 'next/image';
import { SectionHeader } from '../SectionHeader';

const ACCENT = '#ffe9a7';

/** Image under `public/guitar.jpg` — swap for a portrait when you have one. */
const PROFILE_SRC = '/guitar.jpg';

export function AboutSection() {
  return (
    <section id="about" className="relative z-10 pt-10">
      <SectionHeader title="About" subtitle="Who I am" accentColor={ACCENT} />
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-10 md:gap-14 md:items-start">
        <div className="shrink-0 flex justify-center md:justify-start md:pt-1">
          <div className="mx-auto w-full max-w-[240px] rounded-2xl shadow-[0_0_40px_rgba(245,158,11,0.15),0_0_64px_rgba(245,158,11,0.08)] md:mx-0">
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
          <p className="mb-6 text-base leading-relaxed text-[#e8d4c4]">
            Welcome. I’m <span className="font-semibold text-[#fff5e6]">Hector del Angel</span> — a
            guitarist and teacher based in Los Angeles, sharing what I know through lessons and
            through performance. My path is built on practice, passion, and the belief that any player
            can find their own voice.
          </p>

          <p className="mb-4 text-[#e8d4c4]">
            <span className="font-semibold text-[#fff8f0]">Philosophy:</span> Music is language. I
            help students and listeners connect with the instrument and the feel behind the notes —
            technique in service of expression.
          </p>
          <p className="mt-8 text-[#fbbf24]">
            Somewhere between the first open chord and the next phrase that feels like home.
          </p>
        </div>
      </div>
    </section>
  );
}
