<script lang="ts" src="./Index.ts"></script>

<template>
  <section class="rounded-xl bg-surface p-5">
    <h2 class="text-2xl font-semibold text-text">Team overview</h2>

    <p v-if="!workers.length" class="mt-6 text-sm text-text/60">No workers available.</p>

    <div v-else class="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
      <article v-for="worker in workers" :key="worker.userId" class="rounded-xl bg-background p-4">
        <div class="flex items-center justify-between gap-4">
          <h3 class="truncate font-semibold text-text">
            {{ worker.name }}
          </h3>

          <span class="shrink-0 text-sm text-text/60"> {{ worker.total }} tasks </span>
        </div>

        <div class="mt-4 grid grid-cols-3 gap-3">
          <div>
            <p class="text-xs text-text/50">Pending</p>

            <p class="mt-1 font-semibold text-amber-600 dark:text-amber-400">
              {{ worker.pending }}
            </p>
          </div>

          <div>
            <p class="text-xs text-text/50">In progress</p>

            <p class="mt-1 font-semibold text-primary">
              {{ worker.inProgress }}
            </p>
          </div>

          <div>
            <p class="text-xs text-text/50">Completed</p>

            <p class="mt-1 font-semibold text-green-600 dark:text-green-400">
              {{ worker.completed }}
            </p>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>
