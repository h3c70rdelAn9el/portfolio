import { memo } from 'react';
import { Orbs } from '../Orbs';
import { content } from '../../types/content';

const HERO_BG_DEV = '/keyboard.jpeg';
const HERO_BG_MUSIC = '/fretboard.jpeg';

type SiteMode = 'dev' | 'music';

/**
 * Full-bleed background: dual photos, vignette, orbs, grid. Pinned to the viewport
 * (`fixed`) so it does not resize when the document height changes between routes.
 */
function SiteAtmosphereImpl({ mode }: { mode: SiteMode }) {
  const c = content[mode];
  const isMusic = mode === 'music';

  // Fixed to the viewport, not the scroll/tall min-h parent: `absolute inset-0` on a
  // `min-h-screen` block grows with page height, so bg-cover re-crops on every route —
  // reads as the photo/orbs "jumping" with About vs Home.
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 w-full transform-gpu"
      aria-hidden>
      <div className="absolute inset-0">
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
    </div>
  );
}

export const SiteAtmosphere = memo(SiteAtmosphereImpl);
