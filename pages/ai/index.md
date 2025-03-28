---
title: AI工具箱
layoutClass: m-ainav-layout
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

# AI工具箱

::: info
* 本工具箱主要是记录一些AI相关的知识和工具
* 主要是一些AI的基础知识、AI的应用场景、AI的工具、AI的模型、AI的算法、AI的应用案例等
:::

<MNavLinks v-for="{title, items} in NAV_DATA" :title="title" :items="items"/>