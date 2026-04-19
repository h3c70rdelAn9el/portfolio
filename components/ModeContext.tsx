"use client";

import { createContext, useContext, useState, useCallback } from "react";

type Mode = "dev" | "music";

interface ModeContextType {
  mode: Mode;
  toggleMode: () => void;
  isGlitching: boolean;
}

const ModeContext = createContext<ModeContextType | null>(null);

export function ModeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<Mode>("dev");
  const [isGlitching, setIsGlitching] = useState(false);

  const toggleMode = useCallback(() => {
    setIsGlitching(true);
    setTimeout(() => setMode((m) => (m === "dev" ? "music" : "dev")), 120);
    setTimeout(() => setIsGlitching(false), 600);
  }, []);

  return (
    <ModeContext.Provider value={{ mode, toggleMode, isGlitching }}>
      {children}
    </ModeContext.Provider>
  );
}

export function useMode() {
  const ctx = useContext(ModeContext);
  if (!ctx) throw new Error("useMode must be used within a ModeProvider");
  return ctx;
}
