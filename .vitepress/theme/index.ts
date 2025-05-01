// https://vitepress.dev/guide/custom-theme
import { h, watch } from 'vue'
import type { Theme } from 'vitepress'
import { useData, EnhanceAppContext, useRoute } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import comment from './components/comment.vue'
import imageViewer from './components/imageViewer.vue'
import footBefore from './components/footBefore.vue'
import MyLayout from './components/MyLayout.vue'
import DataPanel from "./components/DataPanel.vue"
import giscusTalk from 'vitepress-plugin-comment-with-giscus';

import './styles/index.scss'

import ArticleGPT from './components/ArticleGPT.vue';
import { inBrowser } from 'vitepress'
import busuanzi from 'busuanzi.pure.js'


 
if (typeof window !== 'undefined') {
  /* 注销 PWA 服务 */
  if (window.navigator && navigator.serviceWorker) {
    navigator.serviceWorker.getRegistrations().then(function (registrations) {
      for (let registration of registrations) {
        registration.unregister()
      }
    })
  }

  /* 删除浏览器中的缓存 */
  if ('caches' in window) {
    caches.keys().then(function (keyList) {
      return Promise.all(
        keyList.map(function (key) {
          return caches.delete(key)
        })
      )
    })
  }
}

export default {
  extends: DefaultTheme,

  setup() {
    // Get frontmatter and route
    const { frontmatter } = useData();
    const route = useRoute();
        
    // giscus配置
    giscusTalk({
      repo: 'arch3rPro/arch3rpro.github.io', //仓库
      repoId: 'R_kgDOOQUWPA', //仓库ID
      category: 'General', // 讨论分类
      categoryId: 'DIC_kwDOOQUWPM4Cpqj0', //讨论分类ID
      mapping: 'pathname',
      inputPosition: 'bottom',
      lang: 'zh-CN',
      }, 
      {
        frontmatter, route
      },
      //默认值为true，表示已启用，此参数可以忽略；
      //如果为false，则表示未启用
      //您可以使用“comment:true”序言在页面上单独启用它
      true
    );
  },
  // Layout: MyLayout, 
  Layout: () => {
    const props: Record<string, any> = {}
    const { frontmatter } = useData()

    /* 添加自定义 class */
    if (frontmatter.value?.layoutClass) {
      props.class = frontmatter.value.layoutClass
    }

    // return h(DefaultTheme.Layout, props, {
    //   // https://vitepress.dev/guide/extending-default-theme#layout-slots
    //   "doc-after": () => h(comment),
    //   "doc-bottom": () => h(imageViewer),
    //   "doc-footer-before": () => h(footBefore),
    // })
    return h(MyLayout, props, {
      "doc-after": () => h(comment),
      "doc-bottom": () => h(imageViewer),
      "doc-footer-before": () => h(footBefore),
    })
  },
  enhanceApp({ app, router }: EnhanceAppContext) {

    app.component('ArticleGPT', ArticleGPT);
    app.component('DataPanel' , DataPanel);
    if (typeof window !== 'undefined') {
      watch(
        () => router.route.data.relativePath,
        () => updateHomePageStyle(location.pathname === '/'),
        { immediate: true }
      )
    }
    if (inBrowser) {
      router.onAfterRouteChange = () => {
        setTimeout(() => {
          busuanzi.fetch()
        }, 100)
      }
    }
  } 

  // Layout: () => {
  //   return h(DefaultTheme.Layout, null, {
  //     // https://vitepress.dev/guide/extending-default-theme#layout-slots
  //   })
  // },
  // enhanceApp({ app, router, siteData }) {
  //   // ...
  // }
} satisfies Theme

if (typeof window !== 'undefined') {
  // detect browser, add to class for conditional styling
  const browser = navigator.userAgent.toLowerCase()
  if (browser.includes('chrome')) {
    document.documentElement.classList.add('browser-chrome')
  } else if (browser.includes('firefox')) {
    document.documentElement.classList.add('browser-firefox')
  } else if (browser.includes('safari')) {
    document.documentElement.classList.add('browser-safari')
  }
}

let homePageStyle: HTMLStyleElement | undefined

// Speed up the rainbow animation on home page
function updateHomePageStyle(value: boolean) {
  if (value) {
    if (homePageStyle) return

    homePageStyle = document.createElement('style')
    homePageStyle.innerHTML = `
    :root {
      animation: rainbow 12s linear infinite;
    }`
    // console.log(homePageStyle);
    document.body.appendChild(homePageStyle)
  } else {
    // console.log(111);
    if (!homePageStyle) return

    homePageStyle.remove()
    homePageStyle = undefined
  }
}