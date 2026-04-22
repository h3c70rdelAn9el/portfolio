'use client';

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from 'react';

type SiteViewMode = 'dev' | 'music';

type Value = {
  homeViewMode: SiteViewMode;
  setHomeViewMode: (m: SiteViewMode | ((prev: SiteViewMode) => SiteViewMode)) => void;
  registerHomeNavToggle: (fn: (() => void) | null) => void;
  /** Shell calls this when the user taps dev/music on the home page (hero glitch lives in the page). */
  invokeHomeNavToggle: () => void;
};

const Ctx = createContext<Value | null>(null);

export function SiteModeProvider({ children }: { children: ReactNode }) {
  const [homeViewMode, setHomeViewMode] = useState<SiteViewMode>('dev');
  const homeNavRef = useRef<(() => void) | null>(null);

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
