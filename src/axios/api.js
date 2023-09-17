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

export function logout(){
    return request({
        url: "/backend/logout",
        method: "POST",
    })
}

export function getCaptcha(){
    return request({
        url: "/getCaptcha",
        method: "GET",
    })
}

export function getCategoryList(){
    return request({
        url: "/getCategoryList",
        method: "GET",
    })
}

export function getCategoryListByBlogId(params){
    return request({
        url: "/getCategoryByBlogId",
        method: "GET",
        params:params
    })
}
