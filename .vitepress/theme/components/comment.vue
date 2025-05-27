<script lang="ts" setup>
import { reactive, ref, watch, nextTick } from 'vue'
import { useData, useRoute } from 'vitepress'
import Giscus, { type GiscusProps } from '@giscus/vue'
import md5 from 'blueimp-md5'

const route = useRoute();
const { isDark, frontmatter } = useData();

// params generate in https://giscus.app/zh-CN
const giscusConfig: GiscusProps = reactive({
	repo: "arch3rPro/arch3rpro.github.io",
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