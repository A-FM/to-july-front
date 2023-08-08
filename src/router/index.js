import {createRouter, createWebHistory} from "vue-router";
import FrontEnd from "@/views/FrontEnd.vue";
import FHomePage from "@/views/FontEnd/FHomePage.vue";

const routes = [
    {
        path: '/',
        component: FrontEnd,
        children: [
            {
                path: "/",
                name: 'home',
                component: FHomePage
            }
        ]
    }
];
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router;