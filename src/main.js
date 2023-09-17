import { createApp } from 'vue'
import App from './App.vue'
import store from '@/store'
import ElementPlus from "element-plus"
import 'element-plus/dist/index.css'
import {router} from "@/router";
import 'element-plus/theme-chalk/dark/css-vars.css'
import VXETable from 'vxe-table'
import 'vxe-table/lib/style.css'
import '@/assets/css/CommonCss.css'

createApp(App).use(ElementPlus).use(router).use(VXETable).use(store).mount("#app");
