import { SectionHeader } from '../SectionHeader';
import { ContactForm } from './ContactForm';

const ACCENT = '#4f6fff';

export function ContactSection() {
  return (
    <section id="contact" className="relative z-10 px-8 md:px-16 py-24">
      <SectionHeader title="Contact" subtitle="Get in touch" accentColor={ACCENT} />
      <ContactForm />
    </section>
  );
}
