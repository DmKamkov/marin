import { createApp } from 'vue';
import { createPinia } from 'pinia';

import { setupLayouts } from 'virtual:generated-layouts';
import generatedRoutes from 'virtual:generated-pages';
import { createRouter, createWebHistory } from 'vue-router';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';

import App from './App.vue'

import './assets/main.css'

const app = createApp(App)
const routes = setupLayouts(generatedRoutes);
const router = createRouter({
    history: createWebHistory(),
    routes,
});

app.use(createPinia());
app.use(router);
app.use(router);
app.use(Antd);

app.mount('#app');