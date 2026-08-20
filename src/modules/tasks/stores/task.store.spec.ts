import { createPinia, setActivePinia } from 'pinia'
import { beforeEach, describe, expect, it } from 'vitest'

import type { Task } from '@/modules/tasks/types'
import { useTaskStore } from './task.store'

const task: Task = {
  id: 'task-1',
  businessLineId: 'vineyard',
  cropId: 'vineyard-north',
  title: 'Inspect irrigation system',
  description: 'Check the irrigation system.',
  assignedUserId: 'vineyard-worker',
  status: 'pending',
  dueDate: '2026-08-21T10:00:00.000Z',
  createdAt: '2026-08-18T08:00:00.000Z',
}

describe('taskStore', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('sets tasks', () => {
    const taskStore = useTaskStore()

    taskStore.setTasks([task])

    expect(taskStore.tasks).toEqual([task])
  })

  it('clears tasks', () => {
    const taskStore = useTaskStore()

    taskStore.setTasks([task])
    taskStore.clearTasks()

    expect(taskStore.tasks).toEqual([])
  })
})
