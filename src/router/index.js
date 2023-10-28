import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/flight',
        name: 'flight',
        component: () => import('../views/FlightsView.vue')
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('../views/AboutUs.vue')
    },
    {
        path: '/CPU',
        name: 'CPU',
        component: () => import('../views/CPUView.vue')
    },
    {
        path: '/Storage',
        name: 'Storage',
        component: () => import('../views/StorageView.vue')
    },{
        path: '/Memory',
        name: 'Memory',
        component: () => import('../views/MemoryView.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router