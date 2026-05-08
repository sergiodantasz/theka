import type { Metadata } from "next";
import { DM_Sans, Inter } from "next/font/google";
import "./globals.css";

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

export default function RootLayout({ children }: Props) {
  return (
    <html lang='pt-br' className={`${dmSans.variable} ${inter.variable}`}>
      <body>
        <div className='flex min-h-dvh flex-col justify-between gap-8 sm:gap-16'>
          <div className='mx-auto flex w-full max-w-7xl flex-1 flex-col px-4 pt-16 sm:px-8 sm:pt-32'>
            {children}
          </div>
          <footer>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Aspernatur, deserunt.
          </footer>
        </div>
      </body>
    </html>
  );
}
