<script lang="ts" src="./Index.ts"></script>

<template>
  <div
    v-if="images.length"
    class="flex items-end gap-4 overflow-x-auto border-b border-text/10 py-8"
  >
    <button
      v-for="image in images"
      :key="image.id"
      type="button"
      class="crop-image-thumbnail"
      :class="{
        'crop-image-thumbnail-cover': image.id === effectiveCoverImageId,
      }"
      :disabled="!editable"
      @click="handleImageClick(image.id)"
    >
      <img
        :src="image.url"
        :alt="alt"
        :class="
          image.id === effectiveCoverImageId ? 'h-64 w-96 object-cover' : 'h-32 w-48 object-cover'
        "
      />

      <span v-if="image.id === effectiveCoverImageId" class="crop-image-cover-label"> Cover </span>
    </button>
  </div>

  <div
    v-else
    class="flex min-h-48 items-center justify-center border-b border-text/10 p-6 text-text/50"
  >
    No images available
  </div>
</template>
