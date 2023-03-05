import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import path from 'path'
import AutoImport from 'unplugin-auto-import/vite' // 自動引入vue hooks/vue-router

const { resolve } = path
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
  resolve: {
    alias: [
      {
        find: '@',
        replacement: resolve(__dirname, 'src'),
      },
      {
        find: '@CommonComponents',
        replacement: resolve(__dirname, '../common/src/components'),
      },
    ]
  },
  server: {
    // 開發devServer
    port: '3002',
    host: true,
  }
})
