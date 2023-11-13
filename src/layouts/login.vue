<template>
  <main>
    <router-view />
  </main>
</template>

<script>
import {defineComponent} from 'vue'
import { useI18n } from 'vue-i18n'

export default defineComponent({
  setup() {
    const { t, locale } = useI18n()
    return { t, locale }
  }
})
</script>

<style scoped>

</style>