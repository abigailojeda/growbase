import { storeToRefs } from 'pinia'
import { defineComponent, onMounted } from 'vue'

import { useCropStore } from '@/modules/crops/stores/crop.store'
import { useCrops } from '@/composables/useCrops/useCrops'

export default defineComponent({
  name: 'CropsPage',

  setup() {
    const cropStore = useCropStore()
    const { crops } = storeToRefs(cropStore)
    const { loadCrops } = useCrops()

    onMounted(loadCrops)

    return {
      crops,
    }
  },
})
