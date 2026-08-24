import { computed, toValue, type MaybeRefOrGetter } from 'vue'

import type { Task, TaskStatusSummary, WorkerTaskSummary } from '@/modules/tasks/types'

const createEmptySummary = (): TaskStatusSummary => ({
  total: 0,
  pending: 0,
  inProgress: 0,
  completed: 0,
})

const summarizeTasks = (tasks: Task[]): TaskStatusSummary => {
  return tasks.reduce((summary, task) => {
    summary.total++

    switch (task.status) {
      case 'pending':
        summary.pending++
        break
      case 'in-progress':
        summary.inProgress++
        break
      case 'completed':
        summary.completed++
        break
    }

    return summary
  }, createEmptySummary())
}

export const useTaskSummary = (tasks: MaybeRefOrGetter<Task[]>) => {
  const taskSummary = computed(() => summarizeTasks(toValue(tasks)))

  const workerSummaries = computed<WorkerTaskSummary[]>(() => {
    const tasksByWorker = new Map<string, Task[]>()

    toValue(tasks).forEach((task) => {
      const workerTasks = tasksByWorker.get(task.assignedUserId) ?? []

      workerTasks.push(task)

      tasksByWorker.set(task.assignedUserId, workerTasks)
    })

    return Array.from(tasksByWorker.entries(), ([userId, workerTasks]) => ({
      userId,
      ...summarizeTasks(workerTasks),
    }))
  })

  return {
    taskSummary,
    workerSummaries,
  }
}
