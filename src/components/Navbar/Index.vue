<script lang="ts" src="./Index.ts"></script>

<template>
  <header
    :class="[
      'fixed top-0 left-0 z-20 flex w-full items-center px-6 py-4',
      showLogo ? 'justify-between' : 'justify-end',
      variant === 'glass' ? 'glass-surface' : 'bg-background border-b border-primary/20',
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
