<template>
    <a-form
        @submit="onSubmit"
    >
        <a-form-item :wrapper-col="{ offset: 7, span: 10 }" v-bind="email">
            <a-input size="large" v-bind="email" :placeholder="$t('loginForm.userName')">
                <template #prefix><UserOutlined style="color: #22A1FC" /></template>
            </a-input>
        </a-form-item>
        <a-form-item :wrapper-col="{ offset: 7, span: 10 }">
            <a-button
                type="primary"
                html-type="submit"
                :disabled="email.value === ''"
                class="forgot-button"
                size="large"
            >
                {{ $t('forgotPassForm.forgotButton') }}
            </a-button>
        </a-form-item>
        <a-form-item :wrapper-col="{ offset: 7, span: 10 }">
            <span style="color:#22A1FC; cursor: pointer; font-size: 16px" @click="$emit('return', { email: '', forgot: false })">
                {{ $t('forgotPassForm.backToLogin') }}
            </span>
        </a-form-item>
    </a-form>
    <div class="forgot-password__notification">
        <transition name="slide-fade">
            <a-alert :message="$t('forgotPassForm.sentMessageEmail')" v-if="isSentMessage" type="success" show-icon />
        </transition>
    </div>
</template>

<script>
import {defineComponent, ref} from 'vue'
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue'
import * as yup from 'yup'
import { useForm } from 'vee-validate'
import { useI18n } from 'vue-i18n'

export default defineComponent({
  components: {
    UserOutlined,
    LockOutlined
  },
  props: {
    userEmail: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ['return'],
  setup(props) {
    const { t } = useI18n()
    const schema = yup.object({
      email: yup.string().required(() => t("loginForm.emailRequired")).email(() => t("loginForm.emailValid")),
    });

    const { defineComponentBinds, handleSubmit } =
      useForm({
        validationSchema: schema,
        initialValues: {
          email: props.userEmail.value,
        },
      });

    const antConfig = (state) => ({ 
      model: 'value',
      props: {
        hasFeedback: !!state.errors[0],
        help: state.errors[0],
        validateStatus: state.errors[0] ? 'error' : undefined,
      },
    });

    const email = defineComponentBinds('email', antConfig);
    const isSentMessage = ref(false)

    const onSubmit = handleSubmit((values) => {
      console.log('Submitted with', values);
      isSentMessage.value = true
      setTimeout(() => {
        isSentMessage.value = false
      }, 3000)
    });

    return {
      email,
      onSubmit,
      isSentMessage
    }
  }
})
</script>

<style lang="scss">
.forgot-button {
  width: 100%;
  background: linear-gradient(#22A1FC, #2EE8A8);
  color: #fff;
  font-weight: 500;
  font-family: 'Roboto', sans-serif;
  border: none;
  margin-bottom: 20px;
}
.forgot-password__notification {
  position: absolute;
  width: 395px;
  text-align: left;
  bottom: 10px;
  right: 40px;
}
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
