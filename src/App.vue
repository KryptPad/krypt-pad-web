<template>
  <div class="container h-100">
    <div class="d-flex h-100" style="padding-top: 50px">

      <div class="bg-primary h-100 overflow-auto" style="min-width: 10rem">
        <ul>
          <li>Nav Item</li>
          <li>Nav Item</li>
          <li>Nav Item</li>
          <li>Nav Item</li>
          <li>Nav Item</li>
          <li>Nav Item</li>
          <li>Nav Item</li>
          <li>Nav Item</li>
          <li>Nav Item</li>
          <li>Nav Item</li>
          <li>Nav Item</li>
          <li>Nav Item</li>
        </ul>
      </div>

      <main class="flex-fill overflow-auto">
        <header class="text-center ">
          <h1>Krypt Pad</h1>
        </header>

        <RouterView />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<style scoped></style>
