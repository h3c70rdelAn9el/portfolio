import { SiteModeProvider } from '../../components/site/SiteModeContext';
import { DevViewProvider } from '../../components/site/DevViewContext';
import { SiteLayoutClient } from '../../components/site/SiteLayoutClient';

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <SiteModeProvider>
      <DevViewProvider>
        <SiteLayoutClient>{children}</SiteLayoutClient>
      </DevViewProvider>
    </SiteModeProvider>
  );
}
