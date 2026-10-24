import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://pocketscore.github.io'),
  title: "PocketScore | Smart Scorekeeping",
  description: "Modern, expressive, and user-friendly Material 3 scorekeeping app for Android. Track scores, view insights, and celebrate victories.",
  keywords: ["scorekeeping", "android", "material 3", "pocketscore", "gaming", "board games"],
  authors: [{ name: "mwarrc", url: "https://github.com/mwarrc" }],
  openGraph: {
    title: "PocketScore | Modern Scorekeeping",
    description: "The most expressive scorekeeping app for Android.",
    url: "https://pocketscore.github.io",
    siteName: "PocketScore",
    images: [
      {
        url: "/logo.svg", // Using the SVG logo as a fallback
        width: 800,
        height: 800,
        alt: "PocketScore Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PocketScore | Modern Scorekeeping",
    description: "The most expressive scorekeeping app for Android.",
    creator: "@mwarrc",
    images: ["/logo.svg"],
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${outfit.variable} page-transition`}>
        {children}
      </body>
    </html>
  );
}
