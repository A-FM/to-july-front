import {createLogger, createStore} from "vuex";
import theme from "@/store/theme/theme";
import loginDialog from "@/store/login/loginDialog";

const debug = process.env.NODE_ENV !== 'production'
export default createStore({
    modules:{
        theme,
        loginDialog
    },
    strict:debug,
    plugins:debug?[createLogger()]:[]
})
