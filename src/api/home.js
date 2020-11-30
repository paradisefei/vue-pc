import request from "@utils/request";

import mockRequest from "@utils/mockRequest";

/**
 * 获取首页三级分类数据
 */
export const reqGetBaseCategoryList = () => {
  return request({
    method: "GET",
    url: "/product/getBaseCategoryList",
  });
};

/* 
  请求mock数据-banner
*/
export const reqGetMockBanner = () => {
  return mockRequest({
    method: "GET",
    url: "/banner",
  });
};
/* 
  请求mock数据-floor
*/
export const reqGetMockFloor = () => {
  console.log(1);
  return mockRequest({
    method: "GET",
    url: "/floor",
  });
};
