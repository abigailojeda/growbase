export type TaskStatus = 'pending' | 'in-progress' | 'completed'

export interface Task {
  id: string
  businessLineId: string
  cropId: string
  title: string
  description: string
  assignedUserId: string
  status: TaskStatus
  dueDate: string
  completedAt?: string
  createdAt: string
}

export interface TaskStatusSummary {
  total: number
  pending: number
  inProgress: number
  completed: number
}

export interface WorkerTaskSummary extends TaskStatusSummary {
  userId: string
}

export interface TeamWorkerTaskSummary extends WorkerTaskSummary {
  name: string
}
