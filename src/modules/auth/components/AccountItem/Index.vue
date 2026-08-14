<script lang="ts" src="./Index.ts"></script>

<template>
  <div class="flex items-center gap-5 px-6 py-6">
    <div class="flex size-16 shrink-0 items-center justify-center rounded-xl bg-secondary/20">
      <!-- Business line icon -->
    </div>

    <div class="min-w-0 flex-1">
      <h2 class="text-lg font-semibold text-text">
        {{ businessLine.name }}
      </h2>
    </div>

    <div class="flex shrink-0 flex-col gap-2">
      <button
        type="button"
        class="rounded-lg border border-primary px-5 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary/10"
        @click="$emit('login', 'admin')"
      >
        Login as Admin
      </button>

      <button
        type="button"
        class="rounded-lg border border-secondary px-5 py-2 text-sm font-medium text-text transition-colors hover:bg-secondary/20"
        @click="$emit('login', 'worker')"
      >
        Login as Worker
      </button>
    </div>
  </div>
</template>
