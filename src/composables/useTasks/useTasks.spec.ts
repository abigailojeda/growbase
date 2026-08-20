import { createPinia, setActivePinia } from 'pinia'
import { beforeEach, describe, expect, it } from 'vitest'

import { useTasks } from './useTasks'
import { useAuthStore } from '@/modules/auth/stores/auth.store'
import { useTaskStore } from '@/modules/tasks/stores/task.store'

describe('useTasks', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('loads all tasks from the business line for an admin', async () => {
    const authStore = useAuthStore()
    const taskStore = useTaskStore()

    authStore.currentUser = {
      id: 'vineyard-admin',
      name: 'Vineyard Admin',
      businessLineId: 'vineyard',
      role: 'admin',
    }

    const { loadTasks } = useTasks()

    await loadTasks()

    expect(taskStore.tasks.length).toBeGreaterThan(0)
    expect(taskStore.tasks.every((task) => task.businessLineId === 'vineyard')).toBe(true)
  })

  it('loads only tasks assigned to a worker', async () => {
    const authStore = useAuthStore()
    const taskStore = useTaskStore()

    authStore.currentUser = {
      id: 'vineyard-worker',
      name: 'Vineyard Worker',
      businessLineId: 'vineyard',
      role: 'worker',
    }

    const { loadTasks } = useTasks()

    await loadTasks()

    expect(taskStore.tasks.length).toBeGreaterThan(0)
    expect(taskStore.tasks.every((task) => task.assignedUserId === 'vineyard-worker')).toBe(true)
  })

  it('clears tasks when there is no current user', async () => {
    const taskStore = useTaskStore()

    taskStore.setTasks([
      {
        id: 'task-1',
        businessLineId: 'vineyard',
        cropId: 'vineyard-north',
        title: 'Inspect irrigation system',
        description: 'Check the irrigation system.',
        assignedUserId: 'vineyard-worker',
        status: 'pending',
        dueDate: '2026-08-21T10:00:00.000Z',
        createdAt: '2026-08-18T08:00:00.000Z',
      },
    ])

    const { loadTasks } = useTasks()

    await loadTasks()

    expect(taskStore.tasks).toEqual([])
  })
})
