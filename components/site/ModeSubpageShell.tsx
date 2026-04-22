'use client';

import { useRouter } from 'next/navigation';
import { CornerCard } from '../CornerCard';
import { Nav } from '../Nav';
import { PageTransition } from '../PageTransition';
import { SocialLinks } from '../SocialLinks';
import { socials } from '../socials';
import { content } from '../../types/content';
import { SiteAtmosphere } from './SiteAtmosphere';

const FONT_DEV = 'var(--font-space), sans-serif';
const FONT_MUSIC = 'var(--font-cormorant), serif';

type Mode = 'dev' | 'music';

export function ModeSubpageShell({ mode, children }: { mode: Mode; children: React.ReactNode }) {
  const router = useRouter();
  const c = content[mode];
  const isMusic = mode === 'music';
  const cornerFont = isMusic ? FONT_MUSIC : FONT_DEV;

  const handleModeToggle = () => {
    if (isMusic) {
      router.push('/');
      return;
    }
    router.push('/music');
  };

  return (
    <div
      className="relative min-h-screen overflow-hidden text-[#f2ebe0]"
      style={{ fontFamily: c.bodyFont, transition: 'font-family 0s', backgroundColor: '#07090f' }}>
      <SiteAtmosphere mode={mode} />

      <Nav
        navLinks={c.navLinks}
        accent={c.accent}
        isMusic={isMusic}
        onToggle={handleModeToggle}
        brandColor={c.navBrandColor}
        linkColor={c.navLinkColor}
        linkHoverColor={c.navLinkHover}
        brandHref="/"
      />

      {/* Same dark scrim as <Hero />: `hero-overlay` — without this, the photo reads much brighter. */}
      <section
        className="relative z-10 flex min-h-[calc(100vh-88px)] flex-col px-8 pb-20 pt-6 md:px-16">
        <div
          className="hero-overlay"
          aria-hidden
        />
        <div className="relative z-1 mx-auto w-full max-w-3xl flex-1">
          <PageTransition>{children}</PageTransition>
        </div>
      </section>

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
