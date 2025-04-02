---
# https://vitepress.dev/reference/default-theme-home-page
layout: home
layoutClass: 'm-home-layout'

hero:
  name: "矛·盾 知识库"
  text: "AI & 洞察 & 安全"
  tagline: "探索未知 💻 - 拓展边界 🪐 "
  image:
    src: /background.png
    alt: background
  actions:
    - theme: brand
      text: 进入博客
      link: /blog
    - theme: alt
      text: 进入仓库
      link: https://github.com/arch3rPro/Pentest-Windows

features:
  - icon: 🧠
    title: AI笔记
    details: 探索AI技术前沿<small>（LLM/CV/NLP）</small><br />分享AI实践与应用心得
    link: /review
    linkText: AI笔记应用
  - icon: 💡
    title: Workflow
    details: 在工作中用到的一切<small>（常用库/工具/奇淫技巧等）</small><br />提高工作效率
    link: /workflow/style-guide
    linkText: 常用工具库
  - icon: 🧰
    title: 网络安全
    details: 工欲善其事，必先利其器<br />记录渗透和日常所用到的工具、软件、插件、扩展等
    link: /efficiency/mac
    linkText: 渗透工具库
---

<ClientOnly><Heatmap /></ClientOnly>

<DataPanel />
<style>
.m-home-layout .image-src:hover {
  transform: translate(-50%, -50%) rotate(666turn);
  transition: transform 59s 1s cubic-bezier(0.3, 0, 0.8, 1);
}

.m-home-layout .details small {
  opacity: 0.8;
}

.m-home-layout .item:last-child .details {
  display: flex;
  justify-content: flex-end;
  align-items: end;
}

@media (min-width: 768px) {
  .VPHome {
    margin-bottom: 50px !important;
  }
}
</style>
