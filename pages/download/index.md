---
layout: home
layoutClass: 'm-page-layout'

hero:
  name: 矛·盾 武器库
  text: Pentest-Windows
  tagline: 一个开箱即用的windows渗透测试环境
  image:
    src: /download/DeskTop.png
    alt: 茂茂物语
  actions:
    - text: 项目地址
      link: https://github.com/arch3rPro/Pentest-Windows
      theme: brand
    - text: 文档教程
      link: /Pentest-Windows
      theme: alt
features:
  - icon:
      src: /download/VMware.svg
      width: 64px
      height: 64px
    title: VMware Workstation
    details: x64 | VM虚拟机 | Mac Intel芯片 <br /><small>MD5sum：1F3A96A3BFC458F7</small><br /><small class="bottom-small">文件大小：8.55GB | 解压后：23.2GB</small>
    linkText: 即将上线
  - icon:
      src: /download/Fusion.svg
      width: 64px
      height: 64px
    title: MacOS Fusion
    details: arm64 | Mac M系芯片 | Fusions  <br /><small>MD5sum：1CE7B156A60D0E41</small><br /><small class="bottom-small">文件大小：13.87GB | 解压后：39.85GB</small>
    link: https://pan.baidu.com/s/1zX4VapfYvm2j3Jga1oLdCA?pwd=fr26
    linkText: 点击下载
  - icon:
      src: /download/Parallels.svg
      width: 64px
      height: 64px
    title: Parallels Desktop
    details: arm64 | Mac M系芯片 | Parallels  <br /><small>适配中</small><br />预计6月发布
    linkText: 敬请期待
  - icon:
      src: /download/Qemu.svg
      width: 64px
      height: 64px
    title: Promox-VE KVM
    details: x64 | KVM虚拟机 | Qemu或PVE <br /><small>适配中</small><br />预计6月发布
    linkText: 敬请期待
  - icon:
      src: /download/Virtualbox.svg
      width: 64px
      height: 64px
    title: VirtualBox OVMF
    details: x64 | VM虚拟机 | 导入VirtualBox <br /><small>适配中</small><br />预计6月发布
    linkText: 敬请期待
---

<style>
/* 图片容器尺寸设置
   1. 宽度100%填充父容器
   2. 最大宽度限制为480px防止过大 */
.m-page-layout .image-src {
  width: 100%;
  max-width: 480px;
}
/*爱的魔力转圈圈*/
/* .m-page-layout .image-src:hover {
  transform: translate(-50%, -50%) rotate(666turn);
  transition: transform 59s 1s cubic-bezier(0.3, 0, 0.8, 1);
} */

/* 卡片悬停交互效果
   1. 主卡片动画：0.4秒缓动过渡所有属性
   2. 悬停时放大3%并添加阴影提升层次感 */
.m-page-layout .item {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  max-width: 100%;
}

.m-page-layout .item:hover {
  transform: scale(1.03);
  box-shadow: 0 12px 24px -8px rgba(0, 0, 0, 0.1);
}

/* 图标颜色过渡：0.3秒品牌色渐变 */
.m-page-layout .item:hover .icon {
  color: var(--vp-c-brand);
  transition: color 0.3s;
}

/* 标题颜色过渡：延迟0.1秒触发，增强交互层次 */
.m-page-layout .item:hover .title {
  color: var(--vp-c-brand);
  transition: color 0.3s 0.1s;
}

/* 辅助文字透明度调整 */
.m-page-layout .details small {
  opacity: 0.8;
}
/* 修改960px以上默认显示3个卡片 */
@media (min-width: 960px) {
    .m-page-layout .item.grid-4 {
        width: calc(100% / 3);
    }
}
/* 最后一个卡片特殊布局：
   1. 使用flex布局
   2. 内容右对齐 */
/* .m-page-layout .item:last-child .details {
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
} */


</style>
