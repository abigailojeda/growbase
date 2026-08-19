import { describe, expect, it } from 'vitest'
import { cropService } from './crop.service'

describe('cropService', () => {
  it('returns crops from a business line', async () => {
    const crops = await cropService.getByBusinessLine('vineyard')

    expect(crops.length).toBeGreaterThan(0)
    expect(crops.every((crop) => crop.businessLineId === 'vineyard')).toBe(true)
  })

  it('returns crops assigned to a user', async () => {
    const crops = await cropService.getAssignedToUser('vineyard-worker')

    expect(crops.length).toBeGreaterThan(0)
    expect(crops.every((crop) => crop.assignedUserIds.includes('vineyard-worker'))).toBe(true)
  })
})
