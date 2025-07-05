<template>
  <div>
    <div v-if="allCategories.length > 1" class="app-category-filter">
      <button
        v-for="cat in allCategories"
        :key="cat"
        :class="['app-category-btn', { active: selectedCategory === cat }]"
        @click="selectedCategory = cat"
      >
        {{ cat }}
      </button>
    </div>
    <div class="app-grid" v-if="filteredApps.length">
      <div 
        v-for="app in filteredApps" 
        :key="app.id" 
        class="app-card"
        @click="openWebsite(app.website)"
      >
        <div class="app-card-icon">
          <img :src="app.icon" :alt="app.name" @error="handleImageError" />
        </div>
        <div class="app-card-body">
          <div class="app-card-title-row">
            <div class="app-card-title">{{ app.name }}</div>
            <span v-if="app.version" class="app-card-version">{{ app.version }}</span>
          </div>
          <div class="app-card-desc">{{ app.description }}</div>
        </div>
        <div class="app-card-footer">
          <span class="app-card-category">
            {{ Array.isArray(app.tags) ? app.tags.join(', ') : app.tags }}
          </span>
          <a :href="app.website" class="app-card-link" target="_blank" rel="noopener noreferrer" @click.stop>官网 →</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { apps, categories } from '../config/apps'
import '../styles/appList.scss'

const appList = ref(apps)
const selectedCategory = ref('全部')

const handleImageError = (event) => {
  const canvas = document.createElement('canvas')
  canvas.width = 64
  canvas.height = 64
  const ctx = canvas.getContext('2d')
  ctx.fillStyle = '#ffffff'
  ctx.fillRect(0, 0, 64, 64)
  ctx.fillStyle = '#666666'
  ctx.font = '24px Arial'
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.fillText('APP', 32, 32)
  event.target.src = canvas.toDataURL()
}

const openWebsite = (url) => {
  window.open(url, '_blank', 'noopener,noreferrer')
}

// 计算所有分类
const categoryOrder = [
  'LLM免费接口',
  '文档与内容管理',
  '安全与网络工具',
  'AI 与智能应用',
  '多媒体管理',
  '运维监控',
  'Nas工具',
  '容器管理'
]
const allCategories = computed(() => {
  const set = new Set()
  appList.value.forEach(app => {
    if (app.category) set.add(app.category)
  })
  const ordered = categoryOrder.filter(cat => set.has(cat))
  const rest = Array.from(set).filter(cat => !categoryOrder.includes(cat))
  return ['全部', ...ordered, ...rest]
})

// 过滤卡片
const filteredApps = computed(() => {
  if (selectedCategory.value === '全部') return appList.value
  return appList.value.filter(app => app.category === selectedCategory.value)
})
</script> 