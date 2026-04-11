'use client'

import { useEffect } from 'react'

/**
 * Compatibility shim for Next.js App Router.
 * In Next.js, prefer exporting `metadata` or `generateMetadata` from page files.
 * This hook provides a client-side fallback that sets document.title and meta tags.
 */
export default function useSEO({ title, description, canonical, ogImage } = {}) {
  useEffect(() => {
    if (title) document.title = title

    const setMeta = (selector, content) => {
      let el = document.querySelector(selector)
      if (!el) return
      el.setAttribute('content', content)
    }

    if (description) {
      setMeta('meta[name="description"]', description)
      setMeta('meta[property="og:description"]', description)
      setMeta('meta[name="twitter:description"]', description)
    }

    if (title) {
      setMeta('meta[property="og:title"]', title)
      setMeta('meta[name="twitter:title"]', title)
    }

    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]')
      if (link) link.setAttribute('href', canonical)
    }

    if (ogImage) {
      setMeta('meta[property="og:image"]', ogImage)
      setMeta('meta[name="twitter:image"]', ogImage)
    }

    return () => {
      document.title = 'Blau Batch | Masterbatch Manufacturer & Distributor — Egypt & MENA'
      setMeta('meta[name="description"]', 'Egyptian masterbatch manufacturer & Coraplast-authorised distributor. Filler, white, black, colour & additive masterbatch for PE & PP. Egypt, GCC, Levant & Europe.')
      setMeta('meta[property="og:description"]', 'Egyptian masterbatch manufacturer & Coraplast-authorised distributor. Filler, white, black, colour & additive masterbatch for PE & PP. Egypt, GCC, Levant & Europe.')
      setMeta('meta[name="twitter:description"]', 'Egyptian masterbatch manufacturer & Coraplast-authorised distributor. Filler, white, black, colour & additive masterbatch for PE & PP. Egypt, GCC, Levant & Europe.')
      setMeta('meta[property="og:title"]', 'Blau Batch | Masterbatch Manufacturer')
      setMeta('meta[name="twitter:title"]', 'Blau Batch | Masterbatch Manufacturer')
      let link = document.querySelector('link[rel="canonical"]')
      if (link) link.setAttribute('href', 'https://blaubatch.com/')
    }
  }, [title, description, canonical, ogImage])
}
