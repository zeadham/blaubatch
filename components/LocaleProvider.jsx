'use client'

import { createContext, useContext } from 'react'
import { localizePath, isRTL } from '@/lib/i18n'

const LocaleContext = createContext({ lang: 'en', dir: 'ltr', isAr: false })

export function LocaleProvider({ lang, dict, children }) {
  const isAr = lang === 'ar'
  const lookup = (en) => {
    if (!isAr || typeof en !== 'string' || !dict) return en
    if (dict[en] != null) return dict[en]
    const trimmed = en.trim()
    if (trimmed !== en && dict[trimmed] != null) {
      const start = en.slice(0, en.length - en.trimStart().length)
      const end = en.slice(en.trimEnd().length)
      return start + dict[trimmed] + end
    }
    return en
  }
  const value = {
    lang,
    isAr,
    dir: isRTL(lang) ? 'rtl' : 'ltr',
    t: (en, ar) => (isAr && ar != null ? ar : en),
    tr: lookup,
    l: (path) => localizePath(lang, path),
  }
  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
}

export function useLocale() {
  const ctx = useContext(LocaleContext)
  if (!ctx.t) {
    return { ...ctx, t: (en) => en, l: (p) => p, tr: (en) => en }
  }
  return ctx
}

// Translates plain-string children via the Arabic dictionary; anything else passes through untouched.
export function T({ children }) {
  const { tr } = useLocale()
  return typeof children === 'string' ? tr(children) : children
}
