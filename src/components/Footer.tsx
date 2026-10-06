import { SITE } from '../config/site'
import { Chip } from './Chip'

export function Footer() {
  return (
    <footer className="mt-20 text-base md:mt-28">
      <p>
        © {SITE.year} <Chip>{SITE.displayName}</Chip>
      </p>
    </footer>
  )
}
