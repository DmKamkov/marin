import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import Cookies from 'js-cookie';

  export const useTokenStore = defineStore('token', () => {
    const accessToken = ref(null);
    const useRefresh = ref(false);

    const getAccessToken = computed(() => accessToken.value)

    function LOG_OUT() {
      Cookies.remove('access-token');
      if (window.location.pathname !== '/login') {
        window.location = '/?message="login"';
      }
    }

    function SET_TOKEN(t) {
      accessToken.value = t;
      Cookies.set('access-token', accessToken);
    }

    function AUTO_LOGIN() {
      const token = Cookies.get('access-token') || '';

      if (token) {
        SET_TOKEN(token)
      } else {
        LOG_OUT();
      }
    }

    function LOGIN() {
      SET_TOKEN(Cookies.get('access-token'));
    }

  return { SET_TOKEN, LOG_OUT, AUTO_LOGIN, LOGIN, getAccessToken, useRefresh}
})