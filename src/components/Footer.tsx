import { SITE } from '../config/site'

export function Footer() {
  return (
    <footer className="mt-20 flex flex-wrap justify-between gap-x-6 gap-y-2 text-sm text-muted">
      <a href={`mailto:${SITE.email}`} className="underline-offset-4 hover:text-ink hover:underline">
        {SITE.email}
      </a>
      <p>© {SITE.year} {SITE.name}</p>
    </footer>
  )
}
