import { defineConfig } from 'vite'
import Components from 'unplugin-vue-components/vite'
import { ArcoResolver, ElementPlusResolver } from 'unplugin-vue-components/resolvers'


export default defineConfig({
    plugins: [
        Components({
            dirs: ['.vitepress/theme/components'],
            include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
            resolvers: [
                ArcoResolver({ sideEffect: true, resolveIcons: true }),
                ElementPlusResolver()
            ],
            dts: true,
        })
    ],
    ssr: { noExternal: ['@arco-design/web-vue', 'element-plus'] },
    build: {
        chunkSizeWarningLimit: 1500
    },
    css: { 
        preprocessorOptions: { 
            scss: { 
                api: 'modern-compiler', // or 'modern' 
            }, 
        }, 
    }
});