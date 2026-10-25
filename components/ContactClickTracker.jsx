'use client'

import { useEffect } from 'react'
import { trackEvent } from '@/lib/analytics'

const COMPANY_WHATSAPP = '201022227723'

// One event per channel, so WhatsApp and phone clicks can be imported into Google Ads as
// conversions while email clicks stay in Analytics only.
function contactEvent(href) {
  if (href.startsWith('mailto:')) return 'email_click'
  if (href.startsWith('tel:')) return 'phone_click'
  // Share buttons also link to WhatsApp, but only links to our own number are enquiries.
  if (/wa\.me|whatsapp\.com/.test(href) && href.includes(COMPANY_WHATSAPP)) return 'whatsapp_click'
  return null
}

// Records clicks on WhatsApp, email and phone links anywhere on the site, so enquiries that
// never touch a form still show up in Analytics.
export default function ContactClickTracker() {
  useEffect(() => {
    const onClick = (e) => {
      const link = e.target.closest?.('a[href]')
      if (!link) return
      const eventName = contactEvent(link.getAttribute('href'))
      if (eventName) trackEvent(eventName)
    }
    document.addEventListener('click', onClick, true)
    return () => document.removeEventListener('click', onClick, true)
  }, [])
  return null
}
