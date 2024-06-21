
import './assets/css/global.scss'
import './assets/css/tailwind.css'
import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'


const pinia = createPinia()
const app = createApp(App)

// 安装使用插件
app.use(ElementPlus)
app.use(pinia)
pinia.use(piniaPluginPersistedstate)

app.mount('#app')
