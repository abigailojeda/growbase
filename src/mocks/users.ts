import type { User } from '@/modules/auth/types'

export const users = [
  {
    id: 'vineyard-admin',
    name: 'Vineyard Admin',
    businessLineId: 'vineyard',
    role: 'admin',
  },
  {
    id: 'vineyard-worker',
    name: 'Vineyard Worker',
    businessLineId: 'vineyard',
    role: 'worker',
  },
  {
    id: 'greenhouse-admin',
    name: 'Greenhouse Admin',
    businessLineId: 'greenhouse',
    role: 'admin',
  },
  {
    id: 'greenhouse-worker',
    name: 'Greenhouse Worker',
    businessLineId: 'greenhouse',
    role: 'worker',
  },
  {
    id: 'fields-admin',
    name: 'Open Fields Admin',
    businessLineId: 'fields',
    role: 'admin',
  },
  {
    id: 'fields-worker',
    name: 'Open Fields Worker',
    businessLineId: 'fields',
    role: 'worker',
  },
] satisfies User[]
