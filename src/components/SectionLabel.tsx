interface SectionLabelProps {
  index: string
  children: string
}

export function SectionLabel({ index, children }: SectionLabelProps) {
  return (
    <p className="label text-muted">
      <span className="tabular-nums">{index}</span>
      <span aria-hidden="true" className="mx-3 inline-block">—</span>
      <span className="text-ink">{children}</span>
    </p>
  )
}
