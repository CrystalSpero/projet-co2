import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vue3GoogleLogin from 'vue3-google-login'
import store from './store'


createApp(App).use(store).use(router).use(vue3GoogleLogin, {
    clientId: '542749773586-o2k2f6jkqea4795hqg0546cvmq0n0vud.apps.googleusercontent.com'
    }).mount('#app')
