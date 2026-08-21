import { defineComponent } from 'vue'

import ReportIcon from '@/components/icons/ReportIcon.vue'
import GridIcon from '@/components/icons/GridIcon.vue'
import ListIcon from '@/components/icons/ListIcon.vue'
import CropIcon from '@/components/icons/CropIcon.vue'
import { useI18n } from 'vue-i18n'

const navigationItems = [
  {
    label: 'navigation.overview',
    to: '/app',
    icon: GridIcon,
  },
  {
    label: 'navigation.crops',
    to: '/app/crops',
    icon: CropIcon,
  },
  {
    label: 'navigation.tasks',
    to: '/app/tasks',
    icon: ListIcon,
  },
  {
    label: 'navigation.reports',
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
    const { t } = useI18n()

    return {
      navigationItems,
      t,
    }
  },
})
