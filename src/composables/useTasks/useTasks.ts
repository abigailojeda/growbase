import { useAuthStore } from '@/modules/auth/stores/auth.store'
import { taskService } from '@/modules/tasks/services/task.service'
import { useTaskStore } from '@/modules/tasks/stores/task.store'

export const useTasks = () => {
  const authStore = useAuthStore()
  const taskStore = useTaskStore()

  const loadTasks = async () => {
    const user = authStore.currentUser

    if (!user) {
      taskStore.clearTasks()
      return
    }

    const tasks =
      user.role === 'admin'
        ? await taskService.getByBusinessLine(user.businessLineId)
        : await taskService.getByUser(user.id)

    taskStore.setTasks(tasks)
  }

  return {
    loadTasks,
  }
}
