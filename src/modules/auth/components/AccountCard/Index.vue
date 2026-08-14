<script lang="ts" src="./Index.ts"></script>

<template>
  <section class="w-full overflow-hidden rounded-xl bg-surface shadow-sm">
    <header class="flex items-center gap-4 border-b border-primary/20 px-6 py-6">
      <div
        class="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary"
      >
        <AccountsIcons />
      </div>

      <div>
        <h1 class="text-xl font-semibold text-text">Demo accounts</h1>

        <p class="mt-1 text-sm text-text/60">Explore Growbase with different business lines</p>
      </div>
    </header>

    <div class="divide-y divide-secondary/20">
      <AccountItem
        v-for="businessLine in businessLines"
        :key="businessLine.id"
        :business-line="businessLine"
        @login="handleLogin(businessLine.id, $event)"
      />
    </div>

    <footer class="flex items-center gap-3 border-t border-primary/20 px-6 py-4">
      <div
        class="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary"
      >
        <InfoIcon />
      </div>

      <p class="text-xs text-text/60">
        These demo accounts are for exploration only. No real data will be changed.
      </p>
    </footer>
  </section>
</template>
