import { cookies } from 'next/headers';
import { SiteModeProvider } from '../../components/site/SiteModeContext';
import { DevViewProvider } from '../../components/site/DevViewContext';
import { SiteLayoutClient } from '../../components/site/SiteLayoutClient';
import { SITE_VIEW_MODE_KEY, parseSiteViewMode } from '@/lib/siteViewMode';

export default async function SiteLayout({ children }: { children: React.ReactNode }) {
  const cookieStore = await cookies();
  const raw = cookieStore.get(SITE_VIEW_MODE_KEY)?.value;
  const hasSiteViewCookie = raw === 'music' || raw === 'dev';
  const initialHomeViewMode = parseSiteViewMode(raw);

  return (
    <SiteModeProvider
      initialHomeViewMode={initialHomeViewMode}
      hasSiteViewCookie={hasSiteViewCookie}>
      <DevViewProvider>
        <SiteLayoutClient>{children}</SiteLayoutClient>
      </DevViewProvider>
    </SiteModeProvider>
  );
}
