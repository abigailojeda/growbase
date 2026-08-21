<script lang="ts" src="./Index.ts"></script>

<template>
  <section class="mt-8 flex flex-col items-center justify-center gap-3">
    <div class="flex flex-col items-center justify-center gap-3 p-6">
      <component :is="icon" v-if="icon" :class="[iconClass]" />

      <p class="text-sm text-center text-text/60">
        {{ message }}
      </p>

      <RouterLink v-if="link" :to="link.to" class="font-medium text-primary hover:text-primary/80">
        {{ link.label }}
      </RouterLink>
    </div>
  </section>
</template>
