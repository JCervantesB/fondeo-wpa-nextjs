import { PrismaClient, UserType, VisibilityType } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Iniciando seed de la base de datos...')

  // Crear usuarios de ejemplo
  const adminUser = await prisma.user.upsert({
    where: { email: 'admin@fondeo.app' },
    update: {},
    create: {
      email: 'admin@fondeo.app',
      emailVerified: new Date(),
      userType: UserType.ADMIN,
      profile: {
        create: {
          firstName: 'Admin',
          lastName: 'Fondeo',
          displayName: 'Admin Fondeo',
          bio: 'Administrador de la plataforma Fondeo',
          visibility: VisibilityType.PUBLIC,
        },
      },
      settings: {
        create: {
          emailNotifications: true,
          pushNotifications: true,
          marketingEmails: false,
          language: 'es',
          timezone: 'America/Mexico_City',
        },
      },
    },
  })

  const investorUser = await prisma.user.upsert({
    where: { email: 'investor@example.com' },
    update: {},
    create: {
      email: 'investor@example.com',
      emailVerified: new Date(),
      userType: UserType.INVESTOR,
      profile: {
        create: {
          firstName: 'María',
          lastName: 'González',
          displayName: 'María González',
          bio: 'Inversionista interesada en startups tecnológicas',
          visibility: VisibilityType.PUBLIC,
        },
      },
      settings: {
        create: {
          emailNotifications: true,
          pushNotifications: true,
          marketingEmails: true,
          language: 'es',
          timezone: 'America/Mexico_City',
        },
      },
    },
  })

  const entrepreneurUser = await prisma.user.upsert({
    where: { email: 'entrepreneur@example.com' },
    update: {},
    create: {
      email: 'entrepreneur@example.com',
      emailVerified: new Date(),
      userType: UserType.ENTREPRENEUR,
      profile: {
        create: {
          firstName: 'Carlos',
          lastName: 'Rodríguez',
          displayName: 'Carlos Rodríguez',
          bio: 'Emprendedor con experiencia en fintech y e-commerce',
          visibility: VisibilityType.PUBLIC,
        },
      },
      settings: {
        create: {
          emailNotifications: true,
          pushNotifications: true,
          marketingEmails: true,
          language: 'es',
          timezone: 'America/Mexico_City',
        },
      },
    },
  })

  console.log('✅ Usuarios creados:')
  console.log('  - Admin:', adminUser.email)
  console.log('  - Investor:', investorUser.email)
  console.log('  - Entrepreneur:', entrepreneurUser.email)

  console.log('🎉 Seed completado exitosamente!')
}

main()
  .catch(e => {
    console.error('❌ Error durante el seed:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
