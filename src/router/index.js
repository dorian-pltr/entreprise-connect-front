import {createRouter, createWebHistory} from 'vue-router';

const routes = [
        {
            path: '/',
            name: 'Home',
            component: () => import('../views/Home.vue'),
        },
        {
            path: '/entreprise/:id',
            name: 'EntrepriseDetail',
            component: () => import('../views/EntrepriseDetail.vue'),
        },
    ];

    const router = createRouter({
        history: createWebHistory(),
        routes,
    });

    export default router;
