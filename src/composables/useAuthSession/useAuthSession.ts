import { storeToRefs } from 'pinia'
import { watch } from 'vue'

import { useAuthStore } from '@/modules/auth/stores/auth.store'

const STORAGE_KEY = 'growbase-user-id'

export const useAuthSession = async () => {
  const authStore = useAuthStore()
  const { currentUser } = storeToRefs(authStore)

  const storedUserId = localStorage.getItem(STORAGE_KEY)

  if (storedUserId) {
    const restored = await authStore.restoreSession(storedUserId)

    if (!restored) {
      localStorage.removeItem(STORAGE_KEY)
    }
  }

  watch(currentUser, (user) => {
    if (user) {
      localStorage.setItem(STORAGE_KEY, user.id)
      return
    }

    localStorage.removeItem(STORAGE_KEY)
  })
}
