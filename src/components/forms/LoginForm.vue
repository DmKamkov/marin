<template>
  <a-form
    :model="formState"
    :label-col="{ span: 2 }"
    autocomplete="off"
    @finish="onFinish"
    @finishFailed="onFinishFailed"
  >
    <a-form-item :wrapper-col="{ offset: 7, span: 10 }">
      <a-input size="large" v-model:value="formState.username" :placeholder="$t('loginForm.userName')">
        <template #prefix><UserOutlined style="color: #22A1FC" /></template>
      </a-input>
    </a-form-item>
    <a-form-item :wrapper-col="{ offset: 7, span: 10 }">
      <a-input-password size="large" v-model:value="formState.password" type="password" :placeholder="$t('loginForm.passValue')">
        <template #prefix><LockOutlined style="color: #22A1FC" /></template>
      </a-input-password>
    </a-form-item>
    <a-form-item name="remember" :wrapper-col="{ offset: 7, span: 10 }">
      <div class="login-items">
        <a-checkbox v-model:checked="formState.remember">{{ $t('loginForm.rememberMe') }}</a-checkbox>
        <span @click="$emit('forget-password', {email: formState.username, forgot: true })" style="color:#22A1FC; cursor: pointer; font-size: 16px">
          {{ $t('loginForm.forgotPass') }}
        </span>
      </div>
    </a-form-item>
    <a-form-item :wrapper-col="{ offset: 7, span: 10 }">
      <a-button
        type="primary"
        html-type="submit"
        :disabled="formState.user === '' || formState.password === ''"
        class="login-button"
        size="large"
      >
      {{ $t('loginForm.loginButton') }}
      </a-button>
    </a-form-item>
  </a-form>
</template>

<script>
import {defineComponent, reactive} from 'vue'
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue'

export default defineComponent({
  components: {
    UserOutlined,
    LockOutlined
  },
  emits: ['forget-password'],
  setup() {
    const formState = reactive({
      username: '',
      password: '',
      remember: false,
    });

    const onFinish = (values) => {
      console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo);
    };

    return {
      formState,
      onFinish,
      onFinishFailed
    }
  }
})
</script>

<style lang="scss">
.login-button {
  width: 100%;
  background: linear-gradient(#22A1FC, #2EE8A8);
  color: #fff;
  font-weight: 500;
  margin-top: 20px;
  font-family: 'Roboto', sans-serif;
  border: none;
}

.login-items {
  display: flex;
  justify-content: space-between;

  .ant-checkbox-wrapper {
    font-size: 16px;
  }

  .ant-checkbox {
    font-size: 16px;
  }

  .ant-checkbox-checked {
    background-color: #22A1FC;
    border-color: #22A1FC;
  }
}
</style>
