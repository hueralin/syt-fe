import { createApp } from 'vue'
import App from '@/App.vue'
import '@/style/reset.scss'
import '@/style/main.css'

// 注册为全局组件
import AppHeader from '@/components/layouts/AppHeader.vue'
import AppFooter from '@/components/layouts/AppFooter.vue'

import { router } from '@/router.ts'

import ElementPlus from 'element-plus'
// @ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import 'element-plus/dist/index.css'

const app = createApp(App)

app.component('AppHeader', AppHeader)
app.component('AppFooter', AppFooter)

app.use(router)
app.use(ElementPlus, { locale: zhCn })
app.mount('#app')
