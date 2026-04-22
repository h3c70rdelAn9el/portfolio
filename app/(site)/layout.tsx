import { SiteModeProvider } from '../../components/site/SiteModeContext';
import { SiteLayoutClient } from '../../components/site/SiteLayoutClient';

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <SiteModeProvider>
      <SiteLayoutClient>{children}</SiteLayoutClient>
    </SiteModeProvider>
  );
}
