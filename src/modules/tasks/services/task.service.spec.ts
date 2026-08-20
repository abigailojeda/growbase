import { describe, expect, it } from 'vitest'

import { taskService } from './task.service'

describe('taskService', () => {
  it('returns tasks from a business line', async () => {
    const tasks = await taskService.getByBusinessLine('vineyard')

    expect(tasks.length).toBeGreaterThan(0)
    expect(tasks.every((task) => task.businessLineId === 'vineyard')).toBe(true)
  })

  it('returns tasks assigned to a user', async () => {
    const tasks = await taskService.getByUser('vineyard-worker')

    expect(tasks.length).toBeGreaterThan(0)
    expect(tasks.every((task) => task.assignedUserId === 'vineyard-worker')).toBe(true)
  })
})
