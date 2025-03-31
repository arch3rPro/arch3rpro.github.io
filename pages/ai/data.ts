import type { NavData } from '../../.vitepress/theme/types'

export const NAV_DATA: NavData[] = [
  {
    title: 'AI聊天应用',
    items: [
      {
        icon: '',
        title: 'ChatGPT',
        desc: 'CloseAI发布的AI聊天应用，开山鼻祖，需要特殊访问手段',
        link: 'https://chatgpt.com/',
        badge: '接口付费'
      },
      {
        icon: '',
        title: 'DeepSeek',
        desc: '幻方量化旗下深度求索推出的开源大模型和聊天助手',
        link: 'https://www.deepseek.com/?utm_source=ai-bot.cn',
        badge: '开源部署'
      },
      {
        icon: '',
        title: 'Kimi',
        desc: '国内人工智能初创公司Moonshot AI（月之暗面）推出的智能对话助手',
        link: 'https://kimi.moonshot.cn/?utm_campaign=ai-bot.cn',
        badge: '长文本处理'
      },
      {
        icon: '',
        title: '豆包',
        desc: '字节跳动推出的免费AI智能助手',
        link: 'https://www.doubao.com/chat/'
      },
      {
        icon: '',
        title: '腾讯元宝',
        desc: '腾讯推出的AI智能助手应用',
        link: 'https://yuanbao.tencent.com/chat/'
      },
      {
        icon: '',
        title: '智谱清言',
        desc: '免费全能的AI助手，支持AI绘画、视频生成',
        link: 'https://chatglm.cn/'
      },
      {
        icon: '',
        title: '通义千问',
        desc: '阿里推出的自研大模型，通情、达义，你的全能AI助手！',
        link: 'https://tongyi.aliyun.com/qianwen'
      },
      {
        icon: '',
        title: '360智脑',
        desc: '基于多模态大语言模型提供高效便捷的API接入服务',
        link: 'https://ai.360.com/?src=ai-bot.cn'
      },
      {
        icon: '',
        title: '跃问',
        desc: '阶跃星辰推出的支持多模态的AI聊天机器人',
        link: 'https://yuewen.cn/chats'
      },
      {
        icon: '',
        title: '文心一言',
        desc: '百度推出的基于文心大模型的AI对话互动工具',
        link: 'https://yiyan.baidu.com/'
      },
      {
        icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAQlBMVEVHcEwAAAAAAAAAAAAAAAAAAAAAAAB8fHxERETExMTW1tby8vJcXFzl5eWioqILCwu4uLiFhYUfHx////9xcXGvr6+dGSN5AAAAB3RSTlMAS8H0/1kG0QgnqQAAAK1JREFUeAF90wMCxDAQBdBiYuv+V91Zx7/uK8IDc143dLkvcjxDL5jmoohoCz0OAsucqxffr9ZlYfyze+c+KhNSaZBC/bRGA9Y6Az5M0S3QtRhrDEnxCoUyFSYIvsIEMm9QfFGXDWaxRheVNwtE5Syu8J0nRq0jIkPMfEDOEYMssmu+LLV6ty0wGzsEKzUiIGK+WEcrKWq8G+WsHoL7YXKukeyH5nZQY8hsOpwIDxZOE5HYrg3dAAAAAElFTkSuQmCC',
        title: 'MiniMax',
        desc: 'MiniMax推出的免费AI智能聊天助理',
        link: 'https://chat.minimaxi.com/'
      },
      {
        icon: '',
        title: '问小白',
        desc: '元石科技推出的AI智能助手，支持DeepSeek满血版',
        link: 'https://www.wenxiaobai.com/chat/'
      },
    ]
  },
  {
    title: 'LLM客户端',
    items: [
      {
        icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAIAAAD9b0jDAAADV0lEQVR4AWIY6oAJwQy18wq196PUQBER8RLDi/wMlsWhqXsmnVhYs2dW3vpN9ZsmZ7dXx5QVR1XlhBaZqRmQbK6FdOTkpJYNLWeWluwHoklJ25LcFuV5zi3MWVNZtR6I+lp3JwXkAFVKGInqxmgQNhHollmVB6oDF52tWHC5YfHV1jU3+ncdaj0wOWxRTfLCwvi+9NCW9Ny5E/vO8QLaKQfY3IIgCu/zi55t27Zt27Zt27Zt27Zt1LZ/fMnU7d42VjcnN7P69uzM5irV9VkdFAd3fv9V4wbfb9n6zOEeK572XvhhyLzv09f9nrfrz8pDoB/033G+715EQmbPfLxg4I3eNwYO/dgRv1pi+YJFWQexT9uj70ethvh//mKXDeuR86Y9iO6ldqNWNpzKkbKyft5daGSH5VooVSZxLF047ALQP3NWum9d739ip4jYc9vSL6PHHGg8Di75aVJra8MKcxBpUQbtQv/ltxsMA0o2sQbLdGO/iNjv9BrMUqWWu/5SPXCNynZAZNkI+rtxs3dFq5G1txsfk0ffo+dM109DlG/Q7Y2k4ujIfVSJV9G/224uDjF/jkKGpa9a6XjVmhJfm3fIY98Tv+P3EB5N76YC5SQplIpn44lMr5B5f6OcD9rm+9Q1648eynl8RZfpbUJe9ja9bG6x6UtgP30AI0whliG2FEidTAt9Oro6GwB5rB8U8vG62f4L1twnZfA/3xAcIqDLILPI+8A0ORVpoUFbOyD2WII8nX99OndgH19ix0n1RSA4KfIUiYaIfa1Z/8MDgMo2pXIgBl/evGR6d9F1alHEeUyxv3IycqWYgsu1gNYsmEMLRaw7uHFLRlUCFVeZBrdowDEC5crrFoyrXUI1LpgS7tyRo1hMDY2cft7YW6BYUCoTUOxAAeq/rTECyhT7geZRiiSEO1W6tmFoM9ONgVxWuBjBMjG3lksEXZkpU5wkd+cYcnpuoL5QNLbBtTxfHCqnp4gRxoXLIKcSYJwCYBNJQo3Msi2cS8BOKEIn4NmBi0yMw6a0K4uHhnP5Up8dPOEiaRDBi8H5sMmDFejr6aM1GI1fSQXihQYO7oO8etWSEbh6j/pGmngM4Vzqi2CJfm3sx1MzJhj9tnF9fX4XxBl86RqXJaFZAc1BlQtGW8gHAAAAAElFTkSuQmCC',
        title: 'LobeChat',
        desc: '开源的 LLMs WebUI 框架，支持全球主流的大型语言模型，提供精美的用户界面及卓越的用户体验',
        link: 'https://github.com/lobehub/lobe-chat',
        badge: '自建部署'
      },
      {
        icon: 'https://raw.githubusercontent.com/CherryHQ/cherry-studio/main/build/icon.png',
        title: 'Cherry-Studio',
        desc: '大语言模型（LLM）服务商的桌面客户端，数据本地存储',
        link: 'https://github.com/CherryHQ/cherry-studio',
        badge: '博主自用'
      },
      {
        icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAP1BMVEVHcEz////////////////////////////////////6+vrs7Ox9fX0AAABLS0uqqqpdXV2Pj48fHx+7u7sVFRV/3ioaAAAACnRSTlMAT5bK6/8RpZEdeaT9MwAAAM1JREFUeAGFUwUCg0AMOwvu8P+3LnjpNhqc1MUJ+BATkGLw7geyHAJ5pvkCCsVTPQEaSRgp8RPlpY8/OG0k/EES8f1GoRxU1f1WXU7O/OumJZp6++jadpPIKXDwfXugBzEcAmB9BT8Mm4QU8C7s9kmMIEa+1EIguLg9m4PfJEYhEI8iUA8H2nYSAmmPsaJ/HGACQgC2gOlCB9noIFWa5EnJNGWhuq4l5mehdKnJS4FHsxbGN+pm6XnS7bYGxho5c2jNsbcXx149e3nN9f8ABpkWUXvMlAIAAAAASUVORK5CYII=',
        title: 'Open WebUI',
        desc: '一个可扩展、功能丰富且用户友好的开源自托管 AI 界面',
        link: 'https://github.com/open-webui/open-webui',
        badge: '开源推荐'
      },
      {
        icon: '',
        title: 'Chatbox AI',
        desc: 'AI 客户端应用和智能助手，支持众多先进的 AI 模型和 API',
        link: 'https://chatboxai.app/zh',
        badge: '免费下载'
      },
      {
        icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAABIFBMVEVHcEw9PURRQT8wFTIbLEEvLEAVHDpmSkEuKjoNGDQmN0NJGjZZFzg2P0wuO0g+QkwPJUAKHTcXLEZGRE7x//9uTkIgL0IdMUoiNk4pNUR5UkI1OEYZKT5CPEluHzyDVEFhGDh6JUJRQkJ6Sj43GTYsPFEtKz5cSEJUGzxGOULa9P17OUIsGTVIFTfk+P62y9Luo4Hx9PVHIjzP5e0/LEBWR0b/3YmLoK2re4boi4/f0tjq+v/Qws2vsrfwxMLfHTfwpqDt+Py/1+Paw5vzdWmUSFr804HvuYXq5uWSYElzZmh+h4jXooDg28b+76usnZFvDjPby6/uj27Ow6jcc3DIwLrr16e+kaL3+NxYQjyScXWuYWjHjW9SYG3gYlP1372/xH35AAAADXRSTlMA4Y+Pji/i/Qf14Y/iJzo1BgAAAgVJREFUKJFV0mdzolAUgOGbxDa7S9MriqBriVFxQ7GAgoK9t1iiKbv7///FngvuJHkZvvDM4c6dOQihyPcf2Uwmk6tWqwUoXojHw+HwbQRBwcdy9gNTkKelfBDm7n0kVv3plUqBll7yEXRHEIw0nxc+af4Wha64G68mhjF99xwU8Abde7jbnXqaYUwmxua5VbhiBf3yznzVZ6N27+9Ft/Vp25oXvqCq6hhjU8X6VHMdvI3/x1o5u1D7M2zj5bKraZrr6vgTPnYV3Drj2fK913b/TPc9vA2Xmj7WyvDLVm7cOY56fXdkTJ7rnRfANGCjVjO79XOnv3ZGDu7tAQf1JpiIHh4ajdrC7F4wHs5mDta16erpcGg2Y1esVE6bTb+/XndPK+0t11kPD+kYQ9GAYrpSWQw3F1nGrYE8HFv4abhNMxQleAg1FgfLUuRzu23Z9kp7LVJUUUACDRiDxKOj4LHbsRW5/ZakisVkAgmCSDEEY2PdxrmOrChyK1kEI0gD+qrW6wMZXvVqUUAakCgjmgNTsY5dk/fNR6JMjGFEmVOd0X4ZTYIlouwHMgwlqhLfivNRELAvCBeTOVriE0mPoiyLvhGkGHgoUVA4gYeiHrEhFPDQM5FXOEKSxBJjAyhC+0rRtMD/lngJyI+DtQ76SBOUPOJYjhQkKx8J3FwHAf3vHBcKwNw/o71syMaUST8AAAAASUVORK5CYII=',
        title: 'TypingMind',
        desc: 'AI聊天UI前端，适用于ChatGPT、Claude、Gemini等AI模型和开源模型',
        link: 'https://github.com/TypingMind/typingmind',
        badge: '开源推荐'
      },
      {
        icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAUVBMVEVMaXEhOZMwWeovWeswXfQxXfYxXvgnRLMuWOgjQKQ9ZvVegPepu/qXrftKcPaGn/fY4f3g5/7o7f77/P8QEBB2k/f2+P/w8/8uVeK9y/sqUdLDiBrPAAAAG3RSTlMAHGWo3vL/KZo5/////////////wr///9p/3HV/zIvAAABOUlEQVR4AY2TBZbDMAxE5YDCidlt7n/QjeatyvTLnW+Z6Yqp6qZlbpu6MvRM17d8pe4eYtPzA725a97wE81NkeEphzE8tX9TwzznahgIPb+lRwesjNPIgKd5WVmQTmrNN+v8wsIcDjaUiGQ0T06Y5VvOOYQi5VpDJxXODizHt1LEmPjgdOlhRSzGWjwMCDXpHBerhvVeDMdCQ7pF1qqRC4zEQks6MX80Re5DgLEyUGGWDEYOMGZmoF04fzCLEQTvJwYtNSykIoJL1pWQj0ewuh2YpkwdrMlmrFJIerRoZ8FmMHLyMPLKDHYy7WX1g0x9K2LM/I+hiN1eS9C6myvlPGoPkWhgGLM9T9ddVwYilHhHH386cnqon/MhEohX4yl/Np5zGC+uXqe5Fqn5Sttr81ul2/X67zet/wCESCEVMl3hCAAAAABJRU5ErkJggg==',
        title: 'NextChat',
        desc: '一键免费部署你的私人ChatGPT网页应用，支持Claude, GPT4 & Gemini Pro模型',
        link: 'https://github.com/ChatGPTNextWeb/NextChat',
        badge: '自建部署'
      },
    ]
  },
  {
    title: 'AI编程工具',
    items: [
      {
        icon: '',
        title: 'Trae',
        desc: '字节跳动推出的免费AI编程工具',
        link: 'https://www.trae.com.cn/',
        badge: '博主自用'
      },
      {
        icon: '',
        title: 'Cursor',
        desc: 'AI代码编辑器，快速进行编程和软件开发',
        link: 'https://www.cursor.com/cn',
        badge: '试用｜收费'
      },
      {
        icon: '',
        title: '豆包MarsCode',
        desc: '字节跳动推出的免费AI编程工具-和Trae同源',
        link: 'https://www.marscode.cn/',
        badge: '免费使用'
      },
      {
        icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAbCAMAAABY1h8eAAAAhFBMVEVHcEzTyvuMgfhXQ/Ho5v7f2/2QdfT5+P9pPfCypvh5WfKVj/lkTvSkj/ZjRfJRHvDBs/l5UPFhVPZqTPN+cfdlK+5lU/WbmPteUPVUPPSHgfmFZfKPi/pwZvb///9lRvJkT/RnNe9qK+12a/dtXfZeJO6AePhbRPP8+/9ZOPLx8P5bCuydeh4+AAAAHnRSTlMA/fwZ/v78/v370f6Y/HuS/P1gRtnK3dK2M8781vH+CriEAAABZ0lEQVQokW2S6ZaDIAyFXaBArVvV7kOQiuv7v98kOD11zvH+8KAfSW5iguCj6v3u+0ewr37ukJ53Wc616jB4j8WJ1rpDWtf14/W6XuMNbITWs+kI930fJcn1yyqFgQdY6YorD7I8zyUTOlymaRgG8xcfEbubWQiu5lFsNeqE4GVIMaXiWHSrkJo6GzMxrUU6/4dHCrwZA098KcqDVxRFiVIqyXyDBkNDpKWzLQpg4owz5v0EJwwFhHxBJJEVekSxm6cIJ9+mIypLPDKyeA+8JQCHdsSCeaXjCAZ6XHzoBaA90F1KTIdi6j7NBHcA6ciTtK1PMcGgOOc/3hLCVtLdxVHxCMDgHIeTb4ag//y0ZNsBUpQviRBdWjHOyjfcrjBbZwSOvI+C05QLJyWcUOsSGD96PTKFd0bsVmbfP52BH7UIqWxKcLtAx/pIagqcDU2i2tuyZtSltbbZXc84DReE8S4MckT26+YXbIky6gKoB24AAAAASUVORK5CYII=',
        title: '通义灵码',
        desc: '阿里推出的免费AI编程工具，基于通义大模型',
        link: 'https://lingma.aliyun.com/',
        badge: '个人免费'
      },
      {
        icon: '',
        title: 'GitHub Copilot',
        desc: 'GitHub推出的AI编程工具',
        link: 'https://github.com/features/copilot',
        badge: '免费限制使用'
      },
      {
        icon: '',
        title: 'CodeGeeX',
        desc: '智谱AI推出的免费AI编程助手',
        link: 'https://codegeex.cn/',
        badge: '免费使用'
      },
      {
        icon: '',
        title: '文心快码',
        desc: '百度推出的AI编程助手，基于文心大模型',
        link: 'https://comate.baidu.com/zh',
        badge: '个人免费'
      }
    ]
  },
  {
    title: 'AI搜索引擎',
    items: [
      {
        icon: '',
        title: '秘塔AI搜索',
        desc: '没有广告，直达结果',
        link: 'https://metaso.cn/',
        badge: '推荐'      
      },
      {
        icon: '',
        title: '纳米搜索',
        desc: '360公司推出的AI搜索应用，一切皆可生成视频',
        link: 'https://www.n.cn/',
        badge: '免费使用'      
      },
      {
        icon: '',
        title: '心流',
        desc: '阿里旗下推出的AI搜索助手',
        link: 'https://iflow.cn/',
        badge: '免费使用'      
      }
    ]
  },
  {
    title: '大模型服务商',
    items: [
      {
        icon: '',
        title: 'OpenRouter',
        desc: '大模型 API 路由器，旨在将各种 AI 模型和服务集成到一个统一的接口',
        link: 'https://openrouter.ai/',
        badge: '超多免费API'
      },
      {
        title: '硅基流动',
        desc: '大模型云服务平台，注册送2000万Tokens',
        link: 'https://cloud.siliconflow.cn/i/YcqmVWk8',
        badge: '注册邀请码:YcqmVWk8'
      },
      {
        title: 'DeepSeek开放平台',
        desc: 'DeepSeek API开放平台',
        link: 'https://platform.deepseek.com',
        badge: '价格可以'
      },
      {
        title: '零一万物',
        desc: '高性能、高速度旗舰模型',
        link: 'https://platform.lingyiwanwu.com/',
      },
      {
        title: '智普AI',
        desc: '智谱AI大模型开放平台',
        link: 'https://open.bigmodel.cn/',
      },
      {
        title: '月之暗面',
        desc: '寻求将能源转化为智能的最优解',
        link: 'https://www.moonshot.cn/',
      },
      {
        icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAM1BMVEVHcEwAjf8Aef8AgP8Afv8Akf8AgP8Bkf8Bhv8Aj/8Ah/8Aev8Afv8Ccv8Acf8AaP8AcP8Csn7tAAAAEXRSTlMAjbMcytn/SXP///8IMf//obqUANgAAAC5SURBVHgBhNEFDsQwDETRMLkb7/1P2wblKPQrnldmx7g4rVIJbbKwbg04V5rnC+nLLRKwbs4yrjrgvhV8SBljFJNyBn1PoEZBqPMOBAJgBnQHmECaBY2PIHyHYlMEfKlnD4K/gXAHZgecqMBswPNkYAqQv6GGuDEVCACINUScwT/vgtEagALiAERJp72AOIL6+yG1BP3vGQqQAJODVGwACag7BTgBqHsFESlwQwkgEjCVQLwBfEddBQBP6BDCp61hZQAAAABJRU5ErkJggg==',
        title: '阶跃星辰',
        desc: '新一代自研Attention架构MFA的极速大模型',
        link: 'https://platform.stepfun.com/',
      },
      {
        title: '火山引擎',
        desc: '火山引擎是字节跳动旗下的云服务平台',
        link: 'https://www.volcengine.com/',
        badge: '注册送Token'
      },
    ]
  },
  {
    title: 'AI开发平台',
    items: [
      {
        icon: '',
        title: '扣子',
        desc: '海量AI智能体免费用，已接入DeepSeek满血版',
        link: 'https://www.coze.cn/',
      },
      {
        icon: '',
        title: 'Dify',
        desc: '免费开源的生成式AI应用开发平台,博主已制作1Panel一键部署',
        link: 'https://dify.ai/',
        badge: '媲美商业平台'
      },
      {
        icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAC20lEQVR4AcyWA4wmQRCF/92zbdsIz3fB2TaCs23btm3btm1rbfO7dBadSt+aXzKsmtdvZrqr2wJYA5MBGxIPm5A2sbaEnCQZky0hbpIMGwtJTDI04PQBnm2Au3Ph9W7w90Lg5wGvd8H1iXBnNvy6FU8GfN3gRFeYbwXzLXrbWhUCfEDx7TKsyivjajvXJx4MHGwqRMX2dh/8vAmL0kac8/VCHAx4/A0RWZQGbk2Di0Ok+KUhsKaQuGdsFwejIDgIvp6Hm1NDtm+XomHAxxmOdwDbZygICoAlGUOEQ4zp8/Ul4M1e+H5Vnev7BxqDxx/YVdM0d2VUzEcBa4uYQhvLgJe9zrkzS/aVTeXUubktsAaXzzEwEOQPi1JLkYWpwO45ghdbVCx628vtMTBg/8oUuDAAg8crzbyFKeHWVPh8Wv66B4tjYECNf/EJU4DrNwyujkYasFI1Qsc3lNKxx6uibcAUPtgETFTHk3nn+yNYnk3H3h+KgYH9DaTwq50YBAfDihw6Z0Uu8HXRcbdfUsP+ZQwMrMoj/qkapgYOb2QD9xcgeHdQxxanVx07mga87KXwrlpgov6pzlE1w9cVwYUBOr6nXgzqwM8b0sDNKfyXwy11zuleGKwvqeM3JsXAwLMN0sCXcxgE+sHSTDrnwxEEzp8j17B9CsGBERi4OkY+/PchBj+uyxwvOwRP18kh7OumY59OhhQ5h9cRGDjWQYiramdwY5KOq5EQsYaqBfr+h6OqOIWUZo+/ERjYVUsauDwCzBzZgEROUmoWVeuJB4tCvoa6d6JzJH1gcwVp4Gg7c/wvyaDjSzNhsDQzsjzreYV1xcSEZhrYUjny6hbgLeKqMYOd1VXM3JS26/coRsGp7nLud/6EBPTixAoercBAddwVubSOKmx35+ilXaQG3H/C9QlqGRZh9eLHVbgxEX7fIUL8veDvI3B892/gLIcLjPYLBrxrNuCd0wHvngMAzSpYmUpdf2cAAAAASUVORK5CYII=',
        title: 'OpenManus',
        desc: '通用AI agent的开源框架，Manus开源平替',
        link: 'https://github.com/mannaandpoem/OpenManus',
        badge: 'Manus开源平替'
      },
      {
        icon: '',
        title: 'LangChain',
        desc: '多功能框架，可简化利用语言模型构建应用程序的过程',
        link: 'https://www.langchain.com/',
      },
    ]
  },
  {
    title: 'MCP服务',
    items: [
      {
        icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAAAAABXZoBIAAAA10lEQVR4AXXPIWyDQBhH8ee9DzUk9b71l5ypmZqeqT07ixdIDBKfulnU+cyiq1Cc+y9ky9HvYM/+1EOmeRxn5SwGgHCMjqrrKt6P0OMk6ULMaG0YFGl26FZrQROhRP9nT/UA7Su6bBHOb+A39K82SHL0Ent7aIlaqFfcW6qYdEbi0ILELzq81BX2SbNiwknfhTWQVlSSFIiFzdvKBT1Ly3hjXq6FZey5S1qMZdSJ69CSzWK6AbTZDErT15isCZmMFdgbK7A2VuAH4X9MJ+4WjdZEi0Yf2voBIRlaTuvjYuQAAAAASUVORK5CYII=',
        title: 'ModelContextProtocol',
        desc: '模型上下文协议(MCP)的参考实现的集合',
        link: 'https://github.com/modelcontextprotocol/servers',
      },
      {
        icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAAAAABXZoBIAAABPElEQVR4AXXQEbSFMBwG8L8PrwVJFkXpJEmSznQ42zlhMI9GwyibRVGYpuN8mJ+z13rn3de63Q/2ffUrKPhPnL98odRXGIQnW/lRLeQDsd7nxA9hqru9xLozQJTFUkV3jLSdy2EdGjrMyzrnIY52GHWnxm20zrkQgRtGZA3J8ebuWGioIi3NypaikhPOMAqU8gIbZ9RMuFXOFleTPe166na9DMZt63C1wRJeq35xTiNu3VJeTDndADBNpKqPNuxitXWdODpFx4E4FfiC6bQx8b4iy3b79SLLeXY+WMSVECEyAo3ASZyXUq9bGmIkAFrRTauRrKshTC782az7DCWGO/ZnxcL3PRE9q8PyARN1VlxI9ID9b+cNfMeI0QdUGT4HbR6wKxnyo/J1y4tCct6N2go+9f3FEsP3pNHf+gGewYEqS6z7iQAAAABJRU5ErkJggg==',
        title: 'Awesome MCP Servers',
        desc: 'A collection of MCP servers.',
        link: 'https://glama.ai/mcp/servers',
      },
      {
        title: 'MCP.so',
        desc: 'Find Awesome MCP Servers and Clients',
        link: 'https://mcp.so/',
      },
      {
        title: 'MCPServers',
        desc: 'A collection of servers for the Model Context Protocol',
        link: 'https://mcpservers.org/',
      },
      {
        title: 'Pulsemcp',
        desc: 'Built to work with a variety of MCP Clients.',
        link: 'https://www.pulsemcp.com/servers',
      },
      {
        title: 'Cursor MCP',
        desc: 'Browse MCPs or post a MCP to reach 250,000+ monthly active developers.',
        link: 'https://cursor.directory/mcp',
      }
    ]
  }
]
