<script lang="ts" src="./Index.ts"></script>

<template>
  <section v-if="crop">
    <button
      type="button"
      @click="$router.back()"
      class="mb-4 inline-flex items-center gap-2 text-sm font-medium text-primary transition-opacity hover:opacity-70 cursor-pointer"
    >
      <ArrowIcon class="size-5" />
      <span>{{ t('general.goBack') }}</span>
    </button>

    <div class="grid grid-cols-1 items-start gap-6 xl:grid-cols-2">
      <section class="overflow-hidden rounded-xl bg-surface">
        <CropHealthHeader :health="health" large />

        <div class="p-6">
          <div class="flex flex-col items-start justify-between gap-4 lg:flex-row">
            <div>
              <h1 class="text-2xl font-semibold text-text">
                {{ crop.name }}
              </h1>

              <p class="mt-1 text-text/60">
                {{ t(`crops.types.${crop.type}`) }} · {{ crop.location }}
              </p>
            </div>

            <CropStatus :status="crop.status" />
          </div>

          <ImageGallery
            :images="crop.images"
            :featured-image-id="crop.coverImageId"
            :alt="crop.name"
            :editable="isAdmin"
            :featured-texts="{
              current: t('images.currentCover'),
              setAs: t('images.setAsCover'),
              title: t('images.setCover'),
              message: t('images.confirmSetCover'),
              confirm: t('images.setAsCover'),
              cancel: t('general.cancel'),
              noImages: t('images.noImages'),
            }"
            :on-set-featured="setCoverImage"
          />

          <div class="mt-8">
            <h2 class="text-lg font-semibold text-text">{{ t('crops.currentMeasurements') }}</h2>

            <p v-if="!latestReport" class="mt-4 text-text/60">
              {{ t('crops.noMeasurements') }}
            </p>

            <CropMeasurements v-else class="mt-4" :measurements="measurements" />
          </div>

          <div v-if="latestReport?.notes" class="mt-8">
            <h2 class="text-lg font-semibold text-text">{{ t('crops.latestNotes') }}</h2>

            <p class="mt-2 text-text/70">
              {{ latestReport.notes }}
            </p>
          </div>
        </div>
      </section>

      <CropReportHistory :crop="crop" :reports="reports" :users="users" />
    </div>
  </section>

  <section v-else class="flex min-h-[60vh] items-center justify-center overflow-y-hidden">
    <EmptyMessage
      :message="t('crops.emptyCrop')"
      :icon="CropEmptyIcon"
      icon-class="text-text/30 h-24 w-24"
      :link="{
        label: t('crops.backToCrops'),
        to: '/app/crops',
      }"
    />
  </section>
</template>
