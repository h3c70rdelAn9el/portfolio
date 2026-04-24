import { PageTransition } from '../../../components/PageTransition';
import { AboutSection } from '../../../components/music/AboutSection';

export default function MusicPage() {
  return (
    <PageTransition transitionKey="music">
      <AboutSection />
    </PageTransition>
  );
}
