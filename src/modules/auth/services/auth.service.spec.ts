import { describe, expect, it } from 'vitest'

import { authService } from './auth.service'

describe('authService', () => {
  it('returns the demo user for a business line and role', async () => {
    const user = await authService.loginDemo('vineyard', 'admin')

    expect(user).toEqual({
      id: 'vineyard-admin',
      name: 'Vineyard Admin',
      businessLineId: 'vineyard',
      role: 'admin',
    })
  })

  it('returns a user by id', async () => {
    const user = await authService.getById('vineyard-admin')

    expect(user).toEqual({
      id: 'vineyard-admin',
      name: 'Vineyard Admin',
      businessLineId: 'vineyard',
      role: 'admin',
    })
  })
})
