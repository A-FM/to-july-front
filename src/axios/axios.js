import axios from 'axios';

const instance = axios.create();

instance.interceptors.request.use(config => {
    config.url = `/server/${config.url}`;
    config.timeout = 1000*600;

    config.xsrfCookieName = "CSRF-TOKEN"
    config.xsrfHeaderName = "X-CSRF-TOKEN"
    config.withCredentials = true


    config.onUploadProgress = function (progressEvent) {
        console.log("onUploadProgress")
        console.log(progressEvent)
    };
    config.onDownloadProgress = function (progressEvent) {
        console.log("onDownloadProgress")
        console.log(progressEvent)
    }
    return config;
});

export default instance;
