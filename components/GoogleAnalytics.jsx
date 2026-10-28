'use client'

import { useEffect, useState } from 'react'
import Script from 'next/script'
import { CONSENT_EVENT, getConsent } from '@/lib/consent'

// Can be overridden in Vercel. NEXT_PUBLIC_ values are inlined at build time, so changing them needs a redeploy.
// Both fall back to the live IDs so tracking never silently stops when an env var is missing.
const GA4_ID = process.env.NEXT_PUBLIC_GA4_ID || 'G-LV0BX0J38H'
const GADS_ID = process.env.NEXT_PUBLIC_GADS_ID || 'AW-18515204313'
const TAG_IDS = [GA4_ID, GADS_ID].filter(Boolean)
// Only the live site reports to Analytics and Ads, so local and preview builds don't pollute the data.
const ANALYTICS_HOSTS = ['blaubatch.com', 'www.blaubatch.com']

// _ga / _ga_* are Analytics cookies; _gcl_* are Google Ads conversion-linker cookies.
function removeTrackingCookies() {
  document.cookie.split(';')
    .map(c => c.split('=')[0].trim())
    .filter(name => name === '_ga' || name.startsWith('_ga_') || name.startsWith('_gcl_'))
    .forEach(name => {
      for (const domain of ['', `; domain=${location.hostname}`, `; domain=.${location.hostname.replace(/^www\./, '')}`]) {
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/${domain}`
      }
    })
}

// Loads the Google tag (GA4 + Google Ads) only after the visitor accepts cookies, and stops it if they later decline.
export default function GoogleAnalytics() {
  const [allowedHost, setAllowedHost] = useState(false)
  const [consented, setConsented] = useState(false)

  useEffect(() => {
    setAllowedHost(ANALYTICS_HOSTS.includes(window.location.hostname))
    setConsented(getConsent() === 'accepted')

    const onConsent = (e) => {
      const accepted = e.detail === 'accepted'
      TAG_IDS.forEach(id => { window[`ga-disable-${id}`] = !accepted })
      if (!accepted) removeTrackingCookies()
      setConsented(accepted)
    }
    window.addEventListener(CONSENT_EVENT, onConsent)
    return () => window.removeEventListener(CONSENT_EVENT, onConsent)
  }, [])

  if (TAG_IDS.length === 0 || !allowedHost || !consented) return null

  const configLines = TAG_IDS
    .map(id => `gtag('config', '${id}', { page_path: window.location.pathname });`)
    .join('\n          ')

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${TAG_IDS[0]}`} strategy="afterInteractive" />
      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          ${configLines}
        `}
      </Script>
    </>
  )
}
