import { beforeEach, describe, expect, it } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import { defineComponent } from 'vue'
import { createMemoryHistory, createRouter } from 'vue-router'

import { useAuthStore } from '@/modules/auth/stores/auth.store'
import { authGuard } from './auth.guard'

const StubPage = defineComponent({
  render: () => null,
})

const createTestRouter = () => {
  const router = createRouter({
    history: createMemoryHistory(),
    routes: [
      {
        path: '/',
        component: StubPage,
        meta: {
          guestOnly: true,
        },
      },
      {
        path: '/login',
        component: StubPage,
        meta: {
          guestOnly: true,
        },
      },
      {
        path: '/app',
        component: StubPage,
        meta: {
          requiresAuth: true,
        },
      },
    ],
  })

  router.beforeEach(authGuard)

  return router
}

describe('authGuard', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('redirects unauthenticated users from protected routes to login', async () => {
    const router = createTestRouter()

    await router.push('/app')

    expect(router.currentRoute.value.path).toBe('/login')
  })

  it('allows authenticated users to access protected routes', async () => {
    const authStore = useAuthStore()
    const router = createTestRouter()

    await authStore.loginDemo('vineyard', 'admin')
    await router.push('/app')

    expect(router.currentRoute.value.path).toBe('/app')
  })

  it('redirects authenticated users away from guest routes on initial navigation', async () => {
    const authStore = useAuthStore()
    const router = createTestRouter()

    await authStore.loginDemo('vineyard', 'admin')
    await router.push('/login')

    expect(router.currentRoute.value.path).toBe('/app')
  })

  it('prevents authenticated users from navigating from app to login', async () => {
    const authStore = useAuthStore()
    const router = createTestRouter()

    await authStore.loginDemo('vineyard', 'admin')
    await router.push('/app')
    await router.push('/login')

    expect(router.currentRoute.value.path).toBe('/app')
  })

  it('allows unauthenticated users to access guest routes', async () => {
    const router = createTestRouter()

    await router.push('/login')

    expect(router.currentRoute.value.path).toBe('/login')
  })
})
