import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import jwt, { JwtPayload } from 'jsonwebtoken'

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const authCookie = request.cookies.get('auth-token')
  if (!authCookie) {
    return NextResponse.redirect(new URL('/', request.url))
  }

  const token = jwt.decode(authCookie.value) as JwtPayload

  if (token.exp && Date.now() < token.exp) {
    return NextResponse.next()
  }

  return NextResponse.redirect(new URL('/', request.url))
}

export const config = {
  matcher: ['/dashboard'],
}
