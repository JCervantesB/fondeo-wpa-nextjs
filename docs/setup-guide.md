# Guía de Setup - Proyecto Fondeo

## Descripción del Proyecto

Fondeo es una PWA (Progressive Web App) de matching para conectar inversores y emprendedores. La aplicación utiliza un algoritmo inteligente para emparejar perfiles compatibles basándose en criterios específicos como sector, stage de la startup, ticket de inversión y ubicación geográfica.

## Stack Tecnológico

### Frontend
- **Framework:** Next.js 15.4.6 con App Router
- **Lenguaje:** TypeScript 5.x
- **Styling:** TailwindCSS 4.x
- **Componentes:** shadcn/ui
- **Internacionalización:** next-intl (planificado)

### Backend
- **API:** Next.js API Routes
- **ORM:** Prisma (planificado)
- **Base de datos:** PostgreSQL (Aiven.io)
- **Autenticación:** NextAuth.js (planificado)
- **Real-time:** Socket.io (planificado)

### DevOps e Infraestructura
- **Hosting:** Coolify (planificado)
- **Database:** Aiven.io PostgreSQL
- **Monitoring:** Sentry (planificado)
- **CI/CD:** GitHub Actions (planificado)

## Estructura del Proyecto

```
fondeo/
├── src/
│   ├── app/                 # App Router de Next.js
│   │   ├── layout.tsx       # Layout principal
│   │   ├── page.tsx         # Página de inicio
│   │   └── globals.css      # Estilos globales
│   ├── components/          # Componentes reutilizables
│   │   └── ui/             # Componentes de shadcn/ui
│   └── lib/                # Utilidades y configuraciones
├── docs/                   # Documentación del proyecto
├── public/                 # Archivos estáticos
├── package.json           # Dependencias y scripts
├── tsconfig.json          # Configuración TypeScript
├── tailwind.config.ts     # Configuración TailwindCSS
├── next.config.ts         # Configuración Next.js
├── eslint.config.mjs      # Configuración ESLint
└── .gitignore            # Archivos ignorados por Git
```

## Instalación y Setup

### Prerrequisitos
- Node.js 20.x o superior
- npm o yarn
- Git

### Pasos de Instalación

1. **Clonar el repositorio:**
   ```bash
   git clone <repository-url>
   cd fondeo
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Ejecutar en modo desarrollo:**
   ```bash
   npm run dev
   ```

4. **Abrir en el navegador:**
   ```
   http://localhost:3000
   ```

## Scripts Disponibles

- `npm run dev` - Ejecuta el servidor de desarrollo con Turbopack
- `npm run build` - Construye la aplicación para producción
- `npm run start` - Ejecuta la aplicación en modo producción
- `npm run lint` - Ejecuta ESLint para verificar el código

## Configuración de Desarrollo

### ESLint
El proyecto utiliza la configuración estándar de Next.js para ESLint, que incluye:
- Reglas de React y React Hooks
- Reglas específicas de Next.js
- Reglas de TypeScript

### TailwindCSS
Configuración personalizada con:
- Variables CSS para temas
- Configuración de shadcn/ui
- Soporte para modo oscuro

### TypeScript
Configuración estricta con:
- Strict mode habilitado
- Path mapping para imports (`@/*`)
- Soporte completo para Next.js

## Próximos Pasos

### Sprint 1 - Pendientes
- [ ] Setup inicial de Prisma ORM
- [ ] Configurar conexión a Aiven.io PostgreSQL
- [ ] Configurar ESLint + Prettier + Husky
- [ ] Setup GitHub Actions CI/CD
- [ ] Configurar Coolify para deployment
- [ ] Setup Sentry para monitoring
- [ ] Configurar variables de entorno
- [ ] Setup testing framework (Jest + React Testing Library)
- [ ] Configurar Playwright para E2E testing

### Sprint 2 - Autenticación
- [ ] Implementar NextAuth.js
- [ ] Crear modelos de datos con Prisma
- [ ] Desarrollar páginas de login/register
- [ ] Implementar sistema de roles

## Recursos Adicionales

- [Documentación de Next.js 15](https://nextjs.org/docs)
- [Documentación de TailwindCSS](https://tailwindcss.com/docs)
- [Documentación de shadcn/ui](https://ui.shadcn.com/)
- [Documentación de TypeScript](https://www.typescriptlang.org/docs/)

## Contacto y Soporte

Para preguntas sobre el setup o desarrollo del proyecto, consultar:
- Documentación en `/docs`
- Issues en GitHub
- Changelog en `/docs/changelog.md`