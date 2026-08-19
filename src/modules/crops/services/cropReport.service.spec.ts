import { describe, expect, it } from 'vitest'

import { cropReports } from '@/mocks/cropReports'
import { cropReportService } from './cropReport.service'

describe('cropReportService', () => {
  it('returns the latest report for a crop', async () => {
    const report = await cropReportService.getLatestByCrop('vineyard-north')

    const latestReport = cropReports
      .filter((report) => report.cropId === 'vineyard-north')
      .sort((a, b) => new Date(b.reportedAt).getTime() - new Date(a.reportedAt).getTime())[0]

    expect(report).toEqual(latestReport)
  })

  it('returns undefined when the crop has no reports', async () => {
    const report = await cropReportService.getLatestByCrop('vineyard-south')

    expect(report).toBeUndefined()
  })
})
