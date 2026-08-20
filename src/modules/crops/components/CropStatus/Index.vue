<script lang="ts" src="./Index.ts"></script>

<template>
  <div
    :class="[
      'flex items-center gap-1.5 text-sm font-medium capitalize',
      status === 'active' ? 'text-primary' : 'text-text/40',
    ]"
  >
    <GearIcon :class="['w-5', status === 'active' && 'animate-spin [animation-duration:5s]']" />

    <span>
      {{ status }}
    </span>
  </div>
</template>
