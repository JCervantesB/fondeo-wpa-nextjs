'use client'

import { AlertTriangle, ArrowLeft, RefreshCw } from 'lucide-react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

import { Alert, AlertDescription } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export default function AuthErrorPage() {
  const searchParams = useSearchParams()
  const error = searchParams.get('error')

  const getErrorDetails = (
    error: string | null
  ): { title: string; description: string; suggestion: string } => {
    switch (error) {
      case 'Configuration':
        return {
          title: 'Error de Configuración',
          description: 'Hay un problema con la configuración del servidor.',
          suggestion: 'Por favor, contacta al administrador del sistema.',
        }
      case 'AccessDenied':
        return {
          title: 'Acceso Denegado',
          description: 'No tienes permisos para acceder a este recurso.',
          suggestion:
            'Verifica que tengas los permisos necesarios o contacta al administrador.',
        }
      case 'Verification':
        return {
          title: 'Error de Verificación',
          description: 'El enlace de verificación ha expirado o ya fue usado.',
          suggestion: 'Solicita un nuevo enlace de verificación.',
        }
      case 'OAuthSignin':
        return {
          title: 'Error de OAuth',
          description: 'Hubo un problema al construir la URL de autorización.',
          suggestion: 'Intenta iniciar sesión nuevamente.',
        }
      case 'OAuthCallback':
        return {
          title: 'Error de Callback OAuth',
          description:
            'Error en el manejo de la respuesta del proveedor OAuth.',
          suggestion:
            'Verifica que hayas autorizado la aplicación correctamente.',
        }
      case 'OAuthCreateAccount':
        return {
          title: 'Error al Crear Cuenta OAuth',
          description: 'No se pudo crear tu cuenta con el proveedor OAuth.',
          suggestion:
            'Verifica que tu email no esté ya registrado con otro método.',
        }
      case 'EmailCreateAccount':
        return {
          title: 'Error al Crear Cuenta por Email',
          description: 'No se pudo crear tu cuenta con email.',
          suggestion: 'Verifica que tu email sea válido e intenta nuevamente.',
        }
      case 'Callback':
        return {
          title: 'Error de Callback',
          description: 'Error en la URL de callback.',
          suggestion: 'Intenta el proceso de autenticación nuevamente.',
        }
      case 'OAuthAccountNotLinked':
        return {
          title: 'Cuenta No Vinculada',
          description:
            'Para confirmar tu identidad, debes usar la misma cuenta que usaste originalmente.',
          suggestion:
            'Inicia sesión con el mismo proveedor que usaste la primera vez.',
        }
      case 'EmailSignin':
        return {
          title: 'Error de Email',
          description: 'No se pudo enviar el email de inicio de sesión.',
          suggestion: 'Verifica tu dirección de email e intenta nuevamente.',
        }
      case 'CredentialsSignin':
        return {
          title: 'Credenciales Incorrectas',
          description: 'Las credenciales proporcionadas son incorrectas.',
          suggestion: 'Verifica tu email y contraseña.',
        }
      case 'SessionRequired':
        return {
          title: 'Sesión Requerida',
          description: 'Necesitas iniciar sesión para acceder a esta página.',
          suggestion: 'Por favor, inicia sesión para continuar.',
        }
      default:
        return {
          title: 'Error de Autenticación',
          description: 'Ocurrió un error inesperado durante la autenticación.',
          suggestion:
            'Intenta nuevamente o contacta al soporte si el problema persiste.',
        }
    }
  }

  const errorDetails = getErrorDetails(error)

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <AlertTriangle className="mx-auto h-12 w-12 text-red-600" />
          <CardTitle className="mt-4 text-red-900">
            {errorDetails.title}
          </CardTitle>
          <CardDescription className="text-red-700">
            {errorDetails.description}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert>
            <AlertDescription>{errorDetails.suggestion}</AlertDescription>
          </Alert>

          {error && (
            <div className="rounded-lg border border-gray-200 bg-gray-50 p-3">
              <p className="text-xs text-gray-600">
                <strong>Código de error:</strong> {error}
              </p>
            </div>
          )}

          <div className="flex flex-col space-y-2">
            <Button asChild className="w-full">
              <Link href="/auth/signin">
                <RefreshCw className="mr-2 h-4 w-4" />
                Intentar nuevamente
              </Link>
            </Button>

            <Button variant="outline" asChild className="w-full">
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Volver al inicio
              </Link>
            </Button>
          </div>

          <div className="text-muted-foreground text-center text-sm">
            ¿Necesitas ayuda?{' '}
            <Link href="/support" className="text-primary hover:underline">
              Contacta soporte
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
