<script lang="ts" src="./Index.ts"></script>

<template>
  <nav class="mt-6 flex flex-col gap-2 px-3">
    <RouterLink
      v-for="item in navigationItems"
      :key="item.to"
      :to="item.to"
      v-slot="{ href, navigate, isExactActive }"
      custom
    >
      <a
        :href="href"
        :class="[
          'flex items-center gap-3 rounded-lg px-3 py-3 font-medium transition-colors',
          collapsed && 'md:justify-center md:gap-0',
          isExactActive
            ? 'bg-primary/10 text-primary'
            : 'text-text/60 hover:bg-primary/5 hover:text-text',
        ]"
        :title="collapsed ? item.label : undefined"
        @click="
          (event) => {
            navigate(event)
            $emit('navigate')
          }
        "
      >
        <component :is="item.icon" class="size-5 shrink-0" />

        <span :class="collapsed && 'md:hidden'">
          {{ t(item.label) }}
        </span>
      </a>
    </RouterLink>
  </nav>
</template>
