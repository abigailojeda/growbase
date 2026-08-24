<script lang="ts" src="./Index.ts"></script>

<template>
  <main class="flex min-h-screen items-center justify-center px-6 py-12">
    <div class="w-full max-w-2xl sm:pt-0 pt-12">
      <AccountCard :business-lines="businessLines" @login="handleLogin" />
    </div>
  </main>
</template>
