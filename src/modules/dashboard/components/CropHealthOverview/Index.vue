<script lang="ts" src="./Index.ts"></script>

<template>
  <section class="rounded-xl bg-surface p-5">
    <h2 class="text-lg font-semibold text-text">Crop health</h2>

    <div class="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      <div class="rounded-lg bg-green-500/5 p-4">
        <p class="text-sm text-text/60">Good</p>
        <p class="mt-1 text-2xl font-semibold text-green-600 dark:text-green-400">
          {{ counts.good }}
        </p>
      </div>

      <div class="rounded-lg bg-amber-500/5 p-4">
        <p class="text-sm text-text/60">Warning</p>
        <p class="mt-1 text-2xl font-semibold text-amber-600 dark:text-amber-400">
          {{ counts.warning }}
        </p>
      </div>

      <div class="rounded-lg bg-red-500/5 p-4">
        <p class="text-sm text-text/60">Critical</p>
        <p class="mt-1 text-2xl font-semibold text-red-600 dark:text-red-400">
          {{ counts.critical }}
        </p>
      </div>

      <div class="rounded-lg bg-text/5 p-4">
        <p class="text-sm text-text/60">No data</p>
        <p class="mt-1 text-2xl font-semibold text-text/60">
          {{ counts.noData }}
        </p>
      </div>
    </div>
  </section>
</template>
