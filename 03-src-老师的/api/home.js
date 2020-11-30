import request from "03-src/utils/request";

/**
 * 获取首页三级分类数据
 */
const reqGetBaseCategoryList = () => request({
  method: "GET",
  url: "/product/getBaseCategoryList",
});

export default reqGetBaseCategoryList;
