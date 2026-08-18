<script lang="ts" src="./Index.ts"></script>

<template>
  <Teleport to="body">
    <div
      v-if="open"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6"
      role="dialog"
      aria-modal="true"
      @click.self="close"
    >
      <button
        type="button"
        class="absolute top-6 right-6 flex size-10 cursor-pointer items-center justify-center rounded-full bg-black/40 text-white transition-colors hover:bg-black/60"
        aria-label="Close image"
        @click="close"
      >
        <CloseIcon class="size-6" />
      </button>

      <img :src="src" :alt="alt" class="max-h-[90dvh] max-w-full object-contain" />
    </div>
  </Teleport>
</template>
