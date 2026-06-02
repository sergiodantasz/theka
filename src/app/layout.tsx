import type { Metadata } from "next";
import { DM_Sans, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Theka",
  description: "Acervo virtual da biblioteca Theka.",
};

type Props = Readonly<{ children: React.ReactNode }>;

export default function Layout({ children }: Props) {
  return (
    <html lang='pt-br' className={`${dmSans.variable} ${inter.variable}`}>
      <body>
        <Navbar />
        <div className='min-h-dvh'>
          <div className='xs:px-8 px-4 pt-29 pb-8'>{children}</div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
