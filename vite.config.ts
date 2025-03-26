import { defineConfig } from 'vite'
import Components from 'unplugin-vue-components/vite'
import { ArcoResolver } from 'unplugin-vue-components/resolvers'
import path from 'path'


export default defineConfig({
    resolve: {
        alias: {
            'vitepress/theme/components/VPDoc.vue': path.resolve(__dirname, '.vitepress/theme/components/VPDoc.vue')
        }
    },
    plugins: [
        Components({
            dirs: ['.vitepress/theme/components'],
            include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
            resolvers: [ArcoResolver({ sideEffect: true, resolveIcons: true })],
            dts: true,
        })
    ],
    ssr: { noExternal: ['@arco-design/web-vue'] },
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