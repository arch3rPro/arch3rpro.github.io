<template>
	<div class="doc-comments">
		<Giscus v-if="showComment" :repo="giscusConfig.repo" :repo-id="giscusConfig.repoId"
			:category="giscusConfig.category" :category-id="giscusConfig.categoryId" :mapping="giscusConfig.mapping"
			:reactions-enabled="giscusConfig.reactionsEnabled" :emit-metadata="giscusConfig.emitMetadata"
			:input-position="giscusConfig.inputPosition" :theme="isDark ? 'dark' : 'light'" :lang="giscusConfig.lang"
			:loading="giscusConfig.loading" :key="md5(route.path)" />
	</div>
</template>
<script lang="ts" setup>
import { reactive, ref, watch, nextTick } from 'vue'
import { useData, useRoute } from 'vitepress'
import Giscus, { type GiscusProps } from '@giscus/vue'
import md5 from 'blueimp-md5'

const route = useRoute();
const { isDark, frontmatter } = useData();

// params generate in https://giscus.app/zh-CN
const giscusConfig: GiscusProps = reactive({
	repo: import.meta.env.VITE_GISCUS_REPO,
	repoId: import.meta.env.VITE_GISCUS_REPO_ID,
	category: "Q&A",
	categoryId: import.meta.env.VITE_GISCUS_CATEGORY_ID,
	mapping: "pathname",
	strict: "0",
	reactionsEnabled: "1",
	emitMetadata: "0",
	inputPosition: "top",
	// theme: isDark.value ? "dark" : "light", // 需要写在页面里面才会有响应式
	lang: "zh-CN",
	loading: "lazy",
});

const showComment = ref(true);
watch(
	() => route.path,
	() => {
		nextTick(()=>{
			showComment.value = frontmatter.value?.showComment !== undefined ? frontmatter.value.showComment : true;
		});	
	},
	{
		immediate: true,
	}
);

</script>
<style>
.doc-comments {
	border-top: 1px solid var(--vp-c-divider);
}
</style>