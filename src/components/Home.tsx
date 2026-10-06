import type { CSSProperties } from 'react'
import { SITE } from '../config/site'
import { Chip, type ChipColour } from './Chip'
import { QuestionLabel } from './QuestionLabel'
import { Footer } from './Footer'

const delay = (ms: number) => ({ '--delay': `${ms}ms` }) as CSSProperties

/** The "Got domains to sell?" sentence: plain words between colour chips. */
const SELLING: { text: string; chip?: ChipColour }[] = [
  { text: 'We find ' },
  { text: 'the right buyers', chip: 'lime' },
  { text: ' and start ' },
  { text: 'real conversations', chip: 'cobalt' },
  { text: ' and keep it ' },
  { text: 'low-key', chip: 'clay' },
  { text: ' and help you get to ' },
  { text: 'a sale.', chip: 'ink' },
]

export function Home() {
  const mailto = `mailto:${SITE.email}`

  return (
    <div className="mx-auto w-full max-w-[72rem] px-6 pt-10 pb-12 md:px-12 md:pt-16 md:pb-16 lg:px-16">
      <header className="enter flex items-start justify-between gap-6" style={delay(0)}>
        <h1 className="m-0">
          <Chip className="display inline-block text-[clamp(1.875rem,7.4vw,3.25rem)] leading-[1.25]">
            {SITE.displayName}
          </Chip>
        </h1>
      </header>

      <main className="mt-14 space-y-14 md:mt-20 md:space-y-20">
        <section aria-labelledby="what" className="enter" style={delay(120)}>
          <QuestionLabel id="what">What is a domain name?</QuestionLabel>
          <p className="display text-[clamp(2.5rem,8vw,4.5rem)]">
            It’s your <Chip colour="lime">brand.</Chip>
          </p>
        </section>

        <section aria-labelledby="who" className="enter" style={delay(240)}>
          <QuestionLabel id="who">Who are we?</QuestionLabel>
          <p className="max-w-[60rem] text-lg leading-[1.9] md:text-xl md:leading-[1.9]">
            A great domain name is the first thing people see. It makes a young business look established from day
            one, just like <Chip>{SITE.displayName}</Chip> does for us. We look after a changing collection of short,
            memorable domains for startups and growing businesses. Looking for a name? Tell us what you’re building at{' '}
            <Chip href={mailto}>{SITE.email}</Chip> and we’ll send you names that fit.
          </p>
        </section>

        <section aria-labelledby="sell" className="enter" style={delay(360)}>
          <QuestionLabel id="sell">Got domains to sell?</QuestionLabel>
          <p className="display text-[clamp(1.875rem,6vw,3.5rem)] leading-[1.3] md:leading-[1.28]">
            {SELLING.map((part) =>
              part.chip ? (
                <Chip key={part.text} colour={part.chip} className="md:whitespace-nowrap">
                  {part.text}
                </Chip>
              ) : (
                <span key={part.text}>{part.text}</span>
              ),
            )}
          </p>
          <p className="mt-8 text-lg leading-[1.9] md:text-xl">
            Own a portfolio? Email <Chip href={mailto}>{SITE.email}</Chip>
          </p>
        </section>
      </main>

      <Footer />
    </div>
  )
}
