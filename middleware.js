import { NextResponse } from 'next/server';

export function middleware(request) {
  const { pathname } = request.nextUrl;
  const isPrivate = pathname.startsWith('/tile/') || pathname.startsWith('/my-profile');
  const sessionCookie = request.cookies.get('better-auth.session_token') || request.cookies.get('__Secure-better-auth.session_token');
  if (isPrivate && !sessionCookie) {
    const loginUrl = new URL('/login', request.url);
    loginUrl.searchParams.set('redirect', pathname);
    return NextResponse.redirect(loginUrl);
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/tile/:path*', '/my-profile/:path*']
};
