import { PageTransition } from '../../../../components/PageTransition';
import { ListenSection } from '../../../../components/music/ListenSection';

export default function MusicListenPage() {
  return (
    <PageTransition transitionKey="music-listen">
      <ListenSection />
    </PageTransition>
  );
}
