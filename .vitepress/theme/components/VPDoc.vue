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
:deep(.content-container),
:deep(.content) {
  max-width: 100% !important;
}
</style>