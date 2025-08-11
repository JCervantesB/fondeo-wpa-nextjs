import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="mb-4 text-5xl font-bold text-gray-900 dark:text-white">
            Fondeo
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-gray-600 dark:text-gray-300">
            Conectando inversores y emprendedores para construir el futuro
            juntos
          </p>
        </div>

        {/* Features Grid */}
        <div className="mb-16 grid gap-8 md:grid-cols-3">
          <Card className="text-center">
            <CardHeader>
              <CardTitle className="mb-2 text-2xl">🚀</CardTitle>
              <CardTitle>Para Emprendedores</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Encuentra inversores que compartan tu visión y acelera el
                crecimiento de tu startup
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <CardTitle className="mb-2 text-2xl">💰</CardTitle>
              <CardTitle>Para Inversores</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Descubre startups prometedoras y diversifica tu portfolio con
                oportunidades únicas
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <CardTitle className="mb-2 text-2xl">🤝</CardTitle>
              <CardTitle>Matching Inteligente</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Nuestro algoritmo conecta perfiles compatibles basado en
                criterios específicos
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="mb-8 text-3xl font-bold text-gray-900 dark:text-white">
            ¿Listo para encontrar tu match perfecto?
          </h2>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button size="lg" className="px-8 py-3 text-lg">
              Soy Emprendedor
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-3 text-lg">
              Soy Inversor
            </Button>
          </div>
        </div>

        {/* Status */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center rounded-full bg-green-100 px-4 py-2 dark:bg-green-900">
            <div className="mr-2 h-2 w-2 rounded-full bg-green-500"></div>
            <span className="text-sm font-medium text-green-800 dark:text-green-200">
              Fase 1 - Sprint 1: Setup del Proyecto ✅
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
