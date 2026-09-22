import { AR_META } from '@/lib/ar/meta'

const BASE = 'https://blaubatch.com'

// Builds generateMetadata for a page that exists in English and Arabic.
// `en` is the page's existing English { title, description }; Arabic comes from lib/ar/meta.js.
export function pageMetadata(path, en) {
  return async function generateMetadata({ params }) {
    const { lang } = await params
    const isAr = lang === 'ar'
    const loc = isAr ? AR_META[path] || en : en
    const url = BASE + (isAr ? '/ar' + (path === '/' ? '' : path) : path)
    return {
      title: loc.title,
      description: loc.description,
      alternates: {
        canonical: url,
        languages: { en: BASE + path, ar: BASE + '/ar' + (path === '/' ? '' : path), 'x-default': BASE + path },
      },
      openGraph: { title: loc.title, description: loc.description, url, locale: isAr ? 'ar_EG' : 'en_US' },
    }
  }
}
