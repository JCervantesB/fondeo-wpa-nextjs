import {
  User,
  Profile,
  UserSettings,
  UserType,
  VisibilityType,
} from '@prisma/client'

// Tipos extendidos de Prisma
export type UserWithProfile = User & {
  profile: Profile | null
  settings: UserSettings | null
}

export type UserWithRelations = User & {
  profile: Profile | null
  settings: UserSettings | null
  accounts: Account[]
  sessions: Session[]
}

// Tipos para autenticación
export interface AuthUser {
  id: string
  email: string
  userType: UserType
  profile?: {
    firstName: string | null
    lastName: string | null
    displayName: string | null
    avatar: string | null
  } | null
}

// Tipos para formularios
export interface LoginFormData {
  email: string
  password: string
  rememberMe?: boolean
}

export interface RegisterFormData {
  email: string
  password: string
  confirmPassword: string
  firstName: string
  lastName: string
  userType: UserType
  acceptTerms: boolean
}

export interface ProfileFormData {
  firstName: string
  lastName: string
  displayName: string
  bio?: string
  avatar?: string
  visibility: VisibilityType
}

export interface SettingsFormData {
  emailNotifications: boolean
  pushNotifications: boolean
  marketingEmails: boolean
  language: string
  timezone: string
}

// Tipos para API responses
export interface ApiResponse<T = unknown> {
  success: boolean
  data?: T
  error?: string
  message?: string
}

export interface PaginatedResponse<T> {
  data: T[]
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
    hasNext: boolean
    hasPrev: boolean
  }
}

// Tipos para componentes UI
export interface ButtonProps {
  variant?:
    | 'default'
    | 'destructive'
    | 'outline'
    | 'secondary'
    | 'ghost'
    | 'link'
  size?: 'default' | 'sm' | 'lg' | 'icon'
  children: React.ReactNode
  className?: string
  disabled?: boolean
  loading?: boolean
  onClick?: () => void
}

export interface InputProps {
  label?: string
  placeholder?: string
  error?: string
  required?: boolean
  disabled?: boolean
  className?: string
}

// Tipos para navegación
export interface NavItem {
  title: string
  href: string
  icon?: React.ComponentType<{ className?: string }>
  badge?: string | number
  children?: NavItem[]
}

// Tipos para notificaciones
export interface Notification {
  id: string
  type: 'success' | 'error' | 'warning' | 'info'
  title: string
  message?: string
  duration?: number
  action?: {
    label: string
    onClick: () => void
  }
}

// Re-exportar tipos de Prisma
export { UserType, VisibilityType } from '@prisma/client'
export type {
  User,
  Profile,
  UserSettings,
  Account,
  Session,
  VerificationToken,
} from '@prisma/client'
