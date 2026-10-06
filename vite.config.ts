import { defineConfig, type Plugin } from 'vite'
import tailwindcss from '@tailwindcss/vite'

/**
 * Inlines the built stylesheet into each page as a <style> tag. The CSS is
 * small, so this saves a render-blocking request on first load. Also preloads
 * the Latin Figtree font so it usually arrives before the first paint.
 */
function inlineCss(): Plugin {
  return {
    name: 'inline-css',
    apply: 'build',
    enforce: 'post',
    generateBundle(_, bundle) {
      const css = Object.values(bundle).filter((file) => file.type === 'asset' && file.fileName.endsWith('.css'))
      const font = Object.keys(bundle).find((name) => /figtree-latin-wght-normal-.*\.woff2$/.test(name))
      const preload = font ? `<link rel="preload" href="/${font}" as="font" type="font/woff2" crossorigin>` : ''
      for (const page of Object.values(bundle)) {
        if (page.type !== 'asset' || !page.fileName.endsWith('.html')) continue
        let html = String(page.source)
        for (const sheet of css) {
          if (sheet.type !== 'asset') continue
          html = html.replace(
            new RegExp(`<link rel="stylesheet"[^>]*href="/${sheet.fileName}"[^>]*>`),
            () => `${preload}<style>${sheet.source}</style>`,
          )
        }
        page.source = html
      }
      for (const sheet of css) delete bundle[sheet.fileName]
    },
  }
}

export default defineConfig({
  plugins: [tailwindcss(), inlineCss()],
  build: {
    rollupOptions: {
      input: { main: 'index.html', notFound: '404.html' },
    },
  },
})
