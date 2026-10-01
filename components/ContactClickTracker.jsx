'use client'

import { useEffect } from 'react'
import { trackEvent } from '@/lib/analytics'

const COMPANY_WHATSAPP = '201022227723'

function contactMethod(href) {
  if (href.startsWith('mailto:')) return 'email'
  if (href.startsWith('tel:')) return 'phone'
  // Share buttons also link to WhatsApp, but only links to our own number are enquiries.
  if (/wa\.me|whatsapp\.com/.test(href) && href.includes(COMPANY_WHATSAPP)) return 'whatsapp'
  return null
}

// Records clicks on WhatsApp, email and phone links anywhere on the site, so enquiries that
// never touch a form still show up in Analytics.
export default function ContactClickTracker() {
  useEffect(() => {
    const onClick = (e) => {
      const link = e.target.closest?.('a[href]')
      if (!link) return
      const method = contactMethod(link.getAttribute('href'))
      if (method) trackEvent('contact_click', { method })
    }
    document.addEventListener('click', onClick, true)
    return () => document.removeEventListener('click', onClick, true)
  }, [])
  return null
}
