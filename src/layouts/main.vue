<template>
    <a-layout class="main-layout">
        <HeaderMain />
        <a-layout>
            <SidebarMain />
            <a-layout-content>
                <router-view />
            </a-layout-content>
        </a-layout>
    </a-layout>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
})
</script>

<style lang="scss" scoped>
.main-layout {
    height: 100vh;
}
</style>