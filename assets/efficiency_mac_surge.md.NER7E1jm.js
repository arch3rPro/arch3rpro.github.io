import{_ as i}from"./chunks/articleMetadata.CVA1TXvK.js";import{_ as c,C as u,c as o,o as p,j as l,G as b,at as m,a as S,w as h,b as g,e as d}from"./chunks/framework.BH7mRJAq.js";import"./chunks/theme.Bae5E_Ez.js";const C="/assets/1720965600.DQOsskiT.png",R="/assets/1720965601.DDgJycPT.png",L="/assets/1720965602.DVvTdKKy.png",E="/assets/1720965603.DtHMf5yd.png",w="/assets/1720965604.DqVC9wZD.png",v="/assets/1720965605.D1FSLTlM.png",A="/assets/1720965606.Cv729y2P.png",f="/assets/1720965607.Cs4QKuOt.png",N=JSON.parse('{"title":"Surge配置","description":"对我而言，Surge就是MacOS上最好用的网络科学工具","frontmatter":{"sort":1,"title":"Surge配置","description":"对我而言，Surge就是MacOS上最好用的网络科学工具","date":"2025-02-14T22:01:42.000Z","tags":["MacOS"]},"headers":[],"relativePath":"efficiency/mac/surge.md","filePath":"posts/efficiency/mac/surge/README.md","lastUpdated":1743223023000}'),T={name:"efficiency/mac/surge.md"};function y(n,s,_,x,D,U){const t=i,r=u("ClientOnly");return p(),o("div",null,[s[0]||(s[0]=l("h1",{id:"surge配置",tabindex:"-1"},[S("Surge配置 "),l("a",{class:"header-anchor",href:"#surge配置","aria-label":'Permalink to "Surge配置"'},"​")],-1)),b(r,null,{default:h(()=>{var a,e;return[(((a=n.$frontmatter)==null?void 0:a.aside)??!0)&&(((e=n.$frontmatter)==null?void 0:e.showArticleMetadata)??!0)?(p(),g(t,{key:0,article:n.$frontmatter},null,8,["article"])):d("",!0)]}),_:1}),s[1]||(s[1]=m('<div class="tip custom-block"><p class="custom-block-title">前提</p><p>你需要确保你的Surge是激活状态</p></div><h2 id="订阅节点" tabindex="-1">订阅节点 <a class="header-anchor" href="#订阅节点" aria-label="Permalink to &quot;订阅节点&quot;">​</a></h2><p>使用开源项目：<a href="https://github.com/sub-store-org/Sub-Store" target="_blank" rel="noreferrer">Sub-Store</a><br> 介绍：适用于 Loon 、 Surge 和 Quantumult X 的高级订阅管理工具。完全本地解析，无订阅泄露的风险。</p><p><strong>安装：</strong></p><ol><li>打开Surge，找到 更多-模块</li><li>从URL安装模块，输入<code>https://raw.githubusercontent.com/sub-store-org/Sub-Store/master/config/Surge.sgmodule</code></li><li>订阅成功后，从模块中选择启用 <img src="'+C+'" alt="img" loading="lazy"></li><li>找到 解密-升成新证书-将证书安装到系统 <img src="'+R+'" alt="img" loading="lazy"></li><li>然后<strong>重启Surge</strong> 并在启动后 <strong>启用系统代理</strong></li><li>打开 <a href="https://sub.store" target="_blank" rel="noreferrer">https://sub.store</a>，如果网页正常打开并弹出以下提示，则说明Sub-Store已经配置成功，直接看<strong>第8步骤</strong><img src="'+L+'" alt="img" loading="lazy"></li><li>如果<strong>第6步骤</strong>发生如下报错或者打不开界面，请打开<a href="https://sub-store.vercel.app/subs" target="_blank" rel="noreferrer">https://sub-store.vercel.app/subs</a>，这说明<strong>系统代理未启用</strong>，启用之后就正常了 <img src="'+E+'" alt="img" loading="lazy"></li><li>接下来设置Sub-Store插件，进入配置界面点右下角➕号，选择单条订阅 <img src="'+w+'" alt="img" loading="lazy"></li><li>配置所有带*号的项目，简单说一个名称，一个你的订阅链接 <img src="'+v+'" alt="img" loading="lazy"></li><li>点击保存并返回，点击一下添加的订阅，然后复制Surge链接 <img src="'+A+'" alt="img" loading="lazy"></li></ol><h2 id="surge配置-1" tabindex="-1">Surge配置 <a class="header-anchor" href="#surge配置-1" aria-label="Permalink to &quot;Surge配置&quot;">​</a></h2><p>vscode新建文件，命名surge-custom.conf，将以下配置粘贴进去，然后全局替换<code>填上你Sub-Store的节点信息</code>为上面复制的链接，一般是<code>https://sub.store/download/xxx?target=Surge</code>，然后点开 <strong>更多-配置</strong>，导入配置文件，双击配置文件，在配置前打勾之后点击应用，这样就完成了</p><p><img src="'+f+`" alt="img" loading="lazy"></p><details class="details custom-block"><summary>配置详情，点击展开</summary><div class="language-txt vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>[General]</span></span>
<span class="line"><span># &gt; 日志级别</span></span>
<span class="line"><span>loglevel = notify</span></span>
<span class="line"><span>show-error-page-for-reject = true</span></span>
<span class="line"><span># &gt; Wi-Fi 访问</span></span>
<span class="line"><span>allow-wifi-access = false</span></span>
<span class="line"><span># &gt; All Hybrid 网络并发</span></span>
<span class="line"><span>all-hybrid = false</span></span>
<span class="line"><span># &gt; IPv6 支持（默认关闭）</span></span>
<span class="line"><span>ipv6 = false</span></span>
<span class="line"><span># &gt; 测试超时（秒）</span></span>
<span class="line"><span>test-timeout = 2</span></span>
<span class="line"><span># &gt; Internet 测试 URL</span></span>
<span class="line"><span>internet-test-url = http://www.baidu.com</span></span>
<span class="line"><span># &gt; 代理测速 URL</span></span>
<span class="line"><span>proxy-test-url = http://www.google.com/generate_204</span></span>
<span class="line"><span># &gt; GeoIP数据库</span></span>
<span class="line"><span>geoip-maxmind-url = https://github.com/Hackl0us/GeoIP2-CN/raw/release/Country.mmdb</span></span>
<span class="line"><span># &gt; 排除简单主机名</span></span>
<span class="line"><span>exclude-simple-hostnames = true</span></span>
<span class="line"><span># &gt; DNS 服务器</span></span>
<span class="line"><span>dns-server = 223.5.5.5, 119.29.29.29</span></span>
<span class="line"><span>hijack-dns = 8.8.8.8:53, 8.8.4.4:53</span></span>
<span class="line"><span># &gt; 从 /etc/hosts 读取 DNS 记录</span></span>
<span class="line"><span>read-etc-hosts = true</span></span>
<span class="line"><span># &gt; 远程控制器</span></span>
<span class="line"><span>http-api-web-dashboard = false</span></span>
<span class="line"><span>use-default-policy-if-wifi-not-primary = false</span></span>
<span class="line"><span># &gt; 跳过代理</span></span>
<span class="line"><span>skip-proxy = 127.0.0.1, 192.168.0.0/16, 10.0.0.0/8, 172.16.0.0/12, 100.64.0.0/10, 17.0.0.0/8, localhost, *.local, *.crashlytics.com, seed-sequoia.siri.apple.com, sequoia.apple.com</span></span>
<span class="line"><span># &gt; Always Real IP Hosts</span></span>
<span class="line"><span>always-real-ip = *.srv.nintendo.net, *.stun.playstation.net, xbox.*.microsoft.com, *.xboxlive.com*.srv.nintendo.net, *.stun.playstation.net, xbox.*.microsoft.com, *.xboxlive.com, *.battlenet.com.cn, *.battlenet.com, *.blzstatic.cn, *.battle.net</span></span>
<span class="line"><span>http-listen = 0.0.0.0</span></span>
<span class="line"><span>socks5-listen = 0.0.0.0</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>[Replica]</span></span>
<span class="line"><span># &gt; 隐藏 Apple 请求</span></span>
<span class="line"><span>hide-apple-request = false</span></span>
<span class="line"><span># &gt; 隐藏崩溃追踪器请求</span></span>
<span class="line"><span>hide-crash-reporter-request = true</span></span>
<span class="line"><span># &gt; 隐藏 UDP 会话</span></span>
<span class="line"><span>hide-udp = false</span></span>
<span class="line"><span># &gt; 关键词过滤器</span></span>
<span class="line"><span>keyword-filter-type = false</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>[Proxy Group]</span></span>
<span class="line"><span>🚀 节点选择 = select, ♻️ 自动选择, 🇭🇰 香港节点, 🇨🇳 台湾节点, 🇸🇬 狮城节点, 🇯🇵 日本节点, 🇺🇲 美国节点, 🇰🇷 韩国节点, 🚀 手动切换, DIRECT</span></span>
<span class="line"><span>🚀 手动切换 = select, policy-path=填上你Sub-Store的节点信息</span></span>
<span class="line"><span>♻️ 自动选择 = url-test, policy-path=填上你Sub-Store的节点信息, url=http://www.gstatic.com/generate_204, interval=300, tolerance=50</span></span>
<span class="line"><span>📲 电报消息 = select, 🚀 节点选择, ♻️ 自动选择, 🇸🇬 狮城节点, 🇭🇰 香港节点, 🇨🇳 台湾节点, 🇯🇵 日本节点, 🇺🇲 美国节点, 🇰🇷 韩国节点, 🚀 手动切换, DIRECT</span></span>
<span class="line"><span>💬 OpenAi = select, 🚀 节点选择, ♻️ 自动选择, 🇸🇬 狮城节点, 🇭🇰 香港节点, 🇨🇳 台湾节点, 🇯🇵 日本节点, 🇺🇲 美国节点, 🇰🇷 韩国节点, 🚀 手动切换, DIRECT</span></span>
<span class="line"><span>📹 油管视频 = select, 🚀 节点选择, ♻️ 自动选择, 🇸🇬 狮城节点, 🇭🇰 香港节点, 🇨🇳 台湾节点, 🇯🇵 日本节点, 🇺🇲 美国节点, 🇰🇷 韩国节点, 🚀 手动切换, DIRECT</span></span>
<span class="line"><span>🎥 奈飞视频 = select, 🎥 奈飞节点, 🚀 节点选择</span></span>
<span class="line"><span>📺 巴哈姆特 = select, 🇨🇳 台湾节点, 🚀 节点选择, 🚀 手动切换, DIRECT</span></span>
<span class="line"><span>📺 哔哩哔哩 = select, 🎯 全球直连, 🇨🇳 台湾节点, 🇭🇰 香港节点</span></span>
<span class="line"><span>🌍 国外媒体 = select, 🚀 节点选择, ♻️ 自动选择, 🇭🇰 香港节点, 🇨🇳 台湾节点, 🇸🇬 狮城节点, 🇯🇵 日本节点, 🇺🇲 美国节点, 🇰🇷 韩国节点, 🚀 手动切换, DIRECT</span></span>
<span class="line"><span>🌏 国内媒体 = select, DIRECT, 🇭🇰 香港节点, 🇨🇳 台湾节点, 🇸🇬 狮城节点, 🇯🇵 日本节点, 🚀 手动切换</span></span>
<span class="line"><span>📢 谷歌FCM = select, DIRECT, 🚀 节点选择, 🇺🇲 美国节点, 🇭🇰 香港节点, 🇨🇳 台湾节点, 🇸🇬 狮城节点, 🇯🇵 日本节点, 🇰🇷 韩国节点, 🚀 手动切换</span></span>
<span class="line"><span>Ⓜ️ 微软云盘 = select, DIRECT, 🚀 节点选择, 🇺🇲 美国节点, 🇭🇰 香港节点, 🇨🇳 台湾节点, 🇸🇬 狮城节点, 🇯🇵 日本节点, 🇰🇷 韩国节点, 🚀 手动切换</span></span>
<span class="line"><span>Ⓜ️ 微软服务 = select, DIRECT, 🚀 节点选择, 🇺🇲 美国节点, 🇭🇰 香港节点, 🇨🇳 台湾节点, 🇸🇬 狮城节点, 🇯🇵 日本节点, 🇰🇷 韩国节点, 🚀 手动切换</span></span>
<span class="line"><span>🍎 苹果服务 = select, DIRECT, 🚀 节点选择, 🇺🇲 美国节点, 🇭🇰 香港节点, 🇨🇳 台湾节点, 🇸🇬 狮城节点, 🇯🇵 日本节点, 🇰🇷 韩国节点, 🚀 手动切换</span></span>
<span class="line"><span>🎮 游戏平台 = select, DIRECT, 🚀 节点选择, 🇺🇲 美国节点, 🇭🇰 香港节点, 🇨🇳 台湾节点, 🇸🇬 狮城节点, 🇯🇵 日本节点, 🇰🇷 韩国节点, 🚀 手动切换</span></span>
<span class="line"><span>🎶 网易音乐 = select, DIRECT, 🚀 节点选择, ♻️ 自动选择</span></span>
<span class="line"><span>🎯 全球直连 = select, DIRECT, 🚀 节点选择, ♻️ 自动选择</span></span>
<span class="line"><span>🛑 广告拦截 = select, REJECT, DIRECT</span></span>
<span class="line"><span>🍃 应用净化 = select, REJECT, DIRECT</span></span>
<span class="line"><span>🐟 漏网之鱼 = select, 🚀 节点选择, ♻️ 自动选择, DIRECT, 🇭🇰 香港节点, 🇨🇳 台湾节点, 🇸🇬 狮城节点, 🇯🇵 日本节点, 🇺🇲 美国节点, 🇰🇷 韩国节点, 🚀 手动切换</span></span>
<span class="line"><span># &gt; 外部节点自动匹配</span></span>
<span class="line"><span># &gt; 匹配到关键字，自动收纳为节点组</span></span>
<span class="line"><span>🇭🇰 香港节点 = url-test, policy-path=填上你Sub-Store的节点信息, policy-regex-filter=(🇭🇰)|(港)|(Hong)|(HK), url=http://www.gstatic.com/generate_204, interval=300, tolerance=150</span></span>
<span class="line"><span>🇨🇳 台湾节点 = url-test, policy-path=填上你Sub-Store的节点信息, policy-regex-filter=(🇨🇳)|(台)|(Tai)|(TW), url=http://www.gstatic.com/generate_204, interval=300, tolerance=150</span></span>
<span class="line"><span>🇺🇲 美国节点 = url-test, policy-path=填上你Sub-Store的节点信息, policy-regex-filter=(🇺🇸)|(美)|(States)|(US), url=http://www.gstatic.com/generate_204, interval=300, tolerance=150</span></span>
<span class="line"><span>🇯🇵 日本节点 = url-test, policy-path=填上你Sub-Store的节点信息, policy-regex-filter=(🇯🇵)|(日)|(Japan)|(JP), url=http://www.gstatic.com/generate_204, interval=300, tolerance=150</span></span>
<span class="line"><span>🇸🇬 狮城节点 = url-test, policy-path=填上你Sub-Store的节点信息, policy-regex-filter=(🇸🇬)|(新)|(Singapore)|(SG), url=http://www.gstatic.com/generate_204, interval=300, tolerance=150</span></span>
<span class="line"><span>🇰🇷 韩国节点 = url-test, policy-path=填上你Sub-Store的节点信息, policy-regex-filter=(🇰🇷)|(韩)|(Korea)|(KR), url=http://www.gstatic.com/generate_204, interval=300, tolerance=150</span></span>
<span class="line"><span>🎥 奈飞节点 = select, policy-path=填上你Sub-Store的节点信息, policy-regex-filter=(NF)|(奈飞)|(Netflix)|(video)|(Video)|(nf), url=http://www.gstatic.com/generate_204, interval=300, tolerance=150</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>[Rule]</span></span>
<span class="line"><span>RULE-SET,https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/LocalAreaNetwork.list,🎯 全球直连,update-interval=86400</span></span>
<span class="line"><span>RULE-SET,https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/UnBan.list,🎯 全球直连,update-interval=86400</span></span>
<span class="line"><span>RULE-SET,https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/BanAD.list,🛑 广告拦截,update-interval=86400</span></span>
<span class="line"><span>RULE-SET,https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/BanProgramAD.list,🍃 应用净化,update-interval=86400</span></span>
<span class="line"><span>RULE-SET,https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/Ruleset/GoogleFCM.list,📢 谷歌FCM,update-interval=86400</span></span>
<span class="line"><span>RULE-SET,https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/GoogleCN.list,🎯 全球直连,update-interval=86400</span></span>
<span class="line"><span>RULE-SET,https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/Ruleset/SteamCN.list,🎯 全球直连,update-interval=86400</span></span>
<span class="line"><span>RULE-SET,https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/OneDrive.list,Ⓜ️ 微软云盘,update-interval=86400</span></span>
<span class="line"><span>RULE-SET,https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/Microsoft.list,Ⓜ️ 微软服务,update-interval=86400</span></span>
<span class="line"><span>RULE-SET,https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/Apple.list,🍎 苹果服务,update-interval=86400</span></span>
<span class="line"><span>RULE-SET,https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/Telegram.list,📲 电报消息,update-interval=86400</span></span>
<span class="line"><span>RULE-SET,https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/Ruleset/OpenAi.list,💬 OpenAi,update-interval=86400</span></span>
<span class="line"><span>RULE-SET,https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/Ruleset/NetEaseMusic.list,🎶 网易音乐,update-interval=86400</span></span>
<span class="line"><span>RULE-SET,https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/Ruleset/Epic.list,🎮 游戏平台,update-interval=86400</span></span>
<span class="line"><span>RULE-SET,https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/Ruleset/Origin.list,🎮 游戏平台,update-interval=86400</span></span>
<span class="line"><span>RULE-SET,https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/Ruleset/Sony.list,🎮 游戏平台,update-interval=86400</span></span>
<span class="line"><span>RULE-SET,https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/Ruleset/Steam.list,🎮 游戏平台,update-interval=86400</span></span>
<span class="line"><span>RULE-SET,https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/Ruleset/Nintendo.list,🎮 游戏平台,update-interval=86400</span></span>
<span class="line"><span>RULE-SET,https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/Ruleset/YouTube.list,📹 油管视频,update-interval=86400</span></span>
<span class="line"><span>RULE-SET,https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/Ruleset/Netflix.list,🎥 奈飞视频,update-interval=86400</span></span>
<span class="line"><span>RULE-SET,https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/Ruleset/Bahamut.list,📺 巴哈姆特,update-interval=86400</span></span>
<span class="line"><span>RULE-SET,https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/Ruleset/BilibiliHMT.list,📺 哔哩哔哩,update-interval=86400</span></span>
<span class="line"><span>RULE-SET,https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/Ruleset/Bilibili.list,📺 哔哩哔哩,update-interval=86400</span></span>
<span class="line"><span>RULE-SET,https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/ChinaMedia.list,🌏 国内媒体,update-interval=86400</span></span>
<span class="line"><span>RULE-SET,https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/ProxyMedia.list,🌍 国外媒体,update-interval=86400</span></span>
<span class="line"><span>RULE-SET,https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/ProxyGFWlist.list,🚀 节点选择,update-interval=86400</span></span>
<span class="line"><span>RULE-SET,https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/ChinaDomain.list,🎯 全球直连,update-interval=86400</span></span>
<span class="line"><span>RULE-SET,https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/ChinaCompanyIp.list,🎯 全球直连,update-interval=86400</span></span>
<span class="line"><span>RULE-SET,https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/Download.list,🎯 全球直连,update-interval=86400</span></span>
<span class="line"><span>GEOIP,CN,🎯 全球直连</span></span>
<span class="line"><span>FINAL,🐟 漏网之鱼</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br></div></div></details><h2 id="panels模块" tabindex="-1">Panels模块 <a class="header-anchor" href="#panels模块" aria-label="Permalink to &quot;Panels模块&quot;">​</a></h2><p>Panels模块是在Surge(2814版本新增的)，找到几个网友分享的，具体干啥用的点开看说明吧</p><div class="language-txt vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>https://raw.githubusercontent.com/xream/scripts/main/surge/modules/network-info/net-lsp-x.sgmodule</span></span>
<span class="line"><span>https://whatshub.top/sgmodule/gpt.sgmodule</span></span>
<span class="line"><span>https://whatshub.top/sgmodule/ip-api.sgmodule</span></span>
<span class="line"><span>https://raw.githubusercontent.com/getsomecat/GetSomeCats/Surge/modules/Panel/Net_Speed/Net_Speed.sgmodule</span></span>
<span class="line"><span>https://whatshub.top/sgmodule/media.sgmodule</span></span>
<span class="line"><span>https://raw.githubusercontent.com/TributePaulWalker/Profiles/main/Surge/Module/Surge_ConnectivityTest.sgmodule</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="排错指南" tabindex="-1">排错指南 <a class="header-anchor" href="#排错指南" aria-label="Permalink to &quot;排错指南&quot;">​</a></h2><ol><li><a href="https://sub-store.vercel.app" target="_blank" rel="noreferrer">https://sub-store.vercel.app</a> 是搭建在 vercel 上的, 请自己保证能正常访问(分流和节点自己处理)</li><li>确保模块和脚本都下载成功（由于网络问题可以先借助clash让脚本下载成功）</li><li>浏览器中访问 <a href="https://sub.store/api/utils/env" target="_blank" rel="noreferrer">https://sub.store/api/utils/env</a> (注意 这是 https) 应该可以看到版本号</li><li>如果报错, 尝试访问 <a href="http://sub.store/api/utils/env" target="_blank" rel="noreferrer">http://sub.store/api/utils/env</a> (注意 这是 http) 如果成功 那就是 MitM/证书信任的问题</li><li>如果还是不行 一般是因为请求没有进重写, 请检查是否开启了重写和脚本功能(不同的 app 可能会有差异, 总之得开启功能)</li><li>以上都不行的话，建议使用工具彻底卸载surge，重新安装试试</li></ol>`,14))])}const M=c(T,[["render",y]]);export{N as __pageData,M as default};
