import { createRouter, createWebHistory } from "vue-router";
import MenuView from "@/views/MenuView.vue";
import CountryView from "@/views/CountryView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'menu',
            component: MenuView
        },
        {
            path: '/country/:id',
            name: 'country',
            component: CountryView
        }
    ]
})

export default router;