import { STATUS_LABEL, type Domain } from '../data/domains'

interface DomainRowProps {
  domain: Domain
  index: number
  onSelect: (domain: Domain) => void
}

export function DomainRow({ domain, index, onSelect }: DomainRowProps) {
  const number = String(index + 1).padStart(2, '0')
  const status = STATUS_LABEL[domain.status]
  const isSold = domain.status === 'sold'

  return (
    <li className="border-b border-rule">
      <button
        type="button"
        onClick={() => onSelect(domain)}
        aria-label={`${domain.name}, ${status}. Enquire about this domain`}
        aria-haspopup="dialog"
        className="group grid w-full cursor-pointer grid-cols-[1fr_auto] items-baseline gap-x-6 gap-y-3 py-7 text-left md:grid-cols-12 md:py-10 lg:py-12"
      >
        <span className="label col-start-1 row-start-1 tabular-nums text-muted md:col-span-1 lg:col-span-3">
          {number}
        </span>

        <span
          className={[
            'display col-span-2 row-start-2 min-w-0 text-[clamp(1.875rem,8.8vw,2.75rem)] [overflow-wrap:anywhere]',
            'md:col-span-9 md:col-start-2 md:row-start-1 md:text-[clamp(2.5rem,5vw,4.75rem)] lg:col-span-7 lg:col-start-4',
            'transition-transform duration-500 ease-editorial motion-safe:md:group-hover:translate-x-2 motion-safe:md:group-focus-visible:translate-x-2',
            isSold ? 'text-muted' : 'text-ink',
          ].join(' ')}
        >
          {domain.name}
        </span>

        <span className="col-start-2 row-start-1 flex items-baseline justify-end gap-3 md:col-span-2 md:col-start-11">
          <span className="label text-muted transition-colors duration-500 ease-editorial group-hover:text-olive group-focus-visible:text-olive">
            {status}
          </span>
          <span
            aria-hidden="true"
            className="translate-x-0 text-sm text-muted opacity-60 transition duration-500 ease-editorial md:-translate-x-2 md:opacity-0 md:group-hover:translate-x-0 md:group-hover:text-olive md:group-hover:opacity-100 md:group-focus-visible:translate-x-0 md:group-focus-visible:opacity-100"
          >
            →
          </span>
        </span>
      </button>
    </li>
  )
}
