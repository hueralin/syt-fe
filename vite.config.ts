import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      // resolve 方法，获取绝对路径
      '@': path.resolve(__dirname, 'src')
    }
  },
  // 配置代理
  server: {
    proxy: {
      '/api': {
        target: 'http://syt.atguigu.cn',
        changeOrigin: true,
        // 不需要重写，后端接口需要
        // rewrite: path => path.replace(/^\/api/, '')
      }
    }
  }
})
