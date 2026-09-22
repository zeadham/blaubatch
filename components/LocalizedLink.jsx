'use client'

import NextLink from 'next/link'
import { useLocale } from '@/components/LocaleProvider'

// Drop-in replacement for next/link that prefixes internal hrefs with the active locale.
export default function Link({ href, ...props }) {
  const { l } = useLocale()
  return <NextLink href={typeof href === 'string' ? l(href) : href} {...props} />
}
