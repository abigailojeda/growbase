<script lang="ts" src="./Index.ts"></script>

<template>
  <section class="mt-12 bg-secondary/40 px-6 py-12 md:py-24">
    <div class="mx-auto w-full max-w-7xl">
      <h2 class="text-center text-2xl font-semibold text-text sm:text-3xl">
        Built for every kind of grower
      </h2>

      <div class="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
        <article
          v-for="businessLine in businessLines"
          :key="businessLine.name"
          class="flex items-center gap-5 rounded-xl border-3 border-primary/10 p-6 transition-opacity hover:opacity-80"
        >
          <div class="flex size-20 shrink-0 items-center justify-center rounded-full bg-primary/10">
            <img
              :src="businessLine.icon"
              :alt="`${businessLine.name} icon`"
              class="size-12 object-contain"
            />
          </div>

          <div>
            <h3 class="text-lg font-semibold text-text">
              {{ businessLine.name }}
            </h3>

            <p class="mt-2 text-sm leading-6 text-text/60">
              {{ businessLine.description }}
            </p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
