import { crops } from '@/mocks/crops'

export const cropService = {
  async getByBusinessLine(businessLineId: string) {
    return crops.filter((crop) => crop.businessLineId === businessLineId)
  },

  async getAssignedToUser(userId: string) {
    return crops.filter((crop) => crop.assignedUserIds.includes(userId))
  },
}
