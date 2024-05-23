import type { Metadata } from "next";
import { M_PLUS_Rounded_1c, Shrikhand } from "next/font/google";
import "./globals.css";

const shrikhand = Shrikhand({
  weight: '400',
  variable: '--font-shrikhand',
  subsets: ['latin']
})

const mPlus = M_PLUS_Rounded_1c({
  weight: '800',
  variable: '--font-mplus-rounded',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: "VK Portfolio",
  description: "Portfolio Pessoal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${shrikhand.variable} ${mPlus.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
