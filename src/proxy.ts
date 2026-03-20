import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const locales = ['pt-BR', 'en-US'];
const defaultLocale = 'pt-BR';

function getLocale(request: NextRequest): string {
  const acceptLanguage = request.headers.get('accept-language');
  if (!acceptLanguage) return defaultLocale;
  
  // Basic language matching
  if (acceptLanguage.includes('pt')) return 'pt-BR';
  if (acceptLanguage.includes('en')) return 'en-US';
  
  return defaultLocale;
}

export default function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  const pathnameHasLocale = locales.some(
    (locale) => pathname.toLowerCase().startsWith(`/${locale.toLowerCase()}/`) || pathname.toLowerCase() === `/${locale.toLowerCase()}`
  );

  if (pathnameHasLocale) return NextResponse.next();

  // Redirect if there is no locale
  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname === '/' ? '' : pathname}`;
  
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Skip paths that shouldn't be internationalized
    '/((?!api|_next/static|_next/image|favicon.ico|icon.png|logo/.*|.*\\.svg).*)',
  ],
};
