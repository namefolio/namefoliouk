import { useEffect, useId, useRef, useState, type FormEvent } from 'react'
import { SITE } from '../config/site'
import { submitEnquiry, type EnquiryResult } from '../lib/enquiry'

interface EnquiryModalProps {
  /** Domain being enquired about. Kept while closing so the exit transition has content. */
  domain: string | null
  open: boolean
  /** Incremented on every opening so the form starts fresh each time. */
  session: number
  onClose: () => void
}

type Status = 'idle' | 'sending' | 'error' | EnquiryResult

export function EnquiryModal({ domain, open, session, onClose }: EnquiryModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const titleId = useId()

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (open && !dialog.open) {
      dialog.showModal()
      dialog.querySelector('input')?.focus()
      document.documentElement.style.overflow = 'hidden'
    } else if (!open && dialog.open) {
      dialog.close()
    }
  }, [open])

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    // Fires for Esc, the close button and backdrop clicks alike.
    const handleClose = () => {
      document.documentElement.style.overflow = ''
      onClose()
    }
    dialog.addEventListener('close', handleClose)
    return () => dialog.removeEventListener('close', handleClose)
  }, [onClose])

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby={titleId}
      className="enquiry-dialog"
      onClick={(e) => {
        // The inner panel fills the dialog, so a click landing on the dialog itself is the backdrop.
        if (e.target === e.currentTarget) dialogRef.current?.close()
      }}
    >
      <div className="flex min-h-full flex-col px-6 pt-6 pb-10 md:px-12 md:pt-10 md:pb-12">
        <div className="flex items-center justify-between border-b border-rule pb-5">
          <p id={titleId} className="label text-muted">
            Interested in this domain?
          </p>
          <button
            type="button"
            onClick={() => dialogRef.current?.close()}
            className="label -mr-2 flex cursor-pointer items-center gap-3 p-2 text-muted transition-colors hover:text-ink"
            aria-label="Close enquiry"
          >
            <span aria-hidden="true" className="hidden sm:inline">
              Close
            </span>
            <svg aria-hidden="true" width="12" height="12" viewBox="0 0 12 12" stroke="currentColor" strokeWidth="1">
              <path d="M1 1l10 10M11 1L1 11" />
            </svg>
          </button>
        </div>

        {domain && <EnquiryForm key={session} domain={domain} />}
      </div>
    </dialog>
  )
}

function EnquiryForm({ domain }: { domain: string }) {
  const [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    setStatus('sending')
    try {
      const result = await submitEnquiry({
        domain,
        name: String(data.get('name') ?? '').trim(),
        email: String(data.get('email') ?? '').trim(),
        message: String(data.get('message') ?? '').trim(),
      })
      setStatus(result)
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="flex flex-1 flex-col">
      <p className="display mt-14 text-[clamp(1.875rem,8vw,2.75rem)] [overflow-wrap:anywhere] md:mt-20">{domain}</p>

      {status === 'sent' || status === 'mailto' ? (
        <div className="mt-16 border-t border-rule pt-8" role="status">
          <p className="display text-3xl">Thank you.</p>
          <p className="mt-4 max-w-sm leading-relaxed text-muted">
            {status === 'sent' ? (
              'Your enquiry has been received. We will be in touch shortly.'
            ) : (
              <>
                Your email client should now open with your enquiry. If it doesn’t, write to us at{' '}
                <a href={`mailto:${SITE.email}`} className="link-line-rest text-ink">
                  {SITE.email}
                </a>
                .
              </>
            )}
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-14 flex flex-1 flex-col md:mt-16">
          <div className="space-y-9">
            <Field label="Name" name="name" autoComplete="name" />
            <Field label="Email" name="email" type="email" autoComplete="email" />
            <Field label="Message" name="message" multiline />
          </div>

          <div className="mt-auto pt-14">
            {status === 'error' && (
              <p role="alert" className="mb-5 text-sm text-ink">
                Something went wrong. Please try again, or email{' '}
                <a href={`mailto:${SITE.email}`} className="link-line-rest">
                  {SITE.email}
                </a>
                .
              </p>
            )}
            <button
              type="submit"
              disabled={status === 'sending'}
              className="group label flex w-full cursor-pointer items-center justify-between bg-ink px-6 py-5 text-paper transition-colors duration-300 hover:bg-lime hover:text-on-lime disabled:cursor-wait disabled:opacity-70"
            >
              <span>{status === 'sending' ? 'Sending…' : 'Send enquiry'}</span>
              <span
                aria-hidden="true"
                className="text-sm transition-transform duration-500 ease-editorial group-hover:translate-x-1"
              >
                →
              </span>
            </button>
          </div>
        </form>
      )}
    </div>
  )
}

interface FieldProps {
  label: string
  name: string
  type?: string
  autoComplete?: string
  multiline?: boolean
}

function Field({ label, name, type = 'text', autoComplete, multiline }: FieldProps) {
  const id = useId()
  return (
    <div>
      <label htmlFor={id} className="label block text-muted">
        {label}
      </label>
      {multiline ? (
        <textarea id={id} name={name} required rows={4} className="field mt-1 resize-none leading-relaxed" />
      ) : (
        <input id={id} name={name} type={type} required autoComplete={autoComplete} className="field mt-1" />
      )}
    </div>
  )
}
