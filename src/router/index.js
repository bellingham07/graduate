import {createRouter, createWebHistory} from 'vue-router'
import LoginPage from "@/components/Login/LoginPage.vue";
import RegisterPage from "@/components/Login/RegisterPage.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'login',
            component: LoginPage
        },
        {
            path: '/reg',
            name: 'register',
            component: RegisterPage
        }
    ]
})

export default router
