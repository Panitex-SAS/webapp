import createMiddleware from 'next-intl/middleware';
import {routing} from './i18n/routing';
import {NextRequest, NextResponse} from 'next/server';

const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest): NextResponse {
  const pathname = request.nextUrl.pathname;
  
  // Skip middleware for:
  // - Files with extensions (images, fonts, etc.)
  // - Next.js internals
  // - API routes
  // - Any path starting with /images (with or without locale prefix)
  if (
    pathname.match(/\.(jpg|jpeg|png|gif|svg|ico|webp|avif|woff|woff2|ttf|otf|eot)$/i) ||
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/images') ||
    pathname.includes('/images/')
  ) {
    return NextResponse.next();
  }

  const response = intlMiddleware(request);

  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-Frame-Options', 'SAMEORIGIN');
  response.headers.set('X-XSS-Protection', '1; mode=block');

  return response;
}

export const config = {
  // Match all paths except static files and images
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|images).*)',
    '/(es|en)/:path*'
  ]
};
