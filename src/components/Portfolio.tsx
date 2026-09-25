import { domains, type Domain } from '../data/domains'
import { useReveal } from '../hooks/useReveal'
import { DomainRow } from './DomainRow'
import { SectionLabel } from './SectionLabel'

interface PortfolioProps {
  onSelect: (domain: Domain) => void
}

export function Portfolio({ onSelect }: PortfolioProps) {
  const headRef = useReveal<HTMLDivElement>()
  const listRef = useReveal<HTMLUListElement>()

  return (
    <section id="portfolio" aria-labelledby="portfolio-title" className="wrap-content pt-28 md:pt-36 lg:pt-44">
      <div ref={headRef} className="reveal grid grid-cols-12 gap-x-6">
        <div className="col-span-12 mb-10 md:mb-14 lg:col-span-3 lg:mb-0 lg:pt-4">
          <SectionLabel index="01">Domains</SectionLabel>
        </div>
        <div className="col-span-12 lg:col-span-9">
          <h2 id="portfolio-title" className="display text-[clamp(2.25rem,9vw,3rem)] md:text-[clamp(3rem,5vw,4.5rem)]">
            Pick a name
          </h2>
          <p className="mt-6 max-w-[28rem] text-[1.0625rem] leading-[1.6] text-muted md:mt-8">
            Names we think deserve a great business behind them. Tap one to ask about it.
          </p>
        </div>
      </div>

      <ul ref={listRef} className="reveal mt-16 border-t border-ink md:mt-20 lg:mt-24" aria-label="Domain portfolio">
        {domains.map((domain, i) => (
          <DomainRow key={domain.name} domain={domain} index={i} onSelect={onSelect} />
        ))}
      </ul>
    </section>
  )
}
