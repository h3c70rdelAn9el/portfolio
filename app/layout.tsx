import type { Metadata } from 'next';
import { Space_Grotesk, Cormorant_Infant } from 'next/font/google';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-space',
});

const cormorant = Cormorant_Infant({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
});

export const metadata: Metadata = {
  title: 'Hector del Angel',
  description: 'Full-stack developer & guitarist based in Los Angeles.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${cormorant.variable}`}>
      <body
        className="flex flex-col min-h-screen bg-[#07090f]"
        style={{ fontFamily: 'var(--font-space), sans-serif' }}>
        <main className="flex-grow">{children}</main>
      </body>
    </html>
  );
}
