interface SectionLabelProps {
  index: string
  children: string
}

export function SectionLabel({ index, children }: SectionLabelProps) {
  return (
    <p className="label text-muted">
      <span className="mr-3 tabular-nums">{index}</span>
      <span className="text-ink">{children}</span>
    </p>
  )
}
