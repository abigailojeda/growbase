<script lang="ts" src="./Index.ts"></script>

<template>
  <div v-if="currentUser" ref="menuRef" class="relative">
    <button
      type="button"
      class="icon-btn"
      :class="{ 'bg-surface': isOpen }"
      aria-label="Open user menu"
      aria-haspopup="menu"
      :aria-expanded="isOpen"
      @click="toggleMenu"
    >
      <UserIcon class="size-5 text-primary" />
    </button>

    <div
      v-if="isOpen"
      role="menu"
      class="absolute right-0 mt-2 w-56 overflow-hidden rounded-lg bg-surface text-text shadow-lg"
    >
      <div class="px-4 py-3">
        <p class="font-medium">
          {{ currentUser.name }}
        </p>

        <p class="mt-1 text-sm capitalize opacity-60">
          {{ currentUser.role }}
        </p>
      </div>

      <div class="border-t border-secondary/30">
        <button
          type="button"
          role="menuitem"
          class="flex w-full cursor-pointer items-center gap-3 px-4 py-3 text-left text-sm transition-colors hover:bg-secondary/20"
          @click="handleLogout"
        >
          <LogoutIcon class="size-5 text-primary" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  </div>
</template>
