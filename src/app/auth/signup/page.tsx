'use client'

import { Loader2, Chrome, CheckCircle, Linkedin } from 'lucide-react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { signIn } from 'next-auth/react'
import { useState } from 'react'

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

export default function SignUpPage() {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [emailSent, setEmailSent] = useState(false)
  const searchParams = useSearchParams()
  const error = searchParams.get('error')
  const callbackUrl = searchParams.get('callbackUrl') || '/dashboard'

  const handleEmailSignUp = async (e: React.FormEvent) => {
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
      console.error('Error signing up:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleGoogleSignUp = () => {
    signIn('google', { callbackUrl })
  }

  const handleLinkedInSignUp = () => {
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
      default:
        return 'Ocurrió un error durante el registro.'
    }
  }

  if (emailSent) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <CheckCircle className="mx-auto h-12 w-12 text-green-600" />
            <CardTitle className="mt-4">¡Cuenta creada!</CardTitle>
            <CardDescription>
              Te hemos enviado un enlace de verificación a {email}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="rounded-lg border border-blue-200 bg-blue-50 p-4">
              <h4 className="mb-2 font-medium text-blue-900">
                Próximos pasos:
              </h4>
              <ol className="space-y-1 text-sm text-blue-800">
                <li>1. Revisa tu bandeja de entrada</li>
                <li>2. Haz clic en el enlace de verificación</li>
                <li>3. ¡Comienza a usar Fondeo!</li>
              </ol>
            </div>
            <Button
              variant="outline"
              className="w-full"
              onClick={() => setEmailSent(false)}
            >
              Volver al registro
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
          <CardTitle className="text-2xl font-bold">Crear Cuenta</CardTitle>
          <CardDescription>
            Únete a Fondeo y comienza tu viaje financiero
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {error && (
            <Alert variant="destructive">
              <AlertDescription>{getErrorMessage(error)}</AlertDescription>
            </Alert>
          )}

          {/* OAuth Providers */}
          <div className="space-y-2">
            <Button
              onClick={handleGoogleSignUp}
              variant="outline"
              className="w-full"
              disabled={isLoading}
            >
              <Chrome className="mr-2 h-4 w-4" />
              Continuar con Google
            </Button>

            <Button
              onClick={handleLinkedInSignUp}
              variant="outline"
              className="w-full"
              disabled={isLoading}
            >
              <Linkedin className="mr-2 h-4 w-4" />
              Continuar con LinkedIn
            </Button>
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="text-muted-foreground bg-white px-2">O</span>
            </div>
          </div>

          {/* Email Sign Up */}
          <form onSubmit={handleEmailSignUp} className="space-y-4">
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

            <div className="text-muted-foreground text-xs">
              Al crear una cuenta, aceptas nuestros{' '}
              <Link href="/terms" className="text-primary hover:underline">
                Términos de Servicio
              </Link>{' '}
              y{' '}
              <Link href="/privacy" className="text-primary hover:underline">
                Política de Privacidad
              </Link>
            </div>

            <Button
              type="submit"
              className="w-full"
              disabled={isLoading || !email}
            >
              {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Crear cuenta
            </Button>
          </form>

          <div className="text-muted-foreground text-center text-sm">
            ¿Ya tienes cuenta?{' '}
            <Link href="/auth/signin" className="text-primary hover:underline">
              Inicia sesión aquí
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
