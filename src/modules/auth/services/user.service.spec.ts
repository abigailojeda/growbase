import { describe, expect, it } from 'vitest'

import { userService } from './user.service'

describe('userService', () => {
  it('returns workers from a business line', async () => {
    const workers = await userService.getWorkersByBusinessLine('vineyard')

    expect(workers.length).toBeGreaterThan(0)

    expect(
      workers.every((worker) => worker.businessLineId === 'vineyard' && worker.role === 'worker'),
    ).toBe(true)
  })
})
