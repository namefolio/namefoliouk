import type { CSSProperties } from 'react'

const LINKS = [
  { href: '#portfolio', label: 'Domains' },
  { href: '#outbound', label: 'Sell your domains' },
  { href: '#contact', label: 'Contact' },
]

export function Navbar() {
  return (
    <header className="wrap-content enter-fade" style={{ '--delay': '100ms' } as CSSProperties}>
      <nav
        aria-label="Primary"
        className="flex flex-col gap-5 border-b border-rule pt-7 pb-5 sm:flex-row sm:items-baseline sm:justify-between md:pt-10 md:pb-6"
      >
        <a href="#top" className="display text-xl tracking-[-0.02em] text-ink" aria-label="Namefolio — back to top">
          Namefolio
        </a>
        <ul className="flex flex-1 items-baseline justify-between sm:justify-end sm:gap-8 md:gap-12">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="label link-line pb-1 text-muted transition-colors duration-300 hover:text-ink"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
