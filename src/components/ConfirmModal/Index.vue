<script lang="ts" src="./Index.ts"></script>

<template>
  <Teleport to="body">
    <div
      v-if="open"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-6"
      role="dialog"
      aria-modal="true"
    >
      <div class="w-full max-w-md rounded-xl bg-surface p-6 shadow-xl">
        <h2 class="text-xl font-semibold text-text">
          {{ title }}
        </h2>

        <p class="mt-3 text-sm text-text/70">
          {{ message }}
        </p>

        <div class="mt-6 flex flex-col gap-3">
          <button type="button" class="btn-outline-secondary w-full" @click="cancel">
            {{ cancelLabel }}
          </button>

          <button type="button" class="primary-btn w-full" @click="confirm">
            {{ confirmLabel }}
          </button>
        </div>
      </div>
    </div>
  </Teleport>
</template>
