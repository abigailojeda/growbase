<script lang="ts" src="./Index.ts"></script>

<template>
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
