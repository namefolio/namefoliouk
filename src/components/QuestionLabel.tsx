interface QuestionLabelProps {
  id?: string
  children: string
}

/** Small spaced-out uppercase label that introduces each block. */
export function QuestionLabel({ id, children }: QuestionLabelProps) {
  return (
    <h2 id={id} className="label mb-4 text-ink md:mb-5">
      {children}
    </h2>
  )
}
