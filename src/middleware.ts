import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { DEFAULT_REDIRECT_ROUTE, PROTECTED_ROUTES, PUBLIC_ROUTES } from '../routes'


// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    if(PROTECTED_ROUTES.includes(request.nextUrl.pathname)){
        // Check if there is an Auth token in the request cookie
        //TODO: Get the token from the cookie header when the endpoint is established: request.cookies.get("token")
        const token = "tbssbsbsbsbsgshsbnsnsnbsbnsn" //: FAKE TOKEN
        // If there is not token in the request and the user is trying to access protected route, redirect them to the home page
        if(!token){
            return NextResponse.redirect(new URL(DEFAULT_REDIRECT_ROUTE, request.url))
        }
        // check if the token is verified
        // TODO: Hit the verifyToken endPoint
        const isTokenVerified = true
        if(!isTokenVerified){
            return NextResponse.redirect(new URL(DEFAULT_REDIRECT_ROUTE, request.url))
        }
        // Allow access to the route
        return NextResponse.next();
    }
    // Allow the request to pass for all Public Routes
    return NextResponse.next();
    
}

// For all routes except these matchers the middleware will be excuted
export const config = {
    matcher: '/((?!api|_next/static|_next/image|favicon.ico).*)',
}