<template>
  <div class="login-layout__container">
    <div class="login-layout__aside">
      <div>
        {{ $t('loginForm.greetings') }}
      </div>
    </div>
    <div class="login-layout__wrapper">
      <div class="login-layout__header">
        <a-select
          ref="select"
          v-model:value="locale"
        >
          <a-select-option value="ru">Рус</a-select-option>
          <a-select-option value="en">Eng</a-select-option>
          <a-select-option value="ukr">Укр</a-select-option>
        </a-select>
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
import {defineComponent} from 'vue'
import { useI18n } from 'vue-i18n'

export default defineComponent({
  setup() {
    const { locale } = useI18n({
    })

    return { locale }
  }
})
</script>

<style lang="scss">
.login-layout {
  &__container {
    display: flex;
    width: 100vw;
    height: 100vh;
  }

  &__aside {
    display: flex;
    justify-content: center;
    width: 30%;
    height: 100%;
    background: linear-gradient(#22A1FC, #2EE8A8);

    div {
      text-align: left;
      width: 80%;
      color: #fff;
      font-family: 'Roboto', sans-serif;
      font-size: 64px;
      font-weight: 700;
      margin-top: 20%;
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
    width: 70%;
    height: 100%;
    background-color: #F6F9FF;
  }
}
</style>