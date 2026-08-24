<script lang="ts" src="./Index.ts"></script>

<template>
  <div
    :class="[
      'crop-health-header flex items-center gap-1',
      `crop-health-${healthKey}`,
      large && 'min-h-12',
    ]"
  >
    <HealthIcon class="size-4" />

    <span class="text-sm font-semibold capitalize">
      {{ healthLabel }}
    </span>
  </div>
</template>
