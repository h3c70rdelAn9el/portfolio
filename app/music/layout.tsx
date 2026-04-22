import { ModeSubpageShell } from '../../components/site/ModeSubpageShell';

export default function MusicLayout({ children }: { children: React.ReactNode }) {
  return <ModeSubpageShell mode="music">{children}</ModeSubpageShell>;
}
