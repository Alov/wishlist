import {createRouter, createWebHistory} from 'vue-router'
import {loadLayoutMiddleware} from "@/router/middleware/loadLayout.middleware.js";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: () => import("@/pages/Home.vue")
        },
        {
            path: '/practice',
            name: 'Practice',
            component: () => import("@/pages/Practice.vue")
        },
        {
            path: '/feedback',
            name: 'Feedback',
            component: () => import("@/pages/Feedback.vue")
        },
        {
            path: '/error',
            name: 'Error page',
            component: () => import("@/pages/error/Error.vue"),
            meta: {
                layout: "ErrorLayout.vue"
            }
        },
        {
            path: '/maintenance',
            name: 'Under maintenance',
            component: () => import("@/pages/error/Maintenance.vue"),
            meta: {
                layout: "ErrorLayout.vue"
            }
        },
        {
            path: '/login',
            name: 'Login',
            component: () => import("@/pages/Login.vue"),
            meta: {
                layout: "AuthLayout.vue"
            }
        }
    ]
});

router.beforeEach(loadLayoutMiddleware);

export default router;