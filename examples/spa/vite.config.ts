import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Layouts from '@charrue/vite-plugin-vue-layouts'
import Markdown from 'vite-plugin-md'

const config = defineConfig({
  plugins: [
    Vue({
      include: [/\.vue$/, /\.md$/],
    }),
    Pages({
      extensions: ['vue', 'md'],
      syncIndex: false,
    }),
    Layouts({
      defaultLayout: 'default',
    }),
    Markdown(),
  ],
})

export default config
