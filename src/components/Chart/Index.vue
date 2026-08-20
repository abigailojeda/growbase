<script lang="ts" src="./Index.ts"></script>

<template>
  <div class="relative size-full">
    <VueChart :type="type" :data="data" :options="options" :aria-label="ariaLabel" />
  </div>
</template>
