<script lang="ts" src="./Index.ts"></script>

<template>
  <section class="relative pl-8">
    <!-- LINE -->
    <div
      v-if="!isLast"
      class="absolute top-5 -bottom-12 left-2.25 w-px bg-text/20"
      aria-hidden="true"
    />
    <!-- CIRCLE -->
    <div
      :class="[
        'absolute top-3 left-0 z-10 flex size-5 items-center justify-center rounded-full border-2 bg-surface',
        expanded ? 'border-primary' : 'border-transparent',
      ]"
    >
      <div :class="['size-3 rounded-full', expanded ? 'bg-primary' : 'bg-text/40']" />
    </div>

    <!-- CARD -->
    <div class="overflow-hidden rounded-xl border border-text/10">
      <button
        type="button"
        class="w-full cursor-pointer hover:opacity-80 text-left"
        @click="$emit('toggle')"
      >
        <CropHealthHeader :health="health" />

        <div class="flex items-start gap-4 p-4">
          <div class="min-w-0 flex-1">
            <div class="flex flex-wrap items-center gap-x-2 gap-y-1">
              <span class="font-semibold text-text">
                {{ formattedDate }}
              </span>

              <span class="text-text">·</span>

              <span class="text-sm text-text/60">
                {{ formattedTime }}
              </span>

              <span class="text-text">·</span>

              <span class="text-sm text-text/60">
                {{ reporterName }}
              </span>
            </div>

            <p v-if="report.notes" class="mt-3 text-sm text-text/70">
              {{ report.notes }}
            </p>

            <p v-else class="mt-3 text-sm text-text/40">{{ t('report.noNotes') }}</p>
          </div>

          <DownArrowIcon
            :class="[
              'size-5 shrink-0 text-text/50 transition-transform duration-200',
              expanded && 'rotate-180',
            ]"
          />
        </div>
      </button>

      <!-- MEASUREMENTS -->
      <div v-if="expanded" class="border-t border-text/10 p-4">
        <CropMeasurements :measurements="measurements" />
      </div>
    </div>
  </section>
</template>
