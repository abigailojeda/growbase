<script lang="ts" src="./Index.ts"></script>

<template>
  <section
    class="grid grid-cols-1 overflow-hidden rounded-xl border border-primary/40 sm:grid-cols-2 lg:grid-cols-4"
  >
    <div
      v-for="benefit in benefits"
      :key="benefit.title"
      class="border-b border-primary/40 p-5 last:border-b-0 sm:nth-last-[-n+2]:border-b-0 lg:border-r lg:border-b-0 lg:last:border-r-0"
    >
      <div class="flex items-start gap-2 max-w-48">
        <component :is="benefit.icon" class="size-7 shrink-0 text-primary" />

        <div>
          <h2 class="font-semibold text-text">
            {{ t(benefit.title) }}
          </h2>
        </div>
      </div>
      <p class="mt-1 text-sm leading-5 text-text/60 lg:max-w-37.5">
        {{ t(benefit.description) }}
      </p>
    </div>
  </section>
</template>
