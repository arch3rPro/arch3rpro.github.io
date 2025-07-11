---
# https://vitepress.dev/reference/default-theme-home-page
layout: home
layoutClass: 'm-appstore-layout'

hero:
  name: "应用商店"
  text: "发现优质应用"
  tagline: "1Panel-第三方应用商店(运维监控、免费大模型API、Nas工具、容器管理) "
  image:
    src: /assets/1Panel-Appstore.png
    alt: background
  actions:
    - theme: brand
      text: 查看项目
      link: https://github.com/arch3rPro/1Panel-Appstore
    - theme: alt
      text: 提交应用
      link: https://github.com/arch3rPro/1Panel-Appstore/issues

features: []
---

<AppList />

<style>
/* 图片容器尺寸设置
   1. 宽度100%填充父容器
   2. 最大宽度限制为480px防止过大 */
.m-appstore-layout .image-src {
  width: 100%;
  max-width: 480px;
  transition: transform 0.3s ease-in-out;
}

@keyframes swing-horizontal {
  0% { transform: translate(-50%, -50%) translateX(0); }
  10% { transform: translate(-50%, -50%) translateX(-12px); }
  20% { transform: translate(-50%, -50%) translateX(12px); }
  30% { transform: translate(-50%, -50%) translateX(-10px); }
  40% { transform: translate(-50%, -50%) translateX(10px); }
  50% { transform: translate(-50%, -50%) translateX(-8px); }
  60% { transform: translate(-50%, -50%) translateX(8px); }
  70% { transform: translate(-50%, -50%) translateX(-4px); }
  80% { transform: translate(-50%, -50%) translateX(4px); }
  90% { transform: translate(-50%, -50%) translateX(0); }
  100% { transform: translate(-50%, -50%) translateX(0); }
}

.m-appstore-layout .image-src:hover {
  animation: swing-horizontal 0.6s ease-in-out infinite;
}

.m-appstore-layout .details small {
  opacity: 0.8;
}

.m-appstore-layout .item:last-child .details {
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