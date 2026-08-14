<script lang="ts" src="./Index.ts"></script>

<template>
  <header
    class="fixed z-10 flex w-full items-center justify-between px-6 py-4"
    :class="{ 'glass-surface': variant === 'glass' }"
  >
    <RouterLink v-if="logoTo" :to="logoTo" aria-label="Go to Growbase home">
      <Logo variant="symbol" class="text-primary sm:hidden" />
      <Logo class="hidden text-primary sm:block" />
    </RouterLink>

    <div v-else>
      <Logo variant="symbol" class="text-primary sm:hidden" />
      <Logo class="hidden text-primary sm:block" />
    </div>

    <div class="flex items-center gap-4">
      <ColorModeToggle />

      <slot name="actions" />
    </div>
  </header>
</template>
