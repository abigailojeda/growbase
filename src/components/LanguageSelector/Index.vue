<script lang="ts" src="./Index.ts"></script>

<template>
  <div ref="menuRef" class="relative">
    <button
      type="button"
      class="icon-btn text-sm font-semibold uppercase border border-primary/20"
      :class="{ 'bg-primary/10': isOpen }"
      :aria-label="t('general.changeLanguage')"
      aria-haspopup="menu"
      :aria-expanded="isOpen"
      @click="toggleMenu"
    >
      {{ currentLocale }}
    </button>

    <div
      v-if="isOpen"
      role="menu"
      class="absolute right-0 mt-2 w-fit overflow-hidden rounded-lg bg-surface text-text shadow-lg"
    >
      <button
        v-for="language in languages"
        :key="language.locale"
        type="button"
        role="menuitemradio"
        :aria-checked="currentLocale === language.locale"
        :class="[
          'flex w-full cursor-pointer items-center justify-between px-6 py-3 text-left text-sm transition-colors hover:bg-secondary/20',
          currentLocale === language.locale && 'bg-primary/10 text-primary',
        ]"
        @click="selectLanguage(language.locale)"
      >
        <span>
          {{ language.label }}
        </span>
      </button>
    </div>
  </div>
</template>
