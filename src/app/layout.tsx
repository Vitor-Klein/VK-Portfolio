import type { Metadata } from "next";
import { Titillium_Web } from "next/font/google";
import "./globals.css";

const TitilliumWebBold = Titillium_Web({
  weight: '700',
  variable: '--font-titillium_web_bold',
  subsets: ['latin']
})

const TitilliumWeb = Titillium_Web({
  weight: '400',
  variable: '--font-titillium_web',
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
    <html lang="en" className={`${TitilliumWebBold.variable} ${TitilliumWeb.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
