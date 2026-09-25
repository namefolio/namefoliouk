import type { CSSProperties } from 'react'

const delay = (ms: number) => ({ '--delay': `${ms}ms` }) as CSSProperties

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="wrap-content flex min-h-[82svh] flex-col md:min-h-[86vh]">
      <div className="grid flex-1 grid-cols-12 content-end gap-x-6 pt-24 pb-16 md:pb-24 lg:pb-28">
        <p className="label enter col-span-12 mb-8 text-muted md:mb-12 lg:col-span-3 lg:mb-0 lg:pt-5" style={delay(200)}>
          Digital Assets
        </p>

        <div className="col-span-12 lg:col-span-9">
          <h1
            id="hero-title"
            className="display text-[clamp(3.5rem,14vw,5.25rem)] md:text-[clamp(4.5rem,9vw,9.25rem)]"
          >
            <span className="enter block" style={delay(300)}>
              Digital assets,
            </span>
            <span className="enter block italic" style={delay(420)}>
              selectively acquired.
            </span>
          </h1>

          <p
            className="enter mt-10 max-w-[30rem] text-[1.0625rem] leading-[1.65] text-muted md:mt-14 md:text-lg"
            style={delay(600)}
          >
            A private portfolio of premium domain names, with a focus on memorable, commercially relevant digital real
            estate.
          </p>
        </div>
      </div>

      <div className="enter-fade flex items-center border-t border-rule py-5" style={delay(900)}>
        <a href="#portfolio" className="group flex items-center gap-4 text-muted transition-colors hover:text-ink">
          <span className="label">Scroll</span>
          <svg
            aria-hidden="true"
            className="scroll-cue"
            width="9"
            height="22"
            viewBox="0 0 9 22"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          >
            <path d="M4.5 0v21M.5 17l4 4 4-4" />
          </svg>
        </a>
      </div>
    </section>
  )
}
