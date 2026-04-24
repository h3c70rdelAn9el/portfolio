interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  accentColor?: string;
  /** Enlarge for sections that need more presence (e.g. music about). */
  size?: 'default' | 'lg';
}

export function SectionHeader({
  title,
  subtitle,
  accentColor = '#4f6fff',
  size = 'default',
}: SectionHeaderProps) {
  const subtitleSize = size === 'lg' ? 'text-sm' : 'text-xs';
  const titleSize = size === 'lg' ? 'text-4xl md:text-5xl' : 'text-3xl md:text-4xl';

  return (
    <div className="mb-12">
      {subtitle && (
        <p
          className={`${subtitleSize} tracking-[0.2em] uppercase mb-3`}
          style={{ color: accentColor }}>
          {subtitle}
        </p>
      )}
      <h2 className={`${titleSize} font-bold text-white`}>{title}</h2>
    </div>
  );
}
