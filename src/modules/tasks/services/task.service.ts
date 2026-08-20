import { tasks } from '@/mocks/tasks'

export const taskService = {
  async getByBusinessLine(businessLineId: string) {
    return tasks.filter((task) => task.businessLineId === businessLineId)
  },

  async getByUser(userId: string) {
    return tasks.filter((task) => task.assignedUserId === userId)
  },
}
