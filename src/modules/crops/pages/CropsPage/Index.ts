import { storeToRefs } from 'pinia'
import { defineComponent, onMounted } from 'vue'

import CropCard from '@/modules/crops/components/CropCard/Index.vue'
import { useCrops } from '@/composables/useCrops/useCrops'
import { useCropStore } from '@/modules/crops/stores/crop.store'
import ArrowIcon from '@/components/icons/ArrowIcon.vue'

export default defineComponent({
  name: 'CropsPage',

  components: {
    CropCard,
    ArrowIcon,
  },

  setup() {
    const cropStore = useCropStore()
    const { crops } = storeToRefs(cropStore)
    const { loadCrops, latestReports } = useCrops()

    onMounted(loadCrops)

    return {
      crops,
      latestReports,
    }
  },
})
