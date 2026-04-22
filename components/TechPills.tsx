interface TechPillsProps {
  tech: string[];
  accentColor?: string;
}

export function TechPills({ tech, accentColor = '#4f6fff' }: TechPillsProps) {
  return (
    <div className="flex flex-wrap gap-2 mb-6">
      {tech.map((t) => (
        <span
          key={t}
          className="rounded-full px-3 py-1 text-[11px] tracking-wider border"
          style={{
            background: accentColor + '12',
            borderColor: accentColor + '40',
            color: accentColor,
          }}>
          {t}
        </span>
      ))}
    </div>
  );
}
