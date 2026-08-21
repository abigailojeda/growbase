import { defineComponent, type PropType } from 'vue'

import CropReportItem from '@/modules/crops/components/CropReportItem/Index.vue'
import type { Crop, CropReport } from '@/modules/crops/types'
import type { User } from '@/modules/auth/types'
import { ref } from 'vue'

import { useI18n } from 'vue-i18n'

export default defineComponent({
  name: 'CropReportHistory',

  components: {
    CropReportItem,
  },

  props: {
    crop: {
      type: Object as PropType<Crop>,
      required: true,
    },
    reports: {
      type: Array as PropType<CropReport[]>,
      required: true,
    },
    users: {
      type: Array as PropType<User[]>,
      default: () => [],
    },
  },

  setup(props) {
    const expandedReportId = ref<string | null>(null)

    const { t } = useI18n()

    const toggleReport = (reportId: string) => {
      expandedReportId.value = expandedReportId.value === reportId ? null : reportId
    }
    const getReporterName = (userId: string) => {
      return props.users.find((user) => user.id === userId)?.name ?? userId
    }

    return {
      expandedReportId,
      toggleReport,
      getReporterName,
      t,
    }
  },
})
