<template>
    <a-layout-header class="header-main">
        <img
            src="@/assets/logo.svg"
            class="header-main__logo"
        >
        <div class="header-main__options">
            <LanguageSelect />
        </div>
    </a-layout-header>
</template>

<script>
export default {
    name: 'HeaderMain',
}
</script>

<style lang="scss" scoped>
.header-main {
    background-color: #fff;
    box-shadow: 0px 4px 8px 0px #0050B30D;
    display: flex;
    height: 72px;
    justify-content: space-between;
    padding: 20px;
    width: 100%;

    &__logo {
        width: 200px;
    }

    &__options {
        display: flex;
    }
}
</style>