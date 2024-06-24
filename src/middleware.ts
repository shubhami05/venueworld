
import { NextRequest, NextResponse } from 'next/server'
export { default } from "next-auth/middleware"
import { getToken } from 'next-auth/jwt'

// See "Matching Paths" below to learn more
export const config = {
    matcher: [
        '/signup',
        '/login',
        '/',
        '/contact',
        '/explore/:path',
        '/bookings/:path*',
        '/verify/:path*',
        '/owner/:path*',
        '/admin/:path*',

    ],
}


// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {

    const token = await getToken({ req: request })
    const url = request.nextUrl

    if (token && (url.pathname.startsWith('/login') || url.pathname.startsWith('/signup'))) {
        if (token.isAdmin) {
            return NextResponse.redirect(new URL('/admin/dashboard', request.url));
        }
        if (token.isOwner) {
            return NextResponse.redirect(new URL('/owner/dashboard', request.url));
        }
        return NextResponse.redirect(new URL('/', request.url));
    }
    if ((token && token?.isOwner) && !url.pathname.startsWith('/owner')) {
        return NextResponse.redirect(new URL("/owner/dashboard", request.url));
    }

    if (!token && (
        url.pathname.startsWith('/bookings') ||
        url.pathname.startsWith('/verify') ||
        url.pathname.startsWith('/explore') ||
        url.pathname.startsWith('/admin') ||
        url.pathname.startsWith('/owner')
    )) {
        return NextResponse.redirect(new URL('/login', request.url));
    }

    if (!token?.isAdmin && url.pathname.startsWith('/admin')) {
        return NextResponse.redirect(new URL('/', request.url));
    }
    if (!token?.isOwner && url.pathname.startsWith('/owner')) {
        return NextResponse.redirect(new URL('/', request.url));
    }

    return NextResponse.next();
}