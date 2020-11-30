/*
  请求所有商品
    引入设置好拦截器的请求实例
    这个方法是直接在组件中使用的，并且最终要赋给变量，然后渲染到页面上
  所以我这里还需要return一个值,这里把整个请求return回去，

  instance得到的是一个promise，被返回以后，reqCategories也是一个promise
*/
import instance from "03-src/utils/request.js";

const reqCategories = () => instance({
  method: "GET",
  url: "/product/getBaseCategoryList",
});

export default reqCategories;
