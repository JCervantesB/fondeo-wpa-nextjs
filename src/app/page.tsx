import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Fondeo
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Conectando inversores y emprendedores para construir el futuro juntos
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="text-center">
            <CardHeader>
              <CardTitle className="text-2xl mb-2">🚀</CardTitle>
              <CardTitle>Para Emprendedores</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Encuentra inversores que compartan tu visión y acelera el crecimiento de tu startup
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <CardTitle className="text-2xl mb-2">💰</CardTitle>
              <CardTitle>Para Inversores</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Descubre startups prometedoras y diversifica tu portfolio con oportunidades únicas
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <CardTitle className="text-2xl mb-2">🤝</CardTitle>
              <CardTitle>Matching Inteligente</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Nuestro algoritmo conecta perfiles compatibles basado en criterios específicos
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            ¿Listo para encontrar tu match perfecto?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-3">
              Soy Emprendedor
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-3">
              Soy Inversor
            </Button>
          </div>
        </div>

        {/* Status */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-green-100 dark:bg-green-900 rounded-full">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
            <span className="text-green-800 dark:text-green-200 text-sm font-medium">
              Fase 1 - Sprint 1: Setup del Proyecto ✅
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
