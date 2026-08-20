import { defineComponent } from 'vue'

import ReportIcon from '@/components/icons/ReportIcon.vue'
import GridIcon from '@/components/icons/GridIcon.vue'
import ListIcon from '@/components/icons/ListIcon.vue'
import CropIcon from '@/components/icons/CropIcon.vue'

const navigationItems = [
  {
    label: 'Overview',
    to: '/app',
    icon: GridIcon,
  },
  {
    label: 'Crops',
    to: '/app/crops',
    icon: CropIcon,
  },
  {
    label: 'Tasks',
    to: '/app/tasks',
    icon: ListIcon,
  },
  {
    label: 'Reports',
    to: '/app/reports',
    icon: ReportIcon,
  },
]

export default defineComponent({
  name: 'SidebarMenu',

  props: {
    collapsed: {
      type: Boolean,
      required: true,
    },
  },

  emits: ['navigate'],

  setup() {
    return {
      navigationItems,
    }
  },
})
