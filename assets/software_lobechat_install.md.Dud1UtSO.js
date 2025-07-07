import{b as d}from"./chunks/theme.BiY6TBf-.js";import{_ as m}from"./chunks/articleMetadata.BZXad0n-.js";import{_ as h,C as g,c as v,o as p,j as i,G as r,ah as _,a as k,w as c,b as o,e as b}from"./chunks/framework.97i6h3Kv.js";const I=JSON.parse('{"title":"1-LobeChat部署","description":"学习如何使用 Docker Compose 部署 LobeChat 服务，包括各种服务的配置教程。Docker Compose, LobeChat, Docker 容器, 部署指引","frontmatter":{"sort":1,"title":"1-LobeChat部署","description":"学习如何使用 Docker Compose 部署 LobeChat 服务，包括各种服务的配置教程。Docker Compose, LobeChat, Docker 容器, 部署指引","date":"2025-04-09T00:21:13+08:00","tags":["LobeChat"],"isOriginal":"false","author":"LobeHub","articleLink":"https://lobehub.com/zh/docs/self-hosting/server-database/docker-compose","articleGPT":"该页面提供了使用 Docker Compose 部署 LobeChat 服务端数据库版本的详细指南，包括快速启动、本地模式、端口模式和域名模式的部署方法，以及自定义部署、常见问题和拓展配置等内容。"},"headers":[],"relativePath":"software/lobechat/install.md","filePath":"posts/software/lobechat/install/README.md","lastUpdated":1744209906000}'),C={name:"software/lobechat/install.md"};function O(n,a,S,q,E,A){const t=m,e=g("ClientOnly"),u=d;return p(),v("div",null,[a[0]||(a[0]=i("h1",{id:"docker-compose-部署-lobechat-服务端数据库版本",tabindex:"-1"},[k("Docker Compose 部署 LobeChat 服务端数据库版本 "),i("a",{class:"header-anchor",href:"#docker-compose-部署-lobechat-服务端数据库版本","aria-label":'Permalink to "Docker Compose 部署 LobeChat 服务端数据库版本"'},"​")],-1)),r(e,null,{default:c(()=>{var s,l;return[(((s=n.$frontmatter)==null?void 0:s.aside)??!0)&&(((l=n.$frontmatter)==null?void 0:l.showArticleMetadata)??!0)?(p(),o(t,{key:0,article:n.$frontmatter},null,8,["article"])):b("",!0)]}),_:1}),r(e,null,{default:c(()=>{var s;return[(s=n.$frontmatter)!=null&&s.articleGPT?(p(),o(u,{key:0})):b("",!0)]}),_:1}),a[1]||(a[1]=_(`<p>LobeChat 是一款开源的 AI 对话机器人，它可以帮助你快速搭建自己的 AI 对话机器人。 LobeChat 支持多种部署方式，包括本地部署、端口部署、域名部署等。 本章节将为你介绍如何使用 Docker Compose 部署 LobeChat 服务端数据库版本。</p><p><strong>Docker 部署限制说明</strong> Docker 及 Docker Compose 部署方案不支持通过环境变量注入 <code>NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY</code> ， 因此无法启用 Clerk 身份验证服务。建议替代方案：</p><ul><li>采用 Vercel 托管部署</li><li>执行本地镜像构建流程</li></ul><h2 id="快速启动" tabindex="-1">快速启动 <a class="header-anchor" href="#快速启动" aria-label="Permalink to &quot;快速启动&quot;">​</a></h2><p><strong>系统兼容性说明</strong></p><ul><li>支持 Unix 环境（Linux/macOS）的一键部署</li><li>Windows 用户需通过 <a href="https://aka.ms/wsl" target="_blank" rel="noreferrer">WSL 2</a> 运行</li><li>一键启动脚本为首次部署专用，非首次部署请参考 <a href="https://lobehub.com/zh/docs/self-hosting/server-database/#%E8%87%AA%E5%AE%9A%E4%B9%89%E9%83%A8%E7%BD%B2" target="_blank" rel="noreferrer">自定义部署</a> 章节</li><li>端口占用检查：确保 <code>3210</code> 、 <code>8000</code> 、 <code>9000</code> 、 <code>9001</code> 端口可用</li></ul><p>执行以下命令初始化部署环境，目录 <code>lobe-chat-db</code> 将用于存放你的配置文件和后续的数据库文件。</p><p>sh</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>mkdir lobe-chat-db &amp;&amp; cd lobe-chat-db</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>获取并执行部署脚本：</p><p>sh</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>bash &lt;(curl -fsSL https://lobe.li/setup.sh) -l zh_CN</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>脚本支持以下部署模式，请根据你的需求选择相应的模式，并继续阅读文档的剩余部分。</p><ul><li><a href="https://lobehub.com/zh/docs/self-hosting/server-database/#%E6%9C%AC%E5%9C%B0%E6%A8%A1%E5%BC%8F" target="_blank" rel="noreferrer">本地模式（默认）</a> ：仅能在本地访问，不支持局域网 / 公网访问，适用于初次体验；</li><li><a href="https://lobehub.com/zh/docs/self-hosting/server-database/#%E7%AB%AF%E5%8F%A3%E6%A8%A1%E5%BC%8F" target="_blank" rel="noreferrer">端口模式</a> ：支持局域网 / 公网的 <code>http</code> 访问，适用于无域名或内部办公场景使用；</li><li><a href="https://lobehub.com/zh/docs/self-hosting/server-database/#%E5%9F%9F%E5%90%8D%E6%A8%A1%E5%BC%8F" target="_blank" rel="noreferrer">域名模式</a> ：支持局域网 / 公网在使用反向代理下的 <code>http/https</code> 访问，适用于个人或团队日常使用；</li></ul><p>在脚本的选项提示 <code>(选项1/选项2)[选项1]</code> 中： <code>(选项1 / 选项2)</code> 代表可以选择的选项， <code>[选项1]</code> 代表默认选项，直接回车即可选择默认选项。</p><h3 id="本地模式" tabindex="-1">本地模式 <a class="header-anchor" href="#本地模式" aria-label="Permalink to &quot;本地模式&quot;">​</a></h3><h3 id="在交互式脚本中完成剩余配置" tabindex="-1">在交互式脚本中完成剩余配置 <a class="header-anchor" href="#在交互式脚本中完成剩余配置" aria-label="Permalink to &quot;在交互式脚本中完成剩余配置&quot;">​</a></h3><p>持续回车采用默认配置。</p><h3 id="查看配置生成报告" tabindex="-1">查看配置生成报告 <a class="header-anchor" href="#查看配置生成报告" aria-label="Permalink to &quot;查看配置生成报告&quot;">​</a></h3><p>你需要在脚本运行结束后查看配置生成报告，包括 Casdoor 管理员的帐号、用户账号和它们的初始登录密码。</p><p>请使用用户账号登录 LobeChat，管理员账号仅用于管理 Casdoor。</p><p>log</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>安全密钥生成结果如下：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>LobeChat:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  - URL: http://localhost:3210</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  - Username: user</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  - Password: c66f8c</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Casdoor:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  - URL: http://localhost:8000</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  - Username: admin</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  - Password: c66f8c</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Minio:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  - URL: http://localhost:9000</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  - Username: admin</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  - Password: 8c82ea41</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><h3 id="启动-docker" tabindex="-1">启动 Docker <a class="header-anchor" href="#启动-docker" aria-label="Permalink to &quot;启动 Docker&quot;">​</a></h3><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>docker compose up -d</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="检查日志" tabindex="-1">检查日志 <a class="header-anchor" href="#检查日志" aria-label="Permalink to &quot;检查日志&quot;">​</a></h3><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>docker logs -f lobe-chat</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>如果你在容器中看到了以下日志，则说明已经启动成功：</p><p>log</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>[Database] Start to migration...</span></span>
<span class="line"><span></span></span>
<span class="line"><span>✅ database migration pass.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>-------------------------------------</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  ▲ Next.js 14.x.x</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  - Local:        http://localhost:3210</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  - Network:      http://0.0.0.0:3210</span></span>
<span class="line"><span></span></span>
<span class="line"><span> ✓ Starting...</span></span>
<span class="line"><span></span></span>
<span class="line"><span> ✓ Ready in 95ms</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h3 id="访问应用" tabindex="-1">访问应用 <a class="header-anchor" href="#访问应用" aria-label="Permalink to &quot;访问应用&quot;">​</a></h3><p>通过 <code>http://localhost:3210</code> 访问你的 LobeChat 服务。 应用的账号密码在步骤 <code>2</code> 的报告中。</p><h3 id="端口模式" tabindex="-1">端口模式 <a class="header-anchor" href="#端口模式" aria-label="Permalink to &quot;端口模式&quot;">​</a></h3><h3 id="在交互式脚本中完成剩余配置-1" tabindex="-1">在交互式脚本中完成剩余配置 <a class="header-anchor" href="#在交互式脚本中完成剩余配置-1" aria-label="Permalink to &quot;在交互式脚本中完成剩余配置&quot;">​</a></h3><p>在端口模式中，你需要根据脚本提示完成：</p><ul><li>服务器 IP 地址设置：以便局域网 / 公网访问。</li><li>安全密钥重新生成：我们强烈建议你重新生成安全密钥，如果你缺少脚本所需的密钥生成库，我们建议你参考 <a href="https://lobehub.com/zh/docs/self-hosting/server-database/#%E8%87%AA%E5%AE%9A%E4%B9%89%E9%83%A8%E7%BD%B2" target="_blank" rel="noreferrer">自定义部署</a> 章节对密钥进行修改。</li></ul><h3 id="查看配置生成报告-1" tabindex="-1">查看配置生成报告 <a class="header-anchor" href="#查看配置生成报告-1" aria-label="Permalink to &quot;查看配置生成报告&quot;">​</a></h3><p>你需要在脚本运行结束后查看配置生成报告，包括 Casdoor 管理员的帐号、用户账号和它们的初始登录密码。</p><p>请使用用户账号登录 LobeChat，管理员账号仅用于管理 Casdoor。</p><p>log</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>安全密钥生成结果如下：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>LobeChat:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  - URL: http://your_server_ip:3210</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  - Username: user</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  - Password: 837e26</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Casdoor:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  - URL: http://your_server_ip:8000</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  - Username: admin</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  - Password: 837e26</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Minio:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  - URL: http://your_server_ip:9000</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  - Username: admin</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  - Password: dbac8440</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><h3 id="启动-docker-1" tabindex="-1">启动 Docker <a class="header-anchor" href="#启动-docker-1" aria-label="Permalink to &quot;启动 Docker&quot;">​</a></h3><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>docker compose up -d</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="检查日志-1" tabindex="-1">检查日志 <a class="header-anchor" href="#检查日志-1" aria-label="Permalink to &quot;检查日志&quot;">​</a></h3><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>docker logs -f lobe-chat</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>如果你在容器中看到了以下日志，则说明已经启动成功：</p><p>log</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>[Database] Start to migration...</span></span>
<span class="line"><span></span></span>
<span class="line"><span>✅ database migration pass.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>-------------------------------------</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  ▲ Next.js 14.x.x</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  - Local:        http://your_server_ip:3210</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  - Network:      http://0.0.0.0:3210</span></span>
<span class="line"><span></span></span>
<span class="line"><span> ✓ Starting...</span></span>
<span class="line"><span></span></span>
<span class="line"><span> ✓ Ready in 95ms</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h3 id="访问应用-1" tabindex="-1">访问应用 <a class="header-anchor" href="#访问应用-1" aria-label="Permalink to &quot;访问应用&quot;">​</a></h3><p>你可以通过 <code>http://your_server_ip:3210</code> 访问你的 LobeChat 服务。 应用的账号密码在步骤 <code>2</code> 的报告中。</p><p>请注意，如果你的服务能够被公网访问，我们强烈建议你参考 <a href="https://lobehub.com/zh/docs/self-hosting/advanced/auth/next-auth/casdoor" target="_blank" rel="noreferrer">文档</a> 关闭注册功能。</p><h3 id="域名模式" tabindex="-1">域名模式 <a class="header-anchor" href="#域名模式" aria-label="Permalink to &quot;域名模式&quot;">​</a></h3><h3 id="完成反向代理配置" tabindex="-1">完成反向代理配置 <a class="header-anchor" href="#完成反向代理配置" aria-label="Permalink to &quot;完成反向代理配置&quot;">​</a></h3><p>在域名模式中，你需要完成反向代理配置，并确保局域网 / 公网能访问到以下服务。请使用反向代理将以下服务端口映射到域名：</p><table tabindex="0"><thead><tr><th>域名</th><th>反代端口</th><th>是否必选</th></tr></thead><tbody><tr><td><code>lobe.example.com</code></td><td><code>3210</code></td><td>必选</td></tr><tr><td><code>auth.example.com</code></td><td><code>8000</code></td><td>必选</td></tr><tr><td><code>minio.example.com</code></td><td><code>9000</code></td><td>必选</td></tr><tr><td><code>minio-ui.example.com</code></td><td><code>9001</code></td><td></td></tr></tbody></table><p>如果你使用如 <a href="https://www.bt.cn/" target="_blank" rel="noreferrer">宝塔面板</a> 等面板软件进行反向代理配置， 你需要确保其对 <code>.well-known</code> 路径的请求不进行拦截，以确保 Casdoor 的 OAuth2 配置能够正常工作。 这里提供一份针对 Casdoor 服务的 Nginx server 块的路径白名单配置：</p><p>nginx</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>location /.well-known/openid-configuration {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  proxy_pass http://localhost:8000;  # 转发到 localhost:8000</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  proxy_set_header Host $host;  # 保留原始主机头</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  proxy_set_header X-Real-IP $remote_addr;  # 保留客户端真实IP</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;  # 保留转发的IP</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  proxy_set_header X-Forwarded-Proto $scheme;  # 保留请求协议</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>⚠️ 请不要在此类面板软件的反向代理设置中开启任何形式的缓存，以免影响服务的正常运行。 详情请见 <a href="https://github.com/lobehub/lobe-chat/discussions/5986" target="_blank" rel="noreferrer">https://github.com/lobehub/lobe-chat/discussions/5986</a></p><h3 id="在交互式脚本中完成剩余配置-2" tabindex="-1">在交互式脚本中完成剩余配置 <a class="header-anchor" href="#在交互式脚本中完成剩余配置-2" aria-label="Permalink to &quot;在交互式脚本中完成剩余配置&quot;">​</a></h3><p>在域名模式中，你需要根据脚本提示完成：</p><ul><li>LobeChat 服务的域名设置： <code>lobe.example.com</code></li><li>Minio 服务的域名设置： <code>minio.example.com</code></li><li>Casdoor 服务的域名设置： <code>auth.example.com</code></li><li>选择访问协议： <code>http</code> 或 <code>https</code></li><li>安全密钥重新生成：我们强烈建议你重新生成安全密钥，如果你缺少脚本所需的密钥生成库，我们建议你参考 <a href="https://lobehub.com/zh/docs/self-hosting/server-database/#%E8%87%AA%E5%AE%9A%E4%B9%89%E9%83%A8%E7%BD%B2" target="_blank" rel="noreferrer">自定义部署</a> 章节对密钥进行修改。</li></ul><p>以下问题可能导致你的服务无法正常访问：</p><ul><li>此处的域名配置需要与步骤 <code>1</code> 中的反向代理配置保持一致。</li><li>如果你使用 Cloudflare 的域名解析服务并开启了 <code>全程代理</code> ，请使用 <code>https</code> 协议。</li><li>如果你使用了 HTTPS 协议，请确保你的域名证书已经正确配置，一键部署默认不支持自签发证书。</li></ul><h3 id="查看配置生成报告-2" tabindex="-1">查看配置生成报告 <a class="header-anchor" href="#查看配置生成报告-2" aria-label="Permalink to &quot;查看配置生成报告&quot;">​</a></h3><p>你需要在脚本运行结束后查看配置生成报告，包括 Casdoor 管理员的初始登录密码。</p><p>请使用用户账号登录 LobeChat，管理员账号仅用于管理 Casdoor。</p><p>log</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>安全密钥生成结果如下：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>LobeChat:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  - URL: https://lobe.example.com</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  - Username: user</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  - Password: 837e26</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Casdoor:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  - URL: https://auth.example.com</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  - Username: admin</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  - Password: 837e26</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Minio:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  - URL: https://minio.example.com</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  - Username: admin</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  - Password: dbac8440</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><h3 id="启动-docker-2" tabindex="-1">启动 Docker <a class="header-anchor" href="#启动-docker-2" aria-label="Permalink to &quot;启动 Docker&quot;">​</a></h3><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>docker compose up -d</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="检查日志-2" tabindex="-1">检查日志 <a class="header-anchor" href="#检查日志-2" aria-label="Permalink to &quot;检查日志&quot;">​</a></h3><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>docker logs -f lobe-chat</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>如果你在容器中看到了以下日志，则说明已经启动成功：</p><p>log</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>[Database] Start to migration...</span></span>
<span class="line"><span></span></span>
<span class="line"><span>✅ database migration pass.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>-------------------------------------</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  ▲ Next.js 14.x.x</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  - Local:        https://localhost:3210</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  - Network:      http://0.0.0.0:3210</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  ✓ Starting...</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  ✓ Ready in 95ms</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h3 id="访问应用-2" tabindex="-1">访问应用 <a class="header-anchor" href="#访问应用-2" aria-label="Permalink to &quot;访问应用&quot;">​</a></h3><p>你可以通过 <code>https://lobe.example.com</code> 访问你的 LobeChat 服务。应用的账号密码在步骤 <code>3</code> 的报告中。</p><p>请注意，如果你的服务能够被公网访问，我们强烈建议你参考 <a href="https://lobehub.com/zh/docs/self-hosting/advanced/auth/next-auth/casdoor" target="_blank" rel="noreferrer">文档</a> 关闭注册功能。</p><h2 id="自定义部署" tabindex="-1">自定义部署 <a class="header-anchor" href="#自定义部署" aria-label="Permalink to &quot;自定义部署&quot;">​</a></h2><p>该章节主要为你介绍在不同的网络环境下自定义部署 LobeChat 服务必须要修改的配置。 在开始前，你可以先下载 <a href="https://raw.githubusercontent.com/lobehub/lobe-chat/HEAD/docker-compose/local/docker-compose.yml" target="_blank" rel="noreferrer">Docker Compose 配置文件</a> 以及 <a href="https://raw.githubusercontent.com/lobehub/lobe-chat/HEAD/docker-compose/local/.env.zh-CN.example" target="_blank" rel="noreferrer">环境变量配置文件</a> 。</p><p>sh</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>curl -O https://raw.githubusercontent.com/lobehub/lobe-chat/HEAD/docker-compose/local/docker-compose.yml</span></span>
<span class="line"><span></span></span>
<span class="line"><span>curl -O https://raw.githubusercontent.com/lobehub/lobe-chat/HEAD/docker-compose/local/.env.zh-CN.example</span></span>
<span class="line"><span></span></span>
<span class="line"><span>mv .env.zh-CN.example .env</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>本章节并不包含所有完整变量，剩余的变量可以查阅 <a href="https://lobehub.com/zh/docs/self-hosting/server-database" target="_blank" rel="noreferrer">使用服务端数据库部署</a> 。</p><h3 id="预备知识" tabindex="-1">预备知识 <a class="header-anchor" href="#预备知识" aria-label="Permalink to &quot;预备知识&quot;">​</a></h3><p>一般来讲，想要完整的运行 LobeChat 数据库版本，你需要至少拥有如下四个服务</p><ul><li>LobeChat 数据库版本自身</li><li>带有 PGVector 插件的 PostgreSQL 数据库</li><li>支持 S3 协议的对象存储服务</li><li>受 LobeChat 支持的 SSO 登录鉴权服务</li></ul><p>这些服务可以通过自建或者在线云服务组合搭配，以满足不同层次的部署需求。 本文中，我们提供了完全基于开源自建服务的 Docker Compose 配置，你可以直接使用这份配置文件来启动 LobeChat 数据库版本，也可以对之进行修改以适应你的需求。</p><p>我们默认使用 <a href="https://github.com/minio/minio" target="_blank" rel="noreferrer">MinIO</a> 作为本地 S3 对象存储服务，使用 <a href="https://github.com/casdoor/casdoor" target="_blank" rel="noreferrer">Casdoor</a> 作为本地鉴权服务。</p><p>如果你的网络拓扑较为复杂，请先确保在你的网络环境中这些服务能够正常通讯。</p><h3 id="必要配置" tabindex="-1">必要配置 <a class="header-anchor" href="#必要配置" aria-label="Permalink to &quot;必要配置&quot;">​</a></h3><p>以下我们将介绍运行这些服务的必要配置：</p><ol><li>Casdoor</li></ol><ul><li>LobeChat 需要与 Casdoor 通讯，因此你需要配置 Casdoor 的 Issuer 。 env</li></ul><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>AUTH_CASDOOR_ISSUER=https://auth.example.com</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>该配置会影响 LobeChat 的登录鉴权服务，你需要确保 Casdoor 服务的地址正确。 你可以在 <a href="https://lobehub.com/zh/docs/self-hosting/server-database/#%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98" target="_blank" rel="noreferrer">常见问题</a> 中找到该配置错误的常见现象及解决方案。</p><ul><li>同时，你也需要在 Casdoor 中允许回调地址为 LobeChat 的地址：</li></ul><p>请在 Casdoor 的 Web 面板的 <code>身份认证 -&gt; 应用</code> -&gt; <code>&lt;应用ID，默认为 app-built-in&gt;</code> -&gt; <code>重定向URL</code> 中添加一行：</p><p>txt</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>https://auth.example.com/api/auth/callback/casdoor</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>Casdoor 需要在环境变量中提供访问的 Origin 信息：</li></ul><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>origin=https://auth.example.com</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol><li>MinIO</li></ol><ul><li>LobeChat 需要为 LLM 服务提供商提供文件对象的公网访问地址，因此你需要配置 MinIO 的 Endpoint 。 env</li></ul><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>S3_PUBLIC_DOMAIN=https://minio.example.com</span></span>
<span class="line"><span></span></span>
<span class="line"><span>S3_ENDPOINT=https://minio.example.com</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ol><li>PostgreSQL</li></ol><p>该配置位于 <code>docker-compose.yml</code> 文件中，你需要配置数据库的名称和密码：</p><p>yaml</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>services:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  lobe:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    environment:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      - &#39;DATABASE_URL=postgresql://postgres:\${POSTGRES_PASSWORD}@postgresql:5432/\${LOBE_DB_NAME}&#39;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="常见问题" tabindex="-1">常见问题 <a class="header-anchor" href="#常见问题" aria-label="Permalink to &quot;常见问题&quot;">​</a></h2><h4 id="无法正常登陆" tabindex="-1">无法正常登陆 <a class="header-anchor" href="#无法正常登陆" aria-label="Permalink to &quot;无法正常登陆&quot;">​</a></h4><p>请根据容器日志检查是否存在以下错误</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>docker logs -f lobe-chat</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>r3: &quot;response&quot; is not a conform Authorization Server Metadata response (unexpected HTTP status code) log</li></ul><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>lobe-chat      | [auth][error] r3: &quot;response&quot; is not a conform Authorization Server Metadata response (unexpected HTTP status code)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>成因：该问题一般是由于你的反向代理配置不正确导致的，你需要确保你的反向代理配置不会拦截 Casdoor 的 OAuth2 配置请求。</p><p>解决方案：</p><ul><li>请参考 <a href="https://lobehub.com/zh/docs/self-hosting/server-database/#%E5%9F%9F%E5%90%8D%E6%A8%A1%E5%BC%8F" target="_blank" rel="noreferrer">域名模式</a> 章节中的反向代理配置注意事项。</li><li>一个直接的排查方式，你可以直接访问 <code>https://auth.example.com/.well-known/openid-configuration</code> ，如果 <ul><li>返回了非 JSON 格式的数据，则说明你的反向代理配置错误。</li><li>如果返回的 JSON 格式数据中的 <code>&quot;issuer&quot;: &quot;URL&quot;</code> 字段不是你配置的 <code>https://auth.example.com</code> ，则说明你的环境变量配置错误。</li></ul></li><li>TypeError: fetch failed log</li></ul><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>lobe-chat      | [auth][error] TypeError: fetch failed</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>成因：LobeChat 无法访问鉴权服务。</p><p>解决方案：</p><ul><li>请检查你的鉴权服务是否正常运行，以及 LobeChat 所在的网络是否能够访问到鉴权服务。</li><li>一个直接的排查方式，你可以在 LobeChat 容器的终端中，使用 <code>curl</code> 命令访问你的鉴权服务 <code>https://auth.example.com/.well-known/openid-configuration</code> ，如果返回了 JSON 格式的数据，则说明你的鉴权服务正常运行。</li></ul><h2 id="拓展配置" tabindex="-1">拓展配置 <a class="header-anchor" href="#拓展配置" aria-label="Permalink to &quot;拓展配置&quot;">​</a></h2><p>为了完善你的 LobeChat 服务，你可以根据你的需求进行以下拓展配置。</p><h3 id="使用-minio-存储-casdoor-头像" tabindex="-1">使用 MinIO 存储 Casdoor 头像 <a class="header-anchor" href="#使用-minio-存储-casdoor-头像" aria-label="Permalink to &quot;使用 MinIO 存储 Casdoor 头像&quot;">​</a></h3><p>允许用户在 Casdoor 中更换头像</p><ol><li>你需要首先在 <code>buckets</code> 中创建一个名为 <code>casdoor</code> 的桶，选择自定义策略，复制并粘贴如下内容（如果你修改了桶名，请自行查找替换） json<div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>  &quot;Statement&quot;: [</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>      &quot;Effect&quot;: &quot;Allow&quot;,</span></span>
<span class="line"><span>      &quot;Principal&quot;: {</span></span>
<span class="line"><span>        &quot;AWS&quot;: [&quot;*&quot;]</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>      &quot;Action&quot;: [&quot;s3:GetBucketLocation&quot;],</span></span>
<span class="line"><span>      &quot;Resource&quot;: [&quot;arn:aws:s3:::casdoor&quot;]</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>      &quot;Effect&quot;: &quot;Allow&quot;,</span></span>
<span class="line"><span>      &quot;Principal&quot;: {</span></span>
<span class="line"><span>        &quot;AWS&quot;: [&quot;*&quot;]</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>      &quot;Action&quot;: [&quot;s3:ListBucket&quot;],</span></span>
<span class="line"><span>      &quot;Resource&quot;: [&quot;arn:aws:s3:::casdoor&quot;],</span></span>
<span class="line"><span>      &quot;Condition&quot;: {</span></span>
<span class="line"><span>        &quot;StringEquals&quot;: {</span></span>
<span class="line"><span>          &quot;s3:prefix&quot;: [&quot;files/*&quot;]</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>      &quot;Effect&quot;: &quot;Allow&quot;,</span></span>
<span class="line"><span>      &quot;Principal&quot;: {</span></span>
<span class="line"><span>        &quot;AWS&quot;: [&quot;*&quot;]</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>      &quot;Action&quot;: [&quot;s3:PutObject&quot;, &quot;s3:DeleteObject&quot;, &quot;s3:GetObject&quot;],</span></span>
<span class="line"><span>      &quot;Resource&quot;: [&quot;arn:aws:s3:::casdoor/**&quot;]</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  ],</span></span>
<span class="line"><span>  &quot;Version&quot;: &quot;2012-10-17&quot;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br></div></div></li><li>创建一个新的访问密钥，将生成的 <code>Access Key</code> 和 <code>Secret Key</code> 存储之</li><li>在 Casdoor 的 <code>身份认证 -&gt; 提供商</code> 中关联 MinIO S3 服务，以下是一个示例配置： <img src="https://github.com/user-attachments/assets/71035610-0706-434e-9488-ab5819b55330" alt="casdoor" loading="lazy"> 其中，客户端 ID、客户端密钥为上一步创建的访问密钥中的 <code>Access Key</code> 和 <code>Secret Key</code> ， <code>192.168.31.251</code> 应当被替换为 <code>your_server_ip</code> 。</li><li>在 Casdoor 的 <code>身份认证 -&gt; 应用</code> 中，对 <code>app-built-in</code> 应用添加提供商，选择 <code>minio</code> ，保存并退出</li><li>你可以在 Casdoor 的 <code>身份认证 -&gt; 资源</code> 中，尝试上传文件以测试配置是否正确</li></ol><h3 id="生产部署下从-logto-迁移至-casdoor" tabindex="-1">生产部署下从 logto 迁移至 Casdoor <a class="header-anchor" href="#生产部署下从-logto-迁移至-casdoor" aria-label="Permalink to &quot;生产部署下从 logto 迁移至 Casdoor&quot;">​</a></h3><p>适用于已经在生产环境下使用 <code>logto</code> 作为登录鉴权服务的用户</p><p>由于使用 <a href="https://logto.io/" target="_blank" rel="noreferrer">Logto</a> 作为登录鉴权服务存在比较大的不稳定性。 因此，下文基于发布到 IP 模式的教程，实现了使用 Casdoor 作为鉴权服务提供商的域名发布方案。 本文剩余部分也将以其为例进行说明。如果你使用其他诸如 Logto 等其他登录鉴权服务，流程应当相近，但请注意不同的登录鉴权服务的端口配置可能有所差异。</p><p>在下文中，我们假设在上述服务之外，你还运行了一层 <strong>Nginx</strong> 来进行反向代理、配置 SSL。</p><p>域名和配套服务端口说明如下：</p><ul><li><code>lobe.example.com</code> ：为你的 LobeChat 服务端域名，需要反向代理到 LobeChat 服务端口，默认为 <code>3210</code></li><li><code>auth.example.com</code> ：为你的 Logto UI 域名，需要反向代理到 Logto WebUI 服务端口，默认为 <code>8000</code></li><li><code>minio.example.com</code> ：为你的 MinIO API 域名，需要反向代理到 MinIO API 服务端口，默认为 <code>9000</code></li><li><code>minio-ui.example.com</code> ：可选，为你的 MinIO UI 域名，需要反向代理到 MinIO WebUI 服务端口，默认为 <code>9001</code></li></ul><h4 id="配置文件" tabindex="-1">配置文件 <a class="header-anchor" href="#配置文件" aria-label="Permalink to &quot;配置文件&quot;">​</a></h4><p>sh</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>bash &lt;(curl -fsSL https://lobe.li/setup.sh) -l zh_CN</span></span>
<span class="line"><span></span></span>
<span class="line"><span>docker compose up -d</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>注意保存此时生成的新密码！</p><p>运行后会获得三个文件</p><ul><li>init_data.json</li><li>docker-compose.yml</li><li>.env</li></ul><p>接下来，修改配置文件以实现域名发布</p><ol><li>修改 <code>docker-compose.yml</code> 文件 <ol><li>修改 <code>minio</code> 的 <code>MINIO_API_CORS_ALLOW_ORIGIN</code> 字段。 yaml</li></ol><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&#39;MINIO_API_CORS_ALLOW_ORIGIN=https://lobe.example.com&#39;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol><li>修改 <code>casdoor</code> 的 <code>origin</code> 字段。 yaml</li></ol><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>origin: &#39;https://auth.example.com&#39;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol><li>修改 <code>lobe</code> 的 <code>environment</code> 字段。 yaml</li></ol><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># - &#39;APP_URL=http://localhost:3210&#39;</span></span>
<span class="line"><span>  - &#39;APP_URL=https://lobe.example.com&#39;</span></span>
<span class="line"><span>  - &#39;NEXT_AUTH_SSO_PROVIDERS=casdoor&#39;</span></span>
<span class="line"><span>  - &#39;KEY_VAULTS_SECRET=Kix2wcUONd4CX51E/ZPAd36BqM4wzJgKjPtz2sGztqQ=&#39;</span></span>
<span class="line"><span>  - &#39;NEXT_AUTH_SECRET=NX2kaPE923dt6BL2U8e9oSre5RfoT7hg&#39;</span></span>
<span class="line"><span>  # - &#39;AUTH_URL=http://localhost:\${LOBE_PORT}/api/auth&#39;</span></span>
<span class="line"><span>  - &#39;AUTH_URL=https://lobe.example.com/api/auth&#39;</span></span>
<span class="line"><span>  # - &#39;AUTH_CASDOOR_ISSUER=http://localhost:\${CASDOOR_PORT}&#39;</span></span>
<span class="line"><span>  - &#39;AUTH_CASDOOR_ISSUER=https://auth.example.com&#39;</span></span>
<span class="line"><span>  - &#39;DATABASE_URL=postgresql://postgres:\${POSTGRES_PASSWORD}@postgresql:5432/\${LOBE_DB_NAME}&#39;</span></span>
<span class="line"><span>  # - &#39;S3_ENDPOINT=http://localhost:\${MINIO_PORT}&#39;</span></span>
<span class="line"><span>  - &#39;S3_ENDPOINT=https://minio.example.com&#39;</span></span>
<span class="line"><span>  - &#39;S3_BUCKET=\${MINIO_LOBE_BUCKET}&#39;</span></span>
<span class="line"><span>  # - &#39;S3_PUBLIC_DOMAIN=http://localhost:\${MINIO_PORT}&#39;</span></span>
<span class="line"><span>  - &#39;S3_PUBLIC_DOMAIN=https://minio.example.com&#39;</span></span>
<span class="line"><span>  - &#39;S3_ENABLE_PATH_STYLE=1&#39;</span></span>
<span class="line"><span>  - &#39;LLM_VISION_IMAGE_USE_BASE64=1&#39;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div></li><li>修改 <code>.env</code> 文件</li></ol><p>为了安全起见，修改 <code>.env</code> 文件中的 ROOT USER 的字段</p><p>sh</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># MinIO S3 configuration</span></span>
<span class="line"><span></span></span>
<span class="line"><span>MINIO_ROOT_USER=XXXX</span></span>
<span class="line"><span></span></span>
<span class="line"><span>MINIO_ROOT_PASSWORD=XXXX</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h4 id="postgres-数据库配置" tabindex="-1">Postgres 数据库配置 <a class="header-anchor" href="#postgres-数据库配置" aria-label="Permalink to &quot;Postgres 数据库配置&quot;">​</a></h4><p>你可以使用下述指令检查日志：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>docker logs -f lobe-chat</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>在我们官方的 Docker 镜像中，会在启动镜像前自动执行数据库 schema 的 migration ，我们的官方镜像承诺「空数据库 -&gt; 完整表」这一段自动建表的稳定性。因此我们建议你的数据库实例使用一个空表实例，进而省去手动维护表结构或者 migration 的麻烦。</p><p>如果你在建表的时候出现了问题，你可以尝试使用如下命令强制移除数据库容器并重新启动：</p><p>sh</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>docker compose down  # 停止服务</span></span>
<span class="line"><span></span></span>
<span class="line"><span>sudo rm -rf ./data   # 移除挂载的数据库数据</span></span>
<span class="line"><span></span></span>
<span class="line"><span>docker compose up -d # 重新启动</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h4 id="登录鉴权服务配置" tabindex="-1">登录鉴权服务配置 <a class="header-anchor" href="#登录鉴权服务配置" aria-label="Permalink to &quot;登录鉴权服务配置&quot;">​</a></h4><p>你需要首先访问 WebUI 来进行配置：</p><ul><li>如果你按照前文配置了反向代理，打开 <code>https://auth.example.com</code></li><li>否则，请在进行端口映射后，打开 <code>http://localhost:8000</code></li></ul><p>登录管理员账户</p><ul><li>默认用户名为 admin</li><li>默认密码为 下载配置文件时生成的随机密码。如忘记可到 <code>init_data.json</code> 文件中找回</li></ul><p>登入后执行如下操作</p><ol><li>在 <code>用户管理 -&gt; 组织</code> 中，添加一个新的组织。名称与显示名称为 <code>Lobe Users</code> 。其余保持默认即可。</li><li>在 <code>身份认证 -&gt; 应用</code> 中，添加一个新的应用。</li></ol><ul><li>名称与显示名称为 <code>LobeChat</code> 。</li><li>组织为 <code>Lobe Users</code> 。</li><li>重定向 URLS 中添加一行 为 <code>https://lobe.example.com/api/auth/callback/casdoor</code> 。</li><li>关闭除密码外的登录方式 。</li><li>将客户端 ID 和客户端密钥分别填入 <code>.env</code> 中的 <code>AUTH_CASDOOR_ID</code> 和 <code>AUTH_CASDOOR_SECRET</code> 中。</li><li>(可选) 仿照 <code>built-in</code> 应用的配置，来设计登录和注册的页面外观。</li><li>保存并退出。</li></ul><p>通过上述步骤，可以避免默认情况下所有用户均为管理员导致的不安全的情况。</p><h4 id="s3-对象存储服务配置" tabindex="-1">S3 对象存储服务配置 <a class="header-anchor" href="#s3-对象存储服务配置" aria-label="Permalink to &quot;S3 对象存储服务配置&quot;">​</a></h4><p>本文以 MinIO 为例，解释配置过程，如果你使用的是其他 S3 服务商，请参照其文档进行配置。</p><p>请记得注意配置对应 S3 服务商的 CORS 跨域配置，以确保 LobeChat 能够正常访问 S3 服务。</p><p>在本文中，你需要允许 <code>https://lobe.example.com</code> 的跨域请求。这既可以在 MinIO WebUI 的 <code>Configuration - API - Cors Allow Origin</code> 中配置，也可以在 Docker Compose 中的 <code>minio - environment - MINIO_API_CORS_ALLOW_ORIGIN</code> 中配置。</p><p>如果你使用第二种方法（这也是默认的方法）进行配置，你将无法再在 MinIO WebUI 中配置。</p><p>你需要首先访问 WebUI 来进行配置：</p><ul><li>如果你按照前文配置了反向代理，打开 <code>https://minio-ui.example.com</code></li><li>否则，请在进行端口映射后，打开 <code>http://localhost:9001</code></li></ul><ol><li>在登录界面输入你设置的 <code>MINIO_ROOT_USER</code> 和 <code>MINIO_ROOT_PASSWORD</code> ，然后点击登录</li><li>在左侧面板 User / Access Keys 处，点击 <code>Create New Access Key</code> ，无需额外修改，将生成的 <code>Access Key</code> 和 <code>Secret Key</code> 填入你的 <code>.env</code> 文件中的 <code>S3_ACCESS_KEY_ID</code> 和 <code>S3_SECRET_ACCESS_KEY</code> 中</li><li>重启 LobeChat 服务：<div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>docker compose up -d</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></li></ol><p>至此，你已经成功部署了 LobeChat 数据库版本，你可以通过 <code>https://lobe.example.com</code> 访问你的 LobeChat 服务。</p><h4 id="配置文件-1" tabindex="-1">配置文件 <a class="header-anchor" href="#配置文件-1" aria-label="Permalink to &quot;配置文件&quot;">​</a></h4><p>为方便一键复制，在此汇总基于 casdoor 鉴权方案的域名方式下生产部署配置服务端数据库所需要的示例配置文件。</p><ul><li><code>.env</code> sh</li></ul><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># Proxy, if you need it</span></span>
<span class="line"><span></span></span>
<span class="line"><span># HTTP_PROXY=http://localhost:7890</span></span>
<span class="line"><span></span></span>
<span class="line"><span># HTTPS_PROXY=http://localhost:7890</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Other environment variables, as needed. You can refer to the environment variables configuration for the client version, making sure not to have ACCESS_CODE.</span></span>
<span class="line"><span></span></span>
<span class="line"><span># OPENAI_API_KEY=sk-xxxx</span></span>
<span class="line"><span></span></span>
<span class="line"><span># OPENAI_PROXY_URL=https://api.openai.com/v1</span></span>
<span class="line"><span></span></span>
<span class="line"><span># OPENAI_MODEL_LIST=...</span></span>
<span class="line"><span></span></span>
<span class="line"><span># ===========================</span></span>
<span class="line"><span></span></span>
<span class="line"><span># ====== Preset config ======</span></span>
<span class="line"><span></span></span>
<span class="line"><span># ===========================</span></span>
<span class="line"><span></span></span>
<span class="line"><span># if no special requirements, no need to change</span></span>
<span class="line"><span></span></span>
<span class="line"><span>LOBE_PORT=3210</span></span>
<span class="line"><span></span></span>
<span class="line"><span>CASDOOR_PORT=8000</span></span>
<span class="line"><span></span></span>
<span class="line"><span>MINIO_PORT=9000</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Postgres related, which are the necessary environment variables for DB</span></span>
<span class="line"><span></span></span>
<span class="line"><span>LOBE_DB_NAME=lobechat</span></span>
<span class="line"><span></span></span>
<span class="line"><span>POSTGRES_PASSWORD=uWNZugjBqixf8dxC</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Casdoor secret</span></span>
<span class="line"><span></span></span>
<span class="line"><span>AUTH_CASDOOR_ID=943e627d79d5dd8a22a1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>AUTH_CASDOOR_SECRET=6ec24ac304e92e160ef0d0656ecd86de8cb563f1</span></span>
<span class="line"><span></span></span>
<span class="line"><span># MinIO S3 configuration</span></span>
<span class="line"><span></span></span>
<span class="line"><span>MINIO_ROOT_USER=Joe</span></span>
<span class="line"><span></span></span>
<span class="line"><span>MINIO_ROOT_PASSWORD=Crj1570768</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Configure the bucket information of MinIO</span></span>
<span class="line"><span></span></span>
<span class="line"><span>MINIO_LOBE_BUCKET=lobe</span></span>
<span class="line"><span></span></span>
<span class="line"><span>S3_ACCESS_KEY_ID=dB6Uq9CYZPdWSZouPyEd</span></span>
<span class="line"><span></span></span>
<span class="line"><span>S3_SECRET_ACCESS_KEY=aPBW8CVULkh8bw1GatlT0GjLihcXHLNwRml4pieS</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br></div></div><ul><li><code>docker-compose.yml</code> yaml</li></ul><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>name: lobe-chat-database</span></span>
<span class="line"><span></span></span>
<span class="line"><span>services:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  network-service:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    image: alpine</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    container_name: lobe-network</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    ports:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      - &#39;\${MINIO_PORT}:\${MINIO_PORT}&#39; # MinIO API</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      - &#39;9001:9001&#39; # MinIO Console</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      - &#39;\${CASDOOR_PORT}:\${CASDOOR_PORT}&#39; # Casdoor</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      - &#39;\${LOBE_PORT}:3210&#39; # LobeChat</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    command: tail -f /dev/null</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    networks:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      - lobe-network</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  postgresql:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    image: pgvector/pgvector:pg16</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    container_name: lobe-postgres</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    ports:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      - &#39;5432:5432&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    volumes:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      - &#39;./data:/var/lib/postgresql/data&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    environment:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      - &#39;POSTGRES_DB=\${LOBE_DB_NAME}&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      - &#39;POSTGRES_PASSWORD=\${POSTGRES_PASSWORD}&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    healthcheck:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      test: [&#39;CMD-SHELL&#39;, &#39;pg_isready -U postgres&#39;]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      interval: 5s</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      timeout: 5s</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      retries: 5</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    restart: always</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    networks:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      - lobe-network</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  minio:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    image: minio/minio</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    container_name: lobe-minio</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    network_mode: &#39;service:network-service&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    volumes:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      - &#39;./s3_data:/etc/minio/data&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    environment:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      - &#39;MINIO_ROOT_USER=\${MINIO_ROOT_USER}&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      - &#39;MINIO_ROOT_PASSWORD=\${MINIO_ROOT_PASSWORD}&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      # - &#39;MINIO_API_CORS_ALLOW_ORIGIN=http://localhost:\${LOBE_PORT}&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      - &#39;MINIO_API_CORS_ALLOW_ORIGIN=https://lobe.example.com&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    restart: always</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    command: &gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      server /etc/minio/data --address &quot;:\${MINIO_PORT}&quot; --console-address &quot;:9001&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  casdoor:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    image: casbin/casdoor</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    container_name: lobe-casdoor</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    entrypoint: /bin/sh -c &#39;./server --createDatabase=true&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    network_mode: &#39;service:network-service&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    depends_on:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      postgresql:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        condition: service_healthy</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    environment:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      RUNNING_IN_DOCKER: &#39;true&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      driverName: &#39;postgres&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      dataSourceName: &#39;user=postgres password=\${POSTGRES_PASSWORD} host=postgresql port=5432 sslmode=disable dbname=casdoor&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      # origin: &#39;http://localhost:\${CASDOOR_PORT}&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      origin: &#39;https://auth.example.com&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      runmode: &#39;dev&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    volumes:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      - ./init_data.json:/init_data.json</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  lobe:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    image: lobehub/lobe-chat-database</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    container_name: lobe-chat-database</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    network_mode: &#39;service:network-service&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    depends_on:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      postgresql:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        condition: service_healthy</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      network-service:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        condition: service_started</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      minio:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        condition: service_started</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      casdoor:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        condition: service_started</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    environment:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      # - &#39;APP_URL=http://localhost:3210&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      - &#39;APP_URL=https://lobe.example.com&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      - &#39;NEXT_AUTH_SSO_PROVIDERS=casdoor&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      - &#39;KEY_VAULTS_SECRET=Kix2wcUONd4CX51E/ZPAd36BqM4wzJgKjPtz2sGztqQ=&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      - &#39;NEXT_AUTH_SECRET=NX2kaPE923dt6BL2U8e9oSre5RfoT7hg&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      # - &#39;AUTH_URL=http://localhost:\${LOBE_PORT}/api/auth&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      - &#39;AUTH_URL=https://lobe.example.com/api/auth&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      # - &#39;AUTH_CASDOOR_ISSUER=http://localhost:\${CASDOOR_PORT}&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      - &#39;AUTH_CASDOOR_ISSUER=https://auth.example.com&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      - &#39;DATABASE_URL=postgresql://postgres:\${POSTGRES_PASSWORD}@postgresql:5432/\${LOBE_DB_NAME}&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      # - &#39;S3_ENDPOINT=http://localhost:\${MINIO_PORT}&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      - &#39;S3_ENDPOINT=https://minio.example.com&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      - &#39;S3_BUCKET=\${MINIO_LOBE_BUCKET}&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      # - &#39;S3_PUBLIC_DOMAIN=http://localhost:\${MINIO_PORT}&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      - &#39;S3_PUBLIC_DOMAIN=https://minio.example.com&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      - &#39;S3_ENABLE_PATH_STYLE=1&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      - &#39;LLM_VISION_IMAGE_USE_BASE64=1&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    env_file:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      - .env</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    restart: always</span></span>
<span class="line"><span></span></span>
<span class="line"><span>volumes:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  data:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    driver: local</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  s3_data:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    driver: local</span></span>
<span class="line"><span></span></span>
<span class="line"><span>networks:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  lobe-network:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    driver: bridge</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br><span class="line-number">156</span><br><span class="line-number">157</span><br><span class="line-number">158</span><br><span class="line-number">159</span><br><span class="line-number">160</span><br><span class="line-number">161</span><br><span class="line-number">162</span><br><span class="line-number">163</span><br><span class="line-number">164</span><br><span class="line-number">165</span><br><span class="line-number">166</span><br><span class="line-number">167</span><br><span class="line-number">168</span><br><span class="line-number">169</span><br><span class="line-number">170</span><br><span class="line-number">171</span><br><span class="line-number">172</span><br><span class="line-number">173</span><br><span class="line-number">174</span><br><span class="line-number">175</span><br><span class="line-number">176</span><br><span class="line-number">177</span><br><span class="line-number">178</span><br><span class="line-number">179</span><br><span class="line-number">180</span><br><span class="line-number">181</span><br><span class="line-number">182</span><br><span class="line-number">183</span><br><span class="line-number">184</span><br><span class="line-number">185</span><br><span class="line-number">186</span><br><span class="line-number">187</span><br><span class="line-number">188</span><br><span class="line-number">189</span><br><span class="line-number">190</span><br><span class="line-number">191</span><br><span class="line-number">192</span><br><span class="line-number">193</span><br><span class="line-number">194</span><br><span class="line-number">195</span><br><span class="line-number">196</span><br><span class="line-number">197</span><br><span class="line-number">198</span><br><span class="line-number">199</span><br><span class="line-number">200</span><br><span class="line-number">201</span><br><span class="line-number">202</span><br><span class="line-number">203</span><br><span class="line-number">204</span><br><span class="line-number">205</span><br><span class="line-number">206</span><br><span class="line-number">207</span><br></div></div>`,175))])}const R=h(C,[["render",O]]);export{I as __pageData,R as default};
