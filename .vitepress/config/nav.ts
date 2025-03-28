import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.NavItem[] = [
    {
        text: '矛盾武器库',
        link: '/download/'
    },
    {
        text: '安全导航',
        link: '/nav',
    },
    {
        text: 'AI工具箱',
        link: '/ai',
    },
    {
        text: '近期资讯',
        link: '/feeds-sub'
    },
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
        text: '关于',
        link: '/about'
    }
]
