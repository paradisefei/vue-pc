import request from "@utils/request";

/* 
    1.请求detail数据
*/
export const reqGetDetailList = (id) => {
    return request({
        method: "GET",
        url: `/item/${id}`,
    });
};