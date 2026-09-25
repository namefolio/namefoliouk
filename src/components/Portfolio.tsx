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
    <section id="portfolio" aria-labelledby="portfolio-title" className="wrap-content pt-32 md:pt-44 lg:pt-56">
      <div ref={headRef} className="reveal grid grid-cols-12 gap-x-6">
        <div className="col-span-12 mb-10 md:mb-14 lg:col-span-3 lg:mb-0 lg:pt-4">
          <SectionLabel index="01">Portfolio</SectionLabel>
        </div>
        <div className="col-span-12 lg:col-span-9">
          <h2 id="portfolio-title" className="display text-[clamp(2.75rem,9vw,3.5rem)] md:text-[clamp(3.5rem,6.2vw,5.75rem)]">
            Selected assets
          </h2>
          <p className="mt-8 max-w-[28rem] text-[1.0625rem] leading-[1.65] text-muted md:mt-10">
            A small collection of domain names held for their clarity, relevance and commercial potential.
          </p>
        </div>
      </div>

      <ul ref={listRef} className="reveal mt-20 border-t border-ink md:mt-28 lg:mt-32" aria-label="Domain portfolio">
        {domains.map((domain, i) => (
          <DomainRow key={domain.name} domain={domain} index={i} onSelect={onSelect} />
        ))}
      </ul>
    </section>
  )
}
