'use client'

import { useEffect, useState } from 'react'
import Script from 'next/script'
import { CONSENT_EVENT, getConsent } from '@/lib/consent'

const GA_ID = 'G-LV0BX0J38H'
// Only the live site reports to Analytics, so local and preview builds don't pollute the data.
const ANALYTICS_HOSTS = ['blaubatch.com', 'www.blaubatch.com']

function removeAnalyticsCookies() {
  document.cookie.split(';')
    .map(c => c.split('=')[0].trim())
    .filter(name => name === '_ga' || name.startsWith('_ga_'))
    .forEach(name => {
      for (const domain of ['', `; domain=${location.hostname}`, `; domain=.${location.hostname.replace(/^www\./, '')}`]) {
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/${domain}`
      }
    })
}

// Loads Google Analytics only after the visitor accepts cookies, and stops it if they later decline.
export default function GoogleAnalytics() {
  const [allowedHost, setAllowedHost] = useState(false)
  const [consented, setConsented] = useState(false)

  useEffect(() => {
    setAllowedHost(ANALYTICS_HOSTS.includes(window.location.hostname))
    setConsented(getConsent() === 'accepted')

    const onConsent = (e) => {
      const accepted = e.detail === 'accepted'
      window[`ga-disable-${GA_ID}`] = !accepted
      if (!accepted) removeAnalyticsCookies()
      setConsented(accepted)
    }
    window.addEventListener(CONSENT_EVENT, onConsent)
    return () => window.removeEventListener(CONSENT_EVENT, onConsent)
  }, [])

  if (!allowedHost || !consented) return null

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', '${GA_ID}', { page_path: window.location.pathname });
        `}
      </Script>
    </>
  )
}
