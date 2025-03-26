// https://vitepress.dev/guide/custom-theme
import { h, watch } from 'vue'
import type { Theme } from 'vitepress'
import { useData, EnhanceAppContext } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import comment from './components/comment.vue'
import imageViewer from './components/imageViewer.vue'
import footBefore from './components/footBefore.vue'

import './styles/index.scss'

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
  Layout: () => {
    const props: Record<string, any> = {}
    const { frontmatter } = useData()

    /* 添加自定义 class */
    if (frontmatter.value?.layoutClass) {
      props.class = frontmatter.value.layoutClass
    }

    return h(DefaultTheme.Layout, props, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
      "doc-after": () => h(comment),
      "doc-bottom": () => h(imageViewer),
      "doc-footer-before": () => h(footBefore),
    })
  },
  // enhanceApp(ctx) {
  //     DefaultTheme.enhanceApp(ctx);

  //     ctx.app.component('ArticleMetadata', ArticleMetadata);
  // },

  enhanceApp({ app, router }: EnhanceAppContext) {
    if (typeof window !== 'undefined') {
      watch(
        () => router.route.data.relativePath,
        () => updateHomePageStyle(location.pathname === '/'),
        { immediate: true }
      )
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