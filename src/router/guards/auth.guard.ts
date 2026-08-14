import { START_LOCATION, type NavigationGuard } from 'vue-router'

import { useAuthStore } from '@/modules/auth/stores/auth.store'

export const authGuard: NavigationGuard = (to, from) => {
  const authStore = useAuthStore()

  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    return {
      path: '/login',
      replace: true,
    }
  }

  if (to.meta.guestOnly && authStore.isAuthenticated) {
    if (from === START_LOCATION) {
      return {
        path: '/app',
        replace: true,
      }
    }

    return false
  }
}
