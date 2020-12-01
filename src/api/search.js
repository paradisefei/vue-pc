import request from "@utils/request";

/* 
    1.请求搜索页面的数据
    2.在actions中执行
*/
export const reqGetProductList = (data) => {
    return request({
        method: "POST",
        url: "/list",
        data,
    });
};