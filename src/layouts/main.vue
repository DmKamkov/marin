<template>
    <a-layout class="main-layout">
        <HeaderMain />
        <a-layout>
            <SidebarMain :isCollapsed="collapsed" @update:isCollapsed="handleSidebarCollapse" />
            <a-layout-content
                :style="{
                    marginLeft: collapsed ? '80px' : '280px',
                    transition: 'margin-left 0.2s ease',
                    marginTop: '72px',
                }"
            >
                <router-view />
            </a-layout-content>
        </a-layout>
    </a-layout>
</template>

<script>
import { ref } from 'vue'

export default {
    setup() {
        const collapsed = ref(false);

        const handleSidebarCollapse = (value) => {
            collapsed.value = value;
        };

        return {
            collapsed,
            handleSidebarCollapse,
        };
    },
}
</script>

<style lang="scss" scoped>
.main-layout {
    min-height: 100vh;
}
</style>