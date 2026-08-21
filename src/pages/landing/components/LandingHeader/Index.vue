<script lang="ts" src="./Index.ts"></script>

<template>
  <header class="relative flex flex-col bg-background p-4 pt-12">
    <div
      class="flex w-full flex-col gap-8 px-6 lg:min-h-160 lg:flex-row lg:items-center xl:px-12 2xl:px-20"
    >
      <!-- CONTENT -->
      <div class="w-full lg:w-[40%] xl:w-[38%]">
        <p class="mb-4 text-sm font-medium text-primary">All-in-one farm management platform</p>

        <h1
          class="text-4xl font-semibold tracking-tight text-text sm:text-5xl lg:text-6xl 2xl:text-7xl"
        >
          Smarter farming
          <span class="block text-primary">starts here</span>
        </h1>

        <p class="mt-6 max-w-xl text-base leading-7 text-text/60 sm:text-lg 2xl:text-xl">
          Manage crops, monitor field conditions and organize your team's daily work from one
          centralized platform.
        </p>

        <RouterLink to="/login" class="primary-btn mt-8"> Explore Growbase </RouterLink>
      </div>

      <!-- IMAGES -->
      <div class="relative hidden min-h-125 min-w-0 flex-1 lg:block">
        <img
          :src="images.primary"
          alt="Growbase dashboard overview"
          class="absolute top-0 left-0 w-[76%] border border-primary/40 rounded-2xl shadow-xl"
        />

        <img
          :src="images.secondary"
          alt="Growbase crop detail and report history"
          class="border border-primary/40 absolute top-40 right-0 z-10 w-[78%] rounded-2xl shadow-xl"
        />
      </div>
    </div>
  </header>
</template>
