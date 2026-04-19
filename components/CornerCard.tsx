import React from 'react';

interface CornerCardProps {
  cornerLabel: string;
  cornerValue: string;
  fontFamily: string;
}

export function CornerCard({ cornerLabel, cornerValue, fontFamily }: CornerCardProps) {
  return (
    <div className="pointer-events-none absolute bottom-10 right-8 md:right-16 z-10 hidden md:block">
      <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl px-6 py-4">
        <p
          className="text-[10px] tracking-[0.18em] uppercase text-white/25 mb-1"
          style={{ fontFamily }}>
          {cornerLabel}
        </p>
        <p
          className="text-sm text-white/60"
          style={{ fontFamily }}>
          {cornerValue}
        </p>
      </div>
    </div>
  );
}
