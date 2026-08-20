<script lang="ts" src="./Index.ts"></script>

<template>
  <section class="rounded-xl bg-surface p-5">
    <div class="flex items-center justify-between gap-4">
      <h2 class="text-2xl font-semibold text-text">Needs attention</h2>

      <RouterLink v-if="crops.length" to="/app/crops" class="font-medium text-primary">
        View all crops
      </RouterLink>
    </div>

    <section v-if="!crops.length" class="mt-6 flex flex-col items-center justify-center gap-3">
      <div class="flex flex-col items-center justify-center gap-3 p-6">
        <img
          src="@/assets/images/business-lines/sapling.svg"
          alt="No crops needing attention"
          class="h-20 w-20"
        />
        <p class="mt-6 text-sm text-text/60">All crops are within their optimal conditions.</p>
        <RouterLink to="/app/crops" class="font-medium text-primary hover:text-primary/80">
          View all crops
        </RouterLink>
      </div>
    </section>

    <div v-else class="mt-6 flex flex-wrap gap-4">
      <RouterLink
        v-for="item in crops"
        :key="item.crop.id"
        :to="`/app/crops/${item.crop.id}`"
        class="w-full overflow-hidden rounded-xl bg-background transition-opacity hover:opacity-80 sm:w-64"
      >
        <div class="h-28 w-full overflow-hidden bg-text/5">
          <img
            v-if="getCoverImage(item)"
            :src="getCoverImage(item)?.url"
            :alt="item.crop.name"
            class="size-full object-cover"
          />

          <div v-else class="flex size-full items-center justify-center text-xs text-text/50">
            No image available
          </div>
        </div>

        <div class="p-4">
          <div class="flex items-center justify-between gap-3">
            <h3 class="truncate font-semibold text-text">
              {{ item.crop.name }}
            </h3>

            <span
              class="crop-health-badge shrink-0 capitalize"
              :class="`crop-health-${item.health}`"
            >
              {{ item.health }}
            </span>
          </div>

          <p v-if="item.note" class="mt-3 truncate text-sm text-text/60">
            {{ item.note }}
          </p>

          <p v-else class="mt-3 text-sm text-text/40">No notes provided.</p>
        </div>
      </RouterLink>
    </div>
  </section>
</template>
