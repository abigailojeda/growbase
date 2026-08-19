<script lang="ts" src="./Index.ts"></script>

<template>
  <header
    :class="[
      'fixed top-0 z-10 flex items-center px-6 py-4',
      showLogo ? 'left-0 w-full justify-between' : 'right-0 w-auto justify-end',
      variant === 'glass' && 'glass-surface',
      variant === 'glass-mobile' && 'glass-surface md:bg-transparent md:backdrop-blur-none',
    ]"
  >
    <RouterLink v-if="showLogo" :to="logoTo" aria-label="Go to Growbase home">
      <Logo class="text-primary" />
    </RouterLink>

    <div class="flex items-center gap-4">
      <ColorModeToggle />

      <slot name="actions" />
    </div>
  </header>
</template>
