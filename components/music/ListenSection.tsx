import { content } from '../../types/content';
import { SectionHeader } from '../SectionHeader';

const music = content.music;

const FONT_MUSIC = 'var(--font-cormorant), serif';
const FONT_DEV = 'var(--font-space), sans-serif';

const musicBodyCopy = 'text-lg leading-relaxed md:leading-7';

export function ListenSection() {
  return (
    <section id="listen" className="relative z-10 pt-10">
      <SectionHeader
        title="Listen"
        subtitle="Music & releases"
        accentColor={music.accent}
        size="lg"
      />

      <div className="max-w-2xl mx-auto md:mx-0">
        <p className={`${musicBodyCopy} mb-6 text-[#e8d4c4]`}>
          New recordings, demos, and streaming links will live here. Still wiring things up on my
          end—thanks for stopping by.
        </p>

        <div
          className="rounded-2xl border border-white/10 px-5 py-4"
          style={{ background: 'rgba(255,255,255,0.03)' }}>
          <p
            className="text-md tracking-[0.15em] uppercase mb-1.5"
            style={{ color: music.accent, fontFamily: FONT_DEV }}>
            Coming soon
          </p>
          <p
            className="text-md text-white/80 leading-relaxed"
            style={{ fontFamily: FONT_MUSIC }}>
            Check back for playable tracks and where to listen.
          </p>
        </div>
      </div>
    </section>
  );
}
