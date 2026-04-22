import { ModeSubpageShell } from '../../components/site/ModeSubpageShell';

export default function DevLayout({ children }: { children: React.ReactNode }) {
  return <ModeSubpageShell mode="dev">{children}</ModeSubpageShell>;
}
