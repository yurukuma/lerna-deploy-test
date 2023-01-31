import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers' // 按需引入ant-design-vue component並自動註冊
import AutoImport from 'unplugin-auto-import/vite' // 自動引入vue hooks/vue-router

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [AntDesignVueResolver()],
    }),
    AutoImport({
      imports: ['vue',],
    })
  ],
})
