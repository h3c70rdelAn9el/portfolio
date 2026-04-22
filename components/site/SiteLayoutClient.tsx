'use client';

import { usePathname, useRouter } from 'next/navigation';
import { CornerCard } from '../CornerCard';
import { Nav } from '../Nav';
import { SocialLinks } from '../SocialLinks';
import { socials } from '../socials';
import { content } from '../../types/content';
import { SiteAtmosphere } from './SiteAtmosphere';
import { useSiteMode } from './SiteModeContext';

const FONT_DEV = 'var(--font-space), sans-serif';
const FONT_MUSIC = 'var(--font-cormorant), serif';

/**
 * One persistent shell for `/`, `/dev/*`, `/music` so the background + nav stay put
 * while the main column (`children`) swaps on navigation — no Framer/opacity wrapper
 * (that stack was causing visible blinks: exit-then-wait, double opacity, and rAF races).
 */
export function SiteLayoutClient({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() ?? '/';
  const router = useRouter();
  const { homeViewMode, invokeHomeNavToggle } = useSiteMode();

  const onMusicPath = pathname === '/music' || pathname.startsWith('/music/');
  const onDevPath = pathname.startsWith('/dev/');
  const isHome = pathname === '/';

  // Nav copy, corner, and fonts: dev subroutes use the dev *content* set; home follows the
  // hda toggle. (About/Projects are still the “dev” section in terms of copy.)
  const shellMode: 'dev' | 'music' = onMusicPath ? 'music' : onDevPath ? 'dev' : homeViewMode;
  // Background photos/orbs: never force-switch when entering `/dev/*` from home. Using
  // `homeViewMode` here was causing a 700ms crossfade (keyboard↔fretboard) and read as
  // a “background refresh” on home ↔ about.
  const atmosphereMode: 'dev' | 'music' = onMusicPath ? 'music' : homeViewMode;
  const c = content[shellMode];
  const isMusicForNav = onMusicPath || (isHome && homeViewMode === 'music');
  const cornerFont = shellMode === 'music' ? FONT_MUSIC : FONT_DEV;

  const handleModeToggle = () => {
    if (isHome) {
      invokeHomeNavToggle();
      return;
    }
    if (onMusicPath) {
      router.push('/');
      return;
    }
    if (onDevPath) {
      router.push('/music');
    }
  };

  return (
    <div
      className="relative min-h-screen overflow-hidden text-[#f2ebe0]"
      style={{ fontFamily: c.bodyFont, transition: 'font-family 0s', backgroundColor: '#07090f' }}>
      <SiteAtmosphere mode={atmosphereMode} />

      <Nav
        navLinks={c.navLinks}
        accent={c.accent}
        isMusic={isMusicForNav}
        onToggle={handleModeToggle}
        brandColor={c.navBrandColor}
        linkColor={c.navLinkColor}
        linkHoverColor={c.navLinkHover}
        brandHref={isHome ? undefined : '/'}
      />

      {/* One shared content column: scrim stays mounted on route changes (home used to
          omit it while Hero’s overlay was inside the fading page — caused a one-frame
          “background refresh” when leaving About, etc.) */}
      <div className="relative z-10 flex w-full min-h-[calc(100vh-88px)] flex-col px-8 pb-20 pt-6 md:px-16">
        <div
          className="hero-overlay"
          aria-hidden
        />
        <div
          className={
            isHome
              ? 'relative z-1 w-full min-h-0 flex-1'
              : 'relative z-1 mx-auto w-full min-h-0 max-w-3xl flex-1'
          }>
          {children}
        </div>
      </div>

      <div className="pointer-events-auto relative z-10 pb-10">
        <SocialLinks
          socials={socials}
          accent={c.accent}
        />
      </div>

      <CornerCard
        cornerLabel={c.cornerLabel}
        cornerValue={c.cornerValue}
        fontFamily={cornerFont}
      />
    </div>
  );
}
