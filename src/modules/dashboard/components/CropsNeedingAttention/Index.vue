<script lang="ts" src="./Index.ts"></script>

<template>
  <section class="rounded-xl bg-surface p-5">
    <div class="flex flex-col sm:flex-row md:items-center justify-between gap-4">
      <h2 class="text-2xl font-semibold text-text">
        {{ t('dashboard.needsAttention.title') }}
      </h2>

      <RouterLink
        v-if="crops.length"
        to="/app/crops"
        class="font-medium text-primary hover:opacity-80"
      >
        {{ t('dashboard.needsAttention.viewAllCrops') }}
      </RouterLink>
    </div>

    <EmptyMessage
      v-if="!crops.length"
      :message="t('dashboard.needsAttention.allHealthy')"
      :icon="CropIcon"
      :link="{
        label: t('dashboard.needsAttention.viewAllCrops'),
        to: '/app/crops',
      }"
    />

    <div v-else class="mt-6 flex flex-wrap gap-4">
      <RouterLink
        v-for="item in crops"
        :key="item.crop.id"
        :to="`/app/crops/${item.crop.id}`"
        class="w-full overflow-hidden rounded-xl bg-background transition-opacity hover:opacity-90 sm:w-64"
      >
        <CropHealthHeader :health="item.health" />

        <div class="h-28 w-full overflow-hidden bg-text/5">
          <img
            v-if="getCoverImage(item)"
            :src="getCoverImage(item)?.url"
            :alt="item.crop.name"
            class="size-full object-cover"
          />

          <div v-else class="flex size-full items-center justify-center text-xs text-text/50">
            {{ t('general.noImageAvailable') }}
          </div>
        </div>

        <div class="p-4">
          <h3 class="truncate font-semibold text-text">
            {{ item.crop.name }}
          </h3>

          <p v-if="item.note" class="mt-2 truncate text-sm text-text/60">
            {{ item.note }}
          </p>

          <p v-else class="mt-2 text-sm text-text/40">
            {{ t('general.noNotesProvided') }}
          </p>
        </div>
      </RouterLink>
    </div>
  </section>
</template>
