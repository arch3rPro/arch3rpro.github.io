<script setup lang="ts">
import { computed } from 'vue'
import { withBase } from 'vitepress'
import { slugify } from '@mdit-vue/shared'

import { NavLink } from '../types'

const props = defineProps<{
    noIcon?: boolean
    icon?: NavLink['icon']
    badge?: NavLink['badge']
    title?: NavLink['title']
    desc?: NavLink['desc']
    link: NavLink['link']
}>()

const formatTitle = computed(() => {
    if (!props.title) {
        return ''
    }
    return slugify(props.title)
})

const svg = computed(() => {
    if (typeof props.icon === 'object') return props.icon.svg
    return ''
})

const formatBadge = computed(() => {
    if (typeof props.badge === 'string') {
        return { text: props.badge, type: 'info' }
    }
    return props.badge
})

// 安全地获取URL的hostname，避免非http链接导致的错误
function getHostname(url: string): string {
    try {
        // 确保URL以http或https开头
        if (url.startsWith('http://') || url.startsWith('https://')) {
            return new URL(url).hostname
        } else if (url.startsWith('http')) {
            // 处理可能缺少://的情况
            return new URL(`https://${url.substring(4)}`).hostname
        }
        return ''
    } catch (e) {
        console.error('Invalid URL:', url, e)
        return ''
    }
}

// 获取图标URL
const getIconUrl = computed(() => {
    // 如果icon是对象且有svg属性，则使用svg
    if (typeof props.icon === 'object' && props.icon?.svg) {
        return ''
    }
    
    // 如果icon是字符串
    if (props.icon && typeof props.icon === 'string') {
        // 如果是完整的http链接并且以图片格式结尾，直接使用该URL
        if (props.icon.startsWith('http') && (
            props.icon.endsWith('.ico') || 
            props.icon.endsWith('.png') || 
            props.icon.endsWith('.jpg') || 
            props.icon.endsWith('.jpeg') || 
            props.icon.endsWith('.svg')
        )) {
            return props.icon
        }
        // 如果是http链接但不是图片URL，返回favicon服务的URL
        else if (props.icon.startsWith('http')) {
            return `https://www.boltp.com/favicon/${getHostname(props.icon)}.png`
        }
        // 否则作为本地路径处理
        return withBase(props.icon)
    }
    
    // 如果icon为空但link是http链接，自动获取favicon
    if (props.link && props.link.startsWith('http')) {
        return `https://www.boltp.com/favicon/${getHostname(props.link)}.png`
    }
    
    // 默认返回空
    return ''
})
</script>

<template>
    <a v-if="link" class="m-nav-link" :href="link" target="_blank" rel="noreferrer">
        <article class="box" :class="{ 'has-badge': formatBadge }">
            <div class="box-header">
                <template v-if="!noIcon">
                    <div v-if="svg" class="icon" v-html="svg"></div>
                    <div v-else-if="getIconUrl" class="icon">
                        <img :src="getIconUrl" :alt="title" onerror="this.parentElement.style.display='none'" />
                    </div>
                </template>
                <h5 v-if="title" :id="formatTitle" class="title" :class="{ 'no-icon': noIcon }">
                    {{ title }}
                </h5>
            </div>
            <Badge v-if="formatBadge" class="badge" :type="formatBadge.type" :text="formatBadge.text" />
            <p v-if="desc" class="desc">{{ desc }}</p>
        </article>
    </a>
</template>

<style lang="scss" scoped>
.vp-doc a {
    text-decoration: none;
}

.m-nav-link {
    --m-nav-icon-box-size: 40px;
    --m-nav-icon-size: 24px;
    --m-nav-box-gap: 12px;

    display: block;
    border: 1px solid var(--vp-c-bg-soft);
    border-radius: 8px;
    height: 100%;
    background-color: var(--vp-c-bg-soft);
    transition: all 0.25s;

    &:hover {
        box-shadow: var(--vp-shadow-2);
        border-color: var(--vp-c-brand);
        text-decoration: initial;
        background-color: var(--vp-c-bg-soft-up);
    }

    .box {
        display: flex;
        flex-direction: column;
        position: relative;
        padding: var(--m-nav-box-gap);
        height: 100%;
        color: var(--vp-c-text-1);

        &.has-badge {
            padding-top: calc(var(--m-nav-box-gap) + 2px);
        }

        &-header {
            display: flex;
            align-items: center;
        }
    }

    .icon {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: calc(var(--m-nav-box-gap) - 2px);
        border-radius: 6px;
        width: var(--m-nav-icon-box-size);
        height: var(--m-nav-icon-box-size);
        font-size: var(--m-nav-icon-size);
        background-color: var(--vp-c-bg-soft-down);
        transition: background-color 0.25s;

        :deep(svg) {
            width: var(--m-nav-icon-size);
            fill: currentColor;
        }

        :deep(img) {
            border-radius: 4px;
            width: var(--m-nav-icon-size);
        }
    }

    .title {
        overflow: hidden;
        flex-grow: 1;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-size: 16px;
        font-weight: 600;

        &:not(.no-icon) {
            line-height: var(--m-nav-icon-box-size);
        }
    }

    .badge {
        position: absolute;
        top: 2px;
        right: 0;
        transform: scale(0.8);
    }

    .desc {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        flex-grow: 1;
        margin: calc(var(--m-nav-box-gap) - 2px) 0 0;
        line-height: 1.5;
        font-size: 12px;
        color: var(--vp-c-text-2);
    }
}

@media (max-width: 960px) {
    .m-nav-link {
        --m-nav-icon-box-size: 36px;
        --m-nav-icon-size: 20px;
        --m-nav-box-gap: 8px;

        .title {
            font-size: 14px;
        }
    }
}
</style>