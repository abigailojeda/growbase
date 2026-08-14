<script lang="ts" src="./Index.ts"></script>

<template>
  <Navbar>
    <template #actions>
      <UserMenu />
    </template>
  </Navbar>
  <div class="min-h-screen bg-background text-text">
    <RouterView />
  </div>
</template>
