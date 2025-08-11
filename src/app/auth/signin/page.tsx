'use client'

import { Loader2, Mail, Chrome, Linkedin } from 'lucide-react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { signIn, getProviders } from 'next-auth/react'
import { useState, useEffect } from 'react'

import { Alert, AlertDescription } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

interface Provider {
  id: string
  name: string
  type: string
  signinUrl: string
  callbackUrl: string
}

export default function SignInPage() {
  const [providers, setProviders] = useState<Record<string, Provider> | null>(
    null
  )
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [emailSent, setEmailSent] = useState(false)
  const searchParams = useSearchParams()
  const error = searchParams.get('error')
  const callbackUrl = searchParams.get('callbackUrl') || '/dashboard'

  useEffect(() => {
    const fetchProviders = async () => {
      const res = await getProviders()
      setProviders(res)
    }
    fetchProviders()
  }, [])

  const handleEmailSignIn = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const result = await signIn('resend', {
        email,
        callbackUrl,
        redirect: false,
      })

      if (result?.ok) {
        setEmailSent(true)
      }
    } catch (error) {
      console.error('Error signing in:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleGoogleSignIn = () => {
    signIn('google', { callbackUrl })
  }

  const handleLinkedInSignIn = () => {
    signIn('linkedin', { callbackUrl })
  }

  const getErrorMessage = (error: string) => {
    switch (error) {
      case 'OAuthSignin':
        return 'Error al construir una URL de autorización.'
      case 'OAuthCallback':
        return 'Error en el manejo de la respuesta del proveedor OAuth.'
      case 'OAuthCreateAccount':
        return 'No se pudo crear la cuenta OAuth.'
      case 'EmailCreateAccount':
        return 'No se pudo crear la cuenta de email.'
      case 'Callback':
        return 'Error en la URL de callback.'
      case 'OAuthAccountNotLinked':
        return 'Para confirmar tu identidad, inicia sesión con la misma cuenta que usaste originalmente.'
      case 'EmailSignin':
        return 'No se pudo enviar el email.'
      case 'CredentialsSignin':
        return 'Credenciales incorrectas.'
      case 'SessionRequired':
        return 'Por favor inicia sesión para acceder a esta página.'
      default:
        return 'Ocurrió un error durante el inicio de sesión.'
    }
  }

  if (emailSent) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <Mail className="mx-auto h-12 w-12 text-green-600" />
            <CardTitle className="mt-4">Revisa tu email</CardTitle>
            <CardDescription>
              Te hemos enviado un enlace de inicio de sesión a {email}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button
              variant="outline"
              className="w-full"
              onClick={() => setEmailSent(false)}
            >
              Volver al inicio de sesión
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">Iniciar Sesión</CardTitle>
          <CardDescription>Accede a tu cuenta de Fondeo</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {error && (
            <Alert variant="destructive">
              <AlertDescription>{getErrorMessage(error)}</AlertDescription>
            </Alert>
          )}

          {/* OAuth Providers */}
          <div className="space-y-2">
            {providers?.google && (
              <Button
                onClick={handleGoogleSignIn}
                variant="outline"
                className="w-full"
                disabled={isLoading}
              >
                <Chrome className="mr-2 h-4 w-4" />
                Continuar con Google
              </Button>
            )}

            {providers?.linkedin && (
              <Button
                onClick={handleLinkedInSignIn}
                variant="outline"
                className="w-full"
                disabled={isLoading}
              >
                <Linkedin className="mr-2 h-4 w-4" />
                Continuar con LinkedIn
              </Button>
            )}
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="text-muted-foreground bg-white px-2">O</span>
            </div>
          </div>

          {/* Email Sign In */}
          <form onSubmit={handleEmailSignIn} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="tu@email.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                disabled={isLoading}
              />
            </div>
            <Button
              type="submit"
              className="w-full"
              disabled={isLoading || !email}
            >
              {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Enviar enlace de acceso
            </Button>
          </form>

          <div className="text-muted-foreground text-center text-sm">
            ¿No tienes cuenta?{' '}
            <Link href="/auth/signup" className="text-primary hover:underline">
              Regístrate aquí
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
