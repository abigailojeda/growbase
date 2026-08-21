<script lang="ts" src="./Index.ts"></script>

<template>
  <div class="flex flex-col gap-5 px-6 py-6 sm:flex-row sm:items-center">
    <div class="flex min-w-0 flex-1 items-center gap-5">
      <div class="flex size-16 shrink-0 items-center justify-center rounded-xl bg-primary/10">
        <img
          :src="businessLine.iconUrl"
          :alt="`${businessLine.name} icon`"
          class="size-10 object-contain"
        />
      </div>

      <div class="min-w-0 flex-1">
        <img
          :src="businessLine.logoUrl"
          :alt="`${businessLine.name} logo`"
          class="h-10 max-w-full object-contain"
        />
      </div>
    </div>

    <div class="flex shrink-0 flex-col gap-2">
      <button type="button" class="btn-outline" @click="$emit('login', 'admin')">
        {{ t('auth.demoAccounts.adminLogin') }}
      </button>

      <button type="button" class="btn-outline-secondary" @click="$emit('login', 'worker')">
        {{ t('auth.demoAccounts.workerLogin') }}
      </button>
    </div>
  </div>
</template>
