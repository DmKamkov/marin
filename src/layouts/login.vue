<template>
    <div class="login-layout__container">
        <div class="login-layout__aside">
            <p class="welcome-text">
                {{ $t('loginForm.greetings') }}
            </p>
        </div>
        <div class="login-layout__wrapper">
            <div class="login-layout__header">
                <LanguageSelect />
            </div>
            <div class="login-layout__content">
                <div class="login-layout__content-logo">
                    <img src="@/assets/logo.svg">
                </div>
                <div class="login-layout__content-view">
                    <router-view />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
</script>

<style lang="scss">
.login-layout {

    &__container {
        display: grid;
        grid-template-columns: 1fr 2fr;
        width: 100vw;
        height: 100vh;
    }

    &__aside {
        display: flex;
        justify-content: center;
        height: 100%;
        background: linear-gradient(#22A1FC, #2EE8A8);

        .welcome-text {
            color: #fff;
            font-family: 'Roboto', sans-serif;
            font-size: 64px;
            font-weight: 700;
            margin-top: 30%;
            text-align: left;
            white-space: normal;
            width: 80%;
        }
    }

    &__header {
        display: flex;
        align-items: center;
        padding: 0 20px;
        width: 100%;
        height: 10%;
        flex-direction: row-reverse;
    }

    &__content {
        display: flex;
        flex-direction: column;
        gap: 90px;
        padding: 75px;
    }

    &__wrapper {
        height: 100%;
        background-color: #F6F9FF;
    }
}
</style>