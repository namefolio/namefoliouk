import type { CSSProperties } from 'react'

const delay = (ms: number) => ({ '--delay': `${ms}ms` }) as CSSProperties

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="wrap-content flex min-h-[74svh] flex-col md:min-h-[76vh]">
      <div className="grid flex-1 grid-cols-12 content-end gap-x-6 pt-20 pb-14 md:pb-20 lg:pb-24">
        <p className="label enter col-span-12 mb-6 text-muted md:mb-10 lg:col-span-3 lg:mb-0 lg:pt-4" style={delay(200)}>
          Premium domain names
        </p>

        <div className="col-span-12 lg:col-span-9">
          <h1
            id="hero-title"
            className="display text-[clamp(2.375rem,10vw,3.75rem)] [text-wrap:balance] md:text-[clamp(3rem,4.8vw,5rem)]"
          >
            <span className="enter block" style={delay(300)}>
              Great domain names,
            </span>
            <span className="enter block" style={delay(420)}>
              ready for your next idea<span className="text-lime">.</span>
            </span>
          </h1>

          <p
            className="enter mt-8 max-w-[31rem] text-[1.0625rem] leading-[1.6] text-muted md:mt-12 md:text-lg"
            style={delay(600)}
          >
            A small collection of short, memorable domains for startups and growing businesses. Find one you like and
            say hello.
          </p>
        </div>
      </div>

      <div className="enter-fade flex items-center border-t border-rule py-5" style={delay(900)}>
        <a href="#portfolio" className="group flex items-center gap-3 text-muted transition-colors hover:text-ink">
          <span className="label">See the domains</span>
          <svg
            aria-hidden="true"
            className="scroll-cue"
            width="9"
            height="18"
            viewBox="0 0 9 18"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.25"
          >
            <path d="M4.5 0v17M.5 13l4 4 4-4" />
          </svg>
        </a>
      </div>
    </section>
  )
}
