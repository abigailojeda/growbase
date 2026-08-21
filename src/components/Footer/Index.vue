<script lang="ts" src="./Index.ts"></script>

<template>
  <footer class="border-t border-primary/10 bg-background px-6 py-10 lg:px-12">
    <div
      class="mx-auto flex w-full max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between"
    >
      <div>
        <RouterLink to="/" aria-label="Go to Growbase home">
          <Logo variant="full" class="text-primary" />
        </RouterLink>

        <p class="mt-3 max-w-sm text-sm leading-6 text-text/60">
          Smarter crop management for connected agricultural operations.
        </p>
      </div>

      <RouterLink to="/login" class="btn-outline"> Explore Growbase </RouterLink>
    </div>

    <div class="mx-auto mt-8 flex w-full max-w-7xl border-t border-primary/10 pt-6">
      <p class="text-sm text-text/40">© {{ currentYear }} Growbase. All rights reserved.</p>
    </div>
  </footer>
</template>
