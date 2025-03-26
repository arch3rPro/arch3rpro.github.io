<script setup lang="ts">
import { useData } from 'vitepress'
import { ref, onMounted } from 'vue'
import DefaultTheme from 'vitepress/theme'

const { page } = useData()
const VPDoc = DefaultTheme.Layout.VPDoc
</script>

<template>
  <VPDoc>
  </VPDoc>
</template>

<style scoped>
:deep(.content-container) {
  max-width: 100% !important;
}

:deep(.content) {
  max-width: 100% !important;
  padding: 0 32px;
}

@media (min-width: 1440px) {
  :deep(.content) {
    padding: 0 64px;
  }
}
</style>