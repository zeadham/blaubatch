import { NextResponse } from 'next/server'
import { isTranslatedRoute } from './lib/i18n'

export function proxy(request) {
  const { pathname } = request.nextUrl

  if (pathname === '/opengraph-image' || /\.[a-z0-9]+$/i.test(pathname)) return NextResponse.next()

  if (pathname === '/ar' || pathname.startsWith('/ar/')) {
    const rest = pathname.slice(3) || '/'
    if (!isTranslatedRoute(rest)) {
      const url = request.nextUrl.clone()
      url.pathname = rest
      return NextResponse.redirect(url)
    }
    return NextResponse.next()
  }

  if (pathname === '/en' || pathname.startsWith('/en/')) {
    const url = request.nextUrl.clone()
    url.pathname = pathname.slice(3) || '/'
    return NextResponse.redirect(url)
  }

  const url = request.nextUrl.clone()
  url.pathname = `/en${pathname === '/' ? '' : pathname}`
  return NextResponse.rewrite(url)
}

export const config = {
  matcher: ['/((?!api|_next).*)'],
}
