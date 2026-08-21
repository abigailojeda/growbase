<script lang="ts" src="./Index.ts"></script>

<template>
  <div ref="menuRef" class="relative">
    <button
      type="button"
      class="icon-btn"
      :class="{ 'bg-primary/10': isOpen }"
      aria-label="Open user menu"
      aria-haspopup="menu"
      :aria-expanded="isOpen"
      @click="toggleMenu"
    >
      <UserIcon class="size-5" />
    </button>

    <div
      v-if="isOpen"
      role="menu"
      class="absolute right-0 mt-2 w-56 overflow-hidden rounded-lg bg-surface text-text shadow-lg"
    >
      <template v-if="currentUser">
        <div class="px-4 py-3">
          <p class="font-medium">
            {{ currentUser.name }}
          </p>

          <p class="mt-1 text-sm capitalize opacity-60">
            {{ t(`roles.${currentUser.role}`) }}
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
            <span>{{ t('general.logout') }}</span>
          </button>
        </div>
      </template>

      <button
        v-else
        type="button"
        role="menuitem"
        class="flex w-full cursor-pointer items-center gap-3 px-4 py-3 text-left text-sm transition-colors hover:bg-secondary/20"
        @click="handleLogin"
      >
        <LogoutIcon class="size-5 text-primary" />
        <span>{{ t('general.login') }}</span>
      </button>
    </div>
  </div>
</template>
