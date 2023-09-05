import {createRouter, createWebHistory} from "vue-router";
import FrontEnd from "@/views/FrontEnd.vue";
import FHomePage from "@/views/FontEnd/FHomePage.vue";
import FBlogList from "@/views/FontEnd/FBlogList.vue";
import FBlogContent from "@/views/FontEnd/FBlogContent.vue";
import BackEnd from "@/views/BackEnd.vue";
import BlogList from "@/views/BackEnd/BlogList.vue";
import blogContentEdit from "@/views/BackEnd/blogContentEdit.vue";

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",  // 修改路径为 /index
            name: "index",
            components: {
                default: FrontEnd,
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
                    path: "blog/:id",
                    name: "fBlogContent",
                    components: {
                        fHomePage: FBlogContent,
                    }
                }
            ],
        },
        {
            path: "/backend",
            name: "backend",
            components: {
                default: BackEnd,
            },
            children: [
                {
                    path: "blogList",
                    name: "blogList",
                    components: {
                        default: BlogList,
                    }
                },
                {
                    path: "blogContentEdit/:id",
                    name: "blogContentEdit",
                    components: {
                        default: blogContentEdit,
                    }
                }
            ]
        }
    ],
})
