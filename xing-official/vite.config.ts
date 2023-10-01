import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import svgLoader from 'vite-svg-loader'
import { splitVendorChunkPlugin } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  server: {
    host: '0.0.0.0',
    port: 5901,
    cors: true,
  },
  build: {
    sourcemap: true,
  },
  plugins: [
    vue(),
    vueJsx(),
    svgLoader(),
    splitVendorChunkPlugin(),
    AutoImport({
      dts: true,
      dirs: ['./src/hooks', './src/stores'],
      imports: [
        'vue',
        'pinia',
        {
          vueUse: ['useImage', 'watchOnce'],
        },
      ],
    }),
    Components({
      dts: true,
      dirs: ['./src/components'],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  css: {
    devSourcemap: true,
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/assets/tools.scss";`,
      },
    },
  },
})
