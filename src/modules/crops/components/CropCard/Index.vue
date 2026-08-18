<script lang="ts" src="./Index.ts"></script>

<template>
  <article
    class="overflow-hidden rounded-xl bg-surface shadow-sm transition-shadow hover:shadow-md"
  >
    <div class="aspect-video w-full overflow-hidden bg-text/5">
      <img
        v-if="crop.imageUrl"
        :src="crop.imageUrl"
        :alt="crop.name"
        class="size-full object-cover"
      />

      <div v-else class="flex size-full items-center justify-center text-sm text-text/50">
        No image available
      </div>
    </div>

    <div class="p-5">
      <div class="flex items-start justify-between gap-4">
        <div class="min-w-0">
          <h2 class="truncate text-lg font-semibold text-text">
            {{ crop.name }}
          </h2>

          <p class="mt-1 text-sm text-text/60">{{ crop.type }} · {{ crop.location }}</p>
        </div>

        <span class="crop-status-badge" :class="`crop-status-${crop.status}`">
          {{ crop.status }}
        </span>
      </div>

      <div class="mt-5 border-t border-text/10 pt-4">
        <div class="flex items-center justify-between">
          <span class="text-sm text-text/60"> Health </span>

          <span class="crop-health-badge" :class="healthClass">
            {{ healthLabel }}
          </span>
        </div>
      </div>
    </div>
  </article>
</template>
