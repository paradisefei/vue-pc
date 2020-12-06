import request from "@utils/request";

/* 
    与购物车数据相的请求，是有好几个请求的
*/
// 获取购物车数据列表
export const reqGetCartList = () => {
    return request({
        method: "GET",
        url: `/cart/cartList`,
    });
};

// 添加购物车请求
export const reqGetAddToCart = ({ skuId, skuNum }) => {
    return request({
        method: "POST",
        url: `/cart/addToCart/${skuId}/${skuNum}`,
    });
};

// 切换商品状态
export const reqGetCheckCart = ({ skuId, isChecked }) => {
    return request({
        method: "GET",
        url: `/cart/checkCart/${skuId}/${isChecked}`,
    });
};

// 删除数据
export const reqGetDeleteCart = (skuId) => {
    return request({
        method: "DELETE",
        url: `/cart/deleteCart/${skuId}`,
    });
};