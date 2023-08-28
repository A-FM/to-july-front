import request from "@/axios/axios";


export function getBlogList(params){
    return request({
        url: "/page",
        method: "GET",
        params: params
    })
}
export function getBlogContentById(params){
    return request({
        url: "/getBlogContentById",
        method: "GET",
        params:params
    })
}

export function login(params){
    return request({
        url: "/backend/login",
        method: "POST",
        params:params
    })
}

export function getCaptcha(){
    return request({
        url: "/getCaptcha",
        method: "GET",
    })
}
