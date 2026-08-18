<script lang="ts" src="./Index.ts"></script>

<template>
  <section class="p-6">
    <h1 class="text-2xl font-semibold">Crops</h1>

    <div class="mt-6">
      <p v-if="!crops.length" class="opacity-60">No crops available.</p>

      <ul v-else class="space-y-3">
        <li v-for="crop in crops" :key="crop.id" class="rounded-lg bg-surface p-4">
          <h2 class="font-semibold">
            {{ crop.name }}
          </h2>

          <p class="text-sm opacity-60">{{ crop.type }} · {{ crop.location }}</p>
        </li>
      </ul>
    </div>
  </section>
</template>
