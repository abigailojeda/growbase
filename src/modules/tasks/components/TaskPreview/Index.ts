import { computed, defineComponent, type PropType } from 'vue'

import type { Task } from '@/modules/tasks/types'
import UserIcon from '@/components/icons/UserIcon.vue'

export default defineComponent({
  name: 'TaskPreview',
  components: {
    UserIcon,
  },

  props: {
    task: {
      type: Object as PropType<Task>,
      required: true,
    },
    assigneeName: {
      type: String,
      default: undefined,
    },
  },

  setup(props) {
    const formattedDueDate = computed(() =>
      new Intl.DateTimeFormat('en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
      }).format(new Date(props.task.dueDate)),
    )

    const headerClass = computed(() => {
      switch (props.task.status) {
        case 'pending':
          return 'bg-amber-500/10 text-amber-700 dark:text-amber-400'
        case 'in-progress':
          return 'bg-blue-500/10 text-blue-700 dark:text-blue-400'
        case 'completed':
          return 'bg-green-500/10 text-green-700 dark:text-green-400'
      }
    })

    return {
      formattedDueDate,
      headerClass,
    }
  },
})
