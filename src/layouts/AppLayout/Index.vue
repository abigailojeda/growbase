<script lang="ts" src="./Index.ts"></script>

<template>
  <div class="min-h-dvh bg-background">
    <Navbar :show-logo="false" variant="surface">
      <template #actions>
        <UserMenu />
      </template>
    </Navbar>
    <Sidebar
      v-if="activeBusinessLine"
      v-model:collapsed="isSidebarCollapsed"
      v-model:mobile-open="isSidebarMobileOpen"
      :business-line="activeBusinessLine"
    />

    <main
      :class="[
        'px-6 py-24 transition-[margin-left] duration-300',
        isSidebarCollapsed ? 'md:ml-24' : 'md:ml-56',
      ]"
    >
      <RouterView />
    </main>
  </div>
</template>
