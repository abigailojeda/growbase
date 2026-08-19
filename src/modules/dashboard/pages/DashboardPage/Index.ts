import { storeToRefs } from 'pinia'
import { defineComponent, onMounted } from 'vue'

import { useCrops } from '@/composables/useCrops/useCrops'
import { useDashboardSummary } from '@/composables/useDashboardSummary/useDashboardSummary'
import { useCropStore } from '@/modules/crops/stores/crop.store'
import CropHealthOverview from '@/modules/dashboard/components/CropHealthOverview/Index.vue'
import CropsNeedingAttention from '@/modules/dashboard/components/CropsNeedingAttention/Index.vue'
import SummaryCard from '@/modules/dashboard/components/SummaryCard/Index.vue'

export default defineComponent({
  name: 'DashboardPage',

  components: {
    CropHealthOverview,
    CropsNeedingAttention,
    SummaryCard,
  },

  setup() {
    const cropStore = useCropStore()
    const { crops } = storeToRefs(cropStore)

    const { loadCrops, latestReports } = useCrops()

    const {
      totalCrops,
      activeCrops,
      cropsNeedingAttention,
      cropsNeedingAttentionList,
      healthCounts,
    } = useDashboardSummary(crops, latestReports)

    onMounted(loadCrops)

    return {
      totalCrops,
      activeCrops,
      cropsNeedingAttention,
      cropsNeedingAttentionList,
      healthCounts,
    }
  },
})
