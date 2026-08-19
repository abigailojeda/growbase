<script lang="ts" src="./Index.ts"></script>

<template>
  <!-- MOBILE COLLAPSED -->
  <div
    v-if="!mobileOpen"
    class="fixed top-0 left-0 z-50 flex items-center gap-2 px-4 py-4 md:hidden"
  >
    <RouterLink to="/app" aria-label="Go to Growbase home">
      <Logo variant="symbol" class="text-primary" />
    </RouterLink>

    <button type="button" class="icon-btn" aria-label="Open menu" @click="openMobile">
      <MenuIcon />
    </button>
  </div>

  <!-- SIDEBAR -->
  <aside
    class="fixed inset-y-0 left-0 z-50 flex flex-col bg-surface transition-[width,transform] duration-300"
    :class="[mobileOpen ? 'w-full translate-x-0' : '-translate-x-full', 'md:translate-x-0']"
  >
    <div class="flex items-center justify-between px-4 py-4">
      <RouterLink to="/app" aria-label="Go to Growbase home">
        <Logo :variant="mobileOpen ? 'full' : collapsed ? 'symbol' : 'full'" class="text-primary" />
      </RouterLink>

      <!-- MOBILE -->
      <button type="button" class="icon-btn md:hidden" aria-label="Close menu" @click="closeMobile">
        <CloseIcon />
      </button>

      <!-- DESKTOP -->
      <button
        type="button"
        class="icon-btn hidden md:flex h-8 w-8 p-1.5 rounded-full"
        aria-label="Toggle sidebar"
        @click="toggleCollapsed"
      >
        <MenuIcon />
      </button>
    </div>

    <div class="flex-1 overflow-y-auto"></div>
  </aside>
</template>
