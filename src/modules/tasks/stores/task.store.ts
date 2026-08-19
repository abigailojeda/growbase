import { defineStore } from 'pinia'
import { ref } from 'vue'

import type { Task } from '@/modules/tasks/types'

export const useTaskStore = defineStore('task', () => {
  const tasks = ref<Task[]>([])

  const setTasks = (newTasks: Task[]) => {
    tasks.value = newTasks
  }

  const clearTasks = () => {
    tasks.value = []
  }

  return {
    tasks,
    setTasks,
    clearTasks,
  }
})
