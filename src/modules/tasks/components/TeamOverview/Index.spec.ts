import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

import TeamOverview from './Index.vue'

describe('TeamOverview', () => {
  it('renders worker task summaries', () => {
    const wrapper = mount(TeamOverview, {
      props: {
        workers: [
          {
            userId: 'worker-1',
            name: 'Marta Ruiz',
            total: 5,
            pending: 2,
            inProgress: 1,
            completed: 2,
          },
          {
            userId: 'worker-2',
            name: 'Carlos Vega',
            total: 4,
            pending: 1,
            inProgress: 1,
            completed: 2,
          },
        ],
      },
    })

    expect(wrapper.text()).toContain('Marta Ruiz')
    expect(wrapper.text()).toContain('Carlos Vega')
    expect(wrapper.text()).toContain('5 tasks')
    expect(wrapper.text()).toContain('4 tasks')
  })

  it('renders an empty state', () => {
    const wrapper = mount(TeamOverview, {
      props: {
        workers: [],
      },
    })

    expect(wrapper.text()).toContain('No workers available.')
  })
})
