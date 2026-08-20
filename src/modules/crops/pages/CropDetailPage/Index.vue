<script lang="ts" src="./Index.ts"></script>

<template>
  <section v-if="crop">
    <RouterLink
      to="/app/crops"
      class="mb-4 inline-flex items-center gap-2 text-sm font-medium text-primary transition-opacity hover:opacity-70"
    >
      <ArrowIcon class="size-5" />
      <span>Back to crops</span>
    </RouterLink>

    <div class="overflow-hidden rounded-xl bg-surface">
      <CropHealthHeader :health="health" large />

      <div class="p-6">
        <div class="flex items-start flex-col lg:flex-row justify-between gap-4">
          <div>
            <h1 class="text-2xl font-semibold text-text">
              {{ crop.name }}
            </h1>

            <p class="mt-1 text-text/60">{{ crop.type }} · {{ crop.location }}</p>
          </div>

          <CropStatus :status="crop.status" />
        </div>

        <ImageGallery
          :images="crop.images"
          :featured-image-id="crop.coverImageId"
          :alt="crop.name"
          :editable="isAdmin"
          featured-label="cover image"
          :on-set-featured="setCoverImage"
        />

        <div class="mt-8">
          <h2 class="text-lg font-semibold text-text">Current measurements</h2>

          <p v-if="!latestReport" class="mt-4 text-text/60">
            No measurements have been reported yet.
          </p>

          <div v-else class="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            <div
              v-for="measurement in measurements"
              :key="measurement.key"
              class="crop-measurement"
              :class="`crop-measurement-${measurement.health}`"
            >
              <span class="text-sm text-text/60">
                {{ measurement.label }}
              </span>

              <p
                class="mt-1 text-xl font-semibold"
                :class="`crop-measurement-value-${measurement.health}`"
              >
                {{ measurement.value }}{{ measurement.unit }}
              </p>

              <span class="text-xs text-text/50">
                Optimal:
                {{ measurement.optimalRange.min }}–{{ measurement.optimalRange.max
                }}{{ measurement.unit }}
              </span>
            </div>
          </div>
        </div>

        <div v-if="latestReport?.notes" class="mt-8">
          <h2 class="text-lg font-semibold text-text">Latest notes</h2>

          <p class="mt-2 text-text/70">
            {{ latestReport.notes }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
