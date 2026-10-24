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
  authors: [{ name: "PocketScore", url: "https://github.com/pocketscore" }],
  alternates: {
    canonical: "https://pocketscore.github.io/",
  },
  verification: {
    google: "QvMozSBFVX6Nmvq-kK_ujLQWNaJMp6jiBEN2ovdECBY",
  },
  openGraph: {
    title: "PocketScore | Modern Scorekeeping",
    description: "The most expressive scorekeeping app for Android.",
    url: "https://pocketscore.github.io",
    siteName: "PocketScore",
    images: [
      {
        url: "/logo.svg",
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
    creator: "@pocketscore",
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "PocketScore",
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "Android",
    description: "Modern, expressive, and user-friendly Material 3 scorekeeping app for Android.",
    url: "https://pocketscore.github.io",
    author: { "@type": "Organization", name: "PocketScore", url: "https://github.com/pocketscore" },
  };

  return (
    <html lang="en">
      <body className={`${inter.variable} ${outfit.variable} page-transition`}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {children}
      </body>
    </html>
  );
}
