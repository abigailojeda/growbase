<script lang="ts" src="./Index.ts"></script>

<template>
  <button
    type="button"
    class="flex size-10 cursor-pointer items-center justify-center rounded-full text-text transition-colors hover:bg-surface"
    :aria-label="mode === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'"
    :title="mode === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'"
    @click="toggleMode"
  >
    <SunIcon v-if="mode === 'dark'" class="size-5" />
    <MoonIcon v-else class="size-5" />
  </button>
</template>
