import { NextResponse } from 'next/server'

const locales = ['es', 'en', 'fr', 'de', 'ca']
const defaultLocale = 'es'

export function middleware(request) {
  const { pathname } = request.nextUrl
  
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathnameHasLocale) return

  request.nextUrl.pathname = `/${defaultLocale}${pathname}`
  return NextResponse.redirect(request.nextUrl)
}

export const config = {
  matcher: [
    '/((?!_next|public|favicon.ico|fotomia.png|vimtech.png|.*\\..*).*)'
  ],
}
