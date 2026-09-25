import type { CSSProperties } from 'react'
import { useTheme } from '../hooks/useTheme'
import { ThemeToggle } from './ThemeToggle'

const LINKS = [
  { href: '#portfolio', label: 'Domains' },
  { href: '#outbound', label: 'Sell your domains' },
  { href: '#contact', label: 'Contact' },
]

export function Navbar() {
  const { theme, setTheme } = useTheme()

  return (
    <header className="wrap-content enter-fade" style={{ '--delay': '100ms' } as CSSProperties}>
      <nav
        aria-label="Primary"
        className="flex flex-col gap-5 border-b border-rule pt-7 pb-5 sm:flex-row sm:items-baseline sm:justify-between md:pt-10 md:pb-6"
      >
        <div className="flex items-center justify-between">
          <a href="#top" className="display text-xl tracking-[-0.03em] text-ink" aria-label="Namefolio — back to top">
            Namefolio
          </a>
          <ThemeToggle theme={theme} onChange={setTheme} className="flex sm:hidden" />
        </div>
        <div className="flex items-baseline gap-8 md:gap-12">
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
          <span aria-hidden="true" className="hidden h-3 w-px self-center bg-rule sm:block" />
          <ThemeToggle theme={theme} onChange={setTheme} className="hidden sm:flex" />
        </div>
      </nav>
    </header>
  )
}
