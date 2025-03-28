<template>
    <div v-show="isShow" class="info custom-block post-copyright" :key="md5(route.path)">
        <div class="post-copyright-item">
            <span v-if="isOriginal" class="post-copyright-meta">本文作者：</span>
            <span v-else class="post-copyright-meta">原文作者：</span>
            <span>
                <a v-if="isOriginal" :href="authorLink" title="进入作者主页" target="_blank">{{ author }}</a>
                <span v-else :title="author">{{ author }}</span>
            </span>
        </div>
        <div class="post-copyright-item">
            <span v-if="isOriginal" class="post-copyright-meta">本文链接：</span>
            <span v-else class="post-copyright-meta">原文链接：</span>
            <span>
                <a v-if="isOriginal" :href="articleLink" target="_blank">{{ articleLink }}</a>
                <a v-else :href="articleLink" target="_blank">{{ articleLink }}</a>
            </span>
        </div>
        <div v-if="isOriginal" class="post-copyright-item">
            <span class="post-copyright-meta">版权声明：</span>
            <span>
                本博客所有文章除特别声明外，均采用 <a :href="theme.copyrightConfig.licenseLink" target="_blank">CC BY-NC-SA
                    4.0</a>许可协议。转载请注明来自 <a :href="articleLink">arch3rPro's Blog'</a>！
            </span>
        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive, toRefs, watch, nextTick } from 'vue'
import { useData, useRoute } from 'vitepress'
import md5 from 'blueimp-md5'
const { theme, frontmatter, page } = useData();
const route = useRoute();

const data = reactive({
    isShow: page.value?.filePath.includes('posts/'),
    isOriginal: frontmatter.value?.isOriginal ?? true,
    author: frontmatter.value?.author ?? theme.value.articleMetadataConfig.author,
    authorLink: frontmatter.value?.authorLink ?? theme.value.articleMetadataConfig.authorLink,
    articleLink: frontmatter.value?.articleLink ?? decodeURI(window.location.href),
});
const { isShow, isOriginal, author, authorLink, articleLink } = toRefs(data);
watch(
    () => route.path,
    () => {
        nextTick(() => {
            data.isShow = page.value?.filePath.includes('posts/');
            data.isOriginal = frontmatter.value?.isOriginal ?? true;
            data.author = frontmatter.value?.author ?? theme.value.articleMetadataConfig.author;
            data.authorLink = frontmatter.value?.authorLink ?? theme.value.articleMetadataConfig.authorLink;
            data.articleLink = frontmatter.value?.articleLink ?? decodeURI(window.location.href);
        });
    },
    {
        immediate: true,
    }
);
</script>

<style scoped>
.post-copyright {
    margin-top: -30px;
    margin-bottom: 15px;
}

.post-copyright .post-copyright-item {
    margin-bottom: 5px;
    word-break: break-word;
    line-height: 22px;
}

.post-copyright .post-copyright-meta {
    font-weight: 600;
}

a {
    font-weight: 450;
    color: var(--vp-c-text-2);
    text-decoration: none;
}

a:hover {
    color: var(--vp-c-brand-1);
    text-decoration: underline;
}
</style>