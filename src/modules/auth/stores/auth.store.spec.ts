import { beforeEach, describe, expect, it } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'

import { useAuthStore } from './auth.store'

describe('authStore', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('logs in a demo user', async () => {
    const store = useAuthStore()

    await store.loginDemo('vineyard', 'admin')

    expect(store.currentUser?.id).toBe('vineyard-admin')
    expect(store.isAuthenticated).toBe(true)
  })

  it('logs out the current user', async () => {
    const store = useAuthStore()

    await store.loginDemo('vineyard', 'admin')
    store.logout()

    expect(store.currentUser).toBeNull()
    expect(store.isAuthenticated).toBe(false)
  })
})
