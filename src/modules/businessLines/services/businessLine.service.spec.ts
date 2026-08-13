import { describe, expect, it } from 'vitest'

import { businessLines } from '@/mocks/businessLines'
import { businessLineService } from './businessLine.service'

describe('businessLineService', () => {
  it('returns all business lines', async () => {
    const result = await businessLineService.getAll()

    expect(result).toEqual(businessLines)
  })

  it('returns a business line by id', async () => {
    const expectedBusinessLine = businessLines[0]!

    const result = await businessLineService.getById(expectedBusinessLine.id)

    expect(result).toEqual(expectedBusinessLine)
  })

  it('returns undefined when business line does not exist', async () => {
    const result = await businessLineService.getById('unknown')

    expect(result).toBeUndefined()
  })
})
