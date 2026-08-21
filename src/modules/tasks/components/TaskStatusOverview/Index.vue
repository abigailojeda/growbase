<script lang="ts" src="./Index.ts"></script>

<template>
  <section class="rounded-xl bg-surface p-5">
    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
      <div class="flex flex-col sm:flex-row sm:items-center gap-4">
        <h2 class="text-2xl font-semibold text-text">
          {{ title }}
        </h2>

        <div class="flex rounded-lg w-fit bg-background p-1">
          <button
            type="button"
            :class="[
              'flex size-8 cursor-pointer items-center justify-center rounded-md transition-colors',
              activeView === 'tasks'
                ? 'bg-primary/10 text-primary'
                : 'text-text/50 hover:text-text',
            ]"
            aria-label="Tasks view"
            :aria-pressed="activeView === 'tasks'"
            @click="activeView = 'tasks'"
          >
            <ListIcon class="size-4" />
          </button>

          <button
            type="button"
            :class="[
              'flex size-8 cursor-pointer items-center justify-center rounded-md transition-colors',
              activeView === 'summary'
                ? 'bg-primary/10 text-primary'
                : 'text-text/50 hover:text-text',
            ]"
            aria-label="Summary view"
            :aria-pressed="activeView === 'summary'"
            @click="activeView = 'summary'"
          >
            <GridIcon class="size-4" />
          </button>
        </div>
      </div>

      <RouterLink to="/app/tasks" class="font-medium text-primary hover:opacity-80">
        {{ t('tasks.goToTasks') }}
      </RouterLink>
    </div>

    <div v-if="activeView === 'tasks'" class="mt-6 grid gap-6 lg:grid-cols-3">
      <div
        v-for="group in taskGroups"
        :key="group.status"
        class="min-w-0 max-h-80 pb-4 overflow-y-auto pr-2"
      >
        <div
          class="sticky font-semibold top-0 z-10 mb-4 flex items-center justify-between gap-3 bg-surface py-2"
        >
          <h3 class="text-text">
            {{ group.label }}
          </h3>

          <span class="text-text/50">
            {{ group.tasks.length }}
          </span>
        </div>

        <div v-if="group.tasks.length" class="flex flex-col gap-3">
          <TaskPreview
            v-for="task in group.tasks"
            :key="task.id"
            :task="task"
            :assignee-name="getAssigneeName(task.assignedUserId)"
          />
        </div>

        <p v-else class="rounded-xl bg-background p-4 text-sm text-text/50">
          {{ t('tasks.empty') }}
        </p>
      </div>
    </div>

    <div v-if="activeView === 'summary'" class="mt-6 grid grid-cols-2 gap-4 xl:grid-cols-4">
      <div class="rounded-xl bg-background p-4">
        <p class="text-sm text-text/60">{{ t('tasks.states.total') }}</p>

        <p class="mt-2 text-2xl font-semibold text-text">
          {{ summary.total }}
        </p>
      </div>

      <div class="rounded-xl bg-background p-4">
        <p class="text-sm text-text/60">{{ t('tasks.states.pending') }}</p>

        <p class="mt-2 text-2xl font-semibold text-amber-700 dark:text-amber-400">
          {{ summary.pending }}
        </p>
      </div>

      <div class="rounded-xl bg-background p-4">
        <p class="text-sm text-text/60">{{ t('tasks.states.inProgress') }}</p>

        <p class="mt-2 text-2xl font-semibold text-blue-700 dark:text-blue-400">
          {{ summary.inProgress }}
        </p>
      </div>

      <div class="rounded-xl bg-background p-4">
        <p class="text-sm text-text/60">{{ t('tasks.states.completed') }}</p>

        <p class="mt-2 text-2xl font-semibold text-green-700 dark:text-green-400">
          {{ summary.completed }}
        </p>
      </div>
    </div>
  </section>
</template>
