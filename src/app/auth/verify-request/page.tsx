'use client'

import { Mail, CheckCircle, Clock, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export default function VerifyRequestPage() {
  const searchParams = useSearchParams()
  const email = searchParams.get('email')
  const _provider = searchParams.get('provider')

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <Mail className="mx-auto h-12 w-12 text-blue-600" />
          <CardTitle className="mt-4">Revisa tu email</CardTitle>
          <CardDescription>
            {email
              ? `Te hemos enviado un enlace de inicio de sesión a ${email}`
              : 'Te hemos enviado un enlace de inicio de sesión'}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-lg border border-blue-200 bg-blue-50 p-4">
            <div className="flex items-start space-x-3">
              <CheckCircle className="mt-0.5 h-5 w-5 text-blue-600" />
              <div>
                <h4 className="mb-1 font-medium text-blue-900">
                  Email enviado
                </h4>
                <p className="text-sm text-blue-800">
                  Haz clic en el enlace del email para iniciar sesión. El enlace
                  expirará en 24 horas.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-yellow-200 bg-yellow-50 p-4">
            <div className="flex items-start space-x-3">
              <Clock className="mt-0.5 h-5 w-5 text-yellow-600" />
              <div>
                <h4 className="mb-1 font-medium text-yellow-900">
                  ¿No ves el email?
                </h4>
                <ul className="space-y-1 text-sm text-yellow-800">
                  <li>• Revisa tu carpeta de spam o correo no deseado</li>
                  <li>• Verifica que la dirección de email sea correcta</li>
                  <li>• El email puede tardar unos minutos en llegar</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <Button asChild variant="outline" className="w-full">
              <Link href="/auth/signin">Volver al inicio de sesión</Link>
            </Button>

            <Button asChild variant="ghost" className="w-full">
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Ir al inicio
              </Link>
            </Button>
          </div>

          <div className="text-center">
            <p className="text-muted-foreground text-xs">
              Por razones de seguridad, no podemos mostrar si esta dirección de
              email está registrada en nuestro sistema.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
