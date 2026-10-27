import type { Metadata } from "next";

/** Canonical origin for the deployed site (GitHub Pages org site). */
export const SITE_URL = "https://pocketscore.github.io";
export const SITE_NAME = "PocketScore";
export const SITE_DESCRIPTION =
  "Modern, expressive, and user-friendly Material 3 scorekeeping app for Android. Track scores, view insights, and celebrate victories.";

type PageMetadataInput = {
  /** Full page title, e.g. "Changelog | PocketScore". */
  title: string;
  description: string;
  /** Route path, e.g. "/changelog". Use "/" for the homepage. */
  path: string;
};

/**
 * Builds complete, per-page metadata.
 *
 * Every page needs its own canonical URL. Without this, Next inherits the
 * root layout's canonical and every page claims to be the homepage, which
 * prevents Google from indexing the subpages.
 */
export function pageMetadata({ title, description, path }: PageMetadataInput): Metadata {
  const url = path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`;

  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: `${SITE_NAME} - ${title}`,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og-image.png"],
    },
  };
}
