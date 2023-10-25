import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/home',
        name: 'home',
        component: () => import('../views/PageAccueil.vue')
    },
    {
        path: '/connexion-m',
        name: 'conM',
        component: () => import('../views/MicrosoftAuth.vue')
    },
    {
        path: '/connexion-g',
        name: 'conG',
        component: () => import('../views/GoogleAuth.vue')
    },
    {
        path: '/flights',
        name: 'flights',
        component: () => import('../views/FlightsView.vue')
    },
    {
        path: '/graph',
        name: 'graph',
        component: () => import('../views/GraphView.vue')
    },
    {
        path: '/custom',
        name: 'custom',
        component: () => import('../views/CustomView.vue')
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('../views/AboutUs.vue')
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/LoginView.vue')
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