import {createApp} from 'vue'
import App from '@/App.vue'
import '@/style/reset.scss'
import '@/style/main.css'

// 注册为全局组件
import AppHeader from '@/components/layouts/AppHeader.vue'
import AppFooter from '@/components/layouts/AppFooter.vue'

import {router} from '@/router.ts'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)

app.component('AppHeader', AppHeader)
app.component('AppFooter', AppFooter)

app.use(router)
app.use(ElementPlus)
app.mount('#app')
