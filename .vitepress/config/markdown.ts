import type { MarkdownOptions } from 'vitepress';

export const markdown: MarkdownOptions = {
    lineNumbers: true,
    image: {
        lazyLoading: true,
    },
    config: (md) => {
        md.renderer.rules.heading_close = (tokens, idx, options, env, slf) => {
            let htmlResult = slf.renderToken(tokens, idx, options);
            if (tokens[idx].tag === 'h1') {
                // 添加ArticleMetadata组件
                htmlResult += `\n<ClientOnly><ArticleMetadata v-if="($frontmatter?.aside ?? true) && ($frontmatter?.showArticleMetadata ?? true)" :article="$frontmatter" /></ClientOnly>`;
                // 添加ArticleGPT组件，只在frontmatter中有articleGPT字段时显示
                htmlResult += `\n<ClientOnly><ArticleGPT v-if="$frontmatter?.articleGPT" /></ClientOnly>`;
            }
            return htmlResult;
        }
    }
}