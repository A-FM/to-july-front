import { createRouter, createWebHistory } from "vue-router";
import FrontEnd from "@/views/FrontEnd.vue";
import FHomePage from "@/views/FontEnd/FHomePage.vue";
import FBlogList from "@/views/FontEnd/FBlogList.vue";

const routes = [
    {
        path: "/",  // 将路径改为 /index
        name: "index",
        components: {
            frontEnd: FrontEnd,
        },
        children: [
            {
                path: "",
                name: "homePage",
                components: {
                    fHomePage: FHomePage,
                },
                children: [
                    {
                        path: "",
                        name: "fBlogList",
                        components: {
                            fBlogList: FBlogList,
                        },
                    },
                ],
            },
        ],
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
