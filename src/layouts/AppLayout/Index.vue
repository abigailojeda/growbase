<script lang="ts" src="./Index.ts"></script>

<template>
  <div class="min-h-dvh bg-background">
    <Navbar :show-logo="false" variant="glass-mobile">
      <template #actions>
        <UserMenu />
      </template>
    </Navbar>
    <Sidebar v-model:collapsed="isSidebarCollapsed" v-model:mobile-open="isSidebarMobileOpen" />

    <main
      :class="[
        'px-6 pt-20 md:pt-8 pb-6 transition-[margin-left] duration-300',
        isSidebarCollapsed ? 'md:ml-24' : 'md:ml-56',
      ]"
    >
      <RouterView />
    </main>
  </div>
</template>
