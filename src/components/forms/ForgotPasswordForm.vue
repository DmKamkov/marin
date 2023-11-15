<template>
  <a-form
    :model="formState"
    name="basic"
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
      <a-button
        type="primary"
        html-type="submit"
        :disabled="formState.username === ''"
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
</template>

<script>
import {defineComponent, reactive, onMounted} from 'vue'
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue'

export default defineComponent({
  components: {
    UserOutlined,
    LockOutlined
  },
  props: {
    userEmail: {
      type: String,
      default: ''
    }
  },
  emits: ['return'],
  setup(props) {
    const formState = reactive({
      username: '',
    });

    onMounted(() => {
      formState.username = props.userEmail
    })

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
.forgot-button {
  width: 100%;
  background: linear-gradient(#22A1FC, #2EE8A8);
  color: #fff;
  font-weight: 500;
  font-family: 'Roboto', sans-serif;
  border: none;
  margin-bottom: 20px;
}
</style>
