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
    const { locale } = useI18n({
    })
    return { locale }
  }
})
</script>

<style scoped>

</style>