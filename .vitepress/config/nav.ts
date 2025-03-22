import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.NavItem[] = [
    {
        text: "博客",
        link: '/blog',
        activeMatch: '^/blog',
    },
    {
        text: '软件推荐',
        items: [
            {
                text: '效率工具',
                items: [
                    { text: 'Mac 平台', link: '/efficiency/mac/surge' },
                    { text: 'Windows 平台', link: '/efficiency/windows/keymap' },
                ]
            },
        ],
        activeMatch: '^/efficiency'
    },
    {
        text: '下载',
        link: '/download'
    },
    {
        text: '导航',
        link: '/nav',
    },
    {
        text: '近期资讯',
        link: '/feeds-sub'
    },
    {
        text: '关于',
        link: '/about'
    }
]
