import { SITE } from '../config/site'

export function Footer() {
  return (
    <footer className="wrap-content">
      <div className="flex flex-col gap-3 border-t border-rule pt-6 pb-8 text-muted sm:flex-row sm:items-baseline sm:justify-between md:pb-10">
        <p className="label">
          © {SITE.year} {SITE.name}
        </p>
        <p className="label flex gap-6">
          <span>{SITE.location}</span>
          <span className="normal-case tracking-[0.08em]">{SITE.displayUrl}</span>
        </p>
      </div>
    </footer>
  )
}
