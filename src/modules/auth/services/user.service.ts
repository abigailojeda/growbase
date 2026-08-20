import { users } from '@/mocks/users'

export const userService = {
  async getWorkersByBusinessLine(businessLineId: string) {
    return users.filter((user) => user.businessLineId === businessLineId && user.role === 'worker')
  },
}
