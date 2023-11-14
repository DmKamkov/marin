import { createApp } from 'vue';
import { createPinia } from 'pinia';

import { setupLayouts } from 'virtual:generated-layouts';
import generatedRoutes from 'virtual:generated-pages';
import { createI18n } from 'vue-i18n'
import { createRouter, createWebHistory } from 'vue-router';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';

import App from './App.vue'
import messages from '@intlify/unplugin-vue-i18n/messages'

import './assets/main.scss'

const i18n = createI18n({
    locale: 'en',
    messages,
    globalInjection: true,
    legacy: false,
})

const app = createApp(App)
const routes = setupLayouts(generatedRoutes);
const router = createRouter({
    history: createWebHistory(),
    routes,
});

app.use(createPinia());
app.use(router);
app.use(router);
app.use(i18n);
app.use(Antd);

app.mount('#app');