import type { Metadata } from "next";
import {
  Caveat,
  Space_Mono,
  Instrument_Serif,
  Instrument_Sans,
} from "next/font/google";
import "./globals.css";

// Handwritten accents (logo, little margin notes)
const hand = Caveat({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-hand",
  display: "swap",
});

// Typewriter-style labels + footer
const mono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono",
  display: "swap",
});

// Editorial serif italic for the welcome line
const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

// Grotesque for the big intro
const sans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const siteUrl = "https://rutu.in";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Rutu Lathiya — Full-Stack Engineer",
  description:
    "Rutu Lathiya — a full-stack engineer building for the web and the cloud. Portfolio coming soon.",
  keywords: [
    "Rutu Lathiya",
    "Full-Stack Engineer",
    "Web Developer",
    "Software Engineer",
    "Portfolio",
    "rutu.in",
  ],
  authors: [{ name: "Rutu Lathiya" }],
  openGraph: {
    title: "Rutu Lathiya — Full-Stack Engineer",
    description:
      "A full-stack engineer building for the web and the cloud. Portfolio coming soon.",
    url: siteUrl,
    siteName: "Rutu Lathiya",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rutu Lathiya — Full-Stack Engineer",
    description: "A full-stack engineer's corner of the web. Coming soon.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${hand.variable} ${mono.variable} ${serif.variable} ${sans.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
