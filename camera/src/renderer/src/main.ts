
import './assets/css/tailwind.css'
import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'


const app = createApp(App)

// 安装使用插件
app.use(ElementPlus)

app.mount('#app')
