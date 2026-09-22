export const LOCALES = ['en', 'ar']
export const DEFAULT_LOCALE = 'en'

export const isRTL = (lang) => lang === 'ar'

// Routes that have an Arabic version. To add one: translate the page (wrap text in <T>, add its strings to
// lib/ar/*.js and lib/ar/meta.js), then list the route here. Any other /ar/* path redirects to English.
export const TRANSLATED_ROUTES = [
  '/',
  '/about',
  '/contact',
  '/distributors',
  '/sustainability',
  '/compare',
  '/resources',
  '/fullrange',
  '/privacy',
  '/terms',
  '/blog',
  '/blog/company-story',
  '/blog/coraplast-partnership',
  '/blog/cost-optimization',
  '/blog/fmpe-product-spotlight',
  '/blog/fmpp-product-spotlight',
  '/blog/masterbatch-range',
  '/blog/technical-guide',
  '/blog/what-is-filler-masterbatch',
  '/blog/caco3-loading-comparison',
  '/blog/pe-vs-pp-carrier-systems',
  '/blog/tio2-masterbatch-opacity',
  '/blog/uv-stabilisation-agricultural-film',
  '/blog/reading-masterbatch-coa',
  '/blog/sustainable-plastics-masterbatch',
  '/fmpe',
  '/fmpp',
  '/white-masterbatch',
  '/black-masterbatch',
  '/color-masterbatch',
  '/additive-masterbatch',
  '/industries/packaging',
  '/industries/pipes',
  '/industries/agriculture',
  '/industries/textiles',
  '/industries/wire-cable',
  '/industries/automotive',
  '/industries/construction',
  '/industries/consumer-goods',
]

export function isTranslatedRoute(path) {
  const clean = path.replace(/\/+$/, '') || '/'
  return TRANSLATED_ROUTES.includes(clean)
}

export function localizePath(lang, path) {
  if (lang !== 'ar') return path
  if (/^(https?:|mailto:|tel:|#)/.test(path)) return path
  const base = path.split(/[?#]/)[0]
  if (!isTranslatedRoute(base)) return path
  return base === '/' ? `/ar${path.slice(1)}` : `/ar${path}`
}

export function alternatePath(lang, pathname) {
  if (lang === 'ar') return pathname.replace(/^\/ar(?=\/|$)/, '') || '/'
  return pathname === '/' ? '/ar' : `/ar${pathname}`
}
