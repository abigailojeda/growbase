<script lang="ts" src="./Index.ts"></script>

<template>
  <section class="flex min-h-[70dvh] items-center justify-center">
    <div class="flex max-w-xl flex-col items-center text-center">
      <PlantIcon class="size-20 text-primary" />

      <h1 class="mt-6 text-3xl font-semibold text-text">{{ t('general.comingSoon') }}</h1>

      <h2 class="mt-3 text-xl font-medium text-text">
        {{ title }}
      </h2>

      <p class="mt-3 max-w-md text-text/60">
        {{ description }}
      </p>

      <button type="button" class="btn-outline mt-8" @click="goBack">
        {{ t('general.goBack') }}
      </button>
    </div>
  </section>
</template>
