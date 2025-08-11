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
      name: 'Admin Fondeo',
      type: UserType.ADMIN,
      verified: true,
      profile: {
        create: {
          bio: 'Administrador de la plataforma Fondeo',
          location: 'México',
          completeness: 100,
          score: 95,
        },
      },
      settings: {
        create: {
          emailNotifications: true,
          pushNotifications: true,
          matchNotifications: true,
          messageNotifications: true,
          profileVisibility: VisibilityType.PUBLIC,
          showOnlineStatus: true,
          maxDistance: 50,
        },
      },
    },
  })

  const investorUser = await prisma.user.upsert({
    where: { email: 'investor@example.com' },
    update: {},
    create: {
      email: 'investor@example.com',
      name: 'María González',
      type: UserType.INVESTOR,
      verified: true,
      profile: {
        create: {
          bio: 'Inversionista interesada en startups tecnológicas',
          location: 'Ciudad de México',
          website: 'https://mariagonzalez.com',
          linkedin: 'https://linkedin.com/in/mariagonzalez',
          completeness: 85,
          score: 88,
          investorInfo: {
            investmentRange: '$50K - $500K',
            sectors: ['Fintech', 'E-commerce', 'SaaS'],
            stage: 'Seed, Series A',
          },
        },
      },
      settings: {
        create: {
          emailNotifications: true,
          pushNotifications: true,
          matchNotifications: true,
          messageNotifications: true,
          profileVisibility: VisibilityType.PUBLIC,
          showOnlineStatus: true,
          maxDistance: 100,
        },
      },
    },
  })

  const entrepreneurUser = await prisma.user.upsert({
    where: { email: 'entrepreneur@example.com' },
    update: {},
    create: {
      email: 'entrepreneur@example.com',
      name: 'Carlos Rodríguez',
      type: UserType.ENTREPRENEUR,
      verified: true,
      profile: {
        create: {
          bio: 'Emprendedor con experiencia en fintech y e-commerce',
          location: 'Guadalajara, México',
          website: 'https://carlosrodriguez.mx',
          linkedin: 'https://linkedin.com/in/carlosrodriguez',
          twitter: 'https://twitter.com/carlosrod',
          completeness: 90,
          score: 92,
          startupInfo: {
            company: 'TechStart MX',
            stage: 'MVP',
            sector: 'Fintech',
            fundingNeeded: '$250K',
            teamSize: 5,
          },
        },
      },
      settings: {
        create: {
          emailNotifications: true,
          pushNotifications: true,
          matchNotifications: true,
          messageNotifications: true,
          profileVisibility: VisibilityType.PUBLIC,
          showOnlineStatus: true,
          maxDistance: 75,
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
