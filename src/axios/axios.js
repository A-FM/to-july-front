import axios from 'axios';

const instance = axios.create();

instance.interceptors.request.use(config => {
    config.url = `/server${config.url}`;
    return config;
});

export default instance;
