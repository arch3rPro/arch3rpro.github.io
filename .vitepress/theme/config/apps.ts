export interface App {
  id: number
  name: string
  description: string
  version: string
  icon: string
  website: string
  category: string
  tags: string[]
}

export const apps: App[] = [
  {
    "id": 1,
    "name": "AdGuardHome-Sync",
    "description": "AdGuardHome 配置同步工具，支持多个 AdGuardHome 实例之间的配置同步",
    "version": "latest",
    "icon": "/appstore/icons/adguardhome-sync.png",
    "website": "https://github.com/bakito/adguardhome-sync",
    "category": "Nas工具",
    "tags": ["安全"]
  },
  {
    "id": 2,
    "name": "AFFiNE",
    "description": "将文档、白板和数据库完全整合的工作空间",
    "version": "stable",
    "icon": "/appstore/icons/affine.png",
    "website": "https://affine.pro",
    "category": "文档与内容管理",
    "tags": ["实用工具"]
  },
  {
    "id": 3,
    "name": "AList",
    "description": "支持多存储的文件列表程序和私人网盘",
    "version": "3.45.0",
    "icon": "/appstore/icons/alist.png",
    "website": "https://alist.nn.ci/",
    "category": "Nas工具",
    "tags": ["实用工具"]
  },
  {
    "id": 4,
    "name": "ANI-RSS",
    "description": "ANI-RSS 是一款专为动漫爱好者设计的自动订阅与下载工具，支持多平台部署，自动追番、下载、推送，适配主流下载器。",
    "version": "latest",
    "icon": "/appstore/icons/ani-rss.png",
    "website": "https://docs.wushuo.top/",
    "category": "Nas工具",
    "tags": ["rss"]
  },
  {
    "id": 5,
    "name": "Arcane",
    "description": "Arcane 是一款现代化、开源的Docker管理Web面板，支持容器、镜像、网络等一站式管理",
    "version": "latest",
    "icon": "/appstore/icons/arcane.png",
    "website": "https://arcane.ofkm.dev/",
    "category": "容器管理",
    "tags": ["实用工具"]
  },
  {
    "id": 6,
    "name": "Blinko",
    "description": "一款开源、自托管的个人笔记工具",
    "version": "latest",
    "icon": "/appstore/icons/blinko.png",
    "website": "https://blinko-demo.vercel.app",
    "category": "文档与内容管理",
    "tags": ["实用工具"]
  },
  {
    "id": 7,
    "name": "cup",
    "description": "自动检测 Docker 容器基础镜像的工具",
    "version": "latest",
    "icon": "/appstore/icons/cup.png",
    "website": "https://cup.sergi0g.dev/",
    "category": "容器管理",
    "tags": ["实用工具"]
  },
  {
    "id": 8,
    "name": "Deepseek-Free-API",
    "description": "DeepSeek V3 Free 服务",
    "version": "latest",
    "icon": "/appstore/icons/deepseek-free-api.png",
    "website": "https://platform.deepseek.com/",
    "category": "LLM免费接口",
    "tags": ["ai / 大模型"]
  },
  {
    "id": 9,
    "name": "1Panel Apps",
    "description": "适配 1Panel 应用商店的通用应用模板",
    "version": "host-network",
    "icon": "/appstore/icons/demo.png",
    "website": "https://github.com/okxlin/appstore",
    "category": "容器管理",
    "tags": ["建站"]
  },
  {
    "id": 10,
    "name": "Dify",
    "description": "Dify 是一个开源的 LLM 应用开发平台。支持 AI 工作流、RAG 管道、Agent、模型管理、可观测性等功能",
    "version": "1.1.1",
    "icon": "/appstore/icons/dify.png",
    "website": "https://dify.ai/",
    "category": "AI 与智能应用",
    "tags": ["ai / 大模型"]
  },
  {
    "id": 11,
    "name": "Diun",
    "description": "Diun 是一个用于监控 Docker 镜像更新并发送通知的命令行工具",
    "version": "latest",
    "icon": "/appstore/icons/diun.png",
    "website": "https://crazymax.dev/diun/",
    "category": "容器管理",
    "tags": ["实用工具"]
  },
  {
    "id": 12,
    "name": "Docker-Copilot",
    "description": "docker容器管理工具",
    "version": "latest",
    "icon": "/appstore/icons/docker-copilot.png",
    "website": "https://github.com/onlyLTY/dockerCopilot",
    "category": "容器管理",
    "tags": ["实用工具"]
  },
  {
    "id": 13,
    "name": "Docmost",
    "description": "开源协作 wiki 和文档软件",
    "version": "0.20.4",
    "icon": "/appstore/icons/docmost.png",
    "website": "https://docmost.com/",
    "category": "文档与内容管理",
    "tags": ["建站"]
  },
  {
    "id": 14,
    "name": "EasyTier",
    "description": "一个简单、安全、去中心化的内网穿透 VPN 组网方案",
    "version": "latest",
    "icon": "/appstore/icons/easytier.png",
    "website": "https://easytier.cn/",
    "category": "安全与网络工具",
    "tags": ["实用工具"]
  },
  {
    "id": 15,
    "name": "Git-Sync",
    "description": "Git-Sync 是一款支持多平台的 Git 仓库自动同步与备份工具，支持定时任务、Docker 快速部署，适合个人和团队代码备份。",
    "version": "latest",
    "icon": "/appstore/icons/git-sync.png",
    "website": "https://github.com/AkashRajpurohit/git-sync",
    "category": "运维监控",
    "tags": ["git"]
  },
  {
    "id": 16,
    "name": "Glance-Agent",
    "description": "为Glance Dashboard提供远程服务器监控数据采集API接口",
    "version": "latest",
    "icon": "/appstore/icons/glance-agent.png",
    "website": "https://github.com/arch3rPro/Glance-Monitor",
    "category": "运维监控",
    "tags": ["实用工具"]
  },
  {
    "id": 17,
    "name": "GLM-Free-API",
    "description": "智谱AI (智谱清言) 接口转API",
    "version": "latest",
    "icon": "/appstore/icons/glm-free-api.png",
    "website": "https://open.bigmodel.cn/",
    "category": "LLM免费接口",
    "tags": ["ai / 大模型"]
  },
  {
    "id": 18,
    "name": "Hexo",
    "description": "快速、简洁且高效的博客框架",
    "version": "main",
    "icon": "/appstore/icons/hexo.png",
    "website": "https://hexo.io/",
    "category": "文档与内容管理",
    "tags": ["建站"]
  },
  {
    "id": 19,
    "name": "Hubcmd-ui",
    "description": "Docker镜像加速命令查询获取、镜像搜索、配置教程文档展示UI面板",
    "version": "latest",
    "icon": "/appstore/icons/hubcmdui.png",
    "website": "https://github.com/dqzboy/Docker-Proxy",
    "category": "容器管理",
    "tags": ["other"]
  },
  {
    "id": 20,
    "name": "节点小宝",
    "description": "节点小宝是一款支持多平台的远程管理与网络加速工具，轻松实现远程访问、内网穿透、NAS/路由/PC管理、相册备份等。",
    "version": "host",
    "icon": "/appstore/icons/jdxb.png",
    "website": "https://iepose.com/jdxb/pc/",
    "category": "Nas工具",
    "tags": ["实用工具"]
  },
  {
    "id": 21,
    "name": "Jimeng-Free-API",
    "description": "支持即梦超强图像生成能力（目前官方每日赠送 66 积分，可生成 66 次），零配置部署，多路 token 支持",
    "version": "latest",
    "icon": "/appstore/icons/jimeng-free-api.png",
    "website": "https://jimeng.jianying.com/",
    "category": "LLM免费接口",
    "tags": ["ai / 大模型"]
  },
  {
    "id": 22,
    "name": "Kali Linux",
    "description": "Kali Linux 是一个专为渗透测试和安全审计设计的 Linux 发行版",
    "version": "latest",
    "icon": "/appstore/icons/kali-linux.png",
    "website": "https://www.kali.org/",
    "category": "安全与网络工具",
    "tags": ["开发工具"]
  },
  {
    "id": 23,
    "name": "karakeep",
    "description": "原名Hoarder，一个自托管的全能书签管理工具，支持保存链接、笔记和图片，具有AI自动标签功能。",
    "version": "0.24.1",
    "icon": "/appstore/icons/karakeep.png",
    "website": "https://karakeep.app/",
    "category": "文档与内容管理",
    "tags": ["书签管理"]
  },
  {
    "id": 24,
    "name": "KeePassXC",
    "description": "KeePassXC 是一款开源、跨平台的密码管理器，支持Web界面和多种平台",
    "version": "latest",
    "icon": "/appstore/icons/keepassxc.png",
    "website": "https://keepassxc.org/",
    "category": "Nas工具",
    "tags": ["实用工具"]
  },
  {
    "id": 25,
    "name": "Kimi-Free-API",
    "description": "Moonshot AI（Kimi.ai）接口转API",
    "version": "latest",
    "icon": "/appstore/icons/kimi-free-api.png",
    "website": "https://platform.moonshot.cn/",
    "category": "LLM免费接口",
    "tags": ["ai / 大模型"]
  },
  {
    "id": 26,
    "name": "KSpeeder",
    "description": "KSpeeder 是一款现代化、支持多平台的 Docker 镜像加速与私有部署服务，适用于无法访问 DockerHub 或需要本地镜像仓库加速的场景。",
    "version": "latest",
    "icon": "/appstore/icons/kspeeder.png",
    "website": "https://kspeeder.istoreos.com/",
    "category": "Nas工具",
    "tags": ["镜像加速"]
  },
  {
    "id": 27,
    "name": "linkwarden",
    "description": "Linkwarden 是一个自托管、开源的协作书签管理工具，支持网页归档、团队协作、全文搜索等功能。",
    "version": "latest",
    "icon": "/appstore/icons/linkwarden.png",
    "website": "https://linkwarden.app",
    "category": "文档与内容管理",
    "tags": ["工具"]
  },
  {
    "id": 28,
    "name": "LobeChat-Data",
    "description": "LobeChat服务端数据库版 - 开源、现代设计的 ChatGPT/LLMs UI/框架",
    "version": "1.77.16",
    "icon": "/appstore/icons/lobe-chat-data.png",
    "website": "https://lobehub.com",
    "category": "AI 与智能应用",
    "tags": ["ai / 大模型"]
  },
  {
    "id": 29,
    "name": "Lucky",
    "description": "Lucky 是一款集端口转发、流量转发、WAF、备份等多功能于一体的网络加速与安全工具，支持多平台部署。",
    "version": "host",
    "icon": "/appstore/icons/lucky.png",
    "website": "https://lucky666.cn/",
    "category": "Nas工具",
    "tags": ["实用工具"]
  },
  {
    "id": 30,
    "name": "md",
    "description": "一款高度简洁的微信Markdown编辑器",
    "version": "2.0.3",
    "icon": "/appstore/icons/md.png",
    "website": "https://doocs.github.io/md/",
    "category": "文档与内容管理",
    "tags": ["实用工具"]
  },
  {
    "id": 31,
    "name": "Metaso-Free-API",
    "description": "支持高速流式输出、支持秘塔AI超强联网搜索（全网or学术以及简洁、深入、研究三种模式），零配置部署，多路token支持。",
    "version": "latest",
    "icon": "/appstore/icons/metaso-free-api.png",
    "website": "https://metaso.cn/",
    "category": "LLM免费接口",
    "tags": ["ai / 大模型"]
  },
  {
    "id": 32,
    "name": "Minimax-Free-API",
    "description": "支持最新MiniMax-Text-01、MiniMax-VL-01模型，支持高速流式输出、支持多轮对话、支持语音合成等",
    "version": "latest",
    "icon": "/appstore/icons/minimax-free-api.png",
    "website": "https://platform.minimaxi.com/",
    "category": "LLM免费接口",
    "tags": ["ai / 大模型"]
  },
  {
    "id": 33,
    "name": "NetBox",
    "description": "NetBox 是一款开源的数据中心和网络资源管理平台，支持Web界面和API",
    "version": "latest",
    "icon": "/appstore/icons/netbox.png",
    "website": "https://netbox.dev/",
    "category": "安全与网络工具",
    "tags": ["实用工具"]
  },
  {
    "id": 34,
    "name": "Netdata",
    "description": "一个实时监控工具",
    "version": "2.2.6",
    "icon": "/appstore/icons/netdata.png",
    "website": "https://www.netdata.cloud",
    "category": "运维监控",
    "tags": ["实用工具"]
  },
  {
    "id": 35,
    "name": "Next-Terminal",
    "description": "一个简单好用安全的开源交互审计系统，支持RDP、SSH、VNC、Telnet、Kubernetes协议",
    "version": "2.4.10",
    "icon": "/appstore/icons/next-terminal.png",
    "website": "https://next-terminal.typesafe.cn/",
    "category": "运维监控",
    "tags": ["工具"]
  },
  {
    "id": 36,
    "name": "Nezha",
    "description": "Open source, lightweight, easy-to-use server monitoring and operation and maintenance tools",
    "version": "1.12.4",
    "icon": "/appstore/icons/nezha.png",
    "website": "https://nezha.wiki/",
    "category": "运维监控",
    "tags": ["实用工具"]
  },
  {
    "id": 37,
    "name": "NPC",
    "description": "内网穿透代理服务器 NPS 的客户端，基于 nps 0.26 的基础上由djylb二次开发",
    "version": "0.29.21",
    "icon": "/appstore/icons/npc.png",
    "website": "https://ehang-io.github.io/nps",
    "category": "安全与网络工具",
    "tags": ["工具"]
  },
  {
    "id": 38,
    "name": "NPS",
    "description": "基于 nps 0.26 的基础上由djylb二次开发",
    "version": "0.29.21",
    "icon": "/appstore/icons/nps.png",
    "website": "https://ehang-io.github.io/nps",
    "category": "安全与网络工具",
    "tags": ["工具"]
  },
  {
    "id": 39,
    "name": "NZBGet",
    "description": "NZBGet 是一个高性能的Usenet下载工具，支持Web界面管理和自动化下载",
    "version": "latest",
    "icon": "/appstore/icons/nzbget.png",
    "website": "https://nzbget.net/",
    "category": "多媒体管理",
    "tags": ["实用工具"]
  },
  {
    "id": 40,
    "name": "OpenList",
    "description": "OpenList-开源支持多存储的文件列表程序和私人网盘",
    "version": "openlist-ffmpeg",
    "icon": "/appstore/icons/openlist.png",
    "website": "https://github.com/OpenListTeam/OpenList",
    "category": "多媒体管理",
    "tags": ["实用工具"]
  },
  {
    "id": 41,
    "name": "PairDrop",
    "description": "跨平台传输文件，无需设置，无需注册",
    "version": "latest",
    "icon": "/appstore/icons/pairdrop.png",
    "website": "https://pairdrop.net/",
    "category": "Nas工具",
    "tags": ["实用工具"]
  },
  {
    "id": 42,
    "name": "PicList",
    "description": "一款高效的云存储和图床平台管理工具",
    "version": "latest",
    "icon": "/appstore/icons/piclist.png",
    "website": "https://piclist.cn",
    "category": "多媒体管理",
    "tags": ["实用工具"]
  },
  {
    "id": 43,
    "name": "Qexo",
    "description": "快速、强大、美观的在线静态博客编辑器",
    "version": "latest",
    "icon": "/appstore/icons/qexo.png",
    "website": "https://www.oplog.cn/qexo/",
    "category": "文档与内容管理",
    "tags": ["建站"]
  },
  {
    "id": 44,
    "name": "Qwen-Free-API",
    "description": "阿里通义 (Qwen) 接口转API",
    "version": "latest",
    "icon": "/appstore/icons/qwen-free-api.png",
    "website": "https://www.aliyun.com/product/bailian",
    "category": "LLM免费接口",
    "tags": ["ai / 大模型"]
  },
  {
    "id": 45,
    "name": "Remmina",
    "description": "Remmina 是一款开源、跨平台的远程桌面客户端，支持多种协议和Web界面",
    "version": "latest",
    "icon": "/appstore/icons/remmina.png",
    "website": "https://remmina.org/",
    "category": "运维监控",
    "tags": ["实用工具"]
  },
  {
    "id": 46,
    "name": "Resilio-sync",
    "description": "使用BitTorrent协议在您的所有设备之间同步文件和文件夹",
    "version": "latest",
    "icon": "/appstore/icons/resilio-sync.png",
    "website": "https://www.resilio.com/sync/",
    "category": "Nas工具",
    "tags": ["实用工具"]
  },
  {
    "id": 47,
    "name": "Safeline",
    "description": "一款足够简单、足够好用、足够强的免费 WAF",
    "version": "7.6.2",
    "icon": "/appstore/icons/safeline.png",
    "website": "https://waf-ce.chaitin.cn/",
    "category": "安全与网络工具",
    "tags": ["实用工具"]
  },
  {
    "id": 48,
    "name": "Spark-Free-API",
    "description": "支持高速流式输出、支持多轮对话、支持智能体对话、支持AI绘图、支持长文档解读、图像解析，零配置部署，多路token支持，自动清理会话痕迹",
    "version": "latest",
    "icon": "/appstore/icons/spark-free-api.png",
    "website": "https://xinghuo.xfyun.cn/sparkapi",
    "category": "LLM免费接口",
    "tags": ["ai / 大模型"]
  },
  {
    "id": 49,
    "name": "星空组网",
    "description": "StarVPN 是一款支持多平台的自托管 VPN 服务，支持 Docker 快速部署，适合个人和团队安全上网。",
    "version": "5.1.5",
    "icon": "/appstore/icons/starvpn.png",
    "website": "https://starvpn.cn/",
    "category": "Nas工具",
    "tags": ["vpn"]
  },
  {
    "id": 50,
    "name": "Step-Free-API",
    "description": "支持高速流式输出、支持多轮对话、支持联网搜索、支持长文档解读、支持图像解析，零配置部署，多路token支持，自动清理会话痕迹",
    "version": "latest",
    "icon": "/appstore/icons/step-free-api.png",
    "website": "https://platform.stepfun.com/",
    "category": "LLM免费接口",
    "tags": ["ai / 大模型"]
  },
  {
    "id": 51,
    "name": "Transmission",
    "description": "Transmission 是一款开源、高性能的BT/PT下载工具，支持Web界面和多平台",
    "version": "latest",
    "icon": "/appstore/icons/transmission.png",
    "website": "https://transmissionbt.com/",
    "category": "多媒体管理",
    "tags": ["实用工具"]
  },
  {
    "id": 52,
    "name": "Verysync",
    "description": "微力同步（Verysync）是一款基于P2P技术的极速文件同步工具，支持多平台部署，适合家庭、企业、开发者等多场景使用。",
    "version": "latest",
    "icon": "/appstore/icons/verysync.png",
    "website": "https://www.verysync.com/",
    "category": "Nas工具",
    "tags": ["文件同步"]
  },
  {
    "id": 53,
    "name": "Wud",
    "description": "自动更新Docker镜像的工具，支持Web管理",
    "version": "latest",
    "icon": "/appstore/icons/wud.png",
    "website": "https://getwud.github.io/wud/",
    "category": "容器管理",
    "tags": ["实用工具"]
  },
  {
    "id": 54,
    "name": "Xiaomusic",
    "description": "无限听歌，解放小爱音箱",
    "version": "latest",
    "icon": "/appstore/icons/xiaomusic.png",
    "website": "https://xdocs.hanxi.cc/",
    "category": "多媒体管理",
    "tags": ["音乐"]
  }
] 