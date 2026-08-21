<script lang="ts" src="./Index.ts"></script>

<template>
  <header class="relative flex flex-col bg-background p-4 pt-12">
    <div
      class="flex w-full flex-col gap-8 px-6 lg:min-h-160 lg:flex-row lg:items-center xl:px-12 2xl:px-20"
    >
      <div class="w-full lg:w-[40%] xl:w-[38%]">
        <p class="mb-4 text-sm font-medium text-primary">
          {{ t('landing.hero.eyebrow') }}
        </p>

        <h1
          class="text-4xl font-semibold tracking-tight text-text sm:text-5xl lg:text-6xl 2xl:text-7xl"
        >
          {{ t('landing.hero.title') }}

          <span class="block text-primary">
            {{ t('landing.hero.titleAccent') }}
          </span>
        </h1>

        <p class="mt-6 max-w-xl text-base leading-7 text-text/60 sm:text-lg 2xl:text-xl">
          {{ t('landing.hero.description') }}
        </p>

        <RouterLink to="/login" class="primary-btn mt-8">
          {{ t('landing.hero.cta') }}
        </RouterLink>
      </div>

      <div class="relative hidden min-h-125 min-w-0 flex-1 lg:block">
        <img
          :src="images.primary"
          :alt="t('landing.hero.dashboardAlt')"
          class="absolute top-0 left-0 w-[76%] rounded-2xl border border-primary/40 shadow-xl"
        />

        <img
          :src="images.secondary"
          :alt="t('landing.hero.cropDetailAlt')"
          class="absolute top-40 right-0 z-10 w-[78%] rounded-2xl border border-primary/40 shadow-xl"
        />
      </div>
    </div>
  </header>
</template>
