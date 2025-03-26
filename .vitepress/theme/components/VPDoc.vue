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
  max-width: 1200px !important;
}

:deep(.content) {
  max-width: 960px !important;
}

@media (min-width: 1440px) {
  :deep(.content-container) {
    max-width: 1440px !important;
  }

  :deep(.content) {
    max-width: 1024px !important;
  }
}
</style>