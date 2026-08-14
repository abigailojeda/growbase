<script lang="ts" src="./Index.ts"></script>

<template>
  <button
    type="button"
    class="icon-btn"
    :aria-label="mode === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'"
    @click="toggleMode"
  >
    <SunIcon v-if="mode === 'dark'" class="size-5" />
    <MoonIcon v-else class="size-5" />
  </button>
</template>
