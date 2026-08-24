<script lang="ts" src="./Index.ts"></script>

<template>
  <footer
    class="border-t border-primary/10 bg-background px-6 py-10 flex flex-col items-center lg:px-12"
  >
    <div
      class="flex w-full max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between"
    >
      <div>
        <RouterLink to="/" :aria-label="t('landing.footer.homeAriaLabel')">
          <Logo variant="full" class="text-primary" />
        </RouterLink>

        <p class="mt-3 max-w-sm text-sm leading-6 text-text/60">
          {{ t('landing.footer.description') }}
        </p>
      </div>

      <RouterLink to="/login" class="btn-outline w-fit">
        {{ t('landing.footer.cta') }}
      </RouterLink>
    </div>

    <div class="mt-8 flex w-full max-w-7xl border-t border-primary/10 pt-6">
      <p class="text-sm text-text/40">
        {{ t('landing.footer.copyright', { year: currentYear }) }}
      </p>
    </div>
  </footer>
</template>
