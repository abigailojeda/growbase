<script lang="ts" src="./Index.ts"></script>

<template>
  <div
    v-if="images.length"
    class="flex items-end gap-4 overflow-x-auto border-b border-text/10 py-8"
  >
    <div v-for="image in orderedImages" :key="image.id" class="relative shrink-0">
      <button
        type="button"
        class="block cursor-pointer overflow-hidden rounded-lg border border-text/10"
        :class="{
          'border-primary ring-2 ring-primary/20': image.id === effectiveFeaturedImageId,
        }"
        @click="openImage(image)"
      >
        <img
          :src="image.url"
          :alt="alt"
          :class="
            image.id === effectiveFeaturedImageId
              ? 'h-64 w-96 object-cover'
              : 'h-32 w-48 object-cover'
          "
        />
      </button>

      <button
        v-if="editable"
        type="button"
        class="absolute top-2 right-2 flex size-9 cursor-pointer items-center justify-center rounded-full transition-colors"
        :class="
          image.id === effectiveFeaturedImageId
            ? 'bg-primary text-white'
            : 'bg-surface/90 text-text hover:bg-surface'
        "
        :aria-label="
          image.id === effectiveFeaturedImageId
            ? `Current ${featuredLabel}`
            : `Set as ${featuredLabel}`
        "
        @click.stop="requestSetFeatured(image.id)"
      >
        <StarIcon class="size-5" />
      </button>
    </div>
  </div>

  <div
    v-else
    class="flex min-h-48 items-center justify-center border-b border-text/10 py-8 text-text/50"
  >
    No images available
  </div>

  <ImageModal
    v-if="selectedImage"
    :open="true"
    :src="selectedImage.url"
    :alt="alt"
    @close="closeImage"
  />

  <ConfirmModal
    :open="isConfirmModalOpen"
    :title="`Set ${featuredLabel}`"
    :message="`Are you sure you want to set this image as the ${featuredLabel}?`"
    :confirm-label="`Set as ${featuredLabel}`"
    @confirm="confirmSetFeatured"
    @cancel="cancelSetFeatured"
  />
</template>
