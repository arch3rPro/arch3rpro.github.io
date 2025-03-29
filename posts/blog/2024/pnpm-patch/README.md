---
title: pnpm patch使用
description: 在前端项目依赖三方包出现问题时，可以通过打patch的方式进行包的修改，比直接改node_modules优雅
date: 2025-01-08 23:04:56
tags:
  - 前端
---

# PNPM Patch使用

::: tip 引言
在前端项目依赖三方包出现问题时，可以通过打patch的方式进行包的修改，比直接改node_modules优雅，比如在本博客主题中就用到了pnpm-patch来解决几个三方包的问题
:::

### 命令

```shell
// 生成指定包的修改路径，比如 pnpm patch cal-heatmap@4.2.4
pnpm patch <package-name><package-versioin>

// 提交修改后的diff信息
pnpm patch-commit <file-path>
```

**例如：**

```shell
You can now edit the following folder: /private/var/folders/7g/317tjb5x0yxgq04j83cvy35r0000gn/T/3df5590b271efc3f611652d5367079af

Once you're done with your changes, run "pnpm patch-commit '/private/var/folders/7g/317tjb5x0yxgq04j83cvy35r0000gn/T/3df5590b271efc3f611652d5367079af'"
```

1. `/private/var/folders/7g/317tjb5x0yxgq04j83cvy35r0000gn/T/3df5590b271efc3f611652d5367079af` 用vscode直接打开修改要修改的代码

2. 然后 `pnpm patch-commit '/private/var/folders/7g/317tjb5x0yxgq04j83cvy35r0000gn/T/3df5590b271efc3f611652d5367079af'` 直接提交