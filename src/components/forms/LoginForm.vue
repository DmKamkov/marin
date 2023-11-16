<template>
  <a-form
    :label-col="{ span: 2 }"
    @submit="onSubmit"
  >
    <a-form-item :wrapper-col="{ offset: 7, span: 10 }" v-bind="email" class="login__email-box">
      <a-input size="large" v-bind="email" :placeholder="$t('loginForm.userName')" type="email">
        <template #prefix><UserOutlined style="color: #22A1FC" /></template>
      </a-input>
      <a-alert v-if="isWrongEmail" type="error" :message="$t('loginForm.alertEmail')" banner style="background: none;" />
    </a-form-item>
    <a-form-item :wrapper-col="{ offset: 7, span: 10 }" v-bind="password" class="login__password-box">
      <a-input-password size="large" v-bind="password" type="password" :placeholder="$t('loginForm.passValue')">
        <template #prefix><LockOutlined style="color: #22A1FC" /></template>
      </a-input-password>
      <a-alert v-if="isWrongEmailOrPassword" type="error" :message="$t('loginForm.alertPassword')" banner style="background: none;" />
    </a-form-item>
    <a-form-item name="remember" :wrapper-col="{ offset: 7, span: 10 }">
      <div class="login-items">
        <a-checkbox v-model:checked="checked">{{ $t('loginForm.rememberMe') }}</a-checkbox>
        <span @click="$emit('forget-password', {email: email, forgot: true })" style="color:#22A1FC; cursor: pointer; font-size: 16px">
          {{ $t('loginForm.forgotPass') }}
        </span>
      </div>
    </a-form-item>
    <a-form-item :wrapper-col="{ offset: 7, span: 10 }">
      <a-button
        type="primary"
        html-type="submit"
        :disabled="email === '' || password === ''"
        class="login-button"
        size="large"
      >
      {{ $t('loginForm.loginButton') }}
      </a-button>
    </a-form-item>
  </a-form>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue'
import * as yup from 'yup'
import { useForm } from 'vee-validate'
import { useI18n } from 'vue-i18n'

export default defineComponent({
  components: {
    UserOutlined,
    LockOutlined
  },
  emits: ['forget-password'],
  setup() {
    const { t } = useI18n()
    const schema = yup.object({
      email: yup.string().required(() => t("loginForm.emailRequired")).email(() => t("loginForm.emailValid")),
      password: yup.string().required(() => t("loginForm.passwordRequired")),
    });

    const { defineComponentBinds, handleSubmit, errors, values } =
      useForm({ validationSchema: schema });
    
    const antConfig = (state) => ({ 
      model: 'value',
      props: {
        hasFeedback: !!state.errors[0],
        help: state.errors[0],
        validateStatus: state.errors[0] ? 'error' : undefined,
      },
    });

    const email = defineComponentBinds('email', antConfig);
    const password = defineComponentBinds('password', antConfig);
    const checked = ref(false);
    const isWrongEmailOrPassword = ref(false)
    const isWrongEmail = ref(false)

    const onSubmit = handleSubmit((values) => {
      console.log('Submitted with', values);
    });

    return {
      onSubmit,
      checked,
      email,
      password,
      isWrongEmail,
      isWrongEmailOrPassword
    }
  }
})
</script>

<style lang="scss">
.login-button {
  width: 100%;
  background: linear-gradient(to bottom right, #22A1FC, #2EE8A8);
  color: #fff;
  font-weight: 500;
  margin-top: 20px;
  font-family: 'Roboto', sans-serif;
  border: none;
}

.login {
  &__password-box {
    text-align: left;
  }

  &__email-box {
    text-align: left;
  }
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
