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
        // '/dashboard/:path*',
        // '/verify/:path*'
    ],
}


// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {

    const token = await getToken({ req: request })
    const url = request.nextUrl

    if (
        token &&
        (
            url.pathname.startsWith('/login') ||
            url.pathname.startsWith('/signup')
        )
    ) {
        return NextResponse.redirect(new URL('/', request.url));
    }

    if (!token && url.pathname.startsWith('/bookings')) {
        return NextResponse.redirect(new URL('/login', request.url));
    }

    return NextResponse.next();
}