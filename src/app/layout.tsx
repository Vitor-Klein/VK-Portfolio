import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { profile, socials, skills } from "@/data/content";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const siteUrl = "https://vitor-klein.vercel.app";
const title = `${profile.name} — ${profile.role}`;
const description = `${profile.name}, ${profile.role.toLowerCase()} em Node.js, React.js, Flutter e TypeScript. Formando em Ciência da Computação pela UTFPR, atualmente desenvolvendo aplicativos mobile na bfac.com.`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: `%s · ${profile.name}`,
  },
  description,
  keywords: [
    "Vitor Klein",
    "Vitor Klein desenvolvedor",
    "Vitor Klein UTFPR",
    "Mobile Developer",
    "Web Developer",
    "Flutter Developer",
    "React Developer",
    "Node.js",
    "TypeScript",
    "Desenvolvedor full stack Brasil",
  ],
  authors: [{ name: profile.name, url: siteUrl }],
  creator: profile.name,
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: profile.name,
    locale: "pt_BR",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0908",
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.role,
  url: siteUrl,
  image: `${siteUrl}${profile.avatar}`,
  email: `mailto:${socials.email}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Missal",
    addressRegion: "Paraná",
    addressCountry: "BR",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Universidade Tecnológica Federal do Paraná (UTFPR)",
  },
  worksFor: {
    "@type": "Organization",
    name: "bfac.com",
  },
  knowsAbout: skills.flatMap((group) => group.items),
  sameAs: [socials.linkedin, socials.github, socials.figma],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        {children}
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </body>
    </html>
  );
}
