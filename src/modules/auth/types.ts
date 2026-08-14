export type UserRole = 'admin' | 'worker'

export interface User {
  id: string
  name: string
  businessLineId: string
  role: UserRole
}

export interface AccountSelection {
  businessLineId: string
  role: UserRole
}
