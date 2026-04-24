'use client';

import {
  createContext,
  useCallback,
  useContext,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from 'react';

import { SITE_VIEW_MODE_KEY, type SiteViewMode } from '@/lib/siteViewMode';

type Value = {
  homeViewMode: SiteViewMode;
  setHomeViewMode: (m: SiteViewMode | ((prev: SiteViewMode) => SiteViewMode)) => void;
  registerHomeNavToggle: (fn: (() => void) | null) => void;
  /** Shell calls this when the user taps dev/music on the home page (hero glitch lives in the page). */
  invokeHomeNavToggle: () => void;
};

const Ctx = createContext<Value | null>(null);

const COOKIE_MAX_AGE_SEC = 60 * 60 * 24 * 400;

function persistViewMode(next: SiteViewMode) {
  try {
    localStorage.setItem(SITE_VIEW_MODE_KEY, next);
  } catch {
    /* ignore */
  }
  if (typeof document !== 'undefined') {
    document.cookie = `${SITE_VIEW_MODE_KEY}=${next}; path=/; max-age=${COOKIE_MAX_AGE_SEC}; SameSite=Lax`;
  }
}

type SiteModeProviderProps = {
  children: ReactNode;
  /** From `cookies()` on the server so first paint matches (no dev flash on refresh). */
  initialHomeViewMode: SiteViewMode;
  /** If true, skip localStorage migration (server already had a mode cookie). */
  hasSiteViewCookie: boolean;
};

function readLocalStorageMode(): SiteViewMode | null {
  if (typeof window === 'undefined') return null;
  try {
    const v = localStorage.getItem(SITE_VIEW_MODE_KEY);
    if (v === 'music' || v === 'dev') return v;
  } catch {
    /* private mode */
  }
  return null;
}

export function SiteModeProvider({
  children,
  initialHomeViewMode,
  hasSiteViewCookie,
}: SiteModeProviderProps) {
  const [homeViewMode, setHomeViewModeState] = useState<SiteViewMode>(initialHomeViewMode);
  const homeNavRef = useRef<(() => void) | null>(null);

  /** Legacy: only when no cookie yet; migrate localStorage → state + cookie once. No run if server already sent a cookie (avoids flash). */
  useLayoutEffect(() => {
    if (hasSiteViewCookie) return;
    const fromLs = readLocalStorageMode();
    if (fromLs) {
      setHomeViewModeState(fromLs);
      persistViewMode(fromLs);
    }
  }, [hasSiteViewCookie]);

  const setHomeViewMode = useCallback(
    (m: SiteViewMode | ((prev: SiteViewMode) => SiteViewMode)) => {
      setHomeViewModeState((prev) => {
        const next = typeof m === 'function' ? m(prev) : m;
        persistViewMode(next);
        return next;
      });
    },
    [],
  );

  const registerHomeNavToggle = useCallback((fn: (() => void) | null) => {
    homeNavRef.current = fn;
  }, []);

  const invokeHomeNavToggle = useCallback(() => {
    homeNavRef.current?.();
  }, []);

  const value = useMemo(
    () => ({
      homeViewMode,
      setHomeViewMode,
      registerHomeNavToggle,
      invokeHomeNavToggle,
    }),
    [homeViewMode, registerHomeNavToggle, invokeHomeNavToggle],
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useSiteMode() {
  const v = useContext(Ctx);
  if (!v) {
    throw new Error('useSiteMode must be used under SiteModeProvider');
  }
  return v;
}
