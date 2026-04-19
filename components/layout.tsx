import type { Metadata } from "next";
import { Syne, DM_Mono } from "next/font/google";
import { ModeProvider } from "@/context/ModeContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  variable: "--font-syne",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-mono",
});

export const metadata: Metadata = {
  title: "Hector del Angel",
  description: "Full-stack developer & guitarist based in Los Angeles.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${syne.variable} ${dmMono.variable}`}>
      <body className="flex flex-col min-h-screen bg-[#07090f] font-[family-name:var(--font-dm-mono)]">
        <ModeProvider>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </ModeProvider>
      </body>
    </html>
  );
}
