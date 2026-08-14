<script lang="ts" src="./Index.ts"></script>

<template>
  <header
    class="landing-hero-background landing-hero-mobile-position lg:bg-center relative flex min-h-[70vh] w-full items-center justify-center overflow-hidden"
  >
    <!-- OVERLAY -->
    <div class="absolute inset-0 bg-black/40"></div>

    <!-- CONTENT -->
    <div class="relative mx-auto w-full max-w-5xl px-6 py-20 text-center text-white">
      <h1 class="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
        Smarter farming starts here
      </h1>

      <p class="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/90 sm:text-lg">
        Manage crops, monitor field conditions and organize your team's daily work from one
        centralized platform.
      </p>

      <RouterLink to="/login" class="primary-btn"> Get started </RouterLink>
    </div>
  </header>
</template>
