<script lang="ts" src="./Index.ts"></script>

<template>
  <section class="bg-background px-6 py-16 lg:px-12">
    <div class="mx-auto w-full max-w-7xl">
      <h2 class="text-center text-2xl font-semibold text-text sm:text-3xl">
        Everything you need to grow with confidence
      </h2>

      <div class="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
        <article
          v-for="feature in features"
          :key="feature.title"
          class="rounded-xl border border-primary/10 bg-surface p-6"
        >
          <div
            class="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary"
          >
            <component :is="feature.icon" class="size-6" />
          </div>

          <h3 class="mt-5 font-semibold text-text">
            {{ feature.title }}
          </h3>

          <p class="mt-2 text-sm leading-6 text-text/60">
            {{ feature.description }}
          </p>
        </article>
      </div>
    </div>
  </section>
</template>
