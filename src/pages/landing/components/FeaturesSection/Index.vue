<script lang="ts" src="./Index.ts"></script>

<template>
  <section class="px-6 py-16 lg:px-12 flex justify-center flex-wrap">
    <div class="w-full max-w-7xl">
      <h2 class="text-center text-2xl font-semibold text-text sm:text-3xl">
        {{ t('landing.features.title') }}
      </h2>

      <div class="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
        <section
          v-for="feature in features"
          :key="feature.id"
          class="rounded-xl border-3 border-primary/10 p-6"
        >
          <div
            class="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary"
          >
            <component :is="feature.icon" class="size-6" />
          </div>

          <h3 class="mt-5 font-semibold text-text">
            {{ t(feature.title) }}
          </h3>

          <p class="mt-2 text-sm leading-6 text-text/60">
            {{ t(feature.description) }}
          </p>
        </section>
      </div>
    </div>
  </section>
</template>
