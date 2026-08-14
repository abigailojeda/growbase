<script lang="ts" src="./Index.ts"></script>

<template>
  <main class="flex min-h-screen items-center justify-center bg-background px-6 py-12">
    <div class="w-full max-w-2xl">
      <AccountCard :business-lines="businessLines" @login="handleLogin" />
    </div>
  </main>
</template>
