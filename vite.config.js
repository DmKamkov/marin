import path from 'path';

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

import AutoAddComponents from 'unplugin-vue-components/vite';
import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'
import Pages from 'vite-plugin-pages';
import Layouts from 'vite-plugin-vue-layouts';

// https://vitejs.dev/config/
export default defineConfig(({mode}) => {
  Object.assign(process.env, loadEnv(mode, process.cwd()));

  return {
    plugins: [
        vue(),
      Pages(),
      AutoAddComponents(),
      Layouts(),
      Components({
        resolvers: [AntDesignVueResolver()],
      }),
      VueI18nPlugin({
        include: [path.resolve(__dirname, './src/locales/**')],
      }),
    ],
    resolve: {
      alias: {
        '~/': `${path.resolve(__dirname, './src')}/`,
        '@': path.resolve(__dirname, './src'),
      }
    }
  }
})