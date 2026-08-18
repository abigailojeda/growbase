import { describe, expect, it } from 'vitest'
import { cropReportService } from './cropReport.service'

describe('cropReportService', () => {
  it('returns the latest report for a crop', async () => {
    const report = await cropReportService.getLatestByCrop('vineyard-north')

    expect(report?.id).toBe('report-vineyard-north-2')
  })

  it('returns undefined when the crop has no reports', async () => {
    const report = await cropReportService.getLatestByCrop('vineyard-south')

    expect(report).toBeUndefined()
  })
})
