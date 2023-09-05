import axios from 'axios';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css'; // 导入进度条样式
const instance = axios.create();

NProgress.configure({
    showSpinner: false // 禁用加载指示器
});

instance.interceptors.request.use(config => {
    config.url = `/server/${config.url}`;
    config.timeout = 1000*600;

    config.xsrfCookieName = "CSRF-TOKEN"
    config.xsrfHeaderName = "X-CSRF-TOKEN"
    config.withCredentials = true
    config.headers.setAuthorization(localStorage.getItem("token"))

    config.onUploadProgress = function (progressEvent) {
        NProgress.set(progressEvent.progress)
    };
    config.onDownloadProgress = function (progressEvent) {
        NProgress.set(progressEvent.progress)
    }
    NProgress.start()
    return config;
});
instance.interceptors.response.use(response=>{
    NProgress.done();
    return response
}, error => {
    NProgress.done(); // 请求失败时停止进度条
    throw error;
});

export default instance;
