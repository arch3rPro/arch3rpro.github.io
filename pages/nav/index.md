---
title: 导航
layoutClass: m-nav-layout
outline: [2, 3, 4]
navbar: true
sidebar: true
showArticleMetadata: false
editLink: false
showComment: false
---

<script setup>
import { NAV_DATA } from './data'
</script>
<style src="./style.scss"></style>

# 安全导航

::: info
* 🎯 网络安全优质站点，入门推荐、知识学习、网安资讯、在线工具、漏洞众测等
* 🗂️ Markdown加载性能有限，本站精选部分站点,完整版请访问博主的导航站
> **[攻城狮导航](http://nav.secnews.xyz){style="color: #4CAF50; font-weight: bold"}**  **（已收集900+网址 &1300+ 微信公众号）**

:::

<MNavLinks v-for="{title, items} in NAV_DATA" :title="title" :items="items"/>