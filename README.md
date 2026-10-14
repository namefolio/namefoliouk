# Namefolio

One-page minimalist site for **namefolio.co.uk**: the wordmark, one line about the portfolio, and the list of domains. Each domain links to an email enquiry.

Plain HTML styled with Tailwind CSS and built with Vite. The page ships no JavaScript: the build inlines the CSS into the HTML, so a visit is one HTML file plus the font. The font (Figtree) is self-hosted through Fontsource, so the site makes no requests to Google.

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
npm run build     # writes static files to dist/
npm run preview   # serves dist/ locally to check the production build
```

## 4. Change the text, domains or email address

Everything on the page lives in **`index.html`**: the wordmark, the one-line description, and the domain list. Each domain is an `<li>` in the list whose link opens that domain's own website in a new tab; copy one to add a domain (update both the link and the text) or delete one to remove it.

The email address is in the footer. It is also in `public/llms.txt`, which also lists the domains.

Colours are the `--color-*` tokens in `src/index.css`. `404.html` is the page shown for any address that doesn't exist.

## 5. Deploy

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
index.html              the whole page: wordmark, description, domain list
404.html                page-not-found page
src/index.css           design tokens (colours, font), motion
vite.config.ts          build settings, including the step that inlines the CSS
public/                 favicon, icons, Open Graph image, robots.txt, sitemap,
                        llms.txt, _headers (long cache for built assets)
```

Colours and fonts are defined once, in the `@theme` block at the top of `src/index.css`.

The site is light mode only.
