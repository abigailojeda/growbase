import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

import { authService } from '../services/auth.service'
import type { User, UserRole } from '../types'

export const useAuthStore = defineStore('auth', () => {
  const currentUser = ref<User | null>(null)

  const isAuthenticated = computed(() => currentUser.value !== null)

  const loginDemo = async (businessLineId: string, role: UserRole) => {
    const user = await authService.loginDemo(businessLineId, role)

    if (!user) {
      return false
    }

    currentUser.value = user

    return true
  }

  const logout = () => {
    currentUser.value = null
  }

  const restoreSession = async (userId: string) => {
    const user = await authService.getById(userId)

    if (!user) {
      currentUser.value = null
      return false
    }

    currentUser.value = user

    return true
  }

  return {
    currentUser,
    isAuthenticated,
    restoreSession,
    loginDemo,
    logout,
  }
})
