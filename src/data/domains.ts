/**
 * ─────────────────────────────────────────────────────────────
 *  PORTFOLIO
 *  Edit this list to change the domains shown on the site.
 *  Order here is the order on the page; numbering is automatic.
 * ─────────────────────────────────────────────────────────────
 */

export type DomainStatus = 'available' | 'under-offer' | 'sold'

export interface Domain {
  /** The domain name exactly as it should be displayed, e.g. "example.co.uk". */
  name: string
  status: DomainStatus
}

export const domains: Domain[] = [
  { name: 'example.co.uk', status: 'available' },
  { name: 'anotherdomain.com', status: 'available' },
  { name: 'anothername.co.uk', status: 'available' },
  { name: 'selecteddomain.co.uk', status: 'available' },
]

export const STATUS_LABEL: Record<DomainStatus, string> = {
  available: 'Available',
  'under-offer': 'Under offer',
  sold: 'Sold',
}
