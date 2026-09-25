import { useReveal } from '../hooks/useReveal'
import { SectionLabel } from './SectionLabel'

const POINTS = ['Finding the right buyers', 'Starting real conversations', 'Keeping it low-key']

export function Outbound() {
  const headRef = useReveal<HTMLDivElement>()
  const pointsRef = useReveal<HTMLDivElement>()

  return (
    <section id="outbound" aria-labelledby="outbound-title" className="wrap-content pt-32 md:pt-40 lg:pt-52">
      <div ref={headRef} className="reveal grid grid-cols-12 gap-x-6">
        <div className="col-span-12 mb-10 md:mb-14 lg:col-span-3 lg:mb-0 lg:pt-4">
          <SectionLabel index="02">Selling</SectionLabel>
        </div>
        <div className="col-span-12 lg:col-span-9">
          <h2
            id="outbound-title"
            className="display max-w-[13ch] text-[clamp(2.25rem,9vw,3.25rem)] md:text-[clamp(3rem,5.4vw,5.25rem)]"
          >
            Got domains to sell? We can help.
          </h2>
          <p className="mt-8 max-w-[34rem] text-[1.0625rem] leading-[1.6] text-muted md:mt-10 md:text-lg">
            If you own a portfolio of domains, we’ll reach out to the businesses most likely to want them, get the
            conversations going and help you get to a sale.
          </p>
        </div>
      </div>

      <div ref={pointsRef} className="reveal mt-16 grid grid-cols-12 gap-x-6 md:mt-20">
        <ol className="col-span-12 grid gap-x-6 sm:grid-cols-3 lg:col-span-9 lg:col-start-4">
          {POINTS.map((point, i) => (
            <li key={point} className="flex items-baseline gap-5 border-t border-rule py-6 sm:block sm:pt-6 sm:pb-0">
              <span className="label w-8 shrink-0 tabular-nums text-muted sm:block">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="display text-xl tracking-[-0.02em] text-ink sm:mt-8 lg:mt-10 lg:text-2xl">{point}</h3>
            </li>
          ))}
        </ol>

        <div className="col-span-12 mt-12 border-t border-rule pt-6 sm:border-0 sm:pt-0 md:mt-16 lg:col-span-9 lg:col-start-4">
          <a href="#contact" className="group label inline-flex items-center gap-3 pb-1.5 text-ink link-line-rest">
            Tell us about your domains
            <span aria-hidden="true" className="transition-transform duration-500 ease-editorial group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}
