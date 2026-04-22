'use client';

import { createContext, useCallback, useContext, useEffect, useLayoutEffect, useMemo, useState } from 'react';
import { usePathname } from 'next/navigation';

export type DevSection = 'home' | 'about' | 'projects';

type DevViewContextValue = {
  section: DevSection;
  /** Swaps the main column without a Next route change (uses history.pushState). */
  go: (s: DevSection) => void;
  /** True when the dev hero (wide column) is active — not on /music, section is home. */
  isDevHomeHero: boolean;
};

const DevViewContext = createContext<DevViewContextValue | null>(null);

const pathForSection = (s: DevSection) => (s === 'home' ? '/' : s === 'about' ? '/dev/about' : '/dev/projects');

function readSectionFromPath(path: string, onMusicPath: boolean): DevSection {
  if (onMusicPath) return 'home';
  if (path === '/dev/about' || path.startsWith('/dev/about/')) return 'about';
  if (path === '/dev/projects' || path.startsWith('/dev/projects/')) return 'projects';
  return 'home';
}

/**
 * Drives / + /dev/* “pages” for the main column from one RSC + client state so nav does
 * not remount the layout `children` from separate routes (no Next soft-nav flash).
 * Direct loads + refresh: `next.config` rewrites serve `(site)/page` for /dev/* URLs; we
 * sync from `window.location` + Next’s pathname when a real transition happens (e.g. /music).
 */
export function DevViewProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() ?? '/';
  const onMusicPath = pathname === '/music' || pathname.startsWith('/music/');

  // Must not use `window` here — it diverges from SSR and breaks Nav (span vs <Link>).
  const [section, setSection] = useState<DevSection>(() =>
    readSectionFromPath(pathname, onMusicPath),
  );

  const syncFromUrl = useCallback(() => {
    if (typeof window === 'undefined') return;
    const w = window.location.pathname;
    const next = readSectionFromPath(w, onMusicPath);
    setSection((prev) => (prev === next ? prev : next));
  }, [onMusicPath]);

  // Defer to avoid cascading renders on pathname (sync + Next router; popstate is async)
  useEffect(() => {
    const id = requestAnimationFrame(() => syncFromUrl());
    return () => cancelAnimationFrame(id);
  }, [pathname, syncFromUrl]);

  useLayoutEffect(() => {
    const onPop = () => {
      requestAnimationFrame(() => syncFromUrl());
    };
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, [syncFromUrl]);

  const go = useCallback((s: DevSection) => {
    if (s === section) return;
    setSection(s);
    const to = pathForSection(s);
    window.history.pushState({ dev: s }, '', to);
  }, [section]);

  const isDevHomeHero = !onMusicPath && section === 'home';

  const value = useMemo(
    () => ({ section, go, isDevHomeHero }),
    [section, go, isDevHomeHero],
  );

  return <DevViewContext.Provider value={value}>{children}</DevViewContext.Provider>;
}

export function useDevView() {
  const v = useContext(DevViewContext);
  if (!v) {
    throw new Error('useDevView must be used within DevViewProvider');
  }
  return v;
}
