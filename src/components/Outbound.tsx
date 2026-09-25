import { useReveal } from '../hooks/useReveal'
import { SectionLabel } from './SectionLabel'

const POINTS = ['Targeted outreach', 'Qualified conversations', 'Discreet execution']

export function Outbound() {
  const headRef = useReveal<HTMLDivElement>()
  const pointsRef = useReveal<HTMLDivElement>()

  return (
    <section id="outbound" aria-labelledby="outbound-title" className="wrap-content pt-40 md:pt-52 lg:pt-64">
      <div ref={headRef} className="reveal grid grid-cols-12 gap-x-6">
        <div className="col-span-12 mb-10 md:mb-14 lg:col-span-3 lg:mb-0 lg:pt-4">
          <SectionLabel index="02">Outbound</SectionLabel>
        </div>
        <div className="col-span-12 lg:col-span-9">
          <h2
            id="outbound-title"
            className="display max-w-[11ch] text-[clamp(2.75rem,11vw,4rem)] md:text-[clamp(4rem,7.4vw,7rem)]"
          >
            We help domain owners sell.
          </h2>
          <p className="mt-10 max-w-[34rem] text-[1.0625rem] leading-[1.65] text-muted md:mt-14 md:text-lg">
            For selected portfolios, we run targeted outbound campaigns to identify potential buyers, initiate
            conversations and create opportunities for sale.
          </p>
        </div>
      </div>

      <div ref={pointsRef} className="reveal mt-20 grid grid-cols-12 gap-x-6 md:mt-28">
        <ol className="col-span-12 grid gap-x-6 sm:grid-cols-3 lg:col-span-9 lg:col-start-4">
          {POINTS.map((point, i) => (
            <li key={point} className="flex items-baseline gap-5 border-t border-rule py-6 sm:block sm:pt-6 sm:pb-0">
              <span className="label w-8 shrink-0 tabular-nums text-muted sm:block">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="label text-ink sm:mt-10 lg:mt-14">{point}</h3>
            </li>
          ))}
        </ol>

        <div className="col-span-12 mt-16 border-t border-rule pt-6 sm:border-0 sm:pt-0 md:mt-24 lg:col-span-9 lg:col-start-4">
          <a href="#contact" className="group label inline-flex items-center gap-3 pb-1.5 text-ink link-line-rest">
            Discuss a portfolio
            <span aria-hidden="true" className="transition-transform duration-500 ease-editorial group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}
