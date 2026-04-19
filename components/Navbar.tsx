"use client";

import { useMode } from "@/context/ModeContext";

const navLinks = {
  dev: ["About", "Projects", "Skills", "Contact"],
  music: ["Listen", "Lessons", "About", "Contact"],
};

export default function Navbar() {
  const { mode, toggleMode } = useMode();
  const isMusic = mode === "music";
  const accent = isMusic ? "#f59e0b" : "#4f6fff";

  return (
    <nav className="relative z-50 flex items-center justify-between px-8 py-7 md:px-16">
      {/* Logo */}
      <span
        className="text-lg font-extrabold tracking-tight text-white"
        style={{ fontFamily: "var(--font-syne), sans-serif" }}
      >
        hda<span style={{ color: accent, transition: "color 0.5s" }}>.</span>
      </span>

      {/* Nav links — conditional per mode */}
      <div className="hidden md:flex items-center gap-8">
        {navLinks[mode].map((l) => (
          <a
            key={l}
            href={`#${l.toLowerCase()}`}
            className="text-xs tracking-widest text-white/35 hover:text-white/80 transition-colors uppercase"
          >
            {l}
          </a>
        ))}
      </div>

      {/* Toggle */}
      <button
        onClick={toggleMode}
        className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/50 backdrop-blur-md hover:text-white/80 hover:border-white/20 transition-all duration-300 cursor-pointer"
      >
        <span>{isMusic ? "💻" : "🎸"}</span>
        <span className="tracking-widest uppercase">{isMusic ? "Dev" : "Music"}</span>
      </button>
    </nav>
  );
}
