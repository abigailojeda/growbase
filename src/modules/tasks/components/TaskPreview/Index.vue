<script lang="ts" src="./Index.ts"></script>

<template>
  <section class="min-w-0 overflow-hidden rounded-lg bg-background">
    <div
      :class="[
        'flex flex-col gap-1 px-3 py-2 sm:flex-row sm:items-center sm:justify-between sm:gap-4',
        headerClass,
      ]"
    >
      <h4 class="truncate text-sm font-semibold">
        {{ task.title }}
      </h4>

      <span class="shrink-0 text-xs font-medium">
        {{ t('tasks.due') }} {{ formattedDueDate }}
      </span>
    </div>

    <div class="px-3 py-2">
      <p class="truncate text-xs text-text/60">
        {{ task.description }}
      </p>

      <div
        v-if="assigneeName"
        class="mt-2 flex items-center gap-1.5 text-xs font-medium text-text/50"
      >
        <UserIcon class="w-4" />

        <span class="truncate">
          {{ assigneeName }}
        </span>
      </div>
    </div>
  </section>
</template>
