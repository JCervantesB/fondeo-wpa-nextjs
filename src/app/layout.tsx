import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Fondeo - Conectando Inversores y Emprendedores',
  description:
    'Plataforma de matching inteligente para conectar inversores y emprendedores basada en criterios específicos como sector, stage y ubicación.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className="antialiased">{children}</body>
    </html>
  )
}
