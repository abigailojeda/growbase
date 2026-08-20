<script lang="ts" src="./Index.ts"></script>

<template>
  <section class="rounded-xl bg-surface p-5">
    <div class="flex items-center gap-4">
      <h2 class="text-2xl font-semibold text-text">Team overview</h2>

      <div class="flex rounded-lg bg-background p-1">
        <button
          type="button"
          :class="[
            'flex size-8 cursor-pointer items-center justify-center rounded-md transition-colors',
            activeView === 'cards' ? 'bg-primary/10 text-primary' : 'text-text/50 hover:text-text',
          ]"
          aria-label="Cards view"
          :aria-pressed="activeView === 'cards'"
          @click="activeView = 'cards'"
        >
          <GridIcon class="size-4" />
        </button>

        <button
          type="button"
          :class="[
            'flex size-8 cursor-pointer items-center justify-center rounded-md transition-colors',
            activeView === 'chart' ? 'bg-primary/10 text-primary' : 'text-text/50 hover:text-text',
          ]"
          aria-label="Chart view"
          :aria-pressed="activeView === 'chart'"
          @click="activeView = 'chart'"
        >
          <BarIcon class="size-4" />
        </button>
      </div>
    </div>

    <p v-if="!workers.length" class="mt-6 text-sm text-text/60">No workers available.</p>

    <div v-else-if="activeView === 'cards'" class="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
      <article v-for="worker in workers" :key="worker.userId" class="rounded-xl bg-background p-4">
        <div class="flex items-center justify-between gap-4">
          <h3 class="truncate font-semibold text-text">
            {{ worker.name }}
          </h3>

          <span class="shrink-0 text-sm text-text/60"> {{ worker.total }} tasks </span>
        </div>

        <div class="mt-4 grid grid-cols-3 gap-3">
          <div>
            <p class="text-xs text-text/50">Pending</p>

            <p class="mt-1 font-semibold text-amber-700 dark:text-amber-400">
              {{ worker.pending }}
            </p>
          </div>

          <div>
            <p class="text-xs text-text/50">In progress</p>

            <p class="mt-1 font-semibold text-blue-700 dark:text-blue-400">
              {{ worker.inProgress }}
            </p>
          </div>

          <div>
            <p class="text-xs text-text/50">Completed</p>

            <p class="mt-1 font-semibold text-green-700 dark:text-green-400">
              {{ worker.completed }}
            </p>
          </div>
        </div>
      </article>
    </div>

    <div v-else class="mt-6 h-80">
      <Chart
        type="bar"
        :data="chartData"
        :options="chartOptions"
        aria-label="Task status by worker"
      />
    </div>
  </section>
</template>
