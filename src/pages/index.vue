<route lang="yaml">
  meta:
    layout: login
</route>

<template>
  <LoginForm v-if="!emailForgetPassword.forgot" @forget-password="(event) => emailForgetPassword = event" />
  <ForgotPasswordForm v-if="emailForgetPassword.forgot" @return="(event) => emailForgetPassword = event" :userEmail="emailForgetPassword.email" />
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const emailForgetPassword = ref({ email: '', forgot: false });

    return {
      emailForgetPassword
    }
  }
})
</script>

<style>
</style>
