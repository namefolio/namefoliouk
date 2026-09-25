import { SITE } from '../config/site'
import { useReveal } from '../hooks/useReveal'
import { SectionLabel } from './SectionLabel'

export function Contact() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <section id="contact" aria-labelledby="contact-title" className="wrap-content pt-40 pb-32 md:pt-52 md:pb-44 lg:pt-64 lg:pb-56">
      <div ref={ref} className="reveal grid grid-cols-12 gap-x-6">
        <div className="col-span-12 mb-10 md:mb-14 lg:col-span-3 lg:mb-0 lg:pt-4">
          <SectionLabel index="03">Contact</SectionLabel>
        </div>
        <div className="col-span-12 lg:col-span-9">
          <h2 id="contact-title" className="display text-[clamp(2.25rem,9.4vw,3.25rem)] md:text-[clamp(3.25rem,6vw,5.75rem)]">
            Let’s talk.
          </h2>
          <p className="mt-10 max-w-[26rem] text-[1.0625rem] leading-[1.65] text-muted md:mt-14 md:text-lg">
            Interested in a domain or discussing the sale of a portfolio?
          </p>

          <a
            href={`mailto:${SITE.email}`}
            className="group mt-16 inline-flex max-w-full items-baseline gap-4 md:mt-24"
          >
            <span className="display link-line-rest pb-2 text-[clamp(1.375rem,6.2vw,2.125rem)] leading-tight [overflow-wrap:anywhere] md:text-[clamp(2.125rem,3.8vw,3.5rem)]">
              {SITE.email}
            </span>
            <span
              aria-hidden="true"
              className="hidden text-2xl text-muted transition duration-500 ease-editorial group-hover:translate-x-1.5 group-hover:text-ink md:inline"
            >
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}
