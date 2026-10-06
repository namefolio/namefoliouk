import type { ReactNode } from 'react'

export type ChipColour = 'ink' | 'lime' | 'cobalt' | 'clay'

const COLOUR: Record<ChipColour, string> = {
  ink: 'chip-ink',
  lime: 'chip-lime',
  cobalt: 'chip-cobalt',
  clay: 'chip-clay',
}

interface ChipProps {
  children: ReactNode
  colour?: ChipColour
  /** Turns the chip into a link (e.g. mailto:). */
  href?: string
  className?: string
}

/** A word or phrase on a solid colour block, in the style of DomainName.com. */
export function Chip({ children, colour = 'ink', href, className = '' }: ChipProps) {
  const classes = `chip ${COLOUR[colour]} ${className}`
  if (href) {
    return (
      <a href={href} className={`${classes} transition-colors duration-300 hover:bg-lime hover:text-on-lime`}>
        {children}
      </a>
    )
  }
  return <span className={classes}>{children}</span>
}
