<script lang="ts" src="./Index.ts"></script>

<template>
  <div class="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
    <div
      v-for="measurement in measurements"
      :key="measurement.key"
      class="crop-measurement"
      :class="`crop-measurement-${measurement.health}`"
    >
      <span class="text-sm text-text/60">
        {{ measurement.label }}
      </span>

      <p class="mt-1 text-xl font-semibold" :class="`crop-measurement-value-${measurement.health}`">
        {{ measurement.value }}{{ measurement.unit }}
      </p>

      <span class="text-xs text-text/50">
        Optimal:
        {{ measurement.optimalRange.min }}–{{ measurement.optimalRange.max }}{{ measurement.unit }}
      </span>
    </div>
  </div>
</template>
