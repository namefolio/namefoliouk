import type { CSSProperties } from 'react'
import { DOMAINS, SITE } from '../config/site'
import { Footer } from './Footer'

const delay = (ms: number) => ({ '--delay': `${ms}ms` }) as CSSProperties

export function Home() {
  return (
    <div className="mx-auto flex min-h-svh w-full max-w-[44rem] flex-col px-6 pt-16 pb-10 md:px-10 md:pt-28 md:pb-14">
      <main className="flex-1">
        <h1 className="enter display m-0 text-[clamp(2.5rem,9vw,4rem)]" style={delay(0)}>
          {SITE.name}.
        </h1>

        <p className="enter mt-6 max-w-[34rem] text-xl leading-[1.5] text-muted md:text-2xl" style={delay(100)}>
          A portfolio of strong keyword, clear commercial intent, easy to remember domains.
        </p>

        <ul className="enter mt-14 border-t border-rule md:mt-20" style={delay(200)}>
          {DOMAINS.map((domain) => (
            <li key={domain} className="border-b border-rule">
              <a
                href={`mailto:${SITE.email}?subject=${encodeURIComponent(domain)}`}
                className="group flex items-baseline justify-between gap-4 py-5 text-lg font-medium md:text-xl"
              >
                <span>{domain}</span>
                <span
                  aria-hidden="true"
                  className="text-muted transition-transform duration-300 group-hover:translate-x-1 group-hover:text-ink"
                >
                  →
                </span>
              </a>
            </li>
          ))}
        </ul>
      </main>

      <Footer />
    </div>
  )
}
