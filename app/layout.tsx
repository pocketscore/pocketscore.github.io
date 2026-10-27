import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "../lib/seo";
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
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Smart Scorekeeping for Android`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: ["scorekeeping", "android", "material 3", "pocketscore", "gaming", "board games"],
  authors: [{ name: "PocketScore", url: "https://github.com/mwarrc" }],
  creator: "Mwariri Clinton",
  applicationName: SITE_NAME,
  category: "utilities",
  verification: {
    google: "QvMozSBFVX6Nmvq-kK_ujLQWNaJMp6jiBEN2ovdECBY",
  },
  openGraph: {
    title: `${SITE_NAME} | Modern Scorekeeping`,
    description: "The most expressive scorekeeping app for Android.",
    url: SITE_URL,
    siteName: SITE_NAME,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "PocketScore Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | Modern Scorekeeping`,
    description: "The most expressive scorekeeping app for Android.",
    creator: "@pocketscore",
    images: ["/og-image.png"],
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
