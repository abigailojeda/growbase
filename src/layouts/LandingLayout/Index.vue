<script lang="ts" src="./Index.ts"></script>

<template>
  <div class="min-h-screen bg-background text-text">
    <Navbar variant="glass">
      <template #actions>
        <UserMenu />
      </template>
    </Navbar>

    <RouterView />
  </div>
</template>
