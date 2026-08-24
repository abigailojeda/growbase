import { describe, expect, it } from 'vitest'

import type { Task } from '@/modules/tasks/types'
import { useTaskSummary } from './useTaskSummary'

const tasks: Task[] = [
  {
    id: 'task-1',
    businessLineId: 'vineyard',
    cropId: 'vineyard-north',
    title: 'Inspect irrigation',
    description: 'Inspect the irrigation system.',
    assignedUserId: 'worker-1',
    status: 'pending',
    dueDate: '2026-08-21T10:00:00.000Z',
    createdAt: '2026-08-18T08:00:00.000Z',
  },
  {
    id: 'task-2',
    businessLineId: 'vineyard',
    cropId: 'vineyard-north',
    title: 'Review soil',
    description: 'Review current soil conditions.',
    assignedUserId: 'worker-1',
    status: 'in-progress',
    dueDate: '2026-08-21T12:00:00.000Z',
    createdAt: '2026-08-18T09:00:00.000Z',
  },
  {
    id: 'task-3',
    businessLineId: 'vineyard',
    cropId: 'vineyard-north',
    title: 'Record measurements',
    description: 'Record crop measurements.',
    assignedUserId: 'worker-1',
    status: 'completed',
    dueDate: '2026-08-19T10:00:00.000Z',
    completedAt: '2026-08-19T09:30:00.000Z',
    createdAt: '2026-08-17T08:00:00.000Z',
  },
  {
    id: 'task-4',
    businessLineId: 'vineyard',
    cropId: 'vineyard-south',
    title: 'Inspect crop',
    description: 'Perform a crop inspection.',
    assignedUserId: 'worker-2',
    status: 'pending',
    dueDate: '2026-08-22T10:00:00.000Z',
    createdAt: '2026-08-18T10:00:00.000Z',
  },
  {
    id: 'task-5',
    businessLineId: 'vineyard',
    cropId: 'vineyard-south',
    title: 'Check irrigation',
    description: 'Check irrigation conditions.',
    assignedUserId: 'worker-2',
    status: 'completed',
    dueDate: '2026-08-19T11:00:00.000Z',
    completedAt: '2026-08-19T10:30:00.000Z',
    createdAt: '2026-08-17T09:00:00.000Z',
  },
]

describe('useTaskSummary', () => {
  it('calculates the task summary', () => {
    const { taskSummary } = useTaskSummary(tasks)

    expect(taskSummary.value).toEqual({
      total: 5,
      pending: 2,
      inProgress: 1,
      completed: 2,
    })
  })

  it('calculates task summaries by worker', () => {
    const { workerSummaries } = useTaskSummary(tasks)

    expect(workerSummaries.value).toEqual([
      {
        userId: 'worker-1',
        total: 3,
        pending: 1,
        inProgress: 1,
        completed: 1,
      },
      {
        userId: 'worker-2',
        total: 2,
        pending: 1,
        inProgress: 0,
        completed: 1,
      },
    ])
  })

  it('returns empty summaries when there are no tasks', () => {
    const { taskSummary, workerSummaries } = useTaskSummary([])

    expect(taskSummary.value).toEqual({
      total: 0,
      pending: 0,
      inProgress: 0,
      completed: 0,
    })

    expect(workerSummaries.value).toEqual([])
  })
})
