import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

import type { Task } from '@/modules/tasks/types'
import TaskPreview from './Index.vue'

const task: Task = {
  id: 'task-1',
  businessLineId: 'vineyard',
  cropId: 'vineyard-north',
  title: 'Inspect irrigation system',
  description: 'Check the irrigation lines and water distribution.',
  assignedUserId: 'vineyard-worker',
  status: 'pending',
  dueDate: '2026-08-21T10:00:00.000Z',
  createdAt: '2026-08-18T08:00:00.000Z',
}

describe('TaskPreview', () => {
  it('renders the task information', () => {
    const wrapper = mount(TaskPreview, {
      props: {
        task,
      },
    })

    expect(wrapper.text()).toContain('Inspect irrigation system')
    expect(wrapper.text()).toContain('Check the irrigation lines and water distribution.')
    expect(wrapper.text()).toContain('21 Aug 2026')
  })
})
