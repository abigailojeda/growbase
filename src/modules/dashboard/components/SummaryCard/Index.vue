<script lang="ts" src="./Index.ts"></script>

<template>
  <div class="rounded-xl bg-surface p-5">
    <p class="text-sm text-text/60">
      {{ label }}
    </p>

    <p
      :class="[
        'mt-2 text-3xl font-semibold',
        variant === 'default' && 'text-text',
        variant === 'primary' && 'text-primary',
        variant === 'warning' && 'text-amber-600 dark:text-amber-400',
      ]"
    >
      {{ value }}
    </p>
  </div>
</template>
