import type { ChartData } from 'chart.js'
import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

import Chart from './Index.vue'

const data: ChartData<'bar'> = {
  labels: ['Worker 1'],
  datasets: [
    {
      label: 'Pending',
      data: [2],
    },
  ],
}

describe('Chart', () => {
  it('renders the chart component', () => {
    const wrapper = mount(Chart, {
      props: {
        type: 'bar',
        data,
        ariaLabel: 'Task status by worker',
      },
      global: {
        stubs: {
          VueChart: {
            template: '<div data-test="chart" />',
          },
        },
      },
    })

    expect(wrapper.find('[data-test="chart"]').exists()).toBe(true)
  })
})
