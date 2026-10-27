# PocketScore Website

The official website for **PocketScore** - a modern, expressive Material 3 scorekeeping app for Android.

🌐 **Live Site**: [pocketscore.github.io](https://pocketscore.github.io)

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org) with App Router
- **Language**: TypeScript
- **Styling**: Vanilla CSS with Material 3 Design System
- **Fonts**: Inter & Outfit (Google Fonts)
- **Deployment**: GitHub Pages
- **Data Source**: GitHub API (releases, screenshots, changelog)

## Getting Started

### Development

First, install dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

### Building

To create a production build:

```bash
npm run build
```

The static site will be generated in the `out/` directory.

### Deployment

Deploy to GitHub Pages:

```bash
npm run deploy
```

This will build the site and automatically deploy to the `gh-pages` branch.

For detailed deployment instructions, see the [deployment workflow](.agent/workflows/deploy.md).

## Project Structure

```
pocketscore_web/
├── app/                    # Next.js App Router pages
│   ├── changelog/         # Changelog page
│   ├── screenshots/       # Screenshots gallery
│   ├── layout.tsx         # Root layout with metadata
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── Button/           # Custom button component
│   ├── Card/             # Card component
│   ├── Hero/             # Hero section
│   ├── Navbar/           # Navigation bar
│   ├── Projects/         # Projects showcase
│   └── ReleaseList/      # Release notes list
├── lib/                   # Utility functions
│   └── github.ts         # GitHub API integration
├── public/               # Static assets
├── styles/               # Global styles
│   └── theme.css         # Material 3 design tokens
└── next.config.ts        # Next.js configuration

```

## Features

- 🎨 **Material 3 Expressive Design** - Modern, vibrant UI
- 📱 **Fully Responsive** - Mobile-first design
- 🚀 **Static Site Generation** - Fast loading times
- 🔄 **Auto-updating** - Pulls latest releases from GitHub
- 🖼️ **Dynamic Screenshots** - Fetches from repository
- 📝 **Changelog Integration** - Displays release notes
- 🎭 **Smooth Animations** - Page transitions and micro-interactions
- 🔍 **SEO Optimized** - OpenGraph and Twitter cards

## Configuration

The site is deployed as a GitHub Pages **organization site** at the domain root:

- **Site URL**: `https://pocketscore.github.io`
- **Output**: Static export (`output: 'export'`)
- **Publish branch**: `gh-pages` (deployed with `npm run deploy`)

The canonical origin lives in `lib/seo.ts` (`SITE_URL`). Update it there (and in
`next.config.ts`, if a `basePath` is ever needed) if the site moves to a custom
domain.

### SEO

- Per-page titles, descriptions, and **canonical URLs** are generated with
  `pageMetadata()` from `lib/seo.ts`. Always add metadata to new pages.
- `app/sitemap.ts` generates `/sitemap.xml`; `app/robots.ts` generates
  `/robots.txt`.
- After deploying, submit `https://pocketscore.github.io/sitemap.xml` in
  [Google Search Console](https://search.google.com/search-console) under the
  `https://pocketscore.github.io/` URL-prefix property.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Material 3 Design](https://m3.material.io/)
- [GitHub Pages Documentation](https://docs.github.com/pages)

## License

© 2026 PocketScore Project by [mwarrc](https://github.com/mwarrc)

