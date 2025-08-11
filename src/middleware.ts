import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Middleware simplificado - solo permite el paso de todas las rutas
// La autenticación se maneja en el lado del cliente
export function middleware(_request: NextRequest) {
  // Permitir todas las rutas por ahora
  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
