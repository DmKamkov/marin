<template>
    <a-layout-sider
        :collapsed="collapsed"
        collapsible
        width="280"
        class="sidebar-main"
        theme="light"
        @collapse="handleCollapse"
        @breakpoint="onBreakpoint"
        
    >
        <a-menu v-model:selectedKeys="selectedKeys" theme="light" mode="inline">
            <a-menu-item key="1">
                <router-link to="/current-vacancies">
                    <pie-chart-outlined />
                    <span>{{ $t('sidebar.vacancies') }}</span>
                </router-link>
            </a-menu-item>
            <a-sub-menu key="sub1">
                <template #title>
                    <span>
                        <user-outlined />
                        <span>{{ $t('sidebar.handbooks') }}</span>
                    </span>
                </template>
                <a-menu-item key="2">
                    <router-link to="/positions">
                        Positions
                    </router-link>
                </a-menu-item>
                <a-menu-item key="3">Бестиарий по русалкам</a-menu-item>
                <a-menu-item key="4">Кракеноводство</a-menu-item>
            </a-sub-menu>
            <a-menu-item key="5">
                <desktop-outlined />
                <span>{{ $t('sidebar.matrices') }}</span>
            </a-menu-item>
        </a-menu>
    </a-layout-sider>
</template>

<script>
import { ref, watch } from 'vue'

export default {
    name: 'SidebarMain',
    props: {
        isCollapsed: {
            type: Boolean,
            default: false,
        },
    },
    setup(props, { emit }) {
        const collapsed = ref(props.isCollapsed);
        const selectedKeys = ref(['1']);

        watch(() => props.isCollapsed, (newVal) => {
            collapsed.value = newVal;
        });

        const handleCollapse = (value) => {
            emit('update:isCollapsed', value);
        };

        const onBreakpoint = broken => {
            console.log(broken);
        };

        return {
            collapsed,
            selectedKeys,
            handleCollapse,
            onBreakpoint,
        };
    },
}
</script>

<style lang="scss" scoped>
.sidebar-main {
    bottom: 0;
    height: 100vh;
    left: 0;
    margin-top: 72px;
    overflow: auto;
    position: fixed;
    top: 0;
}
</style>