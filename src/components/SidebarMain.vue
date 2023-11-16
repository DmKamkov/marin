<template>
    <a-layout-sider
        collapsible
        width="280"
    >
        <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
            <a-menu-item key="1">
                <pie-chart-outlined />
                <span>{{ $t('sidebar.vacancies') }}</span>
            </a-menu-item>
            <a-sub-menu key="sub1">
                <template #title>
                    <span>
                        <user-outlined />
                        <span>{{ $t('sidebar.handbooks') }}</span>
                    </span>
                </template>
                <a-menu-item key="2">Корабельное рукоприкладство</a-menu-item>
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
export default {
    name: 'SidebarMain'
}
</script>

<style lang="scss" scoped>
</style>