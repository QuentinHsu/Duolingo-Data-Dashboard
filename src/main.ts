import { createApp } from 'vue'

import Pinia from '@/store/index'

import App from './App.vue'
import router from './router'

import '@unocss/reset/tailwind.css'

const app = createApp(App)
app.use(router).use(Pinia).mount('#app')
