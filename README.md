# Arch3rPro 个人博客

基于 VitePress 构建的现代化个人博客网站，专注于技术分享、工具推荐和知识传播。

## ✨ 主要功能

### 🏪 应用商店
- **1Panel 应用商店**：展示精选的 1Panel 第三方应用
- **分类筛选**：支持按类别筛选应用
- **应用详情**：包含版本信息、描述、官网链接等
- **响应式设计**：完美适配各种设备

### 📥 矛盾武器库
- **武器库下载**：提供多种格式的渗透测试环境
- **多平台支持**：MacOS Fusion、Parallels、VMware、Qemu、Hyper-V 等
- **详细说明**：包含文件大小、SHA-256 校验等信息

### 📝 博客系统
- **技术分享**：软件推荐、效率工具、渗透测试等
- **教程指南**：详细的 Markdown 使用教程
- **热力图**：学习进度可视化展示

### 📡 RSS 订阅与近期资讯
- **RSS 订阅**：支持 RSS 订阅功能
- **近期咨询**：展示最新的咨询和动态
- **信息聚合**：整合多个信息源

### 🧭 安全导航和AI导航页
- **资源导航**：精选优质网站和工具
- **分类整理**：按类别组织导航链接
- **快速访问**：便捷的资源查找和访问

### 🎨 现代化设计
- **响应式布局**：完美适配桌面端和移动端
- **暗色主题**：支持明暗主题切换
- **动画效果**：丰富的交互动画和悬停效果
- **性能优化**：快速加载和流畅体验

## 🛠️ 技术栈

- **框架**：VitePress 2.x
- **语言**：Vue 3 + TypeScript
- **样式**：SCSS + Tailwind CSS
- **构建工具**：Vite
- **包管理**：npm

## 🚀 快速开始

### 环境要求
- Node.js >= 18
- npm >= 8

### 开发命令
```bash
# 安装依赖
npm install

# 启动开发服务器
npm run docs:dev

# 构建生产版本
npm run docs:build

# 预览构建结果
npm run docs:preview
```

## 📁 项目结构

```
arch3rpro.github.io/
├── .vitepress/           # VitePress 配置
│   ├── theme/           # 主题组件和样式
│   │   ├── components/  # Vue 组件
│   │   ├── styles/      # SCSS 样式文件
│   │   └── config/      # 主题配置
│   └── config.ts        # VitePress 主配置
├── pages/               # 页面文件
│   ├── appstore/        # 应用商店页面
│   ├── download/        # 下载中心页面
│   ├── feeds-sub/       # 订阅页面
│   ├── nav/            # 导航页
│   └── ...
├── posts/               # 博客文章
│   ├── blog/           # 博客文章
│   ├── tutorial/       # 教程文章
│   ├── software/       # 软件推荐
│   └── ...
├── public/              # 静态资源
│   ├── appstore/       # 应用商店资源
│   ├── download/       # 下载资源
│   └── assets/         # 其他资源
└── patches/            # 依赖补丁
```

## 🔧 配置说明

### VitePress 配置
主要配置文件位于 `.vitepress/config.ts`，包含：
- 站点基本信息
- 导航栏配置
- 侧边栏配置
- 主题配置
- 插件配置

### 主题配置
主题相关配置位于 `.vitepress/theme/` 目录：
- 组件定义
- 样式文件
- 应用数据配置

## 📝 内容管理

### 添加新文章
1. 在 `posts/` 对应分类目录下创建 Markdown 文件
2. 添加 frontmatter 配置
3. 编写文章内容

### 添加新应用
1. 更新 `.vitepress/theme/config/apps.ts` 文件
2. 添加应用信息（名称、描述、版本、图标等）
3. 将应用图标放入 `public/appstore/icons/` 目录

### 添加新下载
1. 更新 `pages/download/index.md` 文件
2. 添加下载项信息
3. 将相关资源放入 `public/download/` 目录

## 🎨 自定义样式

项目使用 SCSS 进行样式管理，主要样式文件：
- `.vitepress/theme/styles/` - 主题样式
- `pages/*/index.md` - 页面特定样式

## 📦 部署

### GitHub Pages
项目配置为自动部署到 GitHub Pages：
1. 推送到 `main` 分支
2. GitHub Actions 自动构建和部署
3. 访问 `https://arch3rpro.github.io`

### 本地部署
```bash
npm run docs:build
# 将 dist/ 目录内容部署到服务器
```

## 🔗 相关链接

- [VitePress 官方文档](https://vitepress.dev/)
- [Vue 3 官方文档](https://vuejs.org/)
- [1Panel-Appstore 项目](https://github.com/arch3rPro/1Panel-Appstore)
- [Pentest-Windows 项目](https://github.com/arch3rPro/Pentest-Windows)

## 📞 联系方式

- 网站：https://arch3rpro.github.io
- GitHub：https://github.com/arch3rPro

---

⭐ 如果这个项目对你有帮助，请给它一个 Star！ 
