import { createRouter, createWebHistory } from "vue-router";
import FrontEnd from "@/views/FrontEnd.vue";
import FHomePage from "@/views/FontEnd/FHomePage.vue";
import FBlogList from "@/views/FontEnd/FBlogList.vue";
import FBlogContent from "@/views/FontEnd/FBlogContent.vue";

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "",  // 修改路径为 /index
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
                {
                    path: "blog",
                    name: "fBlogContent",
                    components: {
                        fHomePage: FBlogContent,
                    }
                }
            ],
        },
    ],
})
