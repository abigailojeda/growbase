import { crops } from '@/mocks/crops'

export const cropService = {
  async getByBusinessLine(businessLineId: string) {
    return crops.filter((crop) => crop.businessLineId === businessLineId)
  },

  async getAssignedToUser(userId: string) {
    return crops.filter((crop) => crop.assignedUserIds.includes(userId))
  },

  async getById(id: string) {
    return crops.find((crop) => crop.id === id)
  },

  async setCoverImage(cropId: string, imageId: string) {
    const crop = crops.find((crop) => crop.id === cropId)

    if (!crop || !crop.images.some((image) => image.id === imageId)) {
      return undefined
    }

    crop.coverImageId = imageId

    return {
      ...crop,
    }
  },
}
