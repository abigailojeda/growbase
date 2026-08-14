import { users } from '@/mocks/users'

import type { UserRole } from '../types'

export const authService = {
  async loginDemo(businessLineId: string, role: UserRole) {
    return users.find((user) => user.businessLineId === businessLineId && user.role === role)
  },

  async getById(id: string) {
    return users.find((user) => user.id === id)
  },
}
