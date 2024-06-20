import { NextResponse } from 'next/server'

 
// This function can be marked `async` if using `await` inside
export function middleware(request) {
    // return NextResponse.redirect(new URL('/about/history', request.url))
    return NextResponse.next()
  
}
 
export const config = {
  matcher: ['/dashboard'],
}

// src folder e e ekta file create korte hobe