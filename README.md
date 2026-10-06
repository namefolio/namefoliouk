# Namefolio

One-page site for **namefolio.co.uk**, presenting a changing collection of domain names and help for owners who want to sell theirs. It doesn't list individual domains: visitors email to ask what's available.

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

Everything on the page lives in **`src/components/Home.tsx`**:

- each block is a small uppercase question label followed by its text;
- `<Chip>` puts a word or phrase on a solid block. It takes `colour` (`ink`, `lime`, `cobalt` or `clay`) and an optional `href` to make it a link;
- the colourful "Got domains to sell?" sentence is the `SELLING` list at the top of the file. Each entry is plain text, or text with a chip colour.

Chip colours are defined in `src/index.css` (`chip-*` utilities and the `--color-*` tokens).

## 5. Change the email address

Edit **`src/config/site.ts`** and change `email`. Every email link on the page uses it. The wordmark text (`Namefolio.co.uk`) is `displayName` in the same file.

Also update the email in the `<noscript>` fallback in `index.html`.

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
  hooks/useTheme.ts     light / dark mode state
  components/Home.tsx   the whole page: labels, text and chips
  components/           Chip, QuestionLabel, Footer, ThemeToggle
  index.css             design tokens (colours, font), chip styles, motion
public/                 favicon, icons, Open Graph image, robots.txt, sitemap
```

Colours and fonts are defined once, in the `@theme` block at the top of `src/index.css`.

## Light and dark mode

The switch in the navigation toggles between light and dark. Until a visitor picks one, the site follows their device setting. After that, their choice is remembered in the browser.

- Dark-mode colours: the `:root[data-theme='dark']` block in `src/index.css`.
- The small script in `index.html` applies the theme before the page is drawn, so it never flashes the wrong colours.
