<template>
  <n-layout class="h-screen" has-sider>
    <AppAside />
    <n-layout>
      <AppHeader />
      <AppContent />
    </n-layout>
  </n-layout>
</template>

<script setup lang="ts">
import AppAside from './components/AppAside.vue'
import AppHeader from './components/AppHeader.vue'
import AppContent from './components/AppContent.vue'
</script>

<style scoped></style>
