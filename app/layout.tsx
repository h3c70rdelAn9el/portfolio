import type { Metadata } from 'next';
import { Syne, DM_Mono } from 'next/font/google';
import './globals.css';
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '700', '800'],
  variable: '--font-syne',
});

const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-dm-mono',
});

export const metadata: Metadata = {
  title: 'Hector del Angel',
  description: 'Full-stack developer & guitarist based in Los Angeles.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${dmMono.variable}`}>
      <body className="flex flex-col min-h-screen bg-[#07090f] font-[family-name:var(--font-dm-mono)]">
        {/* <Navbar /> */}
        <main className="flex-grow">{children}</main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
