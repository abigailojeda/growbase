<script lang="ts" src="./Index.ts"></script>

<template>
  <section class="flex min-h-[60dvh] items-center justify-center">
    <div class="w-full max-w-xl rounded-xl bg-surface p-8 text-center">
      <span
        class="inline-flex rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary"
      >
        Coming soon
      </span>

      <h1 class="mt-5 text-3xl font-semibold text-text">
        {{ title }}
      </h1>

      <p class="mt-3 max-w-md text-text/60">
        {{ description }}
      </p>

      <RouterLink v-if="backTo" :to="backTo" class="btn-outline mt-8 inline-flex">
        {{ backLabel }}
      </RouterLink>
    </div>
  </section>
</template>
