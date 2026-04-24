import { SectionHeader } from '../SectionHeader';
import { ContactForm } from './ContactForm';

const DEFAULT_ACCENT = '#4f6fff';

export function ContactSection({ accent = DEFAULT_ACCENT }: { accent?: string }) {
  return (
    <section
      id="contact"
      className="relative z-10 py-10">
      <SectionHeader
        title="Contact"
        subtitle="Get in touch"
        accentColor={accent}
      />
      <ContactForm accent={accent} />
    </section>
  );
}
