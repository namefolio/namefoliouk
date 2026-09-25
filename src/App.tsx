import { useCallback, useState } from 'react'
import type { Domain } from './data/domains'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Portfolio } from './components/Portfolio'
import { EnquiryModal } from './components/EnquiryModal'
import { Outbound } from './components/Outbound'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export default function App() {
  const [selected, setSelected] = useState<string | null>(null)
  const [open, setOpen] = useState(false)
  const [session, setSession] = useState(0)

  const handleSelect = useCallback((domain: Domain) => {
    setSelected(domain.name)
    setSession((n) => n + 1)
    setOpen(true)
  }, [])

  const handleClose = useCallback(() => setOpen(false), [])

  return (
    <>
      <a
        href="#main"
        className="label sr-only z-50 bg-ink px-4 py-3 text-paper focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
      >
        Skip to content
      </a>
      <div id="top" />
      <Navbar />
      <main id="main">
        <Hero />
        <Portfolio onSelect={handleSelect} />
        <Outbound />
        <Contact />
      </main>
      <Footer />
      <EnquiryModal domain={selected} open={open} session={session} onClose={handleClose} />
    </>
  )
}
