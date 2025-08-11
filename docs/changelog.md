# Changelog - Proyecto Fondeo

Todos los cambios notables en este proyecto serán documentados en este archivo.

El formato está basado en [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
y este proyecto adhiere a [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- Configuración inicial del proyecto Next.js 15 con TypeScript
- Configuración de TailwindCSS 4
- Estructura base del proyecto con App Router
- Configuración de ESLint
- Documentación inicial del proyecto

### Changed

### Deprecated

### Removed

### Fixed

### Security

---

## [0.1.2] - 2024-12-19

### Corregido
- Error de hidratación causado por fuentes de Google (Geist)
- Eliminadas variables de fuentes no utilizadas en globals.css
- Actualizado idioma de la aplicación a español
- Mejorados metadatos del proyecto (título y descripción)

### Técnico
- **Hidratación:** Resuelto error de mismatch entre servidor y cliente
- **Fuentes:** Removidas Geist y Geist_Mono para evitar conflictos SSR
- **Metadatos:** Actualizados con información específica de Fondeo
- **Idioma:** Cambiado de "en" a "es" en el HTML lang

## [0.1.1] - 2024-12-19

### Añadido
- Instalación y configuración completa de shadcn/ui
- Componentes UI base: Button, Card, Input, Label
- Página de inicio con diseño inicial del proyecto
- Documentación técnica del setup (setup-guide.md)
- Configuración de .gitignore para archivos de documentación
- Servidor de desarrollo funcionando correctamente

### Modificado
- Actualización de page.tsx con diseño inicial de Fondeo
- Configuración de componentes shadcn/ui en src/components/ui/
- Variables CSS actualizadas para tema de shadcn/ui
- TODOS.md actualizado con tareas completadas del Sprint 1

### Técnico
- **shadcn/ui:** Configurado con tema Slate
- **Componentes:** Button, Card, Input, Label instalados
- **Servidor:** Next.js dev server con Turbopack funcionando en puerto 3000
- **Utilidades:** src/lib/utils.ts creado para shadcn/ui

## [0.1.0] - 2025-01-11

### Added
- Inicialización del proyecto Fondeo
- Setup de Next.js 15 con TypeScript
- Configuración de TailwindCSS 4
- Estructura de directorios del proyecto
- Configuración de ESLint y PostCSS
- Layout principal de la aplicación
- Página de inicio básica
- Documentación inicial (README, PRD, Propuesta)
- Plan de desarrollo detallado (TODOS.md)
- Changelog para seguimiento de cambios

### Technical Details
- **Framework:** Next.js 15.4.6 con App Router
- **Language:** TypeScript 5.x
- **Styling:** TailwindCSS 4.x
- **Linting:** ESLint con configuración Next.js
- **Package Manager:** npm
- **Node Version:** 20.x

### Project Structure
```
fondeo/
├── src/
│   └── app/
│       ├── layout.tsx
│       ├── page.tsx
│       └── globals.css
├── docs/
│   ├── changelog.md
│   ├── i18n-analysis.md
│   └── i18n-implementation.md
├── public/
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.ts
├── eslint.config.mjs
└── postcss.config.mjs
```