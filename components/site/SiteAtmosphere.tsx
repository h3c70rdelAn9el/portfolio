import { Orbs } from '../Orbs';
import { content } from '../../types/content';

const HERO_BG_DEV = '/keyboard.jpeg';
const HERO_BG_MUSIC = '/fretboard.jpeg';

type SiteMode = 'dev' | 'music';

/**
 * Full-bleed background: dual photos, vignette, orbs, grid — same markup as the home page
 * so /dev/* and /music/* look identical to `/` for a given mode.
 */
export function SiteAtmosphere({ mode }: { mode: SiteMode }) {
  const c = content[mode];
  const isMusic = mode === 'music';

  return (
    <>
      <div
        className="pointer-events-none absolute inset-0 z-0"
        aria-hidden>
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
        <div className={`vignette ${isMusic ? 'vignette-music' : 'vignette-dark'}`} />
      </div>

      <Orbs
        orb1={c.orb1}
        orb2={c.orb2}
        orb3={c.orb3}
        isMusic={isMusic}
      />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03] px-4"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
    </>
  );
}
