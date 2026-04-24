import { SectionHeader } from '../SectionHeader';
import { ContactForm } from './ContactForm';

const ACCENT = '#4f6fff';

export function ContactSection() {
  return (
    <section
      id="contact"
      className="relative z-10 py-10">
      <SectionHeader
        title="Contact"
        subtitle="Get in touch"
        accentColor={ACCENT}
      />
      <ContactForm />
    </section>
  );
}
