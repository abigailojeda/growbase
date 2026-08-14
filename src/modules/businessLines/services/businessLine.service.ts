import { businessLines } from '@/mocks/businessLines'

export const businessLineService = {
  async getAll() {
    return businessLines
  },
  async getById(id: string) {
    return businessLines.find((businessLine) => businessLine.id === id)
  },
}
