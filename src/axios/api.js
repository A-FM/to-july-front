import request from "@/axios/axios";


export function getBlogList(params) {
    return request({
        url: "/page",
        method: "GET",
        params: params
    })
}

export function getBlogContentById(params) {
    return request({
        url: "/getBlogContentById",
        method: "GET",
        params: params
    })
}

export function login(params) {
    return request({
        url: "/backend/login",
        method: "POST",
        params: params
    })
}

export function logout() {
    return request({
        url: "/backend/logout",
        method: "POST",
    })
}

export function getCaptcha() {
    return request({
        url: "/getCaptcha",
        method: "GET",
    })
}

export function getCategoryList() {
    return request({
        url: "/getCategoryList",
        method: "GET",
    })
}

export function getCategoryListByBlogId(params) {
    return request({
        url: "/getCategoryByBlogId",
        method: "GET",
        params: params
    })
}


export function getPreSignedMinioUrl(params) {
    return request({
        url: "/backend/getPreSignedMinioUrl",
        method: "GET",
        params: params
    })
}

export function uploadFileToMinio(params, file) {
    return getPreSignedMinioUrl(params).then(response => {
            if (response.status === 200){
                return request({
                    url: response.data.object,
                    method: "POST",
                    config: {headers: {'Content-Type': 'multipart/form-data'}},
                    data: file
                })
            } else {
                return new Error("获取上传链接错误，具体信息如下："+response.data.message)
            }
        }
    ).catch(error => {
        return new Error("获取上传链接错误，具体信息如下："+error)
    })
}
