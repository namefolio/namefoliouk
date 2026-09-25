import { SITE } from '../config/site'

export interface EnquiryPayload {
  domain: string
  name: string
  email: string
  message: string
}

/**
 * ─────────────────────────────────────────────────────────────
 *  FORM BACKEND — connect an email service here.
 *
 *  Leave as `null` and enquiries open the visitor's email client
 *  with a pre-filled message to SITE.email.
 *
 *  Formspree:  set to your form URL, e.g. 'https://formspree.io/f/xxxxxxx'
 *  Resend:     set to your own serverless route (e.g. '/api/enquiry')
 *              that calls Resend server-side. Never put a Resend API
 *              key in front-end code.
 *
 *  The payload is POSTed as JSON: { domain, name, email, message }.
 * ─────────────────────────────────────────────────────────────
 */
export const ENQUIRY_ENDPOINT: string | null = null

export type EnquiryResult = 'sent' | 'mailto'

export async function submitEnquiry(payload: EnquiryPayload): Promise<EnquiryResult> {
  if (ENQUIRY_ENDPOINT) {
    const res = await fetch(ENQUIRY_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ ...payload, _subject: `Enquiry: ${payload.domain}` }),
    })
    if (!res.ok) throw new Error(`Enquiry failed (${res.status})`)
    return 'sent'
  }

  // No backend configured: hand off to the visitor's email client.
  const subject = `Enquiry: ${payload.domain}`
  const body = `${payload.message}\n\n—\n${payload.name}\n${payload.email}`
  window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  return 'mailto'
}
