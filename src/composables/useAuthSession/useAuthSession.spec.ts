import { beforeEach, describe, expect, it } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import { nextTick } from 'vue'

import { useAuthStore } from '@/modules/auth/stores/auth.store'
import { useAuthSession } from './useAuthSession'

const STORAGE_KEY = 'growbase-user-id'

describe('useAuthSession', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
    localStorage.clear()
  })

  it('restores the stored user session', async () => {
    localStorage.setItem(STORAGE_KEY, 'vineyard-admin')

    await useAuthSession()

    const authStore = useAuthStore()

    expect(authStore.currentUser?.id).toBe('vineyard-admin')
    expect(authStore.isAuthenticated).toBe(true)
  })

  it('persists the current user', async () => {
    const authStore = useAuthStore()

    await useAuthSession()
    await authStore.loginDemo('vineyard', 'admin')
    await nextTick()

    expect(localStorage.getItem(STORAGE_KEY)).toBe('vineyard-admin')
  })

  it('removes the persisted session on logout', async () => {
    const authStore = useAuthStore()

    await useAuthSession()
    await authStore.loginDemo('vineyard', 'admin')
    await nextTick()

    authStore.logout()
    await nextTick()

    expect(localStorage.getItem(STORAGE_KEY)).toBeNull()
  })
})
