import { PageTransition } from '../../../../components/PageTransition';
import { LessonsSection } from '../../../../components/music/LessonsSection';

export default function MusicLessonsPage() {
  return (
    <PageTransition transitionKey="music-lessons">
      <LessonsSection />
    </PageTransition>
  );
}
