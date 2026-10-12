# Namefolio

One-page minimalist site for **namefolio.co.uk**: the wordmark, one line about the portfolio, and the list of domains. Each domain links to an email enquiry.

Built with React, Vite, TypeScript and Tailwind CSS. The font (Figtree) is self-hosted through Fontsource, so the site makes no requests to Google.

## 1. Install

Requires Node.js 20.19+ or 22.12+.

```bash
npm install
```

## 2. Run locally

```bash
npm run dev
```

Then open the URL it prints (normally http://localhost:5173).

## 3. Build for production

```bash
npm run build     # type-checks, then writes static files to dist/
npm run preview   # serves dist/ locally to check the production build
npm run lint      # optional: ESLint
```

## 4. Change the text

The page lives in **`src/components/Home.tsx`**: the wordmark, the one-line description and the domain list. The domains themselves are the `DOMAINS` list in **`src/config/site.ts`**; add, remove or reorder them there. Colours are the `--color-*` tokens in `src/index.css`.

## 5. Change the email address

Edit **`src/config/site.ts`** and change `email`. Every email link on the page uses it. Also update the email in the `<noscript>` fallback in `index.html`.

## 6. Deploy

`npm run build` produces a fully static site in `dist/`, which any static host can serve.

| Host | Build command | Output directory |
| --- | --- | --- |
| Vercel | `npm run build` | `dist` |
| Netlify | `npm run build` | `dist` |
| Cloudflare Pages | `npm run build` | `dist` |

**Cloudflare Pages:** in *Settings → Builds & deployments*, set the framework preset to **Vite** (or leave it as None) with build command **`npm run build`**. The output directory (`dist`) is already set in `wrangler.toml`, and `.node-version` pins Node 22. Vite 8 won't build on Node 18. If the build command is left empty, Cloudflare serves the unbuilt source and the page shows up blank white.

1. Push this repository to GitHub.
2. Import it into your host and use the settings above. Vercel and Netlify detect Vite on their own.
3. Add `namefolio.co.uk` (and `www.namefolio.co.uk`) as custom domains, then update DNS as your host tells you.

The canonical URL, Open Graph tags and sitemap all assume `https://namefolio.co.uk/`. If the site goes live somewhere else, update `index.html`, `public/robots.txt` and `public/sitemap.xml`.

## Project structure

```
src/
  config/site.ts        name, wordmark, email, year
  components/Home.tsx   the whole page: labels, text and chips
  components/           Chip, QuestionLabel, Footer
  index.css             design tokens (colours, font), chip styles, motion
public/                 favicon, icons, Open Graph image, robots.txt, sitemap
```

Colours and fonts are defined once, in the `@theme` block at the top of `src/index.css`.

The site is light mode only.
