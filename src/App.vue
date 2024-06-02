<template>
  <div class="container h-100">
    <header class="position-absolute d-flex align-items-center pt-3">
      <button
        class="btn btn-outline-primary d-lg-none me-3"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#main-menu"
        aria-controls="main-menu"
      >
        <i class="bi bi-list"></i>
      </button>
      <h1 class="text-primary">Krypt Pad</h1>
    </header>

    <div id="content-wrapper" class="d-flex h-100 pb-3">
      <div
        class="offcanvas-lg offcanvas-start h-100 overflow-auto"
        style="min-width: 10rem"
        tabindex="-1"
        id="main-menu"
        aria-labelledby="main-menu-label"
      >
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="main-menu-label">Responsive offcanvas</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="offcanvas"
            data-bs-target="#main-menu"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <p class="mb-0">This is content within an <code>.offcanvas-lg</code>.</p>
        </div>
      </div>

      <main class="flex-fill overflow-auto ps-lg-3 pe-3">
        <RouterView />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<style scoped>
#content-wrapper {
  padding-top: 5rem;
}
</style>
