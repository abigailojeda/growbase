<script lang="ts" src="./Index.ts"></script>

<template>
  <RouterLink :to="{ name: 'crop-detail', params: { id: crop.id } }" class="block">
    <section
      class="overflow-hidden rounded-xl bg-surface shadow-sm hover:opacity-90 transition-opacity"
    >
      <CropHealthHeader :health="health" large />

      <div class="aspect-video w-full overflow-hidden bg-text/5">
        <img
          v-if="coverImage"
          :src="coverImage.url"
          :alt="crop.name"
          class="size-full object-cover"
        />

        <div v-else class="flex size-full items-center justify-center text-sm text-text/50">
          No image available
        </div>
      </div>

      <div class="p-5">
        <div class="flex flex-col lg:flex-row items-start justify-between gap-4">
          <div class="min-w-0">
            <h2 class="truncate text-lg font-semibold text-text">
              {{ crop.name }}
            </h2>

            <p class="mt-1 text-sm text-text/60">
              {{ t(`crops.types.${crop.type}`) }} · {{ crop.location }}
            </p>
          </div>

          <CropStatus :status="crop.status" />
        </div>
      </div>
    </section>
  </RouterLink>
</template>
