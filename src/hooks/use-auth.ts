'use client'

import { useRouter } from 'next/navigation'
import { useSession, signIn, signOut } from 'next-auth/react'
import { useCallback } from 'react'

export function useAuth() {
  const { data: session, status } = useSession()
  const router = useRouter()

  const isLoading = status === 'loading'
  const isAuthenticated = status === 'authenticated'
  const user = session?.user

  const login = useCallback(
    async (provider?: string, options?: Record<string, unknown>) => {
      try {
        const result = await signIn(provider, {
          redirect: false,
          ...options,
        })

        if (result?.ok && !result?.error) {
          router.push((options?.callbackUrl as string) || '/dashboard')
        }

        return result
      } catch (error) {
        console.error('Login error:', error)
        throw error
      }
    },
    [router]
  )

  const logout = useCallback(
    async (callbackUrl?: string) => {
      try {
        await signOut({
          redirect: false,
          callbackUrl: callbackUrl || '/',
        })
        router.push(callbackUrl || '/')
      } catch (error) {
        console.error('Logout error:', error)
        throw error
      }
    },
    [router]
  )

  const requireAuth = useCallback(() => {
    if (!isLoading && !isAuthenticated) {
      router.push('/auth/signin')
      return false
    }
    return true
  }, [isLoading, isAuthenticated, router])

  return {
    // Session data
    session,
    user,

    // Status
    isLoading,
    isAuthenticated,

    // Actions
    login,
    logout,
    requireAuth,
  }
}

// Hook para páginas que requieren autenticación
export function useRequireAuth() {
  const auth = useAuth()

  if (!auth.isLoading && !auth.isAuthenticated) {
    auth.requireAuth()
  }

  return auth
}
