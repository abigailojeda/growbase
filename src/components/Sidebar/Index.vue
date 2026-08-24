<script lang="ts" src="./Index.ts"></script>

<template>
  <div
    v-if="!mobileOpen"
    class="fixed top-0 left-0 z-50 flex items-center gap-2 px-4 py-4 md:hidden"
  >
    <RouterLink to="/app" aria-label="Go to Growbase home">
      <Logo variant="symbol" class="text-primary" />
    </RouterLink>

    <button type="button" class="icon-btn mt-1" aria-label="Open menu" @click="openMobile">
      <MenuIcon />
    </button>
  </div>

  <aside
    class="fixed inset-y-0 left-0 z-50 flex flex-col border-r border-primary/20 bg-background transition-[width,transform] duration-300"
    :class="[mobileOpen ? 'w-full translate-x-0' : '-translate-x-full', 'md:translate-x-0']"
  >
    <div class="flex justify-between gap-2 px-4 py-6">
      <RouterLink to="/app" aria-label="Go to Growbase home" :class="collapsed && 'md:hidden'">
        <Logo variant="full" class="text-primary" />
      </RouterLink>

      <button type="button" class="icon-btn md:hidden" aria-label="Close menu" @click="closeMobile">
        <CloseIcon />
      </button>

      <button
        type="button"
        :class="[
          'icon-btn hidden h-8 w-8 rounded-full bg-primary/20 p-1.5 md:flex',
          !collapsed && 'mt-1',
        ]"
        aria-label="Toggle sidebar"
        @click="toggleCollapsed"
      >
        <MenuIcon />
      </button>
    </div>

    <div class="flex-1 overflow-y-auto">
      <Menu :collapsed="collapsed" @navigate="closeMobile" />
    </div>

    <div class="mt-auto flex justify-center px-4 py-6">
      <img
        :src="businessLine.logoUrl"
        :alt="`${businessLine.name} logo`"
        class="max-h-12 max-w-full object-contain md:hidden"
      />

      <img
        :src="collapsed ? businessLine.iconUrl : businessLine.logoUrl"
        :alt="collapsed ? `${businessLine.name} icon` : `${businessLine.name} logo`"
        :class="['hidden object-contain md:block', collapsed ? 'size-10' : 'max-h-12 max-w-full']"
      />
    </div>
  </aside>
</template>
