import { cropReports } from '@/mocks/cropReports'
import type { CropReport } from '@/modules/crops/types'

const getLatestByCrop = async (cropId: string): Promise<CropReport | undefined> => {
  return cropReports
    .filter((report) => report.cropId === cropId)
    .sort((a, b) => new Date(b.reportedAt).getTime() - new Date(a.reportedAt).getTime())[0]
}

export const cropReportService = {
  getLatestByCrop,

  async getLatestByCrops(cropIds: string[]): Promise<Record<string, CropReport>> {
    const reports = await Promise.all(cropIds.map((cropId) => getLatestByCrop(cropId)))

    return Object.fromEntries(
      reports
        .filter((report): report is CropReport => report !== undefined)
        .map((report) => [report.cropId, report]),
    )
  },

  async getByCrop(cropId: string) {
    return cropReports
      .filter((report) => report.cropId === cropId)
      .sort((a, b) => new Date(b.reportedAt).getTime() - new Date(a.reportedAt).getTime())
  },
}
