import {
  Tooltip,
  type ChartData,
  type ChartOptions,
  type ChartType,
  type TooltipPositionerFunction,
} from 'chart.js'
import { computed, defineComponent, ref, type PropType } from 'vue'
import { useI18n } from 'vue-i18n'

import BarIcon from '@/components/icons/BarIcon.vue'
import Chart from '@/components/Chart/Index.vue'
import GridIcon from '@/components/icons/GridIcon.vue'
import type { TeamWorkerTaskSummary } from '@/modules/tasks/types'

type TeamOverviewView = 'cards' | 'chart'

declare module 'chart.js' {
  interface TooltipPositionerMap {
    cursor: TooltipPositionerFunction<ChartType>
  }
}

Tooltip.positioners.cursor = (_elements, eventPosition) => ({
  x: eventPosition.x,
  y: eventPosition.y,
})

export default defineComponent({
  name: 'TeamOverview',

  components: {
    BarIcon,
    Chart,
    GridIcon,
  },

  props: {
    workers: {
      type: Array as PropType<TeamWorkerTaskSummary[]>,
      required: true,
    },
  },

  setup(props) {
    const { t } = useI18n()

    const activeView = ref<TeamOverviewView>('cards')

    const chartData = computed<ChartData<'bar'>>(() => ({
      labels: props.workers.map((worker) => worker.name),
      datasets: [
        {
          label: t('tasks.states.pending'),
          data: props.workers.map((worker) => worker.pending),
          backgroundColor: 'rgba(245, 158, 11, 0.75)',
          maxBarThickness: 18,
          borderSkipped: false,
        },
        {
          label: t('tasks.states.inProgress'),
          data: props.workers.map((worker) => worker.inProgress),
          backgroundColor: 'rgba(59, 130, 246, 0.75)',
          maxBarThickness: 18,
          borderSkipped: false,
        },
        {
          label: t('tasks.states.completed'),
          data: props.workers.map((worker) => worker.completed),
          backgroundColor: 'rgba(34, 197, 94, 0.75)',
          maxBarThickness: 18,
          borderSkipped: false,
        },
      ],
    }))

    const chartOptions: ChartOptions<'bar'> = {
      responsive: true,
      maintainAspectRatio: false,
      indexAxis: 'y',

      interaction: {
        mode: 'index',
        axis: 'y',
        intersect: true,
      },

      plugins: {
        tooltip: {
          position: 'cursor',
        },

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

      scales: {
        x: {
          stacked: true,
          beginAtZero: true,
          ticks: {
            precision: 0,
          },
          grid: {
            display: false,
          },
        },

        y: {
          stacked: true,
          grid: {
            display: false,
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
