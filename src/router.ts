import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'

const routes: RouteRecordRaw[] = [
    {
        path: '/home',
        name: 'home',
        component: () => import('@/pages/home/Home.vue')
    },
    {
        path: '/hospital',
        name: 'hospital',
        component: () => import('@/pages/hospital/Hospital.vue')
    },
    {
        path: '/',
        redirect: {name: 'home'}
    }
]

export const router = createRouter({
    // 设置路由模式
    history: createWebHistory(),
    // 设置路由
    routes,
    // 设置滚动行为（路由切换时滚动条的位置）
    scrollBehavior() {
        return {
            top: 0,
            left: 0,
        }
    }
})
