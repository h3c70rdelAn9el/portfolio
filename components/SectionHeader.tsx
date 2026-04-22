interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  accentColor?: string;
}

export function SectionHeader({ title, subtitle, accentColor = '#4f6fff' }: SectionHeaderProps) {
  return (
    <div className="mb-12">
      {subtitle && (
        <p
          className="text-xs tracking-[0.2em] uppercase mb-3"
          style={{ color: accentColor }}>
          {subtitle}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-white">{title}</h2>
    </div>
  );
}
