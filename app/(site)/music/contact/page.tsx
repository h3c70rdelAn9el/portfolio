import { PageTransition } from '../../../../components/PageTransition';
import { ContactSection } from '@/components/dev/ContactSection';
import { content } from '../../../../types/content';

export default function MusicContactPage() {
  return (
    <PageTransition transitionKey="music-contact">
      <ContactSection accent={content.music.accent} />
    </PageTransition>
  );
}
