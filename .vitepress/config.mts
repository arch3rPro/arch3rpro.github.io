import { defineConfig } from 'vitepress'
import { head } from './config/head'
import { nav } from './config/nav'
import { sidebar } from './config/sidebar'
import { markdown } from './config/markdown'
import { metaData } from './config/metadata'
import { algolia } from './config/algolia'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // 基础路径
  base: '/',
  // 基础配置
  head: head,
  lang: metaData.lang,
  title: metaData.title,
  description: metaData.description,
  // 暗色模式
  appearance: 'dark',

  // 最后更新时间
  lastUpdated: true,

  // 简洁的url
  cleanUrls: true,

  // 输出目录
  outDir: './dist',

  // 主题配置 https://vitepress.dev/reference/default-theme-config
  themeConfig: {
    nav: nav,
    sidebar: sidebar,

    logo: {
      light: '/logo.png',
      dark: '/logo.png'
    },

    outline: {
      label: '页面导航',
      level: 'deep'
    },
    editLink: {
      pattern: 'https://github.com/arch3rPro/arch3rpro.github.io/edit/main/:path',
      text: '不妥之处，敬请雅正'
    },
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },
    search: {
      provider: 'local'
      // provider: 'algolia',
      // options: algolia,
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/arch3rPro/arch3rpro.github.io' }
    ],
    footer: {
      copyright: 'Copyright © 2019-2025 Arch3rPro\'s Blog | CC BY-NC 4.0 | <a href="https://beian.miit.gov.cn" target="_blank" rel="nofollow noopener" style="text-decoration: none;">京ICP备2023000451号-3</a>'
    },
    // @ts-ignore
    articleMetadataConfig: {
      author: 'Arch3rPro', // 文章全局默认作者名称
      authorLink: '/about', // 点击作者名时默认跳转的链接
    },
    // 自定义扩展: 文章版权配置
    copyrightConfig: {
      license: '署名-相同方式共享 4.0 国际 (CC BY-SA 4.0)',
      licenseLink: 'https://creativecommons.org/licenses/by/4.0/legalcode.zh-hans'
    },
  },

  // markdown配置
  markdown: markdown,

  // 路由重写
  rewrites: {
    'posts/:categorie/:yyyy/:title/README.md': ':categorie/:yyyy/:title.md',
    'posts/:categorie/:type/index.md': ':categorie/:type.md',
    'posts/:categorie/index.md': ':categorie.md',
    'pages/:categorie/index.md': ':categorie.md'
  },

  srcExclude: [
    './.github/',
    './README.md',
  ],

  sitemap: {
    hostname: 'https://arch3rpro.github.io/arch3rpro.github.io',
  },
})
