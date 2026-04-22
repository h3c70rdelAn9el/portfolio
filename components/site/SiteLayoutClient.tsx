'use client';

import { usePathname, useRouter } from 'next/navigation';
import { CornerCard } from '../CornerCard';
import { Nav } from '../Nav';
import { SocialLinks } from '../SocialLinks';
import { socials } from '../socials';
import { content } from '../../types/content';
import { SiteAtmosphere } from './SiteAtmosphere';
import { useSiteMode } from './SiteModeContext';
import { useDevView } from './DevViewContext';

const FONT_DEV = 'var(--font-space), sans-serif';
const FONT_MUSIC = 'var(--font-cormorant), serif';

/**
 * Persistent shell. Dev main column uses `DevViewContext` so About/Projects swap
 * without Next remounting `children` (no route-swap flash).
 */
export function SiteLayoutClient({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() ?? '/';
  const router = useRouter();
  const { homeViewMode, invokeHomeNavToggle } = useSiteMode();
  const { section, go, isDevHomeHero } = useDevView();

  const onMusicPath = pathname === '/music' || pathname.startsWith('/music/');
  const inDevSubSection = !onMusicPath && (section === 'about' || section === 'projects');

  const shellMode: 'dev' | 'music' = onMusicPath ? 'music' : isDevHomeHero ? homeViewMode : 'dev';
  const atmosphereMode: 'dev' | 'music' = onMusicPath ? 'music' : homeViewMode;
  const c = content[shellMode];
  const isMusicForNav = onMusicPath || (isDevHomeHero && homeViewMode === 'music');
  const cornerFont = shellMode === 'music' ? FONT_MUSIC : FONT_DEV;

  const handleModeToggle = () => {
    if (isDevHomeHero) {
      invokeHomeNavToggle();
      return;
    }
    if (onMusicPath) {
      router.push('/');
      return;
    }
    if (inDevSubSection) {
      router.push('/music');
    }
  };

  const handleBrandHome = () => {
    if (onMusicPath) {
      router.push('/');
      return;
    }
    go('home');
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
        isDevHomeHero={isDevHomeHero}
        onBrandHome={handleBrandHome}
        useClientDevNav={!onMusicPath}
        onDevClientNav={go}
      />

      <div className="relative z-10 flex w-full min-h-[calc(100vh-88px)] flex-col px-8 pb-20 pt-6 md:px-16">
        <div
          className="hero-overlay"
          aria-hidden
        />
        <div
          className={
            isDevHomeHero
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
