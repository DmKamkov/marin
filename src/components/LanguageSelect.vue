<template>
    <a-select
        ref="select"
        v-model:value="locale"
    >
        <a-select-option value="ru">Рус</a-select-option>
        <a-select-option value="en">Eng</a-select-option>
        <a-select-option value="ukr">Укр</a-select-option>
    </a-select>
</template>

<script>
import { useI18n } from 'vue-i18n'

export default {
    name: 'LanguageSelect',
    setup() {
        const { locale } = useI18n({
        })

        return { locale }
    }
}
</script>

<style>

</style>