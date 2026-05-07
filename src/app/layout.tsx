import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Theka",
  description: "Acervo virtual da biblioteca Theka.",
};

type Props = Readonly<{ children: React.ReactNode }>;

export default function RootLayout({ children }: Props) {
  return (
    <html lang='pt-br'>
      <body>{children}</body>
    </html>
  );
}
