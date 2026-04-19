import React from 'react';

interface OrbsProps {
  orb1: string;
  orb2: string;
  orb3: string;
  isMusic: boolean;
}

export function Orbs({ orb1, orb2, orb3, isMusic }: OrbsProps) {
  return (
    <div className="pointer-events-none absolute inset-0">
      <div
        className="absolute -top-24 -left-24 w-[480px] h-[480px] rounded-full blur-[100px] transition-all duration-700"
        style={{ background: orb1, opacity: isMusic ? 0.1 : 0.12 }}
      />
      <div
        className="absolute bottom-0 right-0 w-[360px] h-[360px] rounded-full blur-[100px] transition-all duration-700"
        style={{ background: orb2, opacity: 0.09 }}
      />
      <div
        className="absolute top-1/2 left-1/3 w-[500px] h-[260px] rounded-full blur-[120px] transition-all duration-700"
        style={{ background: orb3, opacity: 0.07 }}
      />
    </div>
  );
}
