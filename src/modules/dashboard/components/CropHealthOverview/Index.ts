import type { ChartData, ChartOptions } from 'chart.js'
import { computed, defineComponent, ref, type PropType } from 'vue'
import { useI18n } from 'vue-i18n'

import Chart from '@/components/Chart/Index.vue'
import BarIcon from '@/components/icons/BarIcon.vue'
import GridIcon from '@/components/icons/GridIcon.vue'

export interface CropHealthCounts {
  good: number
  warning: number
  critical: number
  noData: number
}

type CropHealthView = 'summary' | 'chart'

export default defineComponent({
  name: 'CropHealthOverview',

  components: {
    BarIcon,
    Chart,
    GridIcon,
  },

  props: {
    counts: {
      type: Object as PropType<CropHealthCounts>,
      required: true,
    },
  },

  setup(props) {
    const { t } = useI18n()

    const activeView = ref<CropHealthView>('summary')

    const chartData = computed<ChartData<'doughnut'>>(() => ({
      labels: [t('health.good'), t('health.warning'), t('health.critical'), t('health.noData')],
      datasets: [
        {
          data: [
            props.counts.good,
            props.counts.warning,
            props.counts.critical,
            props.counts.noData,
          ],
          backgroundColor: [
            'rgba(34, 197, 94, 0.75)',
            'rgba(245, 158, 11, 0.75)',
            'rgba(239, 68, 68, 0.75)',
            'rgba(107, 114, 128, 0.5)',
          ],
          borderWidth: 0,
          hoverOffset: 4,
        },
      ],
    }))

    const chartOptions: ChartOptions<'doughnut'> = {
      responsive: true,
      maintainAspectRatio: false,
      cutout: '65%',
      plugins: {
        legend: {
          position: 'bottom',
          labels: {
            usePointStyle: true,
            pointStyle: 'circle',
            boxWidth: 8,
            boxHeight: 8,
          },
        },
      },
    }

    return {
      t,
      activeView,
      chartData,
      chartOptions,
    }
  },
})
