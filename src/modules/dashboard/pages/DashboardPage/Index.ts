import { storeToRefs } from 'pinia'
import { computed, defineComponent, onMounted, ref } from 'vue'

import { useCrops } from '@/composables/useCrops/useCrops'
import { useDashboardSummary } from '@/composables/useDashboardSummary/useDashboardSummary'
import { useTasks } from '@/composables/useTasks/useTasks'
import { useTaskSummary } from '@/composables/useTaskSummary/useTaskSummary'
import { useAuthStore } from '@/modules/auth/stores/auth.store'
import { userService } from '@/modules/auth/services/user.service'
import type { User } from '@/modules/auth/types'
import { useCropStore } from '@/modules/crops/stores/crop.store'
import CropHealthOverview from '@/modules/dashboard/components/CropHealthOverview/Index.vue'
import CropsNeedingAttention from '@/modules/dashboard/components/CropsNeedingAttention/Index.vue'
import SummaryCard from '@/modules/dashboard/components/SummaryCard/Index.vue'
import TaskStatusOverview from '@/modules/tasks/components/TaskStatusOverview/Index.vue'
import TeamOverview from '@/modules/tasks/components/TeamOverview/Index.vue'
import type { TeamWorkerTaskSummary } from '@/modules/tasks/types'
import { useTaskStore } from '@/modules/tasks/stores/task.store'

import { useI18n } from 'vue-i18n'

export default defineComponent({
  name: 'DashboardPage',

  components: {
    CropHealthOverview,
    CropsNeedingAttention,
    SummaryCard,
    TaskStatusOverview,
    TeamOverview,
  },

  setup() {
    const authStore = useAuthStore()
    const cropStore = useCropStore()
    const taskStore = useTaskStore()

    const { crops } = storeToRefs(cropStore)
    const { tasks } = storeToRefs(taskStore)

    const { loadCrops, latestReports } = useCrops()
    const { loadTasks } = useTasks()

    const { t } = useI18n()

    const {
      totalCrops,
      activeCrops,
      cropsNeedingAttention,
      cropsNeedingAttentionList,
      healthCounts,
    } = useDashboardSummary(crops, latestReports)

    const { taskSummary, workerSummaries } = useTaskSummary(tasks)

    const workers = ref<User[]>([])

    const isAdmin = computed(() => authStore.currentUser?.role === 'admin')

    const teamSummaries = computed<TeamWorkerTaskSummary[]>(() => {
      const summariesByWorker = new Map(
        workerSummaries.value.map((summary) => [summary.userId, summary]),
      )

      return workers.value.map((worker) => {
        const summary = summariesByWorker.get(worker.id)

        return {
          userId: worker.id,
          name: worker.name,
          total: summary?.total ?? 0,
          pending: summary?.pending ?? 0,
          inProgress: summary?.inProgress ?? 0,
          completed: summary?.completed ?? 0,
        }
      })
    })

    const loadDashboard = async () => {
      const user = authStore.currentUser

      const workersPromise =
        user?.role === 'admin'
          ? userService.getWorkersByBusinessLine(user.businessLineId)
          : Promise.resolve([])

      const [, , loadedWorkers] = await Promise.all([loadCrops(), loadTasks(), workersPromise])

      workers.value = loadedWorkers
    }

    onMounted(loadDashboard)

    return {
      totalCrops,
      activeCrops,
      cropsNeedingAttention,
      cropsNeedingAttentionList,
      healthCounts,
      taskSummary,
      tasks,
      teamSummaries,
      isAdmin,
      workers,
      t,
    }
  },
})
