---
title: 下载页面
layoutClass: m-download-layout
outline: false
showArticleMetadata: false
editLink: false
showComment: false
---

<script setup>
import { DOWNLOAD_DATA } from './data'
</script>
<style src="./style.scss"></style>

<div class="hero">
  <div class="hero-content">
    <h1>Pentest-Windows下载</h1>
    <p class="description">探索未知 🔍 拓展边界 🌏</p>
  </div>
  <div class="hero-image">
    <img src="/Windows10.png" alt="hero image">
  </div>
</div>

<div class="download-container">
  <div class="cards-container">
    <div v-for="item in DOWNLOAD_DATA" :key="item.title" class="card">
      <img :src="item.icon" alt="icon" class="card-icon">
      <h3 class="card-title">{{ item.title }}</h3>
      <p class="card-description">{{ item.description }}</p>
      <a :href="item.disabled ? '#' : item.downloadUrl" class="download-button" :class="{ 'disabled': item.disabled }">{{ item.buttonText }}</a>
    </div>
  </div>
</div>