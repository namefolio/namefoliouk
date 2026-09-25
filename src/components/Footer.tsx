import { SITE } from '../config/site'

export function Footer() {
  return (
    <footer className="wrap-content">
      <div className="flex flex-col gap-2 border-t border-rule pt-6 pb-8 text-muted sm:flex-row sm:items-baseline sm:justify-between md:pb-10">
        <p className="label">
          © {SITE.year} {SITE.name}
        </p>
        <p className="label">{SITE.displayUrl}</p>
      </div>
    </footer>
  )
}
