import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

import type { Task } from '@/modules/tasks/types'
import TaskStatusOverview from './Index.vue'

const tasks: Task[] = [
  {
    id: 'task-1',
    businessLineId: 'vineyard',
    cropId: 'vineyard-north',
    title: 'Inspect irrigation system',
    description: 'Check the irrigation lines.',
    assignedUserId: 'vineyard-worker',
    status: 'pending',
    dueDate: '2026-08-21T10:00:00.000Z',
    createdAt: '2026-08-18T08:00:00.000Z',
  },
  {
    id: 'task-2',
    businessLineId: 'vineyard',
    cropId: 'vineyard-north',
    title: 'Review soil conditions',
    description: 'Inspect the current soil conditions.',
    assignedUserId: 'vineyard-worker',
    status: 'in-progress',
    dueDate: '2026-08-22T10:00:00.000Z',
    createdAt: '2026-08-18T09:00:00.000Z',
  },
]

describe('TaskStatusOverview', () => {
  it('renders tasks view by default', () => {
    const wrapper = mount(TaskStatusOverview, {
      props: {
        title: 'My tasks',
        tasks,
        summary: {
          total: 2,
          pending: 1,
          inProgress: 1,
          completed: 0,
        },
      },
    })

    expect(wrapper.text()).toContain('My tasks')
    expect(wrapper.text()).toContain('Inspect irrigation system')
    expect(wrapper.text()).toContain('Review soil conditions')
  })

  it('switches to summary view', async () => {
    const wrapper = mount(TaskStatusOverview, {
      props: {
        title: 'My tasks',
        tasks,
        summary: {
          total: 2,
          pending: 1,
          inProgress: 1,
          completed: 0,
        },
      },
    })

    const summaryButton = wrapper.get('button[aria-label="Summary view"]')

    await summaryButton.trigger('click')

    expect(wrapper.text()).toContain('Total')
    expect(wrapper.text()).toContain('Pending')
    expect(wrapper.text()).toContain('In progress')
    expect(wrapper.text()).toContain('Completed')
  })
})
