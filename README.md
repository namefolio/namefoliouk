# Namefolio

One-page site for **namefolio.co.uk**: a private portfolio of premium domain names, plus a targeted outbound service for domain owners.

Built with React, Vite, TypeScript and Tailwind CSS. Fonts (Instrument Serif and Inter) are self-hosted through Fontsource, so the site makes no requests to Google.

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

## 4. Change the domain portfolio

Edit **`src/data/domains.ts`**:

```ts
export const domains: Domain[] = [
  { name: 'example.co.uk', status: 'available' },
  { name: 'anotherdomain.com', status: 'available' },
  // …
]
```

- The order in the list is the order on the page. Numbers (01, 02, …) are added automatically.
- `status` can be `'available'`, `'under-offer'` or `'sold'`. The labels shown on the page are in `STATUS_LABEL` in the same file.

## 5. Change the email address

Edit **`src/config/site.ts`** and change `email`. The Contact section, the footer and the enquiry fallback all use it.

Also update the email in the `<noscript>` fallback in `index.html`.

### Connecting the enquiry form

Clicking a domain opens an enquiry drawer. By default, **Send enquiry** opens the visitor's email client with a message to `SITE.email` already filled in, so it works without a backend.

To send enquiries through a form service instead, set `ENQUIRY_ENDPOINT` in **`src/lib/enquiry.ts`**:

- **Formspree:** create a form, then set `ENQUIRY_ENDPOINT = 'https://formspree.io/f/your-id'`.
- **Resend (or any email API):** create a small serverless function (for example `/api/enquiry` on Vercel, Netlify or Cloudflare) that calls the API server-side, and point `ENQUIRY_ENDPOINT` at it. Never put API keys in front-end code.

The form sends a JSON `POST` with `{ domain, name, email, message }`.

## 6. Deploy

`npm run build` produces a fully static site in `dist/`, which any static host can serve.

| Host | Build command | Output directory |
| --- | --- | --- |
| Vercel | `npm run build` | `dist` |
| Netlify | `npm run build` | `dist` |
| Cloudflare Pages | `npm run build` | `dist` |

1. Push this repository to GitHub.
2. Import it into your host and use the settings above. Vercel and Netlify detect Vite on their own.
3. Add `namefolio.co.uk` (and `www.namefolio.co.uk`) as custom domains, then update DNS as your host tells you.

The canonical URL, Open Graph tags and sitemap all assume `https://namefolio.co.uk/`. If the site goes live somewhere else, update `index.html`, `public/robots.txt` and `public/sitemap.xml`.

## Project structure

```
src/
  config/site.ts        name, email, location, year
  data/domains.ts       the portfolio
  lib/enquiry.ts        enquiry submission (connect Formspree / Resend here)
  hooks/useReveal.ts    subtle scroll reveal
  components/           Navbar, Hero, Portfolio, DomainRow, EnquiryModal,
                        Outbound, Contact, Footer, SectionLabel
  index.css             design tokens (colours, fonts), motion, drawer styles
public/                 favicon, icons, Open Graph image, robots.txt, sitemap
```

Colours and fonts are defined once, in the `@theme` block at the top of `src/index.css`.
