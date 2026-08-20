import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

import TeamOverview from './Index.vue'

const workers = [
  {
    userId: 'vineyard-worker',
    name: 'Vineyard Worker',
    total: 7,
    pending: 3,
    inProgress: 2,
    completed: 2,
  },
  {
    userId: 'vineyard-worker-2',
    name: 'Marta Ruiz',
    total: 3,
    pending: 1,
    inProgress: 1,
    completed: 1,
  },
]

describe('TeamOverview', () => {
  it('renders worker task summaries by default', () => {
    const wrapper = mount(TeamOverview, {
      props: {
        workers,
      },
      global: {
        stubs: {
          Chart: {
            template: '<div data-test="chart" />',
          },
        },
      },
    })

    expect(wrapper.text()).toContain('Vineyard Worker')
    expect(wrapper.text()).toContain('Marta Ruiz')
    expect(wrapper.text()).toContain('7 tasks')
    expect(wrapper.text()).toContain('3 tasks')
  })

  it('switches to chart view', async () => {
    const wrapper = mount(TeamOverview, {
      props: {
        workers,
      },
      global: {
        stubs: {
          Chart: {
            template: '<div data-test="chart" />',
          },
        },
      },
    })

    await wrapper.get('button[aria-label="Chart view"]').trigger('click')

    expect(wrapper.find('[data-test="chart"]').exists()).toBe(true)
  })

  it('renders the empty state', () => {
    const wrapper = mount(TeamOverview, {
      props: {
        workers: [],
      },
      global: {
        stubs: {
          Chart: {
            template: '<div data-test="chart" />',
          },
        },
      },
    })

    expect(wrapper.text()).toContain('No workers available.')
  })
})
