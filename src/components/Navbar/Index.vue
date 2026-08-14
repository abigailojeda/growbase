<script lang="ts" src="./Index.ts"></script>

<template>
  <header
    class="flex fixed z-10 w-full items-center justify-between px-6 py-4"
    :class="{ 'glass-surface ': variant === 'glass' }"
  >
    <div>
      <Logo variant="symbol" class="text-primary sm:hidden" />
      <Logo class="hidden text-primary sm:block" />
    </div>

    <div class="flex gap-4 items-center">
      <ColorModeToggle />

      <slot name="actions" />
    </div>
  </header>
</template>
