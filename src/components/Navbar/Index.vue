<script lang="ts" src="./Index.ts"></script>

<template>
  <header
    class="fixed z-10 flex w-full items-center justify-between px-6 py-4"
    :class="{ 'glass-surface': variant === 'glass' }"
  >
    <div>
      <Logo variant="symbol" class="text-primary sm:hidden" />
      <Logo class="hidden text-primary sm:block" />
    </div>

    <ColorModeToggle />
  </header>
</template>
