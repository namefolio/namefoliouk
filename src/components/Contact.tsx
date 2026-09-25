import { SITE } from '../config/site'
import { useReveal } from '../hooks/useReveal'
import { SectionLabel } from './SectionLabel'

export function Contact() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <section id="contact" aria-labelledby="contact-title" className="wrap-content pt-32 pb-28 md:pt-40 md:pb-36 lg:pt-52 lg:pb-44">
      <div ref={ref} className="reveal grid grid-cols-12 gap-x-6">
        <div className="col-span-12 mb-10 md:mb-14 lg:col-span-3 lg:mb-0 lg:pt-4">
          <SectionLabel index="03">Contact</SectionLabel>
        </div>
        <div className="col-span-12 lg:col-span-9">
          <h2 id="contact-title" className="display text-[clamp(2.25rem,9vw,3.25rem)] md:text-[clamp(3rem,5.4vw,5.25rem)]">
            Say hello<span className="text-lime">.</span>
          </h2>
          <p className="mt-8 max-w-[28rem] text-[1.0625rem] leading-[1.6] text-muted md:mt-10 md:text-lg">
            Want one of our domains, or thinking about selling yours? Drop us a line.
          </p>

          <a
            href={`mailto:${SITE.email}`}
            className="group mt-12 inline-flex max-w-full items-baseline gap-4 md:mt-16"
          >
            <span className="display link-line-rest pb-2 text-[clamp(1.375rem,6.4vw,2.125rem)] leading-tight font-semibold [overflow-wrap:anywhere] md:text-[clamp(2rem,3.6vw,3.25rem)]">
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
