import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from "element-plus"
import 'element-plus/dist/index.css'
import {router} from "@/router";
import '@/assets/css/CommonCss.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
createApp(App).use(ElementPlus).use(router).mount("#app");
