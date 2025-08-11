import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import './globals.css'
import { AuthProvider } from '@/components/providers/session-provider'
import { Toaster } from '@/components/ui/toaster'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Fondeo - Conectando Inversores y Emprendedores',
  description:
    'Plataforma de matching inteligente para conectar inversores y emprendedores basada en criterios específicos como sector, stage y ubicación.',
  keywords: ['inversión', 'emprendimiento', 'startup', 'fondeo', 'matching'],
  authors: [{ name: 'Fondeo Team' }],
  creator: 'Fondeo',
  publisher: 'Fondeo',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <AuthProvider>
          {children}
          <Toaster />
        </AuthProvider>
      </body>
    </html>
  )
}
