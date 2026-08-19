import { computed, defineComponent, ref, type PropType } from 'vue'

import TaskPreview from '@/modules/tasks/components/TaskPreview/Index.vue'
import type { User } from '@/modules/auth/types'
import type { Task, TaskStatus, TaskStatusSummary } from '@/modules/tasks/types'
import BarIcon from '@/components/icons/BarIcon.vue'
import ListIcon from '@/components/icons/ListIcon.vue'

type TaskOverviewView = 'summary' | 'tasks'

interface TaskGroup {
  status: TaskStatus
  label: string
  tasks: Task[]
}

export default defineComponent({
  name: 'TaskStatusOverview',

  components: {
    TaskPreview,
    BarIcon,
    ListIcon,
  },

  props: {
    title: {
      type: String,
      required: true,
    },
    summary: {
      type: Object as PropType<TaskStatusSummary>,
      required: true,
    },
    tasks: {
      type: Array as PropType<Task[]>,
      required: true,
    },
    workers: {
      type: Array as PropType<User[]>,
      default: () => [],
    },
  },

  setup(props) {
    const activeView = ref<TaskOverviewView>('tasks')

    const taskGroups = computed<TaskGroup[]>(() => [
      {
        status: 'pending',
        label: 'Pending',
        tasks: props.tasks.filter((task) => task.status === 'pending'),
      },
      {
        status: 'in-progress',
        label: 'In progress',
        tasks: props.tasks.filter((task) => task.status === 'in-progress'),
      },
      {
        status: 'completed',
        label: 'Completed',
        tasks: props.tasks.filter((task) => task.status === 'completed'),
      },
    ])

    const getAssigneeName = (userId: string) =>
      props.workers.find((worker) => worker.id === userId)?.name

    return {
      activeView,
      taskGroups,
      getAssigneeName,
    }
  },
})
