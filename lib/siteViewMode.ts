export const SITE_VIEW_MODE_KEY = 'hda-site-view-mode' as const;

export type SiteViewMode = 'dev' | 'music';

export function parseSiteViewMode(raw: string | undefined | null): SiteViewMode {
  if (raw === 'music' || raw === 'dev') return raw;
  return 'dev';
}
