<script lang="ts" src="./Index.ts"></script>

<template>
  <RouterLink
    to="/app"
    class="mb-4 inline-flex items-center gap-2 text-sm font-medium text-primary transition-opacity hover:opacity-70"
  >
    <ArrowIcon class="size-5" />
    <span>Back to summary</span>
  </RouterLink>
  <section>
    <h1 class="text-2xl font-semibold text-text">Crops</h1>

    <p v-if="!crops.length" class="mt-6 text-text/60">No crops available.</p>

    <div v-else class="mt-6 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
      <CropCard
        v-for="crop in crops"
        :key="crop.id"
        :crop="crop"
        :report="latestReports[crop.id]"
      />
    </div>
  </section>
</template>
