<script lang="ts" src="./Index.ts"></script>

<template>
  <section class="flex h-86.25 flex-col rounded-xl bg-surface p-5">
    <div class="flex flex-col sm:flex-row md:items-center gap-4">
      <h2 class="text-2xl font-semibold text-text">
        {{ t('health.title') }}
      </h2>

      <div class="flex w-fit rounded-lg bg-background p-1">
        <button
          type="button"
          :class="[
            'flex size-8 cursor-pointer items-center justify-center rounded-md transition-colors',
            activeView === 'summary'
              ? 'bg-primary/10 text-primary'
              : 'text-text/50 hover:text-text',
          ]"
          :aria-label="t('health.summaryView')"
          :aria-pressed="activeView === 'summary'"
          @click="activeView = 'summary'"
        >
          <GridIcon class="size-4" />
        </button>

        <button
          type="button"
          :class="[
            'flex size-8 cursor-pointer items-center justify-center rounded-md transition-colors',
            activeView === 'chart' ? 'bg-primary/10 text-primary' : 'text-text/50 hover:text-text',
          ]"
          :aria-label="t('health.chartView')"
          :aria-pressed="activeView === 'chart'"
          @click="activeView = 'chart'"
        >
          <BarIcon class="size-4" />
        </button>
      </div>
    </div>

    <div v-if="activeView === 'summary'" class="mt-6 grid flex-1 grid-cols-2 content-center gap-4">
      <div class="rounded-xl bg-background p-4">
        <p class="text-sm text-text/60">{{ t('health.good') }}</p>

        <p class="mt-2 text-2xl font-semibold text-green-700 dark:text-green-400">
          {{ counts.good }}
        </p>
      </div>

      <div class="rounded-xl bg-background p-4">
        <p class="text-sm text-text/60">{{ t('health.warning') }}</p>

        <p class="mt-2 text-2xl font-semibold text-amber-700 dark:text-amber-400">
          {{ counts.warning }}
        </p>
      </div>

      <div class="rounded-xl bg-background p-4">
        <p class="text-sm text-text/60">{{ t('health.critical') }}</p>

        <p class="mt-2 text-2xl font-semibold text-red-700 dark:text-red-400">
          {{ counts.critical }}
        </p>
      </div>

      <div class="rounded-xl bg-background p-4">
        <p class="text-sm text-text/60">{{ t('health.noData') }}</p>

        <p class="mt-2 text-2xl font-semibold text-text/60">
          {{ counts.noData }}
        </p>
      </div>
    </div>

    <div v-else class="flex flex-1 items-center justify-center">
      <div class="size-full max-h-64 max-w-64">
        <Chart
          type="doughnut"
          :data="chartData"
          :options="chartOptions"
          :aria-label="t('health.chartAriaLabel')"
        />
      </div>
    </div>
  </section>
</template>
