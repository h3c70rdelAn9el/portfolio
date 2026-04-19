import React from 'react';

export interface SocialLink {
  label: string;
  href: string;
  icon: React.ReactNode;
}

interface SocialLinksProps {
  socials: SocialLink[];
  accent: string;
}

export function SocialLinks({ socials, accent }: SocialLinksProps) {
  return (
    <div className="flex items-center mx-auto gap-3 px-4">
      {socials.map((s) => (
        <a
          key={s.label}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={s.label}
          className="flex items-center justify-center w-10 h-10 rounded-xl border border-white/10 bg-white/5 text-white/40 backdrop-blur-md transition-all duration-300"
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLElement;
            el.style.color = accent;
            el.style.borderColor = accent + '55';
            el.style.background = accent + '12';
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLElement;
            el.style.color = 'rgba(255,255,255,0.4)';
            el.style.borderColor = 'rgba(255,255,255,0.1)';
            el.style.background = 'rgba(255,255,255,0.05)';
          }}>
          {s.icon}
        </a>
      ))}
    </div>
  );
}
